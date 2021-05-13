(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[4194],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76684:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={id:"data-flow",title:"Data Flow"},i={unversionedId:"product-manuals/zeebe/yaml-workflows/data-flow",id:"version-0.25/product-manuals/zeebe/yaml-workflows/data-flow",isDocsHomePage:!1,title:"Data Flow",description:"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/data-flow.md",sourceDirName:"product-manuals/zeebe/yaml-workflows",slug:"/product-manuals/zeebe/yaml-workflows/data-flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/data-flow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/data-flow.md",version:"0.25",frontMatter:{id:"data-flow",title:"Data Flow"},sidebar:"version-0.25/Product Manuals",previous:{title:"Control Flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/control-flow"},next:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/reference/index"}},c=[{value:"Additional Resources",id:"additional-resources",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance."),(0,o.kt)("p",null,"By default, all job variables are merged into the workflow instance. This behavior can be customized by defining an output mapping at the task. Input mappings can be used to transform the variables into a format that is accepted by the job worker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n      inputs:\n          - source: totalPrice\n            target: price\n      outputs:\n          - source: success\n            target: paymentSuccess\n\n    - id: fetch-items\n      type: inventory-service\n\n    - id: ship-parcel\n      type: shipment-service\n")),(0,o.kt)("p",null,"Every mapping element has a ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," element which must be a ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/reference/variables#access-variables"},"variable expression"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/data-flow"},"Data Flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"},"Variable Mappings"))))}u.isMDXComponent=!0}}]);