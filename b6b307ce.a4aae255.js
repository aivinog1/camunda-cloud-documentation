(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(450)),i={id:"resolve-incidents-update-variables",title:"Variables & Incidents"},o={unversionedId:"product-manuals/operate/userguide/resolve-incidents-update-variables",id:"version-0.25/product-manuals/operate/userguide/resolve-incidents-update-variables",isDocsHomePage:!1,title:"Variables & Incidents",description:"Every workflow instance created for the workflow model used in the Getting Started tutorial requires an orderValue so that the XOR gateway evaluation will happen properly.",source:"@site/versioned_docs/version-0.25/product-manuals/operate/userguide/resolve-incidents-update-variables.md",slug:"/product-manuals/operate/userguide/resolve-incidents-update-variables",permalink:"/docs/0.25/product-manuals/operate/userguide/resolve-incidents-update-variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/operate/userguide/resolve-incidents-update-variables.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Getting Familiar With Operate",permalink:"/docs/0.25/product-manuals/operate/userguide/basic-operate-navigation"},next:{title:"Selections & Batch Operations",permalink:"/docs/0.25/product-manuals/operate/userguide/selections-batch-operations"}},l=[],s={rightToc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Every workflow instance created for the workflow model used in the Getting Started tutorial requires an ",Object(c.b)("inlineCode",{parentName:"p"},"orderValue")," so that the XOR gateway evaluation will happen properly. "),Object(c.b)("p",null,"Let\u2019s look at a case where ",Object(c.b)("inlineCode",{parentName:"p"},"orderValue")," is present but was set as a string, but our ",Object(c.b)("inlineCode",{parentName:"p"},"order-process.bpmn")," model requires an integer in order to properly evaluate the ",Object(c.b)("inlineCode",{parentName:"p"},"orderValue")," and route the instance. "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Linux")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":"99"}\'\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Mac")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":"99"}\'\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"1234\\", \\\n"orderValue\\": \\"99\\"}\'\n')),Object(c.b)("p",null,"To advance the instance to our XOR gateway, we\u2019ll quickly create a job worker to complete the \u201cInitiate Payment\u201d task: "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Linux")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"./bin/zbctl --insecure create worker initiate-payment --handler cat\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Mac")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure create worker initiate-payment --handler cat\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create worker initiate-payment --handler "findstr .*"\n')),Object(c.b)("p",null,"And we\u2019ll publish a message that will be correlated with the instance so we can advance past the \u201cPayment Received\u201d Intermediate Message Catch Event: "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Linux")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl --insecure publish message "payment-received" --correlationKey="1234"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Mac")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="1234"\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="1234"\n')),Object(c.b)("p",null,"In the Operate interface, you should now see that the workflow instance has an "," incident, which means there\u2019s a problem with workflow execution that needs to be fixed before the workflow instance can progress to the next step. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-incident-workflow-view",src:n(785).default})),Object(c.b)("p",null,"Operate provides tools for diagnosing and resolving incidents. Let\u2019s go through incident diagnosis and resolution step-by-step. "),Object(c.b)("p",null,"When we inspect the workflow instance, we can see exactly what our incident is: ",Object(c.b)("inlineCode",{parentName:"p"},"Expected to evaluate condition 'orderValue>=100' successfully, but failed because: Cannot compare values of different types: STRING and INTEGER")),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-incident-instance-view",src:n(786).default})),Object(c.b)("p",null,"We have enough information to know that to resolve this incident, we need to edit the ",Object(c.b)("inlineCode",{parentName:"p"},"orderValue")," variable so that it\u2019s an integer. To do so, first click on the edit icon next to the variable you\u2019d like to edit. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-incident-edit-variable",src:n(787).default})),Object(c.b)("p",null,"Next, edit the variable by removing the quotation marks from the ",Object(c.b)("inlineCode",{parentName:"p"},"orderValue")," value. Then click on the checkmark icon to save the change. "),Object(c.b)("p",null,"We were able to solve this particular problem by ",Object(c.b)("em",{parentName:"p"},"editing")," a variable, but it\u2019s worth noting that you can also ",Object(c.b)("em",{parentName:"p"},"add")," a variable if a variable is missing from a workflow instance altogether. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-incident-save-variable-edit",src:n(788).default})),Object(c.b)("p",null,"There\u2019s one last step we need to take: initiating a \u201cretry\u201d of the workflow instance. There are two places on the workflow instance page where you can initiate a retry:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-retry-instance",src:n(789).default})),Object(c.b)("p",null,"You should now see that the incident has been resolved, and the workflow instance has progressed to the next step. Well done! "),Object(c.b)("p",null,Object(c.b)("img",{alt:"operate-incident-resolved-instance-view",src:n(790).default})),Object(c.b)("p",null,"If you\u2019d like to complete the workflow instance, you can create a worker for the \u201cShip Without Insurance\u201d task: "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Linux")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"./bin/zbctl --insecure create worker ship-without-insurance --handler cat\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Mac")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"./bin/zbctl.darwin --insecure create worker ship-without-insurance --handler cat\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Windows (Powershell)")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'./bin/zbctl.exe --insecure create worker ship-without-insurance --handler "findstr .*"\n')))}b.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(O,o(o({ref:t},s),{},{components:n})):a.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},785:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Workflow-View-Incident-bf1774b375b9093b840cedd0e0b00c7e.png"},786:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-View-Instance-Incident-14d3930175fb0a7d55b4ee9433136664.png"},787:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-View-Instance-Edit-Icon-bbe2a49703afafc0c922ce522a96ea9b.png"},788:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-View-Instance-Save-Var-Edit-d411e1ea0f8f5ec80877ad5d404aa290.png"},789:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Workflow-Retry-Incident-b2893a3d9ff86c8462a3f630d4a8bc5a.png"},790:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Operate-Incident-Resolved-fda4ccc663c229eabc9d6477f8e126f9.png"}}]);