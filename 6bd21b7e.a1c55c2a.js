(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(450)),i={id:"data-retention",title:"Data retention"},c={unversionedId:"product-manuals/operate/deployment/data-retention",id:"version-0.25/product-manuals/operate/deployment/data-retention",isDocsHomePage:!1,title:"Data retention",description:"How the data is stored and archived",source:"@site/versioned_docs/version-0.25/product-manuals/operate/deployment/data-retention.md",slug:"/product-manuals/operate/deployment/data-retention",permalink:"/docs/0.25/product-manuals/operate/deployment/data-retention",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/operate/deployment/data-retention.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Configuration",permalink:"/docs/0.25/product-manuals/operate/deployment/configuration"},next:{title:"Schema & Migration",permalink:"/docs/0.25/product-manuals/operate/deployment/schema-and-migration"}},l=[{value:"How the data is stored and archived",id:"how-the-data-is-stored-and-archived",children:[]},{value:"Data cleanup",id:"data-cleanup",children:[]}],d={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-the-data-is-stored-and-archived"},"How the data is stored and archived"),Object(o.b)("p",null,"Operate imports data from Zeebe and stores it in Elasticsearch indices with defined prefix (default: ",Object(o.b)("inlineCode",{parentName:"p"},"operate"),"). Specifically:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"deployed workflows, including the diagrams"),Object(o.b)("li",{parentName:"ul"},"the state of workflow instances, including variables, flow nodes, that were activated within instance execution, incidents etc.")),Object(o.b)("p",null,"It additionally stores some Operate specific data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"operations performed by the user"),Object(o.b)("li",{parentName:"ul"},"list of users"),Object(o.b)("li",{parentName:"ul"},"technical data, like the state of Zeebe import etc.")),Object(o.b)("p",null,"The data that represents workflow instance state becomes immutable after workflow instance is finished. At this moment the data may be archived, meaning that\nit will be moved to a dated index, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"operate_variables_2020-01-01"),", where date represents the date on which given workflow instance was finished.\nThe same is valid for user operations: after they are finished the related data is moved to dated indices."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:"),' All Operate data present in Elasticsearch (from both "main" and dated indices) will be visible from the UI. ')),Object(o.b)("h2",{id:"data-cleanup"},"Data cleanup"),Object(o.b)("p",null,'In case of intensive Zeebe usage the amount of data can grow significantly with the time, therefore you should think about the data cleanup strategy. Dated indices\nmay be safely removed from Elasticsearch. "Safely" means here, that only finished workflow instances will be deleted together with all related data, and the rest or the data\nwill stay consistent. You can use Elasticsearch Curator or other tools/scripts to delete old data.'),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Attention:")," Only indices that contain dates in their suffix may be deleted.")))}s.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(b,c(c({ref:t},d),{},{components:n})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);