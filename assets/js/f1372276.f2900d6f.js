(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[59421],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4441:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={id:"job-worker-open",title:"Open a job worker"},l={unversionedId:"product-manuals/clients/java-client-examples/job-worker-open",id:"version-0.26/product-manuals/clients/java-client-examples/job-worker-open",isDocsHomePage:!1,title:"Open a job worker",description:"Related Resources",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/job-worker-open.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/job-worker-open",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/job-worker-open",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/job-worker-open.md",version:"0.26",frontMatter:{id:"job-worker-open",title:"Open a job worker"},sidebar:"version-0.26/Product Manuals",previous:{title:"Create a workflow instance with results",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result"},next:{title:"Handle variables as POJO",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/data-pojo"}},c=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"JobWorkerCreator.java",id:"jobworkercreatorjava",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"related-resources"},"Related Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/concepts/job-workers"},"Job worker basics"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"},"deploy a workflow example")),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create"},"create a workflow instance example")," a couple of times")),(0,a.kt)("h2",{id:"jobworkercreatorjava"},"JobWorkerCreator.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/job/JobWorkerCreator.java"},"Source on github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        ...\n        final String jobType = "foo";\n\n        try (final ZeebeClient client = clientBuilder.build()) {\n\n            System.out.println("Opening job worker.");\n\n            try (final JobWorker workerRegistration =\n                client\n                    .newWorker()\n                    .jobType(jobType)\n                    .handler(new ExampleJobHandler())\n                    .timeout(Duration.ofSeconds(10))\n                    .open()) {\n                System.out.println("Job worker opened and receiving jobs.");\n\n                // run until System.in receives exit command\n                waitUntilSystemInput("exit");\n            }\n        }\n    }\n\n    private static class ExampleJobHandler implements JobHandler {\n        @Override\n        public void handle(final JobClient client, final ActivatedJob job) {\n            // here: business logic that is executed with every job\n            System.out.println(job);\n            client.newCompleteCommand(job.getKey()).send().join();\n        }\n    }\n')))}u.isMDXComponent=!0}}]);