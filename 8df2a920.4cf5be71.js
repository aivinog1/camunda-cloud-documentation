(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var s=a(3),n=a(7),l=(a(0),a(450)),i={id:"overview",title:"Overview and example use case"},r={unversionedId:"product-manuals/tasklist/userguide/overview",id:"product-manuals/tasklist/userguide/overview",isDocsHomePage:!1,title:"Overview and example use case",description:"What can I do with Tasklist?",source:"@site/docs/product-manuals/tasklist/userguide/overview.md",slug:"/product-manuals/tasklist/userguide/overview",permalink:"/docs/product-manuals/tasklist/userguide/overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/tasklist/userguide/overview.md",version:"current",sidebar:"Product Manuals",previous:{title:"Introduction",permalink:"/docs/product-manuals/tasklist/introduction"},next:{title:"Install and start Tasklist",permalink:"/docs/product-manuals/tasklist/deployment/install-and-start"}},c=[{value:"What can I do with Tasklist?",id:"what-can-i-do-with-tasklist",children:[]},{value:"Example use case",id:"example-use-case",children:[{value:"Claimed by me tasks",id:"claimed-by-me-tasks",children:[]},{value:"Claim a task",id:"claim-a-task",children:[]},{value:"Complete a task",id:"complete-a-task",children:[]},{value:"Completed tasks",id:"completed-tasks",children:[]}]}],o={rightToc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(s.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"what-can-i-do-with-tasklist"},"What can I do with Tasklist?"),Object(l.b)("p",null,"Tasklist shows you all user tasks that appeared in processes. Those processes are running in Zeebe."),Object(l.b)("p",null,"User tasks needs an interaction from the user - that can be updating and adding variables or just completion of the task. The user needs to claim a task first, a user can even unclaim an already claimed task.\nIf the user has claimed a task, then the task is completable. Different Task status filters helps the user\nto choose the desired task."),Object(l.b)("h2",{id:"example-use-case"},"Example use case"),Object(l.b)("p",null,"If you have successfully logged in you can see a screen like this:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-start-screen",src:a(495).default})),Object(l.b)("p",null,"On the left side you can see tasks and on the right side details of the current selected task.\nYou can change the list of tasks by applying filters. You can collapse and expand the task list."),Object(l.b)("p",null,"You can choose which tasks you want to see: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"All open"),Object(l.b)("li",{parentName:"ul"},"Claimed by me"),Object(l.b)("li",{parentName:"ul"},"Unclaimed"),Object(l.b)("li",{parentName:"ul"},"Completed")),Object(l.b)("p",null,"At the begin we have no ",Object(l.b)("strong",{parentName:"p"},"Claimed by me")," tasks."),Object(l.b)("h3",{id:"claimed-by-me-tasks"},"Claimed by me tasks"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-claimed-by-me-empty",src:a(746).default})),Object(l.b)("p",null,"We select the ",Object(l.b)("strong",{parentName:"p"},"Unclaimed")," list and claim a task by using the ",Object(l.b)("strong",{parentName:"p"},"Claim")," button on the details panel:"),Object(l.b)("h3",{id:"claim-a-task"},"Claim a task"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-claim",src:a(747).default})),Object(l.b)("p",null,"Now select the ",Object(l.b)("strong",{parentName:"p"},"Claimed by me")," list to see whether you have the task claimed:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-claimed-by-me-list",src:a(748).default})),Object(l.b)("h3",{id:"complete-a-task"},"Complete a task"),Object(l.b)("p",null,"Only then you can complete the task by adding and updating variables and finally using the ",Object(l.b)("strong",{parentName:"p"},"Complete Task")," button:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-claimed-by-me",src:a(749).default})),Object(l.b)("p",null,"You always choose a list of tasks with a specified status and then select the task you want to work on."),Object(l.b)("p",null,"Now we complete the task and check if it will be shown in ",Object(l.b)("strong",{parentName:"p"},"Completed")," list.\nChange and variables as needed and start the completion with ",Object(l.b)("strong",{parentName:"p"},"Complete Task"),"."),Object(l.b)("h4",{id:"add-and-update-variables"},"Add and update variables"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-complete-task",src:a(750).default})),Object(l.b)("h3",{id:"completed-tasks"},"Completed tasks"),Object(l.b)("p",null,"If everything went fine you can see the completed task by selecting the ",Object(l.b)("strong",{parentName:"p"},"Completed")," task list:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"tasklist-task-completed",src:a(751).default})))}u.isMDXComponent=!0},450:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var s=a(0),n=a.n(s);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=u(a),b=s,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||l;return a?n.a.createElement(m,r(r({ref:t},o),{},{components:a})):n.a.createElement(m,r({ref:t},o))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,i=new Array(l);i[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},495:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-start-screen_light-f27ff732f650a303e7b1d5d198aca06b.png"},746:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-claimed-by-me-empty_light-1e79aad54ada36a30be2262a9eebc1dd.png"},747:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-claim_light-05ae78bd5ddfaadfe7751d5efc08fd4c.png"},748:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-claimed-by-me-list_light-28690dd38fa934faf77652b56eb89bff.png"},749:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-claimed-by-me_light-12c5a20e2df72d813a1b57d9dc890b6e.png"},750:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-complete-task_light-80f2b5ca00589fd47bc18c32e3dc1ea4.png"},751:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/tasklist-task-completed_light-c3fc9e81025041f6a9af4655ed026f2c.png"}}]);