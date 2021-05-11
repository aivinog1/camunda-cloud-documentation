(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(661)),c={id:"call-activities",title:"Call activities"},s={unversionedId:"reference/bpmn-processes/call-activities/call-activities",id:"reference/bpmn-processes/call-activities/call-activities",isDocsHomePage:!1,title:"Call activities",description:"A call activity (aka reusable subprocess) allows to call/invoke another process as part of this process. It is similar to an embedded subprocess but the process is externalized (i.e. stored as separated BPMN) and can be invoked by different processes.",source:"@site/docs/reference/bpmn-processes/call-activities/call-activities.md",slug:"/reference/bpmn-processes/call-activities/call-activities",permalink:"/docs/reference/bpmn-processes/call-activities/call-activities",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/call-activities/call-activities.md",version:"current",sidebar:"Reference",previous:{title:"Embedded subprocess",permalink:"/docs/reference/bpmn-processes/embedded-subprocesses/embedded-subprocesses"},next:{title:"Event subprocess",permalink:"/docs/reference/bpmn-processes/event-subprocesses/event-subprocesses"}},l=[{value:"Defining the called process",id:"defining-the-called-process",children:[]},{value:"Boundary events",id:"boundary-events",children:[]},{value:"Variable mappings",id:"variable-mappings",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A call activity (aka reusable subprocess) allows to call/invoke another process as part of this process. It is similar to an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/bpmn-processes/embedded-subprocesses/embedded-subprocesses"}),"embedded subprocess")," but the process is externalized (i.e. stored as separated BPMN) and can be invoked by different processes."),Object(i.b)("p",null,Object(i.b)("img",{alt:"call-activity",src:a(973).default})),Object(i.b)("p",null,"When a call activity is entered then a new process instance of the referenced process is created. The new process instance gets activated at the ",Object(i.b)("strong",{parentName:"p"},"none start event"),". The process can have start events of other types but they are ignored."),Object(i.b)("p",null,"When the created process instance is completed then the call activity is left and the outgoing sequence flow is taken."),Object(i.b)("h2",{id:"defining-the-called-process"},"Defining the called process"),Object(i.b)("p",null,"A call activity must define the BPMN process id of the called process as ",Object(i.b)("inlineCode",{parentName:"p"},"processId"),"."),Object(i.b)("p",null,"The new instance of the defined process will be created of its ",Object(i.b)("strong",{parentName:"p"},"latest version")," - at the point when the call activity is activated."),Object(i.b)("p",null,"Usually, the ",Object(i.b)("inlineCode",{parentName:"p"},"processId")," is defined as a static value (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"shipping-process"),") but it can also be defined as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/product-manuals/concepts/expressions"}),"expression")," (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},'= "shipping-" + tenantId'),"). The expression is evaluated on activating the call activity and must result in a ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"."),Object(i.b)("h2",{id:"boundary-events"},"Boundary events"),Object(i.b)("p",null,Object(i.b)("img",{alt:"call-activity-boundary-event",src:a(974).default})),Object(i.b)("p",null,"Interrupting and non-interrupting boundary events can be attached to a call activity."),Object(i.b)("p",null,"When an interrupting boundary event is triggered then the call activity ",Object(i.b)("strong",{parentName:"p"},"and")," the created process instance are terminated. The variables of the created process instance are not propagated to the call activity."),Object(i.b)("p",null,"When an non-interrupting boundary event is triggered then the created process instance is not affected. The activities at the outgoing path have no access to the variables of the created process instance since they are bounded to the other process instance."),Object(i.b)("h2",{id:"variable-mappings"},"Variable mappings"),Object(i.b)("p",null,"When the call activity is activated then ",Object(i.b)("strong",{parentName:"p"},"all variables")," of the call activity scope are copied to the created process instance."),Object(i.b)("p",null,"Input mappings can be used to create new local variables in the scope of the call activity. These variables are also copied to the created process instance."),Object(i.b)("p",null,"If the attribute ",Object(i.b)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," is set (default: ",Object(i.b)("inlineCode",{parentName:"p"},"true"),") then all variables of the created process instance are propagated to the call activity. This behavior can be customized by defining output mappings at the call activity. The output mappings are applied on completing the call activity and only those variables that are defined in the output mappings are propagated."),Object(i.b)("p",null,"It is recommended to disable the attribute ",Object(i.b)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," or define output mappings if the call activity is in a parallel flow (e.g. when it is marked as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/bpmn-processes/multi-instance/multi-instance#variable-mappings"}),"parallel multi-instance"),"). Otherwise, it can happen that variables are overridden accidentally when they are changed in the parallel flow."),Object(i.b)("h2",{id:"additional-resources"},"Additional resources"),Object(i.b)("h3",{id:"xml-representation"},"XML Representation"),Object(i.b)("p",null,"A call activity with static process id:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:callActivity id="task-A" name="A">\n  <bpmn:extensionElements>\n    <zeebe:calledElement processId="child-process-id" />\n  </bpmn:extensionElements>\n</bpmn:callActivity>\n')),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/expressions"}),"Expressions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/variables#variable-scopes"}),"Variable scopes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/variables#inputoutput-variable-mappings"}),"Variable mappings"))))}p.isMDXComponent=!0},661:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,v=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(v,s(s({ref:t},o),{},{components:a})):r.a.createElement(v,s({ref:t},o))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},973:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/call-activities-example-7688f849caadb26c9052867416700582.png"},974:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"}}]);