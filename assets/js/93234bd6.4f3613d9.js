"use strict";(self.webpackChunkpioneer_docs=self.webpackChunkpioneer_docs||[]).push([[669],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7995:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={id:"docker",title:"Docker"},u=void 0,p={unversionedId:"docker",id:"docker",isDocsHomePage:!1,title:"Docker",description:"Docker network diagram",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/documentation/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docker.md",version:"current",frontMatter:{id:"docker",title:"Docker"},sidebar:"docs",previous:{title:"Go SDK",permalink:"/documentation/go-sdk-doc"},next:{title:"Environment Variables",permalink:"/documentation/env-variables"}},l=[],s={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker network diagram")),(0,a.kt)("p",null,"The Pioneer application is run as a Docker network. By default, one Docker container is run per Pioneer component; however, each of the containers are available as individual images from ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/ljdavies/pioneer"},"Docker Hub"),", enabling you to scale components as required."),(0,a.kt)("p",null,"Additionally, the Scout and Compass components are available from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pioneer-io"},"GitHub"),"."))}d.isMDXComponent=!0}}]);