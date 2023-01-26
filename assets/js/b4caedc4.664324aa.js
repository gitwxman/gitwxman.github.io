"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={slug:"\u8de8\u57df\u95ee\u9898",title:"\u8de8\u57df",tags:["\u8de8\u57df","React"]},o=void 0,i={permalink:"/blog/\u8de8\u57df\u95ee\u9898",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-11-cross-domain/index.md",source:"@site/blog/2022-12-11-cross-domain/index.md",title:"\u8de8\u57df",description:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8de8\u57df\u7684\u95ee\u9898\u51fa\u73b0\uff0c\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",date:"2022-12-11T00:00:00.000Z",formattedDate:"2022\u5e7412\u670811\u65e5",tags:[{label:"\u8de8\u57df",permalink:"/blog/tags/\u8de8\u57df"},{label:"React",permalink:"/blog/tags/react"}],readingTime:6.955,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"\u8de8\u57df\u95ee\u9898",title:"\u8de8\u57df",tags:["\u8de8\u57df","React"]},prevItem:{title:"\u89e3\u6784\u8d4b\u503c\u7684\u8fde\u7eed\u5199\u6cd5",permalink:"/blog/\u89e3\u6784\u8d4b\u503c"}},p={authorsImageUrls:[]},c=[{value:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8de8\u57df\u7684\u95ee\u9898\u51fa\u73b0\uff0c\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8de8\u57df\u7684\u95ee\u9898\u51fa\u73b0\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898",level:2},{value:"*\u4ec0\u4e48\u662f\u8de8\u57df\uff1f",id:"\u4ec0\u4e48\u662f\u8de8\u57df",level:3},{value:"\u540c\u6e90\u7b56\u7565\uff1f",id:"\u540c\u6e90\u7b56\u7565",level:4},{value:"*\u89e3\u51b3\u65b9\u5f0f",id:"\u89e3\u51b3\u65b9\u5f0f",level:3},{value:"1. jsonp",id:"1-jsonp",level:4},{value:"2. CORS\uff1a\u8de8\u57df\u8d44\u6e90\u5171\u4eab",id:"2-cors\u8de8\u57df\u8d44\u6e90\u5171\u4eab",level:4},{value:"3\u3001\u53cd\u5411\u4ee3\u7406",id:"3\u53cd\u5411\u4ee3\u7406",level:4},{value:"4. window+iframe",id:"4-windowiframe",level:4},{value:"*React \u811a\u624b\u67b6\u4e2d\u89e3\u51b3\u8de8\u57df\u95ee\u9898",id:"react-\u811a\u624b\u67b6\u4e2d\u89e3\u51b3\u8de8\u57df\u95ee\u9898",level:3},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:4},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:4},{value:"vite\u914d\u7f6eproxy",id:"vite\u914d\u7f6eproxy",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8de8\u57df\u7684\u95ee\u9898\u51fa\u73b0\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8de8\u57df\u7684\u95ee\u9898\u51fa\u73b0\uff0c\u5982\u4f55\u89e3\u51b3\u8de8\u57df\u95ee\u9898"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f\u8de8\u57df"},"*\u4ec0\u4e48\u662f\u8de8\u57df\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u6307\u6d4f\u89c8\u5668\u4e0d\u80fd\u6267\u884c\u5176\u4ed6\u7f51\u7ad9\u7684\u811a\u672c\uff0c"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u6d4f\u89c8\u5668\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540c\u6e90\u7b56\u7565"),"\u9020\u6210\u7684,"),(0,a.kt)("li",{parentName:"ol"},"\u662f\u6d4f\u89c8\u5668\u5bf9javascript \u65bd\u52a0\u7684\u5b89\u5168\u9650\u5236\uff0c"),(0,a.kt)("li",{parentName:"ol"},"\u9632\u6b62\u4ed6\u4eba\u6076\u610f\u653b\u51fb\u7f51\u7ad9\u6bd4\u5982\u4e00\u4e2a\u9ed1\u5ba2,\u4ed6\u5229\u7528 iframe \u628a\u771f\u6b63\u7684\u94f6\u884c\u767b\u5f55\u9875\u9762\u5d4c\u5230\u4ed6\u7684\u9875\u9762\u4e0a,\u5f53\u4f60\u4f7f\u7528\u771f\u5b9e\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u65f6,\u5982\u679c\u6ca1\u6709\u540c\u6e90\u9650\u5236,\u4ed6\u7684\u9875\u9762\u5c31\u53ef\u4ee5\u901a\u8fc7 JavaScript \u8bfb\u53d6\u5230\u4f60\u7684\u8868\u5355\u4e2d\u8f93\u5165\u7684\u5185\u5bb9,\u8fd9\u6837\u7528\u6237\u540d\u548c\u5bc6\u7801\u5c31\u8f7b\u677e\u5230\u624b\u4e86\u3002"))),(0,a.kt)("h4",{id:"\u540c\u6e90\u7b56\u7565"},"\u540c\u6e90\u7b56\u7565\uff1f"),(0,a.kt)("p",null,"\u6240\u8c13\u540c\u6e90\uff08\u5373\u6307\u5728\u540c\u4e00\u4e2a\u57df\uff09\u5c31\u662f\u4e24\u4e2a\u9875\u9762\u5177\u6709\u76f8\u540c\u7684\u534f\u8bae\uff08protocol\uff09\uff0c\u4e3b\u673a\uff08host\uff09\u548c\u7aef\u53e3\u53f7\uff08port\uff09\uff0c \u5f53\u4e00\u4e2a\u8bf7\u6c42url\u7684",(0,a.kt)("strong",{parentName:"p"},"\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3"),"\u4e09\u8005\u4e4b\u95f4\u4efb\u610f\u4e00\u4e2a\u4e0e\u5f53\u524d\u9875\u9762url\u4e0d\u540c\u5373\u4e3a\u8de8\u57df \u3002"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u5f0f"},"*\u89e3\u51b3\u65b9\u5f0f"),(0,a.kt)("h4",{id:"1-jsonp"},"1. jsonp"),(0,a.kt)("p",null,"\u539f\u7406\uff1a\u52a8\u6001\u521b\u5efa\u4e00\u4e2a script \u6807\u7b7e\u3002\u5229\u7528 script \u6807\u7b7e\u7684 src \u5c5e\u6027\u4e0d\u53d7\u540c\u6e90\u7b56\u7565\u9650\u5236\u3002\u56e0\u4e3a\u6240\u6709\u7684 src \u5c5e\u6027\u548c href \u5c5e\u6027\u90fd\u4e0d\u53d7\u540c\u6e90\u7b56\u7565\u9650\u5236\u3002\u53ef\u4ee5\u8bf7\u6c42\u7b2c\u4e09\u65b9\u670d\u52a1\u5668\u6570\u636e\u5185\u5bb9\u3002"),(0,a.kt)("admonition",{title:"\u6b65\u9aa4",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"1.1\uff09\u53bb\u521b\u5efa\u4e00\u4e2a script \u6807\u7b7e"),(0,a.kt)("p",{parentName:"admonition"},"1.2\uff09script \u7684 src \u5c5e\u6027\u8bbe\u7f6e\u63a5\u53e3\u5730\u5740"),(0,a.kt)("p",{parentName:"admonition"},"1.3\uff09\u63a5\u53e3\u53c2\u6570,\u5fc5\u987b\u8981\u5e26\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u540d \u8981\u4e0d\u7136\u540e\u53f0\u65e0\u6cd5\u8fd4\u56de\u6570\u636e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"1.4\uff09\u901a\u8fc7\u5b9a\u4e49\u51fd\u6570\u540d\u53bb\u63a5\u6536\u540e\u53f0\u8fd4\u56de\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\n//\u53bb\u521b\u5efa\u4e00\u4e2a script \u6807\u7b7e\nvar script = document.createElement("script"); \n//script \u7684 src \u5c5e\u6027\u8bbe\u7f6e\u63a5\u53e3\u5730\u5740 \u5e76\u5e26\u4e00\u4e2a callback \u56de\u8c03\u51fd\u6570\u540d\u79f0\nscript.src = "HTTP://127.0.0.1:8888/index.php?callback=jsonpCallback"; \n//\u63d2\u5165\u5230\u9875\u9762\ndocument.head.appendChild(script); \n//\u901a\u8fc7\u5b9a\u4e49\u51fd\u6570\u540d\u53bb\u63a5\u6536\u540e\u53f0\u8fd4\u56de\u6570\u636e \nfunction jsonpCallback(data){\n//\u6ce8\u610f jsonp \u8fd4\u56de\u7684\u6570\u636e\u662f json \u5bf9\u8c61\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\n//Ajax \u53d6\u5f97\u6570\u636e\u662f json \u5b57\u7b26\u4e32\u9700\u8981\u8f6c\u6362\u6210 json \u5bf9\u8c61\u624d\u53ef\u4ee5\u4f7f\u7528\u3002\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"jsonp\u7684\u539f\u7406")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f jsonp?\uff0cjsonp \u7684\u4f5c\u7528")),(0,a.kt)("p",null,"jsonp \u5e76\u4e0d\u662f\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u800c json \u662f\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0cjsonp \u662f\u7528\u6765\u89e3\u51b3\u8de8\u57df\u83b7\u53d6\u6570\u636e\u7684\u4e00\u79cd\n\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("admonition",{title:"\u5177\u4f53\u539f\u7406",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u662f\u901a\u8fc7\u52a8\u6001\u521b\u5efa script \u6807\u7b7e\uff0c\u7136\u540e\u901a\u8fc7\u6807\u7b7e\u7684 src \u5c5e\u6027\u83b7\u53d6 js \u6587\u4ef6\u4e2d\u7684 js \u811a\u672c\uff0c\u8be5\u811a\u672c\u7684\u5185\n\u5bb9\u662f\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u53c2\u6570\u5c31\u662f\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e\uff0c\u4e3a\u4e86\u5904\u7406\u8fd9\u4e9b\u8fd4\u56de\u7684\u6570\u636e\uff0c\u9700\u8981\u4e8b\u5148\u5728\u9875\u9762\u5b9a\u4e49\u597d\u56de\u8c03\u51fd\u6570\uff0c\u672c\u8d28\u4e0a\u4f7f\u7528\u7684\u5e76\u4e0d\u662f Ajax \u6280\u672f\uff0cAjax \u8bf7\u6c42\u53d7\u540c\u6e90\u7b56\u7565\u7684\u5f71\u54cd\uff0c\u4e0d\u5141\u8bb8\u8fdb\u884c\u8de8\u57df\u8bf7\u6c42\uff0c\u800c script \u6807\u7b7e\u7684 src \u5c5e\u6027\u4e2d\u7684\u94fe\u63a5\u5374\u53ef\u4ee5\u8bbf\u95ee\u8de8\u57df\u7684 js \u811a\u672c\uff0c\u5229\u7528\u8fd9\u4e2a\u7279\u6027\uff0c\u670d\u52a1\u7aef\u4e0d\u5728\u8fd4\u56dejson \u683c\u5f0f\u7684\u6570\u636e\uff0c\u800c\u662f\u8fd4\u56de\u8c03\u7528\u67d0\u4e2a\u51fd\u6570\u7684 js \u4ee3\u7801\uff0c\u5728 src \u4e2d\u8fdb\u884c\u4e86\u8c03\u7528\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u8de8\u57df")),(0,a.kt)("h4",{id:"2-cors\u8de8\u57df\u8d44\u6e90\u5171\u4eab"},"2. CORS\uff1a\u8de8\u57df\u8d44\u6e90\u5171\u4eab"),(0,a.kt)("p",null,"\u539f\u7406\uff1a\u670d\u52a1\u5668\u8bbe\u7f6e Access-Control-Allow-OriginHTTP \u54cd\u5e94\u5934\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u5c06\u4f1a\u5141\u8bb8\u8de8\u57df\u8bf7\n\u6c42"),(0,a.kt)("p",null,"\u9650\u5236\uff1a\u6d4f\u89c8\u5668\u9700\u8981\u652f\u6301 HTML5\uff0c\u53ef\u4ee5\u652f\u6301 POST\uff0cPUT \u7b49\u65b9\u6cd5\u517c\u5bb9 ie9 \u4ee5\u4e0a\u9700\u8981\u540e\u53f0\u8bbe\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-node"},"Access-Control-Allow-Origin: * //\u5141\u8bb8\u6240\u6709\u57df\u540d\u8bbf\u95ee\uff0c\u6216\u8005\nAccess-Control-Allow-Origin: HTTP://a.com //\u53ea\u5141\u8bb8\u6240\u6709\u57df\u540d\u8bbf\u95ee\n")),(0,a.kt)("h4",{id:"3\u53cd\u5411\u4ee3\u7406"},"3\u3001\u53cd\u5411\u4ee3\u7406"),(0,a.kt)("h4",{id:"4-windowiframe"},"4. window+iframe"),(0,a.kt)("h3",{id:"react-\u811a\u624b\u67b6\u4e2d\u89e3\u51b3\u8de8\u57df\u95ee\u9898"},"*React \u811a\u624b\u67b6\u4e2d\u89e3\u51b3\u8de8\u57df\u95ee\u9898"),(0,a.kt)("p",null,"\u9700\u8981\u4e0b\u8f7d",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),"\u5e93",(0,a.kt)("inlineCode",{parentName:"p"},"npm install axios")),(0,a.kt)("p",null,"React\u672c\u8eab\u53ea\u5173\u6ce8\u4e0e\u9875\u9762\uff0c\u5e76\u4e0d\u5305\u542b\u53d1\u9001ajax\u8bf7\u6c42\u7684\u4ee3\u7801\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u662f\u96c6\u6210\u7b2c\u4e09\u65b9\u7684\u4e00\u4e9b\u5e93\uff0c\u6216\u8005\u81ea\u5df1\u8fdb\u884c\u5c01\u88c5\u3002\u63a8\u8350\u4f7f\u7528axios\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u5f88\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u8de8\u57df\u7684\u95ee\u9898\uff0c\u8fd9\u6837\u5c31\u5e94\u8be5\u914d\u7f6e\u4ee3\u7406\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5229\u7528",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u4e4b\u95f4\u8bbf\u95ee\u4e0d\u4f1a\u6709\u8de8\u57df"),"\uff0c\u5728\u4e2d\u95f4\u5f00\u542f\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u7aef\u53e3\u53f7\u548c\u9879\u76ee\u7aef\u53e3\u53f7\u4e00\u6837")),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728package.json\u4e2d\u8ffd\u52a0\u5982\u4e0b\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"proxy":"\u8bf7\u6c42\u7684\u5730\u5740"      "proxy":"http://localhost:5000"  \n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f18\u70b9\uff1a\u914d\u7f6e\u7b80\u5355\uff0c\u524d\u7aef\u8bf7\u6c42\u8d44\u6e90\u65f6\u53ef\u4ee5\u4e0d\u52a0\u4efb\u4f55\u524d\u7f00\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7f3a\u70b9\uff1a\u4e0d\u80fd\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5de5\u4f5c\u65b9\u5f0f\uff1a\u4e0a\u8ff0\u65b9\u5f0f\u914d\u7f6e\u4ee3\u7406\uff0c\u5f53\u8bf7\u6c42\u4e863000\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u65f6\uff0c\u90a3\u4e48\u8be5\u8bf7\u6c42\u4f1a\u8f6c\u53d1\u7ed95000 \uff08\u4f18\u5148\u5339\u914d\u524d\u7aef\u8d44\u6e90\uff09")),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b65\uff1a\u521b\u5efa\u4ee3\u7406\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css"},"\u5728src\u4e0b\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff1asrc/setupProxy.js\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u5199setupProxy.js\u914d\u7f6e\u5177\u4f53\u4ee3\u7406\u89c4\u5219\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const proxy = require('http-proxy-middleware')\n\nmodule.exports = function(app) {\n  app.use(\n    proxy('/api1', {  //api1\u662f\u9700\u8981\u8f6c\u53d1\u7684\u8bf7\u6c42(\u6240\u6709\u5e26\u6709/api1\u524d\u7f00\u7684\u8bf7\u6c42\u90fd\u4f1a\u8f6c\u53d1\u7ed95000)\n      target: 'http://localhost:5000', //\u914d\u7f6e\u8f6c\u53d1\u76ee\u6807\u5730\u5740(\u80fd\u8fd4\u56de\u6570\u636e\u7684\u670d\u52a1\u5668\u5730\u5740)\n      changeOrigin: true, //\u63a7\u5236\u670d\u52a1\u5668\u63a5\u6536\u5230\u7684\u8bf7\u6c42\u5934\u4e2dhost\u5b57\u6bb5\u7684\u503c\n      /*\n        changeOrigin\u8bbe\u7f6e\u4e3atrue\u65f6\uff0c\u670d\u52a1\u5668\u6536\u5230\u7684\u8bf7\u6c42\u5934\u4e2d\u7684host\u4e3a\uff1alocalhost:5000\n        changeOrigin\u8bbe\u7f6e\u4e3afalse\u65f6\uff0c\u670d\u52a1\u5668\u6536\u5230\u7684\u8bf7\u6c42\u5934\u4e2d\u7684host\u4e3a\uff1alocalhost:3000\n        changeOrigin\u9ed8\u8ba4\u503c\u4e3afalse\uff0c\u4f46\u6211\u4eec\u4e00\u822c\u5c06changeOrigin\u503c\u8bbe\u4e3atrue\n      */\n      pathRewrite: {'^/api1': ''} //\u53bb\u9664\u8bf7\u6c42\u524d\u7f00\uff0c\u4fdd\u8bc1\u4ea4\u7ed9\u540e\u53f0\u670d\u52a1\u5668\u7684\u662f\u6b63\u5e38\u8bf7\u6c42\u5730\u5740(\u5fc5\u987b\u914d\u7f6e)\n    }),\n    proxy('/api2', { \n      target: 'http://localhost:5001',\n      changeOrigin: true,\n      pathRewrite: {'^/api2': ''}\n    })\n  )\n}\n")))),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f18\u70b9\uff1a\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406\uff0c\u53ef\u4ee5\u7075\u6d3b\u7684\u63a7\u5236\u8bf7\u6c42\u662f\u5426\u8d70\u4ee3\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7f3a\u70b9\uff1a\u914d\u7f6e\u7e41\u7410\uff0c\u524d\u7aef\u8bf7\u6c42\u8d44\u6e90\u65f6\u5fc5\u987b\u52a0\u524d\u7f00\u3002")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u540e\u91cd\u542f\u4e00\u4e0b\u7ec8\u7aef")),(0,a.kt)("h4",{id:"vite\u914d\u7f6eproxy"},"vite\u914d\u7f6eproxy"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    // \u662f\u5426\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\n    open: true,\n    // \u4ee3\u7406\n    proxy: {\n      '/api': {\n        target: 'http://127.0.0.1:5000',\n        changeOrigin: true,\n        rewrite: path => path.replace(/^\\/api/, ''),\n      },\n    },\n  },\n})\n\n")))}u.isMDXComponent=!0}}]);