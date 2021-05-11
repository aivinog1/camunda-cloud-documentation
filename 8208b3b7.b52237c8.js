(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{386:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(661)),i={id:"index",title:"Operating Zeebe in Production",sidebar_label:"Overview"},c={unversionedId:"product-manuals/zeebe/deployment-guide/operations/index",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/index",isDocsHomePage:!1,title:"Operating Zeebe in Production",description:"This chapter covers topics relevant for anyone who wants to operate Zeebe in production.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/index.md",slug:"/product-manuals/zeebe/deployment-guide/operations/index",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/index.md",version:"0.26",sidebar_label:"Overview",sidebar:"version-0.26/Product Manuals",previous:{title:"Authorization",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/security/authorization"},next:{title:"Resource planning",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This chapter covers topics relevant for anyone who wants to operate Zeebe in production."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/resource-planning"}),"Resource planning")," - Gives an introduction for calculating how many resources need to be provisioned."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/network-ports"}),"Network ports")," - Discusses which ports are needed to run Zeebe"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster"}),"Setting up a Zeebe cluster")," - Quick guide on how to set up a cluster with multiple brokers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/metrics"}),"Metrics")," - Lists options to monitor Zeebe."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/health"}),"Health status")," - Lists available high level health and liveness probes."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/backpressure"}),"Backpressure")," - Discusses the backpressure mechanism used by Zeebe brokers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/disk-space"}),"Disk space")," - Explains how to set limits for the amount of free disk space. Once these limits are undercut, Zeebe will degrade gracefully to allow the operations team to provide more disk space."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe"}),"Upgrade zeebe")," - Contains information on how to perform a rolling upgrade.")))}p.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);