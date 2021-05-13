(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[61939],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,k=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12913:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},Tag:function(){return c},default:function(){return p}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),i={id:"task-query",title:"TaskQuery"},o={unversionedId:"reference/tasklist-api/inputs/task-query",id:"reference/tasklist-api/inputs/task-query",isDocsHomePage:!1,title:"TaskQuery",description:"<span",source:"@site/docs/reference/tasklist-api/inputs/task-query.mdx",sourceDirName:"reference/tasklist-api/inputs",slug:"/reference/tasklist-api/inputs/task-query",permalink:"/docs/reference/tasklist-api/inputs/task-query",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/inputs/task-query.mdx",version:"current",frontMatter:{id:"task-query",title:"TaskQuery"},sidebar:"Reference",previous:{title:"TaskState",permalink:"/docs/reference/tasklist-api/enums/task-state"},next:{title:"VariableInput",permalink:"/docs/reference/tasklist-api/inputs/variable-input"}},l=[{value:"Fields",id:"fields",children:[]}],c=function(e){var t=e.children,r=e.color;return(0,s.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:l,Tag:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Task query - query to get one page of tasks."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type TaskQuery {\n  state: TaskState\n  assigned: Boolean\n  assignee: String\n  pageSize: Int\n  searchAfter: [String!]\n  searchAfterOrEqual: [String!]\n  searchBefore: [String!]\n  searchBeforeOrEqual: [String!]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"state-taskstate"},(0,s.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/enums/task-state"},(0,s.kt)("inlineCode",{parentName:"a"},"TaskState")),")"),(0,s.kt)("p",null,"State of the tasks"),(0,s.kt)("h4",{id:"assigned-boolean"},(0,s.kt)("inlineCode",{parentName:"h4"},"assigned")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,s.kt)("p",null,"Are the tasks assigned?"),(0,s.kt)("h4",{id:"assignee-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"assignee")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("p",null,"Who is assigned to the tasks?"),(0,s.kt)("h4",{id:"pagesize-int"},(0,s.kt)("inlineCode",{parentName:"h4"},"pageSize")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"Size of tasks page (default: 50)."),(0,s.kt)("h4",{id:"searchafter-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"searchAfter")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,s.kt)("p",null,"Array of values copied from ",(0,s.kt)("inlineCode",{parentName:"p"},"sortValues")," of one of the tasks, query will return page of tasks going directly after this values plus same sort values."),(0,s.kt)("h4",{id:"searchafterorequal-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"searchAfterOrEqual")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,s.kt)("p",null,"Array of values copied from ",(0,s.kt)("inlineCode",{parentName:"p"},"sortValues")," of one of the tasks, query will return page of tasks going directly after this values."),(0,s.kt)("h4",{id:"searchbefore-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"searchBefore")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,s.kt)("p",null,"Array of values copied from ",(0,s.kt)("inlineCode",{parentName:"p"},"sortValues")," of one of the tasks, query will return page of tasks going directly before this values plus same sort values."),(0,s.kt)("h4",{id:"searchbeforeorequal-string"},(0,s.kt)("inlineCode",{parentName:"h4"},"searchBeforeOrEqual")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,s.kt)("p",null,"Array of values copied from ",(0,s.kt)("inlineCode",{parentName:"p"},"sortValues")," of one of the tasks, query will return page of tasks going directly before this values."))}p.isMDXComponent=!0}}]);