(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{387:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(450)),c={id:"data-flow",title:"Data Flow"},i={unversionedId:"product-manuals/zeebe/yaml-workflows/data-flow",id:"version-0.25/product-manuals/zeebe/yaml-workflows/data-flow",isDocsHomePage:!1,title:"Data Flow",description:"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/data-flow.md",slug:"/product-manuals/zeebe/yaml-workflows/data-flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/data-flow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/data-flow.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Control Flow",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/control-flow"},next:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/reference/index"}},l=[{value:"Additional Resources",id:"additional-resources",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance."),Object(o.b)("p",null,"By default, all job variables are merged into the workflow instance. This behavior can be customized by defining an output mapping at the task. Input mappings can be used to transform the variables into a format that is accepted by the job worker."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n      inputs:\n          - source: totalPrice\n            target: price\n      outputs:\n          - source: success\n            target: paymentSuccess\n\n    - id: fetch-items\n      type: inventory-service\n\n    - id: ship-parcel\n      type: shipment-service\n")),Object(o.b)("p",null,"Every mapping element has a ",Object(o.b)("inlineCode",{parentName:"p"},"source")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"target")," element which must be a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/reference/variables#access-variables"}),"variable expression"),"."),Object(o.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/data-flow"}),"Data Flow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"}),"Variable Mappings"))))}u.isMDXComponent=!0},450:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);