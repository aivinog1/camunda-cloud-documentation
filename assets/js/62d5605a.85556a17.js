(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[69794],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95657:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l={id:"variables",title:"Variables"},o={unversionedId:"product-manuals/concepts/variables",id:"version-0.26/product-manuals/concepts/variables",isDocsHomePage:!1,title:"Variables",description:"Variables are part of a workflow instance and represent the data of the instance. A variable has a name and a JSON value. The visibility of a variable is defined by its variable scope.",source:"@site/versioned_docs/version-0.26/product-manuals/concepts/variables.md",sourceDirName:"product-manuals/concepts",slug:"/product-manuals/concepts/variables",permalink:"/docs/0.26/product-manuals/concepts/variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/concepts/variables.md",version:"0.26",frontMatter:{id:"variables",title:"Variables"},sidebar:"version-0.26/Product Manuals",previous:{title:"Incidents",permalink:"/docs/0.26/product-manuals/concepts/incidents"},next:{title:"Expressions",permalink:"/docs/0.26/product-manuals/concepts/expressions"}},p=[{value:"Variable names",id:"variable-names",children:[]},{value:"Variable values",id:"variable-values",children:[]},{value:"Variable scopes",id:"variable-scopes",children:[{value:"Variable propagation",id:"variable-propagation",children:[]},{value:"Local variables",id:"local-variables",children:[]}]},{value:"Input/output variable mappings",id:"inputoutput-variable-mappings",children:[{value:"Input mappings",id:"input-mappings",children:[]},{value:"Output mappings",id:"output-mappings",children:[]}]}],s={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Variables are part of a workflow instance and represent the data of the instance. A variable has a name and a JSON value. The visibility of a variable is defined by its variable scope."),(0,i.kt)("h2",{id:"variable-names"},"Variable names"),(0,i.kt)("p",null,"The name of a variable can be any alphanumeric string including the ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," symbol. For a combination of words, it is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case")," format. The ",(0,i.kt)("inlineCode",{parentName:"p"},"kebab-case")," format is not allowed because it contains the operator ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,i.kt)("p",null,"When accessing a variable in an expression, keep in mind that the variable name is case-sensitive."),(0,i.kt)("p",null,"Restrictions of a variable name:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it may not start with a number (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1stChoice")," is not allowed; you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"firstChoice"),"instead)"),(0,i.kt)("li",{parentName:"ul"},"it may not contain whitespaces (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"order number")," is not allowed; you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"orderNumber")," instead)"),(0,i.kt)("li",{parentName:"ul"},"it may not contain an operator (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"="),", ",(0,i.kt)("inlineCode",{parentName:"li"},">"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"."),")"),(0,i.kt)("li",{parentName:"ul"},"it may not be a literal (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),") or a keyword (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"then"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"else"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"between"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"instance"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"of"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"not"),")")),(0,i.kt)("h2",{id:"variable-values"},"Variable values"),(0,i.kt)("p",null,"The value of a variable is stored as a JSON value. It can have one of the following types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"John Doe"'),")"),(0,i.kt)("li",{parentName:"ul"},"Number (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"123"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"0.23"),")"),(0,i.kt)("li",{parentName:"ul"},"Boolean (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,i.kt)("li",{parentName:"ul"},"Array (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'["item1" , "item2", "item3"]'),")"),(0,i.kt)("li",{parentName:"ul"},"Object (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'{ "orderNumber": "A12BH98", "date": "2020-10-15", "amount": 185.34}'),")"),(0,i.kt)("li",{parentName:"ul"},"Null (",(0,i.kt)("inlineCode",{parentName:"li"},"null"),")")),(0,i.kt)("h2",{id:"variable-scopes"},"Variable scopes"),(0,i.kt)("p",null,"Variable scopes define the ",(0,i.kt)("em",{parentName:"p"},"visibility")," of variables. The root scope is the workflow instance itself. Variables in this scope are visible everywhere in the workflow."),(0,i.kt)("p",null,"When the workflow instance enters a subprocess or an activity then a new scope is created. Activities in this scope can see all variables of this and of higher scopes (i.e. parent scopes). But activities outside of this scope can not see the variables which are defined in this scope."),(0,i.kt)("p",null,"If a variable has the same name as a variable from a higher scope then it covers this variable. Activities in this scope see only the value of this variable and not the one from the higher scope."),(0,i.kt)("p",null,"The scope of a variable is defined when the variable is created. By default, variables are created in the root scope."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variable-scopes",src:a(51643).Z})),(0,i.kt)("p",null,"This workflow instance has the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," are defined on the root scope and can be seen by ",(0,i.kt)("em",{parentName:"li"},"Task A"),", ",(0,i.kt)("em",{parentName:"li"},"Task B"),", and ",(0,i.kt)("em",{parentName:"li"},"Task C"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c")," is defined in the sub process scope and can be seen by ",(0,i.kt)("em",{parentName:"li"},"Task A")," and ",(0,i.kt)("em",{parentName:"li"},"Task B"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b")," is defined again on the activity scope of ",(0,i.kt)("em",{parentName:"li"},"Task A")," and can be seen only by ",(0,i.kt)("em",{parentName:"li"},"Task A"),". It covers the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," from the root scope.")),(0,i.kt)("h3",{id:"variable-propagation"},"Variable propagation"),(0,i.kt)("p",null,"When variables are merged into a workflow instance (e.g. on job completion, on message correlation) then each variable is propagated from the scope of the activity to its higher scopes."),(0,i.kt)("p",null,"The propagation ends when a scope contains a variable with the same name. In this case, the variable value is updated."),(0,i.kt)("p",null,"If no scope contains this variable then it is created as a new variable in the root scope."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variable-propagation",src:a(32768).Z})),(0,i.kt)("p",null,"The job of ",(0,i.kt)("em",{parentName:"p"},"Task B")," is completed with the variables ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),". The variables ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," are already defined in higher scopes and are updated with the new values. Variable ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," doesn't exist before and is created in the root scope."),(0,i.kt)("h3",{id:"local-variables"},"Local variables"),(0,i.kt)("p",null,"In some cases, variables should be set in a given scope, even if they don't exist in this scope before."),(0,i.kt)("p",null,"In order to deactivate the variable propagation, the variables are set as ",(0,i.kt)("em",{parentName:"p"},"local variables"),". That means that the variables are created or updated in the given scope, whether they exist in this scope before or not."),(0,i.kt)("h2",{id:"inputoutput-variable-mappings"},"Input/output variable mappings"),(0,i.kt)("p",null,"Input/output variable mappings can be used to create new variables or customize how variables are merged into the workflow instance."),(0,i.kt)("p",null,"Variable mappings are defined in the workflow as extension elements under ",(0,i.kt)("inlineCode",{parentName:"p"},"ioMapping"),". Every variable mapping has a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," expression."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," expression defines the ",(0,i.kt)("strong",{parentName:"p"},"value")," of the mapping. Usually, it ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/concepts/expressions#access-variables"},"accesses a variable")," of the workflow instance that holds the value. If the variable or the nested property doesn't exist then an ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/concepts/incidents"},"incident")," is created."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," expression defines ",(0,i.kt)("strong",{parentName:"p"},"where")," the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," expression is stored. It can reference a variable by its name or a nested property of a variable. If the variable or the nested property doesn't exist then it is created."),(0,i.kt)("p",null,"Variable mappings are evaluated in the defined order. So, a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," expression can access the target variable of a previous mapping."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variable-mappings",src:a(76011).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input mappings")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Target"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customer.name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sender"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"customer.iban")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iban"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalPrice")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"price"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"orderId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"reference"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output mapping")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:null},"Target"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"paymentStatus"))))),(0,i.kt)("h3",{id:"input-mappings"},"Input mappings"),(0,i.kt)("p",null,"Input mappings can be used to create new variables. They can be defined on service tasks and subprocesses."),(0,i.kt)("p",null,"When an input mapping is applied then it creates a new ",(0,i.kt)("strong",{parentName:"p"},"local variable")," in the scope where the mapping is defined."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Workflow instance variables"),(0,i.kt)("th",{parentName:"tr",align:null},"Input mappings"),(0,i.kt)("th",{parentName:"tr",align:null},"New variables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'orderId: "order-123"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=orderId"),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"reference")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'reference: "order-123"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'customer:{"name": "John"}')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=customer.name"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"sender")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sender: "John"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'customer: "John"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'iban: "DE456"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=customer"),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"sender.name"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=iban"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"sender.iban")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'sender: {"name": "John", "iban": "DE456"}'))))),(0,i.kt)("h3",{id:"output-mappings"},"Output mappings"),(0,i.kt)("p",null,"Output mappings can be used to customize how job/message variables are merged into the workflow instance. They can be defined on service tasks, receive tasks, message catch events and subprocesses."),(0,i.kt)("p",null,"If ",(0,i.kt)("strong",{parentName:"p"},"one or more")," output mappings are defined then the job/message variables are set as ",(0,i.kt)("em",{parentName:"p"},"local variables")," in the scope where the mapping is defined. Then, the output mappings are applied to the variables and create new variables in this scope. The new variables are merged into the parent scope. If there is no mapping for a job/message variable then the variable is not merged."),(0,i.kt)("p",null,"If ",(0,i.kt)("strong",{parentName:"p"},"no")," output mappings are defined then all job/message variables are merged into the workflow instance."),(0,i.kt)("p",null,"In case of a subprocess, the behavior is different. There are no job/message variables to be merged. But output mappings can be used to propagate ",(0,i.kt)("em",{parentName:"p"},"local variables")," of the subprocess to higher scopes. By default, all ",(0,i.kt)("em",{parentName:"p"},"local variables")," are removed when the scope is left."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Job/message variables"),(0,i.kt)("th",{parentName:"tr",align:null},"Output mappings"),(0,i.kt)("th",{parentName:"tr",align:null},"Workflow instance variables"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'status: "Ok"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=status"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"paymentStatus")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'paymentStatus: "OK"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'result: {"status": "Ok", "transactionId": "t-789"}')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=result.status"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"paymentStatus"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=result.transactionId"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"transactionId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'paymentStatus: "Ok"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'transactionId: "t-789"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'status: "Ok"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'transactionId: "t-789"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"source:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"=transactionId"),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"target:")," ",(0,i.kt)("inlineCode",{parentName:"td"},"order.transactionId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'order: {"transactionId": "t-789"}'))))))}d.isMDXComponent=!0},76011:function(e,t,a){"use strict";t.Z=a.p+"assets/images/variable-mappings-606e99f6e234afdaaff4c0f110aa51f9.png"},32768:function(e,t,a){"use strict";t.Z=a.p+"assets/images/variable-propagation-11dfc7b47f6d74b556ac388054a0c260.png"},51643:function(e,t,a){"use strict";t.Z=a.p+"assets/images/variable-scopes-1ea94882bb53cff41ddb558e733594da.png"}}]);