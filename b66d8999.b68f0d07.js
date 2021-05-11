(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{505:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(661)),c={id:"index",title:"Go client",sidebar_label:"Quick reference"},a={unversionedId:"product-manuals/clients/go-client/index",id:"version-0.26/product-manuals/clients/go-client/index",isDocsHomePage:!1,title:"Go client",description:"Dependencies",source:"@site/versioned_docs/version-0.26/product-manuals/clients/go-client/index.md",slug:"/product-manuals/clients/go-client/index",permalink:"/docs/0.26/product-manuals/clients/go-client/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/go-client/index.md",version:"0.26",sidebar_label:"Quick reference",sidebar:"version-0.26/Product Manuals",previous:{title:"Request cluster topology",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/cluster-topology-request"},next:{title:"Go client - Getting started guide",permalink:"/docs/0.26/product-manuals/clients/go-client/get-started"}},l=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Bootstrapping",id:"bootstrapping",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"To use the Zeebe Go client library, add the following dependency to your ",Object(i.b)("inlineCode",{parentName:"p"},"go.mod"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"module github.com/zb-user/zb-example\n\ngo 1.13\n\nrequire github.com/zeebe-io/zeebe/clients/go v0.26.0\n")),Object(i.b)("h2",{id:"bootstrapping"},"Bootstrapping"),Object(i.b)("p",null,"In Go code, instantiate the client as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\nfunc main() {\n    credsProvider, err := zbc.NewOAuthCredentialsProvider(&zbc.OAuthProviderConfig{\n        ClientID:     "clientId",\n        ClientSecret: "clientSecret",\n        Audience:     "zeebeAddress",\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress:      "zeebeAddress",\n        CredentialsProvider: credsProvider,\n    })\n    if err != nil {\n        panic(err)\n    }\n\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),Object(i.b)("p",null,"Let's go over this code snippet line by line:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First we create the credentials provider for the OAuth protocol. This is needed to authenticate your client."),Object(i.b)("li",{parentName:"ul"},"Next we create the client passing in the address of the cluster we want to connect to, as well as, the credentials provider from the step above."),Object(i.b)("li",{parentName:"ul"},"Finally, we send a test request to verify that the connection was established.")),Object(i.b)("p",null,"The values for these settings can be taken from the connection info on the ",Object(i.b)("strong",{parentName:"p"},"Client Credentials")," page. Note that ",Object(i.b)("inlineCode",{parentName:"p"},"clientSecret")," is only visible when you create the client credentials."),Object(i.b)("p",null,"Another, more compact, option is to pass in the connection settings via environment variables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export ZEEBE_ADDRESS='[Zeebe API]'\nexport ZEEBE_CLIENT_ID='[Client ID]'\nexport ZEEBE_CLIENT_SECRET='[Client Secret]'\nexport ZEEBE_AUTHORIZATION_SERVER_URL='[OAuth API]'\n")),Object(i.b)("p",null,"When you create client credentials in Camunda Cloud you have the option to download a file with the lines above filled out for you."),Object(i.b)("p",null,"Given these environment variables, you can instantiate the client as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n    "os"\n)\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress: os.Getenv("ZEEBE_ADDRESS"),\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')))}p.isMDXComponent=!0},661:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return t?o.a.createElement(m,a(a({ref:n},s),{},{components:t})):o.a.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);