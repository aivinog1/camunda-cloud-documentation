(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{287:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(661)),c={id:"task",title:"task"},o={unversionedId:"reference/tasklist-api/queries/task",id:"version-0.26/reference/tasklist-api/queries/task",isDocsHomePage:!1,title:"task",description:"<span",source:"@site/versioned_docs/version-0.26/reference/tasklist-api/queries/task.mdx",slug:"/reference/tasklist-api/queries/task",permalink:"/docs/0.26/reference/tasklist-api/queries/task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/tasklist-api/queries/task.mdx",version:"0.26",sidebar:"version-0.26/Reference",previous:{title:"currentUser",permalink:"/docs/0.26/reference/tasklist-api/queries/current-user"},next:{title:"tasks",permalink:"/docs/0.26/reference/tasklist-api/queries/tasks"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={rightToc:s,Tag:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Get task with id. Returns task or error when task does not exist."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"task(\n  id: String!\n): Task!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"id-string"},Object(i.b)("inlineCode",{parentName:"h4"},"id")," (",Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"task"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/objects/task"}),Object(i.b)("inlineCode",{parentName:"a"},"Task"))),Object(i.b)("p",null,"Describes the User task"))}l.isMDXComponent=!0},661:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||i;return r?a.a.createElement(f,o(o({ref:t},u),{},{components:r})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);