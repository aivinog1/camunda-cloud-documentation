(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[70326],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c},Tag:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),s={id:"task-query",title:"TaskQuery"},o={unversionedId:"reference/tasklist-api/inputs/task-query",id:"version-0.26/reference/tasklist-api/inputs/task-query",isDocsHomePage:!1,title:"TaskQuery",description:"<span",source:"@site/versioned_docs/version-0.26/reference/tasklist-api/inputs/task-query.mdx",sourceDirName:"reference/tasklist-api/inputs",slug:"/reference/tasklist-api/inputs/task-query",permalink:"/docs/0.26/reference/tasklist-api/inputs/task-query",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/tasklist-api/inputs/task-query.mdx",version:"0.26",frontMatter:{id:"task-query",title:"TaskQuery"},sidebar:"version-0.26/Reference",previous:{title:"TaskState",permalink:"/docs/0.26/reference/tasklist-api/enums/task-state"},next:{title:"VariableInput",permalink:"/docs/0.26/reference/tasklist-api/inputs/variable-input"}},c=[{value:"Fields",id:"fields",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={toc:c,Tag:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"What can be queried"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TaskQuery {\n  state: TaskState\n  assigned: Boolean\n  assignee: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"state-taskstate"},(0,i.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/enums/task-state"},(0,i.kt)("inlineCode",{parentName:"a"},"TaskState")),")"),(0,i.kt)("p",null,"State of the tasks"),(0,i.kt)("h4",{id:"assigned-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"assigned")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Are the tasks assigned?"),(0,i.kt)("h4",{id:"assignee-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Who is assigned to the tasks?"))}p.isMDXComponent=!0}}]);