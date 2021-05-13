(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[78041],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},95559:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=o(22122),n=o(19756),a=(o(67294),o(3905)),i={id:"tutorial-setup",title:"Tutorial setup"},s={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",id:"version-1.0/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",isDocsHomePage:!1,title:"Tutorial setup",description:"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to:",source:"@site/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup.md",sourceDirName:"product-manuals/zeebe/deployment-guide/getting-started",slug:"/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup.md",version:"1.0",frontMatter:{id:"tutorial-setup",title:"Tutorial setup"},sidebar:"version-1.0/Product Manuals",previous:{title:"Getting started tutorial",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/index"},next:{title:"Create a process",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/create-a-process"}},u=[],l={toc:u};function c(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model a process using Camunda Modeler"),(0,a.kt)("li",{parentName:"ul"},"Deploy the process to Zeebe"),(0,a.kt)("li",{parentName:"ul"},"Create process instances"),(0,a.kt)("li",{parentName:"ul"},"Use workers to complete jobs created by those process instances"),(0,a.kt)("li",{parentName:"ul"},"Correlate messages to process instances"),(0,a.kt)("li",{parentName:"ul"},"Monitor what's happening and get detail about running process instances in Operate")),(0,a.kt)("p",null,"If this is your first time working with Zeebe, we expect this entire guide to take you 30-45 minutes to complete."),(0,a.kt)("p",null,'If you\'re looking for a very fast (but less comprehensive) "first contact" experience, you might prefer the ',(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/product-manuals/zeebe/deployment-guide/local/quickstart"},"Quickstart"),"."),(0,a.kt)("p",null,"The tutorial assumes you have some basic knowledge of what Zeebe is and what it's used for. If you're completely new to Zeebe, you might find it helpful to read through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/product-manuals/concepts/what-is-camunda-cloud"},'"What is Camunda Cloud?"')," docs article first."),(0,a.kt)("p",null,"Below are the components you'll use in the tutorial. The easiest way to run them is to download the ",(0,a.kt)("a",{parentName:"p",href:"https://camunda.com/download/modeler/"},"Camunda Modeler")," and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"operate")," docker-compose profile in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-docker-compose"},"zeebe-docker-compose")," repository. Further instructions for using Zeebe with Docker can be found in the README.md file in that repository."),(0,a.kt)("p",null,"You can also download the full distributions for these components, instead of running them with Docker."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://camunda.com/download/modeler/"},"Camunda Modeler"),": A desktop modeling tool that we'll use to create and configure our process before we deploy it to Zeebe."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"},"Zeebe Distribution"),": The Zeebe distribution contains the workflow engine where we'll deploy our process model; the engine is also responsible for managing the state of active process instances. Included in the distro is the Zeebe CLI, which we'll use throughout the tutorial. Please use Zeebe 0.20.0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"},"Camunda Operate"),": An operations tool for monitoring and troubleshooting live process instances in Zeebe. Operate is currently available for free and unrestricted ",(0,a.kt)("em",{parentName:"li"},"non-production use"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-0"},"Elasticsearch 6.8.0"),": An open-source distributed datastore that can connect to Zeebe to store process data for auditing, visualization, analysis, etc. Camunda Operate uses Elasticsearch as its underlying datastore, which is why you need to download Elasticsearch to complete this tutorial. Operate and Zeebe are compatible with Elasticsearch 6.8.0.")),(0,a.kt)("p",null,"In case you're already familiar with BPMN and how to create a BPMN model in Camunda Modeler, you can find the finished model that we create during the tutorial here: ",(0,a.kt)("a",{target:"_blank",href:o(4273).Z},"Zeebe Getting Started Tutorial Process Model"),"."),(0,a.kt)("p",null,"If you're using the finished model we provide rather than building your own, you can also move ahead to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-process"},"section 3.3: Deploy a Process"),"."),(0,a.kt)("p",null,"And if you have questions or feedback about the tutorial, we encourage you to visit the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.zeebe.io"},"Zeebe user forum")," and ask a question."),(0,a.kt)("p",null,'There\'s a "Getting Started" category for topics that you can use when you ask your question or give feedback.'))}c.isMDXComponent=!0},4273:function(e,t,o){"use strict";t.Z=o.p+"assets/files/order-process-1dee0d51f028e9f707e0ddd85f71d437.bpmn"}}]);