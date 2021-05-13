(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[94614],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63974:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={id:"feel-built-in-functions-string",title:"String Functions"},u={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-string",id:"version-1.0/reference/feel/builtin-functions/feel-built-in-functions-string",isDocsHomePage:!1,title:"String Functions",description:"substring()",source:"@site/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-string.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-string",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-string",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-string.md",version:"1.0",frontMatter:{id:"feel-built-in-functions-string",title:"String Functions"},sidebar:"version-1.0/Reference",previous:{title:"Boolean Functions",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean"},next:{title:"Numeric Functions",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-numeric"}},s=[{value:"substring()",id:"substring",children:[]},{value:"string length()",id:"string-length",children:[]},{value:"upper case()",id:"upper-case",children:[]},{value:"lower case()",id:"lower-case",children:[]},{value:"substring before()",id:"substring-before",children:[]},{value:"substring after()",id:"substring-after",children:[]},{value:"contains()",id:"contains",children:[]},{value:"starts with()",id:"starts-with",children:[]},{value:"ends with()",id:"ends-with",children:[]},{value:"matches()",id:"matches",children:[]},{value:"replace()",id:"replace",children:[]},{value:"split()",id:"split",children:[]}],o={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"substring"},"substring()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start position"),": number"),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"length"),": number  "))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'substring("foobar",3) \n// "obar"\n\nsubstring("foobar",3,3) \n// "oba"\n')),(0,i.kt)("h2",{id:"string-length"},"string length()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'string length("foo") \n// 3\n')),(0,i.kt)("h2",{id:"upper-case"},"upper case()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'upper case("aBc4") \n// "ABC4"\n')),(0,i.kt)("h2",{id:"lower-case"},"lower case()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'lower case("aBc4") \n// "abc4"\n')),(0,i.kt)("h2",{id:"substring-before"},"substring before()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'substring before("foobar", "bar") \n// "foo"\n')),(0,i.kt)("h2",{id:"substring-after"},"substring after()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'substring after("foobar", "ob") \n// "ar"\n')),(0,i.kt)("h2",{id:"contains"},"contains()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'contains("foobar", "of") \n// false\n')),(0,i.kt)("h2",{id:"starts-with"},"starts with()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'starts with("foobar", "fo") \n// true\n')),(0,i.kt)("h2",{id:"ends-with"},"ends with()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'ends with("foobar", "r") \n// true\n')),(0,i.kt)("h2",{id:"matches"},"matches()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'matches("foobar", "^fo*bar") \n// true\n')),(0,i.kt)("h2",{id:"replace"},"replace()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"input"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replacement"),": string (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"$1")," returns the first match group) "),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"flags"),': string ("s", "m", "i", "x")'))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'replace("abcd", "(ab)|(a)", "[1=$1][2=$2]")\n// "[1=ab][2=]cd"\n\nreplace("0123456789", "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3")\n// "(012) 345-6789"\n')),(0,i.kt)("h2",{id:"split"},"split()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delimiter"),": string (regular expression)"))),(0,i.kt)("li",{parentName:"ul"},"result: list of strings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'split("John Doe", "\\s" ) \n// ["John", "Doe"]\n\nsplit("a;b;c;;", ";")\n// ["a", "b", "c", "", ""]\n')))}p.isMDXComponent=!0}}]);