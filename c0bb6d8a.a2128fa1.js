(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{521:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(661)),l={id:"api-client",title:"API Client"},i={unversionedId:"product-manuals/tasklist/deployment/api-client",id:"version-0.26/product-manuals/tasklist/deployment/api-client",isDocsHomePage:!1,title:"API Client",description:"Endpoint",source:"@site/versioned_docs/version-0.26/product-manuals/tasklist/deployment/api-client.md",slug:"/product-manuals/tasklist/deployment/api-client",permalink:"/docs/0.26/product-manuals/tasklist/deployment/api-client",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/tasklist/deployment/api-client.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Authentication",permalink:"/docs/0.26/product-manuals/tasklist/deployment/authentication"}},o=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Authentication",id:"authentication",children:[{value:"How to obtain the access token",id:"how-to-obtain-the-access-token",children:[]}]},{value:"Obtain GraphQL Schema",id:"obtain-graphql-schema",children:[]},{value:"Examples requests and responses",id:"examples-requests-and-responses",children:[{value:"Get all tasks names",id:"get-all-tasks-names",children:[]},{value:"Get all tasks that are completed with id, name and state",id:"get-all-tasks-that-are-completed-with-id-name-and-state",children:[]}]}],s={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"endpoint"},"Endpoint"),Object(c.b)("p",null,"Tasklist provides an GraphQL API at endpoint ",Object(c.b)("inlineCode",{parentName:"p"},"/graphql"),"."),Object(c.b)("h2",{id:"authentication"},"Authentication"),Object(c.b)("p",null,"To access the API endpoint you need an access token.\nYour client needs to send a header in each request: "),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Authorization: Bearer <Token>")),Object(c.b)("p",null,"For example send a request by using ",Object(c.b)("em",{parentName:"p"},"curl"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TOKEN>" -d \'{"query": "{tasks(query:{}){name}}"}\' http://localhost:8080/graphql\n')),Object(c.b)("h3",{id:"how-to-obtain-the-access-token"},"How to obtain the access token"),Object(c.b)("p",null,"You need to obtain a token for using the Tasklist API. When you create a Tasklist ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.26/guides/getting-started/setup-client-connection-credentials"}),"client"),"\nyou will get all the information you need to connect to Tasklist."),Object(c.b)("p",null,"See also ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.26/product-manuals/clients/build-your-own-client"}),"Build your own client")),Object(c.b)("p",null,"Following settings are needed:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"client id"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of your registered client"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"client secret"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Password for your registered client"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"audience"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Permission name, if not given use default value"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"tasklist.camunda.io"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"authorization server url"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Token issuer server"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,"You send a token issue POST request to the authorization server with the content:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "<client-id>", \n  "client_secret":"<client-secret>",\n  "audience":"<audience>",\n  "grant_type":"client_credentials"\n}\n')),Object(c.b)("p",null,"An example with ",Object(c.b)("em",{parentName:"p"},"curl"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST --header \'content-type: application/json\' --data \'{"client_id": "<client-id>", "client_secret":"<client-secret>","audience":"<audience>","grant_type":"client_credentials"}\' https://<authorization server url>\n')),Object(c.b)("p",null,"If the authorization is successful, the authorization server sends back the access token, when it expires, scope and type:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "access_token": "ey...",\n  "scope": "...",\n  "expires_in": 86400,\n  "token_type": "Bearer"\n}\n')),Object(c.b)("h2",{id:"obtain-graphql-schema"},"Obtain GraphQL Schema"),Object(c.b)("p",null,"To obtain the GraphQL schema you need to send a request to the endpoint with a GraphQL introspection query as described in ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/introspection/"}),"https://graphql.org/learn/introspection/")),Object(c.b)("p",null,"or you use the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../../../reference/tasklist-api/schema"}),"generated API documentation")),Object(c.b)("p",null,"There are also a lot of tools to explore GraphQL API's like this: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://altair.sirmuel.design"}),"https://altair.sirmuel.design")),Object(c.b)("p",null,"For example you want to know all about provided types:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  __schema {\n    queryType {\n      fields {\n        name\n        type {\n          kind\n          ofType {\n            kind\n            name\n          }\n        }\n      }\n    }\n  }\n}\n")),Object(c.b)("h2",{id:"examples-requests-and-responses"},"Examples requests and responses"),Object(c.b)("h3",{id:"get-all-tasks-names"},"Get all tasks names"),Object(c.b)("p",null,"Request:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'{"query":"{\n    tasks(query: {}) {\n        name\n    }\n  }"\n}\n')),Object(c.b)("p",null,"Response:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "tasks": [\n      {\n        "name": "Check payment"\n      },\n      {\n        "name": "Register the passenger"\n      }\n    ]\n  }\n}\n')),Object(c.b)("h3",{id:"get-all-tasks-that-are-completed-with-id-name-and-state"},"Get all tasks that are completed with id, name and state"),Object(c.b)("p",null,"Request:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'{\n    "query" : "{\n        tasks(query: { state: COMPLETED }) {\n            id\n            name\n            taskState\n        }\n    }"\n}\n')),Object(c.b)("p",null,"Response:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "tasks": [\n      {\n        "id": "2251799813685728",\n        "name": "Check payment",\n        "taskState": "COMPLETED"\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);