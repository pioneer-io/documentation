"use strict";(self.webpackChunkpioneer_docs=self.webpackChunkpioneer_docs||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,s=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=i(),g=m.tabGroupChoices,y=m.setTabGroupChoices,v=(0,r.useState)(o),h=v[0],b=v[1],k=r.Children.toArray(e.children),w=[];if(null!=d){var x=g[d];null!=x&&x!==h&&p.some((function(e){return e.value===x}))&&b(x)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;b(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,o,i,a,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,l=a.innerHeight,c=a.innerWidth,n>=0&&i<=c&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case s:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(5064),l=n(8215),u=["components"],c={id:"intro",title:"Introduction",slug:"/",hide_title:!0,hide_table_of_contents:!0},s=void 0,p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Welcome to Pioneer, a light-weight feature flag management tool.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction.md",version:"current",frontMatter:{id:"intro",title:"Introduction",slug:"/",hide_title:!0,hide_table_of_contents:!0},sidebar:"docs",next:{title:"Installation",permalink:"/documentation/install"}},d=[{value:"Why use Pioneer?",id:"why-use-pioneer",children:[]},{value:"How does Pioneer work?",id:"how-does-pioneer-work",children:[]}],f={toc:d};function m(e){var t=e.components,c=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{height:"20%",width:"20%",src:n(6849).Z,alt:"Pioneer logo"})),(0,i.kt)("p",null,"Welcome to Pioneer, a light-weight feature flag management tool."),(0,i.kt)("p",null,"Pioneer is a self-hosted application that can be installed on your own server and run with just a single command."),(0,i.kt)("h2",{id:"why-use-pioneer"},"Why use Pioneer?"),(0,i.kt)("p",null,"Using a feature flag management tool, such as Pioneer, enables you to minimize the risk of outages when introducing microservices into your architecture. If a new microservice causes any issues in your deployed application, you can switch the microservice off with just a toggle of a button and revert to the previous code in real-time, without the need for redeployment."),(0,i.kt)("p",null,"This results in significantly less downtime and reduces the strain of incident management of your team. Pioneer is easy to use out-of-the-box, with no steep learning curve or extensive configuration required."),(0,i.kt)("p",null,"Pioneer also provides the option of rolling out a new microservice to a specified percentage of users. Rolling out a new microservice to an increasing number of users enables you to test the microservice under different load conditions and only expose a subset of users to a potentially sub-standard user experience, if any issues occur. "),(0,i.kt)("h2",{id:"how-does-pioneer-work"},"How does Pioneer work?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Summary diagram")),(0,i.kt)("p",null,"In order to use Pioneer in your application you need to run Pioneer on your own server. Running Pioneer locally removes any risk of confidential feature flag or user data being accessed outside of your system."),(0,i.kt)("p",null,"Feature flag creation/deletion/editing all occurs via a Graphical User Interface (GUI), running at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". Any changes made in the GUI will take affect immediately in your application."),(0,i.kt)("p",null,"Pioneer is integrated into your application via an SDK. Pioneer SDKs are available in Ruby, NodeJS or Go. "),(0,i.kt)("p",null,"The SDK handles the communication between Pioneer and your application code. Within your application, you just need to evaluate if a feature flag is toggled on or off (using boolean values) and execute your code accordingly. "),(0,i.kt)("p",null,"For example:"),(0,i.kt)(a.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Ruby",value:"rb"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="/your/application/app.js"',title:'"/your/application/app.js"'},"// assuming SDK client has been acquired\n\nif (sdkClient.getFeature('flag name')) {\n  executeMicroserviceCode();\n} else {\n  executeMonolithCode();\n}\n"))),(0,i.kt)(l.Z,{value:"rb",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rb",metastring:'title="/your/application/app.rb"',title:'"/your/application/app.rb"'},"# assuming SDK client has been acquired\n\nif sdk_client.getFeature('flag name')\n  execute_microservice_code()\nelse\n  execute_monolith_code()\nend\n"))),(0,i.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/your/application/app.go"',title:'"/your/application/app.go"'},"// assuming SDK client has been acquired\n\nif sdkClient.Get('flag name') {\n  executeMicroservice()\n} else {\n  executeMonolith()\n}\n")))),(0,i.kt)("p",null,"For detailed information on integrating an SDK into your application see ",(0,i.kt)("a",{parentName:"p",href:"/documentation/sdk-intro"},"integrating SDKs"),"."))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},6849:function(e,t,n){t.Z=n.p+"assets/images/pioneer_color_logo-265227cef56149d10311d5f5c9056531.png"}}]);