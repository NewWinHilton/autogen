"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5857:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Ecosystem",s={unversionedId:"Ecosystem",id:"Ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"This page lists libraries that have integrations with Autogen for LLM applications using multiple agents in alphabetical order. Including your own integration to this list is highly encouraged. Simply open a pull request with a few lines of text, see the dropdown below for more information.",source:"@site/docs/Ecosystem.md",sourceDirName:".",slug:"/Ecosystem",permalink:"/autogen/docs/Ecosystem",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Ecosystem.md",tags:[],version:"current",frontMatter:{}},c=[{value:"MemGPT + AutoGen",id:"memgpt--autogen",children:[],level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ecosystem"},"Ecosystem"),(0,o.kt)("p",null,"This page lists libraries that have integrations with Autogen for LLM applications using multiple agents in alphabetical order. Including your own integration to this list is highly encouraged. Simply open a pull request with a few lines of text, see the dropdown below for more information."),(0,o.kt)("h2",{id:"memgpt--autogen"},(0,o.kt)("a",{parentName:"h2",href:"https://memgpt.readthedocs.io/en/latest/autogen/"},"MemGPT + AutoGen")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Agent Chat Example",src:n(5707).Z})),(0,o.kt)("p",null,"MemGPT enables LLMs to manage their own memory and overcome limited context windows. You can use MemGPT to create perpetual chatbots that learn about you and modify their own personalities over time. You can connect MemGPT to your own local filesystems and databases, as well as connect MemGPT to your own tools and APIs. The MemGPT + AutoGen integration allows you to equip any AutoGen agent with MemGPT capabilities."))}u.isMDXComponent=!0},5707:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ecosystem-memgpt-db7e37eac957d8d744aeaaef8534b7d9.png"}}]);