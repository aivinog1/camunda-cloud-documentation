(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[95943],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68838:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={id:"data-pojo",title:"Handle variables as POJO"},i={unversionedId:"product-manuals/clients/java-client-examples/data-pojo",id:"version-0.26/product-manuals/clients/java-client-examples/data-pojo",isDocsHomePage:!1,title:"Handle variables as POJO",description:"Related Resources",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/data-pojo.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/data-pojo",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/data-pojo",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/data-pojo.md",version:"0.26",frontMatter:{id:"data-pojo",title:"Handle variables as POJO"},sidebar:"version-0.26/Product Manuals",previous:{title:"Open a job worker",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/job-worker-open"},next:{title:"Request cluster topology",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/cluster-topology-request"}},c=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"HandleVariablesAsPojo.java",id:"handlevariablesaspojojava",children:[]}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"related-resources"},"Related Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/reference/bpmn-workflows/data-flow"},"Data flow"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"},"deploy a workflow example"))),(0,o.kt)("h2",{id:"handlevariablesaspojojava"},"HandleVariablesAsPojo.java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/data/HandleVariablesAsPojo.java"},"Source on github")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    ...\n    try (final ZeebeClient client = clientBuilder.build()) {\n      final Order order = new Order();\n      order.setOrderId(31243);\n\n      client\n          .newCreateInstanceCommand()\n          .bpmnProcessId("demoProcess")\n          .latestVersion()\n          .variables(order)\n          .send()\n          .join();\n\n      client.newWorker().jobType("foo").handler(new DemoJobHandler()).open();\n\n      // run until System.in receives exit command\n      waitUntilSystemInput("exit");\n    }\n  }\n\n  public static class Order {\n    private long orderId;\n    private double totalPrice;\n\n    public long getOrderId() {\n      return orderId;\n    }\n\n    public void setOrderId(final long orderId) {\n      this.orderId = orderId;\n    }\n\n    public double getTotalPrice() {\n      return totalPrice;\n    }\n\n    public void setTotalPrice(final double totalPrice) {\n      this.totalPrice = totalPrice;\n    }\n  }\n\n  private static class DemoJobHandler implements JobHandler {\n    @Override\n    public void handle(final JobClient client, final ActivatedJob job) {\n      // read the variables of the job\n      final Order order = job.getVariablesAsType(Order.class);\n      System.out.println("new job with orderId: " + order.getOrderId());\n\n      // update the variables and complete the job\n      order.setTotalPrice(46.50);\n\n      client.newCompleteCommand(job.getKey()).variables(order).send();\n    }\n  }\n')))}d.isMDXComponent=!0}}]);