(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(450)),o={id:"event-based-gateways",title:"Event-based Gateway"},c={unversionedId:"product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways",isDocsHomePage:!1,title:"Event-based Gateway",description:"An event-based gateway allows to make a decision based on events.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways.md",slug:"/product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/event-based-gateways/event-based-gateways.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Parallel Gateway",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/parallel-gateways/parallel-gateways"},next:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/events"}},b=[{value:"Additional Resources",id:"additional-resources",children:[]}],i={rightToc:b};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An event-based gateway allows to make a decision based on events. "),Object(l.b)("p",null,Object(l.b)("img",{alt:"workflow",src:n(594).default})),Object(l.b)("p",null,"An event-based gateway must have at least two outgoing sequence flows. Each sequence flow must to be connected to an intermediate catch event of type ",Object(l.b)("strong",{parentName:"p"},"timer or message"),"."),Object(l.b)("p",null,"When an event-based gateway is entered then the workflow instance waits at the gateway until one of the events is triggered. When the first event is triggered then the outgoing sequence flow of this event is taken. No other events of the gateway can be triggered afterward."),Object(l.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(l.b)("details",null,Object(l.b)("summary",null,"XML representation"),Object(l.b)("p",null,"An event-based gateway with two outgoing sequence flows:",Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:eventBasedGateway id="gateway" />\n\n<bpmn:sequenceFlow id="s1" sourceRef="gateway" targetRef="payment-details-updated" />\n\n<bpmn:intermediateCatchEvent id="payment-details-updated" \n  name="Payment Details Updated">\n  <bpmn:messageEventDefinition messageRef="message-payment-details-updated" />\n</bpmn:intermediateCatchEvent>\n\n<bpmn:sequenceFlow id="s2" sourceRef="gateway" targetRef="wait-one-hour" />\n\n<bpmn:intermediateCatchEvent id="wait-one-hour" name="1 hour">\n  <bpmn:timerEventDefinition>\n    <bpmn:timeDuration>PT1H</bpmn:timeDuration>\n  </bpmn:timerEventDefinition>\n</bpmn:intermediateCatchEvent>\n')))),Object(l.b)("details",null,Object(l.b)("summary",null,"Using the BPMN modeler"),Object(l.b)("p",null,"Adding an event-based gateway with two outgoing sequence flows:",Object(l.b)("p",null,Object(l.b)("img",{alt:"event-based-gateway",src:n(595).default})," "))),Object(l.b)("details",null,Object(l.b)("summary",null,"Workflow Lifecycle"),Object(l.b)("p",null,"Workflow instance records of an event-based gateway:",Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Intent"),Object(l.b)("th",null,"Element Id"),Object(l.b)("th",null,"Element Type")),Object(l.b)("tr",null,Object(l.b)("td",null,"ELEMENT_ACTIVATING"),Object(l.b)("td",null,"gateway"),Object(l.b)("td",null,"EVENT_BASED_GATEWAY")),Object(l.b)("tr",null,Object(l.b)("td",null,"ELEMENT_ACTIVATED"),Object(l.b)("td",null,"gateway"),Object(l.b)("td",null,"EVENT_BASED_GATEWAY")),Object(l.b)("tr",null,Object(l.b)("td",null,"..."),Object(l.b)("td",null,"..."),Object(l.b)("td",null,"...")),Object(l.b)("tr",null,Object(l.b)("td",null,"EVENT_OCCURRED"),Object(l.b)("td",null,"gateway"),Object(l.b)("td",null,"EVENT_BASED_GATEWAY")),Object(l.b)("tr",null,Object(l.b)("td",null,"ELEMENT_COMPLETING"),Object(l.b)("td",null,"gateway"),Object(l.b)("td",null,"EVENT_BASED_GATEWAY")),Object(l.b)("tr",null,Object(l.b)("td",null,"ELEMENT_COMPLETED"),Object(l.b)("td",null,"gateway"),Object(l.b)("td",null,"EVENT_BASED_GATEWAY")),Object(l.b)("tr",null,Object(l.b)("td",null,"ELEMENT_ACTIVATING"),Object(l.b)("td",null,"payment-details-updated"),Object(l.b)("td",null,"INTERMEDIATE_CATCH_EVENT"))))),Object(l.b)("p",null,"References:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/timer-events/timer-events"}),"Timer Events")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events"}),"Message Events"))))}s.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return A}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,A=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return n?r.a.createElement(A,c(c({ref:t},i),{},{components:n})):r.a.createElement(A,c({ref:t},i))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},594:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},595:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/event-based-gateway-f391c693a9807e380fde3a10ce82c0e7.gif"}}]);