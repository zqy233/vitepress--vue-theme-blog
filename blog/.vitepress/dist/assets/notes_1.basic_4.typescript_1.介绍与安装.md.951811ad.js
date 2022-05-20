import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.0a216a24.js";
const __pageData = '{"title":"typescript","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F53\u4F1Atypescript","slug":"\u4F53\u4F1Atypescript"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u7F16\u8BD1\u8FD0\u884C","slug":"\u7F16\u8BD1\u8FD0\u884C"},{"level":2,"title":"\u7B80\u5316\u8FD0\u884C","slug":"\u7B80\u5316\u8FD0\u884C"},{"level":2,"title":"\u4F7F\u7528webpack","slug":"\u4F7F\u7528webpack"},{"level":3,"title":"\u914D\u7F6Ewebpack","slug":"\u914D\u7F6Ewebpack"},{"level":3,"title":"\u8BBE\u7F6Etsconfig.json","slug":"\u8BBE\u7F6Etsconfig-json"},{"level":3,"title":"\u8FD0\u884C","slug":"\u8FD0\u884C"}],"relativePath":"notes/1.basic/4.typescript/1.\u4ECB\u7ECD\u4E0E\u5B89\u88C5.md","lastUpdated":1652939653942}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="typescript" tabindex="-1">typescript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>TypeScript</code>\u662F<code>JavaScript</code>\u7684\u4E00\u4E2A\u8D85\u96C6\uFF0C\u652F\u6301 ECMAScript 6 \u6807\u51C6\uFF0C\u662F\u7531\u5FAE\u8F6F\u5F00\u53D1\u7684\u81EA\u7531\u548C\u5F00\u6E90\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8BBE\u8BA1\u76EE\u6807\u662F\u5F00\u53D1\u5927\u578B\u5E94\u7528\uFF0C\u5B83\u53EF\u4EE5\u7F16\u8BD1\u6210\u7EAF JavaScript\uFF0C\u7F16\u8BD1\u51FA\u6765\u7684 JavaScript \u53EF\u4EE5\u8FD0\u884C\u5728\u4EFB\u4F55\u6D4F\u89C8\u5668\u4E0A</p></div><p>\u4E3A\u4EC0\u4E48\u9700\u8981typescript</p><ul><li>\u80FD\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5C31\u53D1\u73B0\u4E00\u4E9B\u6F5C\u5728\u95EE\u9898</li><li>\u4E3A\u7F16\u8F91\u5668(\u5982VSCode)\u63D0\u4F9B\u66F4\u53CB\u597D\u7684\u4EE3\u7801\u63D0\u793A</li><li>\u4EE3\u7801\u66F4\u6E05\u6670(\u5F53\u4F60\u719F\u6089\u4F7F\u7528typescript\u540E)</li></ul><h2 id="\u4F53\u4F1Atypescript" tabindex="-1">\u4F53\u4F1Atypescript <a class="header-anchor" href="#\u4F53\u4F1Atypescript" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u6587\u4EF6\u5939\uFF0C\u521B\u5EFA a.ts \u548C b.ts \u4E24\u4E2A\u6587\u4EF6</p><p>a.ts\u4E2D\u4EE3\u7801\u5982\u4E0B</p><div class="language-ts"><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Big</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">33</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#676E95;font-style:italic;"> \u4E8C\u9009\u4E00: red,blue</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#676E95;font-style:italic;"> \u4E09\u9009\u4E00: 33,99,66</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#676E95;font-style:italic;"> \u4EFB\u610F\u5B57\u7B26\u4E32</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> getData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Big</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>b.ts\u4E2D,\u8F93\u5165<code>import g</code>\uFF0C\u8FD9\u65F6vscode\u5C31\u81EA\u52A8\u63D0\u793A\u4E86<code>getData</code>\u51FD\u6570\u7684\u8DEF\u5F84</p><p>\u5E76\u4E14\u5F53\u6572\u5199getData\u51FD\u6570\u65F6\uFF0C\u4F1A\u63D0\u4F9B\u53C2\u6570\u7C7B\u578B\u63D0\u793A\u4E0E\u7C7B\u578B\u6821\u9A8C</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6572\u5199getData\u51FD\u6570\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4E2D\u6587\u63D0\u793A\uFF0C\u8FD9\u7531doc\u6CE8\u91CA\u8BED\u6CD5\u63D0\u4F9B\u7684\uFF0C\u5176\u642D\u914D<code>typescript</code>\u6548\u679C\u975E\u5E38\u7684\u597D</p><p>\u60F3\u8981\u4F7F\u7528doc\u6CE8\u91CA\u8BED\u6CD5\uFF0C\u53EA\u8981\u5728vscode\u4E2D\u4EE3\u7801\u4E0A\u65B9\u8F93\u5165<code>/**</code>\u5C31\u4F1A\u5F39\u51FA\u76F8\u5E94\u4EE3\u7801\u8865\u5168\u63D0\u793A</p></div><p>\u8FD9\u6837\u5C31\u6700\u7B80\u5355\u7684\u4F53\u4F1A\u5230 typescript \u5F00\u53D1\u7684\u5F3A\u5927\u4E4B\u5904\u4E86</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><blockquote><p>\u9700\u8981\u57FA\u4E8E node \u73AF\u5883</p></blockquote><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5168\u5C40\u5B89\u88C5</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i -g typescript</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770Bts\u7248\u672C\u547D\u4EE4,\u663E\u793A\u7248\u672C\u53F7\u8BF4\u660E\u5B89\u88C5\u6210\u529F</span></span>\n<span class="line"><span style="color:#A6ACCD;">tsc -v</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7F16\u8BD1\u8FD0\u884C" tabindex="-1">\u7F16\u8BD1\u8FD0\u884C <a class="header-anchor" href="#\u7F16\u8BD1\u8FD0\u884C" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939TypeScript\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6app.ts\uFF0C\u5176\u4E2D\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello,world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p><code>TypeScript</code>\u4EE3\u7801\u4E00\u822C\u662F\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884C\u7684\uFF0C\u9700\u8981\u628A\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\u6210<code>JavaScript</code>\u4EE3\u7801\u4EE5\u540E\u624D\u80FD\u8FD0\u884C\uFF0C\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u6765\u8FDB\u884C\u7F16\u8BD1</p><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u7F16\u8BD1app.ts\u6587\u4EF6\uFF0C\u4F1A\u5728app.ts\u540C\u7EA7\u76EE\u5F55\u751F\u6210\u4E00\u4E2Aapp.js\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">tsc app.ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u751F\u6210\u4E00\u4E2Aapp.d.ts\u6269\u5C55\u540D\u7684\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">tsc app.ts --declaration</span></span>\n<span class="line"></span></code></pre></div><p>\u76EE\u5F55\u7ED3\u6784</p><div class="language-sh"><pre><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- TypeScript</span></span>\n<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- app.js</span></span>\n<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- app.ts</span></span>\n<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">-- app.d.ts</span></span>\n<span class="line"></span></code></pre></div><p>tsc \u5E38\u7528\u7F16\u8BD1\u53C2\u6570\u5982\u4E0B\u8868\u6240\u793A\uFF1A</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">--help  \u663E\u793A\u5E2E\u52A9\u4FE1\u606F</span></span>\n<span class="line"><span style="color:#A6ACCD;">--module \u8F7D\u5165\u6269\u5C55\u6A21\u5757</span></span>\n<span class="line"><span style="color:#A6ACCD;">--target \u8BBE\u7F6EECMA\u7248\u672C</span></span>\n<span class="line"><span style="color:#A6ACCD;">--declaration \u751F\u6210.d.ts\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">--removeComments \u5220\u9664\u6587\u4EF6\u7684\u6CE8\u91CA</span></span>\n<span class="line"><span style="color:#A6ACCD;">--out \u7F16\u8BD1\u591A\u4E2A\u6587\u4EF6\u5E76\u5408\u5E76\u5230\u4E00\u4E2A\u8F93\u51FA\u7684\u6587\u4EF6</span></span>\n<span class="line"></span></code></pre></div><p>\u8FD0\u884Capp.js</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">node app.js</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8F93\u51FA</span></span>\n<span class="line"><span style="color:#A6ACCD;">Hello,world</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7B80\u5316\u8FD0\u884C" tabindex="-1">\u7B80\u5316\u8FD0\u884C <a class="header-anchor" href="#\u7B80\u5316\u8FD0\u884C" aria-hidden="true">#</a></h2><p>\u5982\u679C\u8981\u8FD0\u884C\u4E00\u4E2A<code>.ts</code>\u6587\u4EF6\uFF0C\u9996\u5148\u9700\u8981\u4F7F\u7528<code>tsc</code>\u547D\u4EE4\u53BB\u7F16\u8BD1\u5B83\u4E3A<code>js</code>\u6587\u4EF6\uFF0C\u968F\u540E\u518D\u4F7F\u7528<code>node</code>\u547D\u4EE4\u53BB\u6267\u884C\u5B83</p><p>\u90A3\u4E48\u6709\u6CA1\u6709\u4E00\u79CD\u5DE5\u5177\u80FD\u591F\u4E00\u6B65\u5B8C\u6210\u4EE5\u4E0A\u4E8B\u60C5\u5462\uFF1F\u53EF\u4EE5\u5168\u5C40\u5B89\u88C5<code>ts-node</code>\u5DE5\u5177</p><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5ts-node</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i ts-node -g</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u5B8C\u6BD5\uFF0C\u67E5\u770B\u7248\u672C\u53F7\uFF0C\u51FA\u73B0\u7248\u672C\u53F7\u8BF4\u660E\u5B89\u88C5\u6210\u529F</span></span>\n<span class="line"><span style="color:#A6ACCD;">ts-node -v</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u76F4\u63A5\u8FD0\u884Cts\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">ts-node demo.ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8F93\u51FA</span></span>\n<span class="line"><span style="color:#A6ACCD;">Hello,world</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528webpack" tabindex="-1">\u4F7F\u7528webpack <a class="header-anchor" href="#\u4F7F\u7528webpack" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u6253\u5305\u5DE5\u5177\u6765\u642D\u5EFA\u5F00\u53D1ts\u7684\u73AF\u5883</p><h3 id="\u914D\u7F6Ewebpack" tabindex="-1">\u914D\u7F6Ewebpack <a class="header-anchor" href="#\u914D\u7F6Ewebpack" aria-hidden="true">#</a></h3><p>\u4E0B\u8F7Dwebpack</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D webpack webpack-cli </span></span>\n<span class="line"></span></code></pre></div><p>\u4E0B\u8F7Dwebpack\u63D2\u4EF6</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D html-webpack-plugin clean-webpack-plugin webpack-dev-server</span></span>\n<span class="line"></span></code></pre></div><p>\u4E0B\u8F7Dts-loader</p><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D ts-loader</span></span>\n<span class="line"></span></code></pre></div><p>\u65B0\u5EFAsrc\u6587\u4EF6\u5939\uFF0C\u5728\u5176\u4E0B\u65B0\u5EFAindex.ts,\u4EE3\u7801\u5982\u4E0B</p><div class="language-ts"><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello,world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>\u65B0\u5EFA<code>webpack.config.js</code></p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u7528\u4E8E\u6253\u5305\u5B8C\u751F\u6210\u4E00\u4E2Ahtml\u6587\u4EF6\uFF0C\u5E76\u81EA\u52A8\u5F15\u5165\u5165\u53E3js</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> HTMLWebpackPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">html-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u56E0\u4E3Awebpack\u9ED8\u8BA4\u6253\u5305\u540E\u662F\u66FF\u6362\u539F\u6765\u7684\u540C\u540D\u6587\u4EF6\uFF0C\u5982\u679Cdist\u4E2D\u5B58\u5728\u4E00\u4E9B\u4E4B\u524D\u751F\u6210\u7684\u6587\u4EF6\uFF0C\u800C\u4E4B\u540E\u4E0D\u4F1A\u518D\u751F\u6210\u7684\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u7406\u8BBA\u4E0A\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9700\u8981\u53BB\u624B\u52A8\u786E\u8BA4\u548C\u5220\u9664\uFF0C\u663E\u7136\u662F\u5F88\u7E41\u7410\u7684\uFF0CCleanWebpackPlugin\u63D2\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u6253\u5305\u524D\u6E05\u7A7Adist\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> CleanWebpackPlugin </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clean-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">development</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/index.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">output</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bundle.js</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ]</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CleanWebpackPlugin</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HTMLWebpackPlugin</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extensions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>\u8BBE\u7F6Epackage.json</p><div class="language-json"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack serve --open </span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u8BBE\u7F6Etsconfig-json" tabindex="-1">\u8BBE\u7F6Etsconfig.json <a class="header-anchor" href="#\u8BBE\u7F6Etsconfig-json" aria-hidden="true">#</a></h3><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ESNext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ESNext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sourceMap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:false</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u8FD0\u884C" tabindex="-1">\u8FD0\u884C <a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code><span class="line"><span style="color:#A6ACCD;">yarn dev</span></span>\n<span class="line"></span></code></pre></div><p>webpack\u4F1A\u8BFB\u53D6webpack.config.js\u4E2D\u914D\u7F6E\uFF0C\u4E4B\u540Ewebpack\u542F\u52A8\u4E00\u4E2A\u70ED\u66F4\u65B0\u7684\u670D\u52A1\u5668\uFF0C\u901A\u8FC7\u76D1\u542C\u5165\u53E3\u7684ts\u6587\u4EF6\u4EE5\u53CA\u4ED6\u6240\u6709\u7684\u5F15\u7528ts\u6587\u4EF6\u7684\u4EE3\u7801\u53D8\u5316\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E2A\u66F4\u9AD8\u6548\u7684\u5F00\u53D1\u73AF\u5883</p>', 50);
const _hoisted_51 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_51);
}
var _1______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1______ as default };
