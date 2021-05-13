(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[14694],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"schema-and-migration",title:"Schema and migration"},l={unversionedId:"product-manuals/operate/deployment/schema-and-migration",id:"product-manuals/operate/deployment/schema-and-migration",isDocsHomePage:!1,title:"Schema and migration",description:"Operate stores data in Elasticsearch. On first start Operate will create all required indices and templates.",source:"@site/docs/product-manuals/operate/deployment/schema-and-migration.md",sourceDirName:"product-manuals/operate/deployment",slug:"/product-manuals/operate/deployment/schema-and-migration",permalink:"/docs/product-manuals/operate/deployment/schema-and-migration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/deployment/schema-and-migration.md",version:"current",frontMatter:{id:"schema-and-migration",title:"Schema and migration"},sidebar:"Product Manuals",previous:{title:"Data retention",permalink:"/docs/product-manuals/operate/deployment/data-retention"},next:{title:"Importer and archiver",permalink:"/docs/product-manuals/operate/deployment/importer-and-archiver"}},s=[{value:"Schema",id:"schema",children:[]},{value:"Data migration",id:"data-migration",children:[{value:"Concept",id:"concept",children:[]},{value:"How to migrate",id:"how-to-migrate",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Operate stores data in Elasticsearch. On first start Operate will create all required indices and templates."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#schema"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-migration"},"Data migration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-migrate"},"How to migrate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example-for-migrate-in-kubernetes"},"Example for migrate in Kubernetes"))),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"Operate uses several Elasticsearch indices that are mostly created by using templates.\nEach index has its own version of schema. That means the version reflected in index name is ",(0,i.kt)("em",{parentName:"p"},"not")," the version of Operate."),(0,i.kt)("p",null,"Index names follow the defined pattern:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"operate-{datatype}-{schemaversion}_[{date}]\n\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," defines which data is stored in the index, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"variable")," etc.,\n",(0,i.kt)("inlineCode",{parentName:"p"},"schemaversion")," represents the index schema version,\n",(0,i.kt)("inlineCode",{parentName:"p"},"date")," represents finished date of archived data (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/product-manuals/operate/deployment/data-retention"},"Data retention"),")."),(0,i.kt)("p",null,"Knowing index name pattern, it is possible to customize index settings by creating Elasticsearch templates (",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/indices-templates.html"},"Example of an index template"),")\nE.g. to define desired number of shards and replicas, you can define following template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'PUT _template/template_operate\n{\n  "index_patterns": ["operate-*"],\n  "settings": {\n    "number_of_shards": 5,\n    "number_of_replicas": 2\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," In order for these settings to work, template must be created before Operate first run.")),(0,i.kt)("h2",{id:"data-migration"},"Data migration"),(0,i.kt)("p",null,"Version of Operate is reflected in Elasticsearch object names, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"operate-user-1.0.0_")," index contains user data for Operate 1.0.0. When upgrading from one\nversion of Operate to another, migration of data must be performed. Operate distribution provides an application to perform data migration from older versions."),(0,i.kt)("h3",{id:"concept"},"Concept"),(0,i.kt)("p",null,"The migration uses Elasticsearch ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/ingest-processors.html"},"processors")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/pipeline.html"},"pipelines")," to reindex the data."),(0,i.kt)("p",null,"Each version of Operate delivers set of migration steps needed to be applied for corresponding version of Operate.\nWhen upgrading from one version to another, necessary migration steps constitute the so-called migration plan.\nAll known migration steps (both applied and not) are persisted in dedicated Elasticsearch index: ",(0,i.kt)("inlineCode",{parentName:"p"},"operate-migration-steps-repository"),"."),(0,i.kt)("h3",{id:"how-to-migrate"},"How to migrate"),(0,i.kt)("h4",{id:"migrate-by-using-standalone-application"},"Migrate by using standalone application"),(0,i.kt)("p",null,"Make sure that Elasticsearch which contains the Operate data is running. The migration script will connect to specified connection in Operate\nconfiguration (",(0,i.kt)("inlineCode",{parentName:"p"},"<operate_home>/config/application.yml"),")."),(0,i.kt)("p",null,"Execute ",(0,i.kt)("inlineCode",{parentName:"p"},"<operate_home>/bin/migrate")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"<operate_home>/bin/migrate.bat")," for Windows)."),(0,i.kt)("p",null,"What is expected to happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"new Elasticsearch indices will be created, if they don't exist."),(0,i.kt)("li",{parentName:"ul"},"if older version for some or all indices exists, the migration plan will be built."),(0,i.kt)("li",{parentName:"ul"},"for each index that has older version, migration plan will be executed."),(0,i.kt)("li",{parentName:"ul"},"older indices will be deleted.")),(0,i.kt)("p",null,"All known migration steps with metadata will be stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"operate-migration-steps-repository")," index."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The old indices will be deleted ONLY after successful migration. That might require\nmore disk space during migration process.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important!")," You should take care of data backup before performing migration.")),(0,i.kt)("h4",{id:"migrate-by-using-built-in-automatic-upgrade"},"Migrate by using built-in automatic upgrade"),(0,i.kt)("p",null,"When running newer version of Operate against older schema, it will perform data migration on a startup.\nThe migration will happen for every index, for which it detects exactly ONE older version. Migration will fail,\nif it detects more than one older versions of some index. "),(0,i.kt)("h4",{id:"further-notes"},"Further notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If migration fails, it is OK to retry it. All applied steps are stored and only those steps will be applied that hasn't been executed yet."),(0,i.kt)("li",{parentName:"ul"},"Operate should not be running, while migration is happening"),(0,i.kt)("li",{parentName:"ul"},"In case version upgrade is performed in the cluster with several Operate nodes, only one node (",(0,i.kt)("a",{parentName:"li",href:"/docs/product-manuals/operate/deployment/importer-and-archiver"},"Webapp module"),") must execute data migration, the others must be stopped\nand started only after migration is fully finished")),(0,i.kt)("h4",{id:"configure-migration"},"Configure migration"),(0,i.kt)("p",null,"Automatic migration is enabled by default.\nIt can be disabled by setting the configuration key:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"camunda.operate.migration.migrationEnabled = false")),(0,i.kt)("p",null,"The following migration settings may affect the duration of migration process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can set the batch size for reindex of the documents. This can reduce the time needed to reindex the data.\nSmall document size = big batch size, big document size = small batch size.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"camunda.operate.migration.reindexBatchSize = 5000")," (Between 1 and 10.000, Default: 5.000)"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In how many slices should the reindex be divided. For each shard that is used by the index you normally use a slice.\nElasticsearch decides how many slices will be used if the value is set to 0 (automatic).")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"camunda.operate.migration.slices = 0")," - Must be positive. Default is 0 (automatic). "),(0,i.kt)("h4",{id:"example-for-migration-in-kubernetes"},"Example for migration in Kubernetes"),(0,i.kt)("p",null,"To ensure that the migration will be executed ",(0,i.kt)("em",{parentName:"p"},"before")," Operate will be started you can use\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container")," feature of Kubernetes. It makes sure that the 'main' container will only be started\nif the initContainer was successfully executed.\nThe following snippet of a pod description for Kubernetes shows the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"migrate")," script as initContainer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\n  labels:\n    app: operate\nspec:\n   initContainers:\n     - name: migration\n       image: camunda/operate:1.0.0\n       command: ['/bin/sh','/usr/local/operate/bin/migrate']\n   containers:\n     - name: operate\n       image: camunda/operate:1.0.0\n       env:\n...\n")))}c.isMDXComponent=!0}}]);