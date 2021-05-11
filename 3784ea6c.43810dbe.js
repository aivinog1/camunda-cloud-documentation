(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{207:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return i})),s.d(t,"rightToc",(function(){return c})),s.d(t,"default",(function(){return b}));var a=s(3),n=s(7),r=(s(0),s(661)),o={id:"message-correlation",title:"Message Correlation"},i={unversionedId:"product-manuals/zeebe/reference/message-correlation/message-correlation",id:"version-0.25/product-manuals/zeebe/reference/message-correlation/message-correlation",isDocsHomePage:!1,title:"Message Correlation",description:"Message correlation describes how a message is correlated to a workflow instance. Messages can be correlated to the following elements:",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/reference/message-correlation/message-correlation.md",slug:"/product-manuals/zeebe/reference/message-correlation/message-correlation",permalink:"/docs/0.25/product-manuals/zeebe/reference/message-correlation/message-correlation",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/reference/message-correlation/message-correlation.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Expressions",permalink:"/docs/0.25/product-manuals/zeebe/reference/expressions"},next:{title:"Incidents",permalink:"/docs/0.25/product-manuals/zeebe/reference/incidents"}},c=[{value:"Message Subscriptions",id:"message-subscriptions",children:[]},{value:"Message Cardinality",id:"message-cardinality",children:[]},{value:"Message Buffering",id:"message-buffering",children:[]},{value:"Message Uniqueness",id:"message-uniqueness",children:[]},{value:"Message Patterns",id:"message-patterns",children:[{value:"Message Aggregator",id:"message-aggregator",children:[]},{value:"Single Instance",id:"single-instance",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Message correlation describes how a message is correlated to a workflow instance. Messages can be correlated to the following elements:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events#message-start-events"}),"Message Start Events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events#intermediate-message-catch-events"}),"Intermediate Message Catch Events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events#message-boundary-events"}),"Message Boundary Events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/event-subprocesses/event-subprocesses"}),"Message Event Subprocesses")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/receive-tasks/receive-tasks"}),"Receive Tasks"))),Object(r.b)("h2",{id:"message-subscriptions"},"Message Subscriptions"),Object(r.b)("p",null,"A message is not sent to a workflow instance directly. Instead, the message correlation is based on subscriptions that contains the ",Object(r.b)("strong",{parentName:"p"},"message name")," and the ",Object(r.b)("strong",{parentName:"p"},"correlation key")," (aka correlation value)."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Message Correlation",src:s(931).default})),Object(r.b)("p",null,"A subscription is opened when a workflow instance awaits a message, for example, when entering a message catch event. The message name is defined either statically in the workflow (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"Money collected"),") or dynamically as an expression. The correlation key is defined dynamically as an expression (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"= orderId"),"). The expressions are evaluated on activating the message catch event. The results of the evaluations are used as message name and as correlation key of the subscription (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'"order-123"'),")."),Object(r.b)("p",null," When a message is published and the message name and the correlation key matches to a subscription then the message is correlated to the corresponding workflow instance. If no proper subscription is opened then the message is discarded."),Object(r.b)("p",null,"A subscription is closed when the corresponding element (e.g. the message catch event), or its scope is left. After a subscription is opened, it is not updated, for example, when the referenced workflow instance variable is changed."),Object(r.b)("details",null,Object(r.b)("summary",null,"Publish message via zbctl"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'zbctl publish message "Money collected" --correlationKey "order-123"\n')))),Object(r.b)("h2",{id:"message-cardinality"},"Message Cardinality"),Object(r.b)("p",null,"A message is correlated only ",Object(r.b)("strong",{parentName:"p"},"once")," to a workflow (based on the BPMN process id), across all versions of this workflow. If multiple subscriptions for the same workflow are opened (by multiple workflow instances or within one instance) then the message is correlated only to one of the subscriptions."),Object(r.b)("p",null,"When subscriptions are opened for different workflows then the message is correlated to ",Object(r.b)("strong",{parentName:"p"},"all")," of the subscriptions."),Object(r.b)("p",null,"A message is ",Object(r.b)("strong",{parentName:"p"},"not")," correlated to a message start event subscription if an instance of the workflow is active and was created by a message with the same correlation key. If the message is buffered then it can be correlated after the active instance is ended. Otherwise, it is discarded."),Object(r.b)("h2",{id:"message-buffering"},"Message Buffering"),Object(r.b)("p",null,"Messages can be buffered for a given time. Buffering can be useful in a situation when it is not guaranteed that the subscription is opened before the message is published."),Object(r.b)("p",null,"A message has a ",Object(r.b)("strong",{parentName:"p"},"time-to-live")," (TTL) which specifies for how long it is buffered. Within this time, the message can be correlated to a workflow instance."),Object(r.b)("p",null,"When a subscription is opened then it polls the buffer for a proper message. If a proper message exists then it is correlated to the corresponding workflow instance. In case multiple messages match to the subscription then the first published message is correlated (like a FIFO queue)."),Object(r.b)("p",null,"The buffering of a message is disabled when its TTL is set to zero. If no proper subscription is opened then the message is discarded."),Object(r.b)("details",null,Object(r.b)("summary",null,"Publish message with TTL via zbctl"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'zbctl publish message "Money collected" --correlationKey "order-123" --ttl 1h\n')))),Object(r.b)("h2",{id:"message-uniqueness"},"Message Uniqueness"),Object(r.b)("p",null,"A message can have a ",Object(r.b)("strong",{parentName:"p"},"message id")," - a unique id to ensure that the message is published only once (i.e. idempotency). The id can be any string, for example, a request id, a tracking number or the offset/position in a message queue."),Object(r.b)("p",null,"A message is rejected and not correlated if a message with the same name, the same correlation key and the same id is already buffered. After the message is discarded from the buffer, a message with the same name, correlation key and id can be published again."),Object(r.b)("p",null,"The uniqueness check is disabled when no message id is set."),Object(r.b)("details",null,Object(r.b)("summary",null,"Publish message with id via zbctl"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'zbctl publish message "Money collected" --correlationKey "order-123" --messageId "tracking-12345"\n')))),Object(r.b)("h2",{id:"message-patterns"},"Message Patterns"),Object(r.b)("p",null,"The following patterns describe solutions to common problems what can be solved using the message correlation."),Object(r.b)("h3",{id:"message-aggregator"},"Message Aggregator"),Object(r.b)("p",null,"Problem: aggregate/collect multiple messages, map-reduce, batching"),Object(r.b)("p",null,"Solution:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Message Aggregator",src:s(932).default})),Object(r.b)("p",null,"The messages are published with a TTL > 0 and a correlation key that groups the messages per entity."),Object(r.b)("p",null,"The first message creates a new workflow instance. The following messages are correlated to the same workflow instance if they have the same correlation key."),Object(r.b)("p",null,"When the instance is ended and messages with the same correlation key are not correlated yet then a new workflow instance is created."),Object(r.b)("h3",{id:"single-instance"},"Single Instance"),Object(r.b)("p",null,"Problem: create exactly one instance of a workflow"),Object(r.b)("p",null,"Solution:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Message Single Instance",src:s(933).default})),Object(r.b)("p",null,"The message is published with a TTL = 0 and a correlation key that identifies the entity."),Object(r.b)("p",null,"The first message creates a new workflow instance. Following messages are discarded and does not create a new instance if they have the same correlation key and the created workflow instance is still active."))}b.isMDXComponent=!0},661:function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return m}));var a=s(0),n=s.n(a);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function c(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(s),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return s?n.a.createElement(m,i(i({ref:t},l),{},{components:s})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=s[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},931:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/message-correlation-f4f13de741bb19f5f42e0292ab1456ab.png"},932:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/message-aggregator-1dbf88f6e2c7145aa238721cbf3570f1.png"},933:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/message-single-instance-0ecb1804dba659e08c28d4520a3e72b6.png"}}]);