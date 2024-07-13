import{_ as e,o as t,c as a,a as p}from"./app.bfa9bd4b.js";const m=JSON.parse('{"title":"创建组件库","description":"","frontmatter":{},"headers":[{"level":2,"title":"笔记来自掘金文章（使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库）","slug":"笔记来自掘金文章-使用vite和typescript带你从零打造一个属于自己的vue3组件库","link":"#笔记来自掘金文章-使用vite和typescript带你从零打造一个属于自己的vue3组件库","children":[]},{"level":2,"title":"Monorepo","slug":"monorepo","link":"#monorepo","children":[]}],"relativePath":"1.基础/7.创建前端项目/创建组件库.md","lastUpdated":1720835436686}'),r={name:"1.基础/7.创建前端项目/创建组件库.md"},n=p('<h1 id="创建组件库" tabindex="-1">创建组件库 <a class="header-anchor" href="#创建组件库" aria-hidden="true">#</a></h1><h2 id="笔记来自掘金文章-使用vite和typescript带你从零打造一个属于自己的vue3组件库" tabindex="-1">笔记来自掘金文章（使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库） <a class="header-anchor" href="#笔记来自掘金文章-使用vite和typescript带你从零打造一个属于自己的vue3组件库" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7117886038126624805" target="_blank" rel="noreferrer">https://juejin.cn/post/7117886038126624805</a></li></ul><h2 id="monorepo" tabindex="-1">Monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h2><p>Monorepo指在一个大的项目仓库中，管理多个模块/包（package），这种类型的项目大都在项目根目录下有一个packages文件夹，分多个项目管理。大概结构如下：</p><p>-- packages -- pkg1 --package.json -- pkg2 --package.json --package.json</p><p>简单来说就是<strong>单仓库 多项目</strong></p><p>目前很多我们熟知的项目都是采用这种模式，如Vant，ElementUI，Vue3等。打造一个Monorepo环境的工具有很多，如：lerna、pnpm、yarn等，这里我们将使用pnpm来开发我们的UI组件库。</p><p>为什么要使用pnpm?</p><p>因为它简单高效，它没有太多杂乱的配置，它相比于lerna操作起来方便太多</p>',10),o=[n];function i(s,c,l,_,d,h){return t(),a("div",null,o)}const g=e(r,[["render",i]]);export{m as __pageData,g as default};
