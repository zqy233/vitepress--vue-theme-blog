import{_ as l,o as t,c as a,b as e,d as s}from"./app.bfa9bd4b.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ssr 服务端渲染，主要解决2个问题","slug":"ssr-服务端渲染-主要解决2个问题","link":"#ssr-服务端渲染-主要解决2个问题","children":[]}],"relativePath":"3.框架/1.vue/ssr.md","lastUpdated":1720835436690}'),r={name:"3.框架/1.vue/ssr.md"},n=e("h2",{id:"ssr-服务端渲染-主要解决2个问题",tabindex:"-1"},[s("ssr 服务端渲染，主要解决2个问题 "),e("a",{class:"header-anchor",href:"#ssr-服务端渲染-主要解决2个问题","aria-hidden":"true"},"#")],-1),o=e("ul",null,[e("li",null,[s("更好的SEO "),e("ul",null,[e("li",null,"SPA页面的内容是Ajax获取，而搜索引擎爬取工具并不会等待Ajax异步完成后再进行爬取页面内容，所以在SPA页面是抓取不到页面通过Ajax获取到的内容，爬虫获取的html，是一个没有数据的空壳子。"),e("li",null,"而SSR，是服务端直接将数据处理好，再拼接组装好，返回一个已经渲染好的页面（数据已经包含在页面中），所以爬虫可以爬取渲染好的页面。")])]),e("li",null,[s("首屏渲染更快 "),e("ul",null,[e("li",null,"SPA页面，需要等所有的Vue编译后的js文件全部下载完成之后，才开始进行页面的渲染，文件下载需要一定的时间，所以首屏渲染需要一定的时间。"),e("li",null,"SSR直接有服务端渲染好页面直接返回显示，不需要等待下载js文件后再去渲染，所以SSR能解决SPA页面首屏渲染时间太长的问题。")])])],-1),i=[n,o];function c(d,u,_,h,p,S){return t(),a("div",null,i)}const x=l(r,[["render",c]]);export{f as __pageData,x as default};
