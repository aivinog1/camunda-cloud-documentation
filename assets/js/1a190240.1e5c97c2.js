(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[53538],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(b,u(u({ref:t},c),{},{components:r})):n.createElement(b,u({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99647:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),u={id:"prerequisites",title:"Prerequisites"},i={unversionedId:"product-manuals/zeebe/kubernetes/prerequisites",id:"version-0.25/product-manuals/zeebe/kubernetes/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"In order to use Kubernetes you need to have the following tools installed in your local environment:",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/prerequisites.md",sourceDirName:"product-manuals/zeebe/kubernetes",slug:"/product-manuals/zeebe/kubernetes/prerequisites",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/prerequisites",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/prerequisites.md",version:"0.25",frontMatter:{id:"prerequisites",title:"Prerequisites"},sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/index"},next:{title:"Zeebe Helm Charts",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/installing-helm"}},l=[],s={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to use Kubernetes you need to have the following tools installed in your local environment: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),": Kubernetes Control CLI tool: installed and connected to your cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helm"),": Kubernetes Helm CLI tool")),(0,a.kt)("p",null,"You also need a Kubernetes Cluster, here you have several options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local for Development you can use: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"Kubernetes KIND"),", Minikube, MicroK8s"),(0,a.kt)("li",{parentName:"ul"},"Remote: Google GKE, Azure AKS, Amazon EKS, etc.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice that you can use free trials from different cloud providers to create Kubernetes Cluster to test Zeebe in the cloud. ")),(0,a.kt)("p",null,"Optional tools related to ",(0,a.kt)("a",{parentName:"p",href:"http://zeebe.io"},"Zeebe")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zeebe Modeler: to model/modify business processes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-modeler/releases"},"Zeebe Modeler Releases")),(0,a.kt)("li",{parentName:"ul"},"Zeebe CTL(",(0,a.kt)("inlineCode",{parentName:"li"},"zbctl"),"): command line tool to interact with a Zeebe Cluster (local/remote). You can get the ",(0,a.kt)("inlineCode",{parentName:"li"},"zbctl")," tool from the official ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/releases"},"Zeebe Release Page"))))}c.isMDXComponent=!0}}]);