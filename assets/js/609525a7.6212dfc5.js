(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[53428],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||c;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76057:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return s},Tag:function(){return p},default:function(){return l}});var n=r(22122),i=r(19756),c=(r(67294),r(3905)),a={id:"specified-by",title:"specifiedBy"},o={unversionedId:"reference/tasklist-api/directives/specified-by",id:"version-1.0/reference/tasklist-api/directives/specified-by",isDocsHomePage:!1,title:"specifiedBy",description:"<span",source:"@site/versioned_docs/version-1.0/reference/tasklist-api/directives/specified-by.mdx",sourceDirName:"reference/tasklist-api/directives",slug:"/reference/tasklist-api/directives/specified-by",permalink:"/docs/1.0/reference/tasklist-api/directives/specified-by",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/tasklist-api/directives/specified-by.mdx",version:"1.0",frontMatter:{id:"specified-by",title:"specifiedBy"},sidebar:"version-1.0/Reference",previous:{title:"skip",permalink:"/docs/1.0/reference/tasklist-api/directives/skip"},next:{title:"Form",permalink:"/docs/1.0/reference/tasklist-api/objects/form"}},s=[{value:"Arguments",id:"arguments",children:[]}],p=function(e){var t=e.children,r=e.color;return(0,c.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},u={toc:s,Tag:p};function l(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Exposes a URL that specifies the behaviour of this scalar."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @specifiedBy(\n  url: String!\n)\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"url-string"},(0,c.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,c.kt)("p",null,"The URL that specifies the behaviour of this scalar."))}l.isMDXComponent=!0}}]);