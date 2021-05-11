(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1078:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/message-events-7076a95560df1aaf5f1301d677bafcd6.png"},1079:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/message-event-caefc4cc0ed913f367b609f17df3ded3.gif"},377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(7),r=(n(0),n(661)),l={id:"message-events",title:"Message Events"},c={unversionedId:"product-manuals/zeebe/bpmn-workflows/message-events/message-events",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events",isDocsHomePage:!1,title:"Message Events",description:"Message events are events which reference a message. They are used to wait until a proper message is received.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events.md",slug:"/product-manuals/zeebe/bpmn-workflows/message-events/message-events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"None Events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events"},next:{title:"Timer Events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/timer-events/timer-events"}},o=[{value:"Message Start Events",id:"message-start-events",children:[]},{value:"Intermediate Message Catch Events",id:"intermediate-message-catch-events",children:[]},{value:"Message Boundary Events",id:"message-boundary-events",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Variable Mappings",id:"variable-mappings",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],i={rightToc:o};function b(e){var t=e.components,l=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Message events are events which reference a message. They are used to wait until a proper message is received."),Object(r.b)("p",null,Object(r.b)("img",{alt:"workflow",src:n(1078).default})),Object(r.b)("p",null,"At the moment, messages can be published only externally by using one of the Zeebe clients."),Object(r.b)("h2",{id:"message-start-events"},"Message Start Events"),Object(r.b)("p",null,"A workflow can have one or more message start events (besides other types of start events). Each of the message events must have a unique message name."),Object(r.b)("p",null,"When a workflow is deployed then it creates a message subscription for each message start event. Message subscriptions of the previous version of the workflow (based on the BPMN process id) are closed."),Object(r.b)("p",null,"When the message subscription is created then a message can be correlated to the start event if the message name matches. On correlating the message, a new workflow instance is created and the corresponding message start event is activated."),Object(r.b)("p",null,"Messages are ",Object(r.b)("strong",{parentName:"p"},"not")," correlated if they were published before the workflow was deployed. Or, if a new version of the workflow is deployed which doesn't have a proper start event."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," of a published message can be used to control the workflow instance creation. If an instance of this workflow is active (independently from its version) and it was triggered by a message with the same ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," then the message is ",Object(r.b)("strong",{parentName:"p"},"not")," correlated and no new instance is created. When the active workflow instance is ended (completed or terminated) and a message with the same ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," and a matching message name is buffered (i.e. TTL > 0) then this message is correlated and a new instance of the latest version of the workflow is created."),Object(r.b)("p",null,"If the ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," of a message is empty then it will always create a new workflow instance and does not check if an instance is already active."),Object(r.b)("h2",{id:"intermediate-message-catch-events"},"Intermediate Message Catch Events"),Object(r.b)("p",null,"When an intermediate message catch event is entered then a corresponding message subscription is created. The workflow instance stops at this point and waits until the message is correlated. When a message is correlated, the catch event gets completed and the workflow instance continues."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"An alternative to intermediate message catch events are ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/receive-tasks/receive-tasks"}),"receive tasks")," which behaves the same but can be used together with boundary events.")),Object(r.b)("h2",{id:"message-boundary-events"},"Message Boundary Events"),Object(r.b)("p",null,"An activity can have one or more message boundary events. Each of the message events must have a unique message name."),Object(r.b)("p",null,"When the activity is entered then it creates a corresponding message subscription for each boundary message event. If a non-interrupting boundary event is triggered then the activity is not terminated and multiple messages can be correlated."),Object(r.b)("h2",{id:"messages"},"Messages"),Object(r.b)("p",null,"A message can be referenced by one or more message events. It ",Object(r.b)("strong",{parentName:"p"},"must")," define the name of the message (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Money collected"),") and the ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," expression (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"= orderId"),"). If the message is only referenced by message start events then the ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," is not required."),Object(r.b)("p",null,"Usually, the name of the message is defined as a static value (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"order canceled"),"), but it can also be defined as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/reference/expressions"}),"expression")," (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'= "order " + awaitingAction'),"). If the expression belongs to a message start event of the workflow, then it is evaluated on deploying the workflow. Otherwise, it is evaluated on activating the message event. The evaluation must result in a ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," is an expression that usually ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/reference/expressions#access-variables"}),"accesses a variable")," of the workflow instance that holds the correlation key of the message. The expression is evaluated on activating the message event and must result either in a ",Object(r.b)("inlineCode",{parentName:"p"},"string")," or in a ",Object(r.b)("inlineCode",{parentName:"p"},"number"),"."),Object(r.b)("p",null,"In order to correlate a message to the message event, the message is published with the defined name (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Money collected"),") and the ",Object(r.b)("strong",{parentName:"p"},"value")," of the ",Object(r.b)("inlineCode",{parentName:"p"},"correlationKey")," expression. For example, if the workflow instance has a variable ",Object(r.b)("inlineCode",{parentName:"p"},"orderId")," with value ",Object(r.b)("inlineCode",{parentName:"p"},'"order-123"')," then the message must be published with the correlation key ",Object(r.b)("inlineCode",{parentName:"p"},'"order-123"'),"."),Object(r.b)("h2",{id:"variable-mappings"},"Variable Mappings"),Object(r.b)("p",null,"By default, all message variables are merged into the workflow instance. This behavior can be customized by defining an output mapping at the message catch event."),Object(r.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(r.b)("details",null,Object(r.b)("summary",null,"XML representation"),Object(r.b)("p",null,"A message start event with message definition:",Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:message id="Message_0z0aft4" name="order-placed" />\n\n<bpmn:startEvent id="order-placed" name="Order placed">\n  <bpmn:messageEventDefinition messageRef="Message_0z0aft4" />\n</bpmn:startEvent>\n')),Object(r.b)("p",null,"An intermediate message catch event with message definition:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:message id="Message_1iz5qtq" name="money-collected">\n  <bpmn:extensionElements>\n    <zeebe:subscription correlationKey="= orderId" />\n  </bpmn:extensionElements>\n</bpmn:message>\n\n<bpmn:intermediateCatchEvent id="money-collected" name="Money collected" >\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:intermediateCatchEvent>\n')),Object(r.b)("p",null,"A boundary message event:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:boundaryEvent id="order-canceled" name="Order Canceled"\n  attachedToRef="collect-money">\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:boundaryEvent>\n')))),Object(r.b)("details",null,Object(r.b)("summary",null,"Using the BPMN modeler"),Object(r.b)("p",null,"Adding an intermediate message catch event:",Object(r.b)("p",null,Object(r.b)("img",{alt:"message-event",src:n(1079).default})))),Object(r.b)("details",null,Object(r.b)("summary",null,"Workflow Lifecycle"),Object(r.b)("p",null,"Workflow instance records of a message start event:",Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Intent"),Object(r.b)("th",null,"Element Id"),Object(r.b)("th",null,"Element Type")),Object(r.b)("tr",null,Object(r.b)("td",null,"EVENT_OCCURRED"),Object(r.b)("td",null,"order-placed"),Object(r.b)("td",null,"START_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATING"),Object(r.b)("td",null,"order-placed"),Object(r.b)("td",null,"START_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATED"),Object(r.b)("td",null,"order-placed"),Object(r.b)("td",null,"START_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETING"),Object(r.b)("td",null,"order-placed"),Object(r.b)("td",null,"START_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETED"),Object(r.b)("td",null,"order-placed"),Object(r.b)("td",null,"START_EVENT"))),Object(r.b)("p",null,"Workflow instance records of an intermediate message catch event:"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Intent"),Object(r.b)("th",null,"Element Id"),Object(r.b)("th",null,"Element Type")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATING"),Object(r.b)("td",null,"order-delivered"),Object(r.b)("td",null,"INTERMEDIATE_CATCH_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_ACTIVATED"),Object(r.b)("td",null,"order-delivered"),Object(r.b)("td",null,"INTERMEDIATE_CATCH_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"..."),Object(r.b)("td",null,"..."),Object(r.b)("td",null,"...")),Object(r.b)("tr",null,Object(r.b)("td",null,"EVENT_OCCURRED"),Object(r.b)("td",null,"money-collected"),Object(r.b)("td",null,"INTERMEDIATE_CATCH_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETING"),Object(r.b)("td",null,"money-collected"),Object(r.b)("td",null,"INTERMEDIATE_CATCH_EVENT")),Object(r.b)("tr",null,Object(r.b)("td",null,"ELEMENT_COMPLETED"),Object(r.b)("td",null,"money-collected"),Object(r.b)("td",null,"INTERMEDIATE_CATCH_EVENT"))))),Object(r.b)("p",null,"References:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/message-correlation/message-correlation"}),"Message Correlation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/expressions"}),"Expressions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"}),"Variable Mappings")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/incidents"}),"Incidents"))))}b.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),b=function(e){var t=s.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,p=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?s.a.createElement(p,c(c({ref:t},i),{},{components:n})):s.a.createElement(p,c({ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);