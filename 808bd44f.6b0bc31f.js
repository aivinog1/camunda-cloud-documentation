(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{380:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(661)),i={id:"configuration",title:"Configuration"},c={unversionedId:"product-manuals/tasklist/deployment/configuration",id:"version-0.26/product-manuals/tasklist/deployment/configuration",isDocsHomePage:!1,title:"Configuration",description:"Tasklist is a Spring Boot application. That means all ways to configure",source:"@site/versioned_docs/version-0.26/product-manuals/tasklist/deployment/configuration.md",slug:"/product-manuals/tasklist/deployment/configuration",permalink:"/docs/0.26/product-manuals/tasklist/deployment/configuration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/tasklist/deployment/configuration.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Install and start Tasklist",permalink:"/docs/0.26/product-manuals/tasklist/deployment/install-and-start"},next:{title:"Authentication",permalink:"/docs/0.26/product-manuals/tasklist/deployment/authentication"}},s=[{value:"Webserver",id:"webserver",children:[]},{value:"GraphQL API access",id:"graphql-api-access",children:[]},{value:"Elasticsearch",id:"elasticsearch",children:[{value:"Settings to connect",id:"settings-to-connect",children:[]},{value:"Settings for shards and replicas",id:"settings-for-shards-and-replicas",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml",children:[]}]},{value:"Zeebe broker connection",id:"zeebe-broker-connection",children:[{value:"Settings to connect",id:"settings-to-connect-1",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-1",children:[]}]},{value:"Zeebe Elasticsearch exporter",id:"zeebe-elasticsearch-exporter",children:[{value:"Settings to connect and import:",id:"settings-to-connect-and-import",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-2",children:[]}]},{value:"Monitoring and health probes",id:"monitoring-and-health-probes",children:[{value:"Example snippets to use Tasklist probes in Kubernetes:",id:"example-snippets-to-use-tasklist-probes-in-kubernetes",children:[]}]},{value:"Logging",id:"logging",children:[{value:"JSON logging configuration",id:"json-logging-configuration",children:[]}]},{value:"An example of application.yml file",id:"an-example-of-applicationyml-file",children:[]}],o={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Tasklist is a Spring Boot application. That means all ways to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"}),"configure"),"\na Spring Boot application can be applied. By default, the configuration for Tasklist is stored in a YAML file ",Object(l.b)("inlineCode",{parentName:"p"},"application.yml"),". All Tasklist related settings are prefixed\nwith ",Object(l.b)("inlineCode",{parentName:"p"},"zeebe.tasklist"),". The following parts are configurable:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#webserver"}),"Webserver")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#graphql-api-access"}),"GraphQL API access")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#elasticsearch"}),"Elasticsearch connection")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#zeebe-broker-connection"}),"Zeebe Broker connection")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#zeebe-elasticsearch-exporter"}),"Zeebe Elasticsearch exporter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.26/product-manuals/tasklist/deployment/authentication"}),"Authentication")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#monitoring-and-health-probes"}),"Monitoring and health probes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#logging"}),"Logging configuration"))),Object(l.b)("h2",{id:"webserver"},"Webserver"),Object(l.b)("p",null,"Tasklist supports customizing the ",Object(l.b)("em",{parentName:"p"},"context-path")," by using default spring configuration."),Object(l.b)("p",null,"Example for ",Object(l.b)("inlineCode",{parentName:"p"},"application.yml"),":\n",Object(l.b)("inlineCode",{parentName:"p"},"server.servlet.context-path: /tasklist")),Object(l.b)("p",null,"Example for environment variable:\n",Object(l.b)("inlineCode",{parentName:"p"},"SERVER_SERVLET_CONTEXT_PATH=/tasklist")),Object(l.b)("p",null,"Default context-path is ",Object(l.b)("inlineCode",{parentName:"p"},"/")),Object(l.b)("h2",{id:"graphql-api-access"},"GraphQL API access"),Object(l.b)("p",null,"Tasklist provides a GraphQL API under the endpoint ",Object(l.b)("inlineCode",{parentName:"p"},"/graphql"),". Clients can access this API by using a JWT access token in an authorization header ",Object(l.b)("inlineCode",{parentName:"p"},"Authorization: Bearer <JWT>"),"."),Object(l.b)("p",null,"Tasklist server needs the following ",Object(l.b)("strong",{parentName:"p"},"settings")," to validate the token:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Setting"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.client.audience"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tasklist tries to match this with ",Object(l.b)("inlineCode",{parentName:"td"},"aud")," in JWT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tasklist.camunda.io")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.client.clusterId"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tasklist tries to match this with ",Object(l.b)("inlineCode",{parentName:"td"},"scope")," in JWT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cafe-0815-0235-a221-21cc6df91dc5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spring.security.oauth2.resourceserver.jwt.jwk-set-uri (recommended)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Complete URI to get public keys for JWT validation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://weblogin.cloud.company.com/.well-known/jwks.json"}),"https://weblogin.cloud.company.com/.well-known/jwks.json"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"OR")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"spring.security.oauth2.resourceserver.jwt.issuer-uri"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URI to get public keys for JWT validation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://weblogin.cloud.company.com/"}),"https://weblogin.cloud.company.com/"))))),Object(l.b)("p",null,"The settings can be given in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-tasklist/blob/master/config/application.yml"}),"application.yml")," (eg. ",Object(l.b)("inlineCode",{parentName:"p"},"zeebe.tasklist.client.audience: tasklist.camunda.io"),") or\nas environment variables (eg. ",Object(l.b)("inlineCode",{parentName:"p"},"ZEEBE_TASKLIST_CLIENT_AUDIENCE=tasklist.camunda.io"),")"),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.26/product-manuals/tasklist/deployment/api-client"}),"API client")," needs to obtain JWT token and send it in each request to ",Object(l.b)("inlineCode",{parentName:"p"},"graphql")," in an authorization header as described above."),Object(l.b)("h2",{id:"elasticsearch"},"Elasticsearch"),Object(l.b)("p",null,"Tasklist stores and reads data in/from Elasticsearch."),Object(l.b)("h3",{id:"settings-to-connect"},"Settings to connect"),Object(l.b)("p",null,"Tasklist supports ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/setting-up-authentication.html"}),"basic authentication")," for elasticsearch.\nSet the appropriate username/password combination in the configuration to use it."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.clusterName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clustername of Elasticsearch"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elasticsearch")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http://localhost:9200")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.username"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to access Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"settings-for-shards-and-replicas"},"Settings for shards and replicas"),Object(l.b)("p",null,"Tasklist creates the template with index settings named ",Object(l.b)("inlineCode",{parentName:"p"},"tasklist-<version>_template")," that Elasticsearch will use for all Tasklist indices.\nThese settings can be changed."),Object(l.b)("p",null,"Following configuration parameters will define the settings:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.numberOfShards"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How many shards Elasticsearch uses for all Tasklist indices"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.elasticsearch.numberOfReplicas"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How many replicas Elasticsearch uses for all Tasklist indices"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")))),Object(l.b)("p",null,"These values are applied only on first startup of Tasklist or during version upgrade. After Tasklist\nELS schema is created, settings may be adjusted directly in ELS template and the new settings will be applied\nto indices created after adjustment."),Object(l.b)("h3",{id:"a-snippet-from-applicationyml"},"A snippet from application.yml:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n")),Object(l.b)("h2",{id:"zeebe-broker-connection"},"Zeebe broker connection"),Object(l.b)("p",null,"Tasklist needs a connection to Zeebe Broker to start the import."),Object(l.b)("h3",{id:"settings-to-connect-1"},"Settings to connect"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebe.brokerContactPoint"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Broker contact point to zeebe as hostname and port"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"localhost:26500")))),Object(l.b)("h3",{id:"a-snippet-from-applicationyml-1"},"A snippet from application.yml:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  zeebe:\n    # Broker contact point\n    brokerContactPoint: localhost:26500\n")),Object(l.b)("h2",{id:"zeebe-elasticsearch-exporter"},"Zeebe Elasticsearch exporter"),Object(l.b)("p",null,"Tasklist imports data from Elasticsearch indices created and filled in by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/exporters/elasticsearch-exporter"}),"Zeebe Elasticsearch Exporter"),".\nTherefore settings for this Elasticsearch connection must be defined and must correspond to the settings on Zeebe side."),Object(l.b)("h3",{id:"settings-to-connect-and-import"},"Settings to connect and import:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.clusterName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cluster name of Elasticsearch"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elasticsearch")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL of Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http://localhost:9200")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.host"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hostname where Elasticsearch is running"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"localhost")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.port"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port of Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9200")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.prefix"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Index prefix as configured in Zeebe Elasticsearch exporter"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe-record")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.username"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to access Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zeebe.tasklist.zeebeElasticsearch.password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to access Elasticsearch REST API"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h3",{id:"a-snippet-from-applicationyml-2"},"A snippet from application.yml:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"zeebe.tasklist:\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: localhost:9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")),Object(l.b)("h2",{id:"monitoring-and-health-probes"},"Monitoring and health probes"),Object(l.b)("p",null,"Tasklist includes ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready"}),"Spring Boot Actuator")," inside, that\nprovides number of monitoring possibilities., e.g. health check (http://localhost:8080/actuator/health) and metrics (http://localhost:8080/actuator/prometheus) endpoints."),Object(l.b)("p",null,"Tasklist uses following Actuator configuration by default:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# enable health check and metrics endpoints\nmanagement.endpoints.web.exposure.include: health,prometheus\n# enable Kubernetes health groups:\n# https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-kubernetes-probes\nmanagement.health.probes.enabled: true\n")),Object(l.b)("p",null,"With this configuration following endpoints are available for use out of the box:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/prometheus")," Prometheus metrics"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/liveness")," Liveness probe"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/readiness")," Readiness probe"),Object(l.b)("h3",{id:"example-snippets-to-use-tasklist-probes-in-kubernetes"},"Example snippets to use Tasklist probes in Kubernetes:"),Object(l.b)("p",null,"For details to set Kubernetes probes parameters see: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"}),"Kubernetes configure probes")),Object(l.b)("h4",{id:"readiness-probe-as-yaml-config"},"Readiness probe as yaml config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"readinessProbe:\n     httpGet:\n        path: /actuator/health/readiness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),Object(l.b)("h4",{id:"liveness-probe-as-yaml-config"},"Liveness probe as yaml config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"livenessProbe:\n     httpGet:\n        path: /actuator/health/liveness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),Object(l.b)("h2",{id:"logging"},"Logging"),Object(l.b)("p",null,"Tasklist uses Log4j2 framework for logging. In distribution archive as well as inside a Docker image ",Object(l.b)("inlineCode",{parentName:"p"},"config/log4j2.xml")," logging configuration files is included,\nthat can be further adjusted to your needs:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="WARN" monitorInterval="30">\n  <Properties>\n    <Property name="LOG_PATTERN">%clr{%d{yyyy-MM-dd HH:mm:ss.SSS}}{faint} %clr{%5p} %clr{${sys:PID}}{magenta} %clr{---}{faint} %clr{[%15.15t]}{faint} %clr{%-40.40c{1.}}{cyan} %clr{:}{faint} %m%n%xwEx</Property>\n    <Property name="log.stackdriver.serviceName">${env:TASKLIST_LOG_STACKDRIVER_SERVICENAME:-tasklist}</Property>\n    <Property name="log.stackdriver.serviceVersion">${env:TASKLIST_LOG_STACKDRIVER_SERVICEVERSION:-}</Property>\n  </Properties>\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT" follow="true">\n      <PatternLayout pattern="${LOG_PATTERN}"/>\n    </Console>\n    <Console name="Stackdriver" target="SYSTEM_OUT" follow="true">\n      <StackdriverLayout serviceName="${log.stackdriver.serviceName}"\n        serviceVersion="${log.stackdriver.serviceVersion}" />\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Logger name="io.zeebe.tasklist" level="info" />\n    <Root level="info">\n      <AppenderRef ref="${env:TASKLIST_LOG_APPENDER:-Console}"/>\n    </Root>\n  </Loggers>\n</Configuration>\n')),Object(l.b)("p",null,"By default, Console log appender will be used."),Object(l.b)("h3",{id:"json-logging-configuration"},"JSON logging configuration"),Object(l.b)("p",null,"You can choose to output logs in JSON format (Stackdriver compatible). To enable it, define\nthe environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"TASKLIST_LOG_APPENDER")," like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"TASKLIST_LOG_APPENDER=Stackdriver\n")),Object(l.b)("h2",{id:"an-example-of-applicationyml-file"},"An example of application.yml file"),Object(l.b)("p",null,"The following snippet represents the default Tasklist configuration, which is shipped with the distribution. It can be found inside the ",Object(l.b)("inlineCode",{parentName:"p"},"config")," folder (",Object(l.b)("inlineCode",{parentName:"p"},"config/application.yml"),")\nand can be used to adjust Tasklist to your needs."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Tasklist configuration file\n\nzeebe.tasklist:\n  # Set Tasklist username and password.\n  # If user with <username> does not exists it will be created.\n  # Default: demo/demo\n  #username:\n  #password:\n  # ELS instance to store Tasklist data\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Host\n    host: localhost\n    # Transport port\n    port: 9200\n  # Zeebe instance\n  zeebe:\n    # Broker contact point\n    brokerContactPoint: localhost:26500\n  # ELS instance to export Zeebe data to\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Host\n    host: localhost\n    # Transport port\n    port: 9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")))}b.isMDXComponent=!0},661:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);