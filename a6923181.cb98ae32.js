(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1145:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-login-9d326c7ad4dca3267241ad37dfdea8b1.png"},1146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-dashboard-94b9dbfff6c1e8df045a55cd98419cd4.png"},465:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(661)),c={id:"accessing-operate",title:"Accessing Operate from outside the cluster"},i={unversionedId:"product-manuals/zeebe/kubernetes/accessing-operate",id:"version-0.25/product-manuals/zeebe/kubernetes/accessing-operate",isDocsHomePage:!1,title:"Accessing Operate from outside the cluster",description:"The Zeebe Full Helm Charts install an Ingress Controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a LoadBalancer which will expose an External IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/accessing-operate.md",slug:"/product-manuals/zeebe/kubernetes/accessing-operate",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/accessing-operate",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/accessing-operate.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Zeebe Helm Charts",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/installing-helm"},next:{title:"Zeebe Operator (Experimental)",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/zeebe-operator"}},s=[],l={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Zeebe Full Helm Charts")," install an Ingress Controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a ",Object(o.b)("inlineCode",{parentName:"p"},"LoadBalancer")," which will expose an External IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you have your own Ingress Controller, you can use the child chart for installing a Zeebe Cluster, instead of using the Parent Chart. ")),Object(o.b)("p",null,"You can find the External IP by running: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"> kubectl get svc\n")),Object(o.b)("p",null,"You should see something like: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                                    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                  AGE\n<RELEASE NAME>-nginx-ingress-controller        LoadBalancer   10.109.108.4     <pending>     80:30497/TCP,443:32232/TCP               63m\n")),Object(o.b)("p",null,"Where the ",Object(o.b)("inlineCode",{parentName:"p"},"<pending>")," under the ",Object(o.b)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column should change to a public IP that you (and other users) should be able to access from outside the Cluster. You might need to check your Cloud Provider specific configuration if that doesn't work. "),Object(o.b)("p",null,"Then you should be able to access Operate pointing your browser at ",Object(o.b)("inlineCode",{parentName:"p"},"http://<EXTERNAL-IP>")),Object(o.b)("p",null,"If you are running in Kubernetes KIND, you will need to ",Object(o.b)("inlineCode",{parentName:"p"},"port-forward")," to the Ingress Controller main entry point due KIND doesn't support LoadBalancers. You can do that by running in a different terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"> kubectl port-forward svc/<RELEASE NAME>-nginx-ingress-controller 8080:80\n")),Object(o.b)("p",null,"Then you should be able to access Operate pointing your browser at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:8080/"}),"http://localhost:8080")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Operate Login",src:n(1145).default})),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"demo"),"/",Object(o.b)("inlineCode",{parentName:"p"},"demo")," for credentials. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"Operate Login",src:n(1146).default})),Object(o.b)("p",null,"If you deploy Process Definitions, they will appear in the dashboard and then you can drill down to see your active instances. You can deploy and create new instances using the Zeebe Clients or ",Object(o.b)("inlineCode",{parentName:"p"},"zbctl"),". "))}u.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);