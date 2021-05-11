(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{564:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return c}));var r=o(3),a=o(7),n=(o(0),o(661)),i={id:"tutorial-setup",title:"Tutorial setup"},l={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",id:"version-0.26/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",isDocsHomePage:!1,title:"Tutorial setup",description:"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to:",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup.md",slug:"/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/getting-started/tutorial-setup.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Getting started tutorial",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/index"},next:{title:"Create a workflow",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/create-a-workflow"}},u=[],s={rightToc:u};function c(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Welcome to the Getting Started tutorial for Zeebe and Operate. In this tutorial, we'll walk you through how to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Model a workflow using Zeebe Modeler"),Object(n.b)("li",{parentName:"ul"},"Deploy the workflow to Zeebe"),Object(n.b)("li",{parentName:"ul"},"Create workflow instances"),Object(n.b)("li",{parentName:"ul"},"Use workers to complete jobs created by those workflow instances"),Object(n.b)("li",{parentName:"ul"},"Correlate messages to workflow instances"),Object(n.b)("li",{parentName:"ul"},"Monitor what's happening and get detail about running workflow instances in Operate")),Object(n.b)("p",null,"If this is your first time working with Zeebe, we expect this entire guide to take you 30-45 minutes to complete."),Object(n.b)("p",null,'If you\'re looking for a very fast (but less comprehensive) "first contact" experience, you might prefer the ',Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/local/quickstart"}),"Quickstart"),"."),Object(n.b)("p",null,"The tutorial assumes you have some basic knowledge of what Zeebe is and what it's used for. If you're completely new to Zeebe, you might find it helpful to read through the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.26/product-manuals/concepts/what-is-camunda-cloud"}),'"What is Camunda Cloud?"')," docs article first."),Object(n.b)("p",null,"Below are the components you'll use in the tutorial. The easiest way to run them is to download the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler")," and use the ",Object(n.b)("inlineCode",{parentName:"p"},"operate")," docker-compose profile in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-docker-compose"}),"zeebe-docker-compose")," repository. Further instructions for using Zeebe with Docker can be found in the README.md file in that repository."),Object(n.b)("p",null,"You can also download the full distributions for these components, instead of running them with Docker."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler"),": A desktop modeling tool that we'll use to create and configure our workflow before we deploy it to Zeebe."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"}),"Zeebe Distribution"),": The Zeebe distribution contains the workflow engine where we'll deploy our workflow model; the engine is also responsible for managing the state of active workflow instances. Included in the distro is the Zeebe CLI, which we'll use throughout the tutorial. Please use Zeebe 0.20.0."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/zeebe-io/zeebe/releases/tag/0.20.0"}),"Camunda Operate"),": An operations tool for monitoring and troubleshooting live workflow instances in Zeebe. Operate is currently available for free and unrestricted ",Object(n.b)("em",{parentName:"li"},"non-production use"),"."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-0"}),"Elasticsearch 6.8.0"),": An open-source distributed datastore that can connect to Zeebe to store workflow data for auditing, visualization, analysis, etc. Camunda Operate uses Elasticsearch as its underlying datastore, which is why you need to download Elasticsearch to complete this tutorial. Operate and Zeebe are compatible with Elasticsearch 6.8.0.")),Object(n.b)("p",null,"In case you're already familiar with BPMN and how to create a BPMN model in Zeebe Modeler, you can find the finished model that we create during the tutorial here: ",Object(n.b)("a",{target:"_blank",href:o(710).default},"Zeebe Getting Started Tutorial Workflow Model"),"."),Object(n.b)("p",null,"If you're using the finished model we provide rather than building your own, you can also move ahead to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.26/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-workflow"}),"section 3.3: Deploy a Workflow"),"."),Object(n.b)("p",null,"And if you have questions or feedback about the tutorial, we encourage you to visit the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://forum.zeebe.io"}),"Zeebe user forum")," and ask a question."),Object(n.b)("p",null,'There\'s a "Getting Started" category for topics that you can use when you ask your question or give feedback.'))}c.isMDXComponent=!0},661:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(o),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||n;return o?a.a.createElement(m,l(l({ref:t},s),{},{components:o})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},710:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/files/order-process-aef371ddfb2ff65f51190fa213f5a271.bpmn"}}]);