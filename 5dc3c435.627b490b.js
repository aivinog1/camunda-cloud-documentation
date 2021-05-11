(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(661)),c={id:"unclaim-task",title:"unclaimTask"},o={unversionedId:"reference/tasklist-api/mutations/unclaim-task",id:"version-0.26/reference/tasklist-api/mutations/unclaim-task",isDocsHomePage:!1,title:"unclaimTask",description:"<span",source:"@site/versioned_docs/version-0.26/reference/tasklist-api/mutations/unclaim-task.mdx",slug:"/reference/tasklist-api/mutations/unclaim-task",permalink:"/docs/0.26/reference/tasklist-api/mutations/unclaim-task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/tasklist-api/mutations/unclaim-task.mdx",version:"0.26",sidebar:"version-0.26/Reference",previous:{title:"completeTask",permalink:"/docs/0.26/reference/tasklist-api/mutations/complete-task"},next:{title:"deprecated",permalink:"/docs/0.26/reference/tasklist-api/directives/deprecated"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={rightToc:s,Tag:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Unclaim a task with taskId. Returns the task."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"unclaimTask(\n  taskId: String!\n): Task!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"taskid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"taskId")," (",Object(i.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"task"},Object(i.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/objects/task"}),Object(i.b)("inlineCode",{parentName:"a"},"Task"))),Object(i.b)("p",null,"Describes the User task"))}p.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(b,o(o({ref:t},u),{},{components:n})):a.a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);