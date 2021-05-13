(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[33171],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(t),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47718:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var r=t(22122),s=t(19756),i=(t(67294),t(3905)),a={id:"what-is-feel",title:"What is FEEL?"},o={unversionedId:"reference/feel/what-is-feel",id:"version-1.0/reference/feel/what-is-feel",isDocsHomePage:!1,title:"What is FEEL?",description:"FEEL (Friendly Enough Expression Language) is a part of the DMN specification of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers.",source:"@site/versioned_docs/version-1.0/reference/feel/what-is-feel.md",sourceDirName:"reference/feel",slug:"/reference/feel/what-is-feel",permalink:"/docs/1.0/reference/feel/what-is-feel",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/feel/what-is-feel.md",version:"1.0",frontMatter:{id:"what-is-feel",title:"What is FEEL?"},sidebar:"version-1.0/Reference",previous:{title:"Multi-Instance",permalink:"/docs/1.0/reference/bpmn-processes/multi-instance/multi-instance"},next:{title:"Data Types",permalink:"/docs/1.0/reference/feel/language-guide/feel-data-types"}},l=[{value:"Unary Tests vs. Expression",id:"unary-tests-vs-expression",children:[{value:"Unary Tests",id:"unary-tests",children:[]},{value:"Expression",id:"expression",children:[]}]}],c={toc:l};function p(e){var n=e.components,t=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FEEL (Friendly Enough Expression Language) is a part of the ",(0,i.kt)("a",{parentName:"p",href:"http://www.omg.org/spec/DMN/"},"DMN specification")," of the OMG. It is designed to write expressions for decision tables and literal expressions in a simple way what can easily understand by business professionals and developers."),(0,i.kt)("h2",{id:"unary-tests-vs-expression"},"Unary Tests vs. Expression"),(0,i.kt)("p",null,"FEEL has two entry points: unary-tests and expressions. "),(0,i.kt)("h3",{id:"unary-tests"},"Unary Tests"),(0,i.kt)("p",null,"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with a different grammar. The expression gets the value of the input expression implicitly as the first argument. The result of the expression must be either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'< 7                                                 \n// input less than 7\n\nnot(2,4)                                            \n// input is not 2 or 4\n\n[date("2015-09-17")..date("2015-09-19")]            \n// input is between \'2015-09-17\' and \'2015-09-19\'\n\n<= duration("P1D")                                  \n// input is less or equal one day    \n')),(0,i.kt)("h3",{id:"expression"},"Expression"),(0,i.kt)("p",null,"Expressions can be used everywhere, e.g. in a decision table as input expression or output entry. An expression takes no implicit arguments like unary-tests."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'applicant.monthly.income * 12                                           \n\nif applicant.maritalStatus in ("M","S") then "valid" else "not valid"    \n\nsum( [applicant.monthly.repayments, applicant.monthly.expenses] )        \n\nsum( credit_history[record_date > date("2011-01-01")].weight )           \n\nsome ch in credit_history satisfies ch.event = "bankruptcy"      \n')))}p.isMDXComponent=!0}}]);