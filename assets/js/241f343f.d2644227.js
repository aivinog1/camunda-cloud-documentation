(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[75043],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88643:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=t(22122),o=t(19756),i=(t(67294),t(3905)),a={id:"environment-variables",title:"Environment variables"},l={unversionedId:"product-manuals/zeebe/deployment-guide/configuration/environment-variables",id:"version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables",isDocsHomePage:!1,title:"Environment variables",description:"Environment variables for configuration",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",sourceDirName:"product-manuals/zeebe/deployment-guide/configuration",slug:"/product-manuals/zeebe/deployment-guide/configuration/environment-variables",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",version:"0.26",frontMatter:{id:"environment-variables",title:"Environment variables"},sidebar:"version-0.26/Product Manuals",previous:{title:"Gateway health probes",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes"},next:{title:"Security",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/security/security"}},u=[{value:"Environment variables for configuration",id:"environment-variables-for-configuration",children:[]},{value:"Environment variables for operators",id:"environment-variables-for-operators",children:[]},{value:"Environment variables for developers",id:"environment-variables-for-developers",children:[]}],s={toc:u};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"environment-variables-for-configuration"},"Environment variables for configuration"),(0,i.kt)("p",null,"The configuration can be provided as a file or through environment variables. Mixing both sources is also possible. In that case environment variables have precedence over the configuration settings in the configuration file."),(0,i.kt)("p",null,"All available environment variables are documented in the ",(0,i.kt)("a",{parentName:"p",href:"configuration/#configuration-file-templates"},"configuration file templates"),"."),(0,i.kt)("h2",{id:"environment-variables-for-operators"},"Environment variables for operators"),(0,i.kt)("p",null,"The following environment variables are intended for operators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_LOG_LEVEL"),": Sets the log level of the Zeebe Logger (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_LOG_APPENDER"),": Sets the console log appender (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"Console"),"). We recommend using ",(0,i.kt)("inlineCode",{parentName:"li"},"Stackdriver")," if Zeebe runs on Google Cloud Platform to output JSON formatted log messages")),(0,i.kt)("h2",{id:"environment-variables-for-developers"},"Environment variables for developers"),(0,i.kt)("p",null,"The following environment variables are intended for developers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SPRING_PROFILES_ACTIVE=dev"),": If this is set, the broker will start in a temporary folder and all data will be cleaned up upon exit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_DEBUG=true/false"),": Activates a ",(0,i.kt)("inlineCode",{parentName:"li"},"DebugLogExporter")," with default settings. The value of the environment variable toggles pretty printing")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: It is not recommended to use these settings in production.")))}c.isMDXComponent=!0}}]);