"use strict";(self.webpackChunkpioneer_docs=self.webpackChunkpioneer_docs||[]).push([[505],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8624:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"rollout",title:"Percentage rollout"},u=void 0,c={unversionedId:"rollout",id:"rollout",isDocsHomePage:!1,title:"Percentage rollout",description:"Pioneer provides the option to specify which percentage of your users will receive the feature flag using a rollout percentage.",source:"@site/docs/rollout.md",sourceDirName:".",slug:"/rollout",permalink:"/documentation/rollout",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/rollout.md",version:"current",frontMatter:{id:"rollout",title:"Percentage rollout"},sidebar:"docs",previous:{title:"Working with flags",permalink:"/documentation/Working with flags"},next:{title:"Logs",permalink:"/documentation/logs"}},s=[{value:"How to utilise a rollout percentage",id:"how-to-utilise-a-rollout-percentage",children:[]}],p={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pioneer provides the option to specify which percentage of your users will receive the feature flag using a rollout percentage. "),(0,i.kt)("p",null,"Rolling out a new microservice to an increasing number of users enables you to test the microservice under different load conditions and only expose a subset of users to a potentially sub-standard user experience, if any issues occur. "),(0,i.kt)("h3",{id:"how-to-utilise-a-rollout-percentage"},"How to utilise a rollout percentage"),(0,i.kt)("p",null,"To utilize a rollout percentage in your application, a few basic conditions need to be met. "),(0,i.kt)("p",null,"The first is simple: ",(0,i.kt)("em",{parentName:"p"},"the flag needs to be toggled on"),". If the flag itself is toggled off, it does not matter what rollout percentage you may have set, the flag will always return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and the user will not receive the feature flag. "),(0,i.kt)("p",null,"The second is just as straightforward: ",(0,i.kt)("em",{parentName:"p"},"the flag must have a rollout percentage assigned to it, greater than ",(0,i.kt)("inlineCode",{parentName:"em"},"0")),", which happens to be the default rollout percentage. If the flag is toggled on and a context is created for the SDK (more on that following), but the rollout percent is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", again, the feature flag will always return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and the user will not receive the feature flag. "),(0,i.kt)("p",null,"The last condition is also quite easy: ",(0,i.kt)("em",{parentName:"p"},"the SDK client must be given a 'user-context'")," within your application code. The context for an SDK is created using a unique identifier (such as a session cookie, for example) that can serve to identify individual users. With the context in place, the SDK will then use the rollout percentage to determine if the user receives the feature flag or not."),(0,i.kt)("p",null,"For more specific information on how to create contexts for the SDK in your application, please refer to the specific SDK documentation for your chosen language."))}f.isMDXComponent=!0}}]);