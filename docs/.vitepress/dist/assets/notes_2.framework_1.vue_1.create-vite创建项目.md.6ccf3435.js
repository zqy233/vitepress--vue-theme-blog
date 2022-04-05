import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.9c4d846a.js";
const __pageData = '{"title":"create-vite \u521B\u5EFA\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"vite\u4E2D\u56FE\u7247\u8DEF\u5F84","slug":"vite\u4E2D\u56FE\u7247\u8DEF\u5F84"},{"level":3,"title":"1.\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84","slug":"_1-\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84"},{"level":3,"title":"2.\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84","slug":"_2-\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84"}],"relativePath":"notes/2.framework/1.vue/1.create-vite\u521B\u5EFA\u9879\u76EE.md","lastUpdated":1649080413197}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="create-vite-\u521B\u5EFA\u9879\u76EE" tabindex="-1">create-vite \u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#create-vite-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm init vite</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite</span></span>\n<span class="line"></span></code></pre></div><p>\u8FD9\u8DDF@vue-cli \u6709\u4E86\u660E\u663E\u533A\u522B\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5\u5168\u5C40\u7684\u811A\u624B\u67B6\u547D\u4EE4</p><p>\u539F\u7406\u5728\u4E8E\uFF1Anpm init &lt;initializer&gt;\u547D\u4EE4\u5C06\u4F7F\u7528 npx \u5B89\u88C5\u540D\u4E3A create-&lt;initializer&gt; \u7684 npm \u5305\uFF0C\u5C06\uFF0C\u7136\u540E\u6267\u884C\u5176 package.json \u4E2D bin \u5C5E\u6027\u5BF9\u5E94\u7684\u811A\u672C\uFF0C\u6240\u4EE5\u8BE5\u547D\u4EE4\u5B9E\u9645\u4E0A\u662F\u4F7F\u7528 npx \u8FD0\u884C <a href="https://www.npmjs.com/package/create-vite" target="_blank" rel="noopener noreferrer">create-vite</a> \u8FD9\u4E2A npm \u5305\uFF0C\u4ECE\u800C\u4E0B\u8F7Dvite\u9879\u76EE\u6A21\u677F</p><p>npm init \u547D\u4EE4\u76F8\u5BF9\u5E94\u7684\u4E00\u4E9B\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u7B49\u540C</th></tr></thead><tbody><tr><td>npm init foo</td><td>npx create-foo</td></tr><tr><td>npm init @usr</td><td>npx @usr/create</td></tr><tr><td>npm init @usr/foo</td><td>npx @usr/create-foo</td></tr></tbody></table><blockquote><p>\u53E6\u5916\uFF0C\u53D6\u81EA <a href="https://www.npmjs.com/package/create-vite" target="_blank" rel="noopener noreferrer">create-vite</a> \u5B98\u65B9\u6587\u6863\uFF1A</p></blockquote><blockquote><p>\u517C\u5BB9\u6027\u8BF4\u660E: Vite \u8981\u6C42 Node.js \u7248\u672C &gt;=12.2.0\uFF0C\u4E00\u4E9B\u6A21\u677F\u7684\u6B63\u5E38\u4F7F\u7528\u8FD8\u9700\u8981\u66F4\u9AD8\u7684 Node.js \u7248\u672C, \u6240\u4EE5\u5982\u679C\u60A8\u5728 node \u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u4E86\u76F8\u5E94\u8B66\u544A\uFF0C\u8BF7\u5347\u7EA7</p></blockquote><p>\u76F4\u63A5\u521B\u5EFA\u6A21\u677F</p><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite vue-project-name --template vue</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># npm 7+, extra double-dash is needed:</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite vue-project-name -- --template vue</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite vue-project-name --template vue</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>\n<span class="line"><span style="color:#A6ACCD;">pnpm create vite vue-project-name -- --template vue</span></span>\n<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u652F\u6301typescript\u7684\u6A21\u677F</p><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite vue-project-name --template vue-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># npm 7+, extra double-dash is needed:</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm create vite vue-project-name -- --template vue-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn create vite vue-project-name --template vue-ts</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>\n<span class="line"><span style="color:#A6ACCD;">pnpm create vite vue-project-name -- --template vue-ts</span></span>\n<span class="line"></span></code></pre></div><p>\u8DDF vue-cli \u4E0D\u540C\u7684\uFF0C\u9700\u8981\u8FDB\u5165\u76EE\u5F55\u540E\u81EA\u884C\u4E0B\u8F7D\u4F9D\u8D56</p><div class="language-sh"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165\u9879\u76EE\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> vue-project-name</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528vscode\u6253\u5F00\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">code ./</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FD0\u884C\u9879\u76EE</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>\n<span class="line"></span></code></pre></div><h2 id="vite\u4E2D\u56FE\u7247\u8DEF\u5F84" tabindex="-1">vite\u4E2D\u56FE\u7247\u8DEF\u5F84 <a class="header-anchor" href="#vite\u4E2D\u56FE\u7247\u8DEF\u5F84" aria-hidden="true">#</a></h2><h3 id="_1-\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84" tabindex="-1">1.\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84 <a class="header-anchor" href="#_1-\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/assets/img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>\n<span class="line"></span></code></pre></div><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../assets/img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="_2-\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84" tabindex="-1">2.\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84 <a class="header-anchor" href="#_2-\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84" aria-hidden="true">#</a></h3><p>\u56E0\u4E3Avite\u4E2D\u6CA1\u6709require\uFF0C\u52A8\u6001\u7ED1\u5B9A\u8DEF\u5F84\u53EF\u4EE5\u4F7F\u7528vite\u7279\u5B9A\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0Cmain.ts\u4E2D\u5B9A\u4E49\u76F8\u5E94\u5168\u5C40\u51FD\u6570</p><div class="language-ts"><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">template</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">src</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">requireImg(&#39;logo.png&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /&gt;&lt;/</span><span style="color:#FFCB6B;">template</span><span style="color:#A6ACCD;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> requireImg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">/src/assets/</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}`</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modules</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">globEager</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/src/assets/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modules</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">path</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div>', 22);
const _hoisted_23 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_23);
}
var _1_createVite____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1_createVite____ as default };
