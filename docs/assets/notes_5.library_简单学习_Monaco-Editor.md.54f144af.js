import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u521D\u59CB\u5316\u7F16\u8F91\u5668","slug":"\u521D\u59CB\u5316\u7F16\u8F91\u5668"},{"level":2,"title":"\u6CE8\u518C\u4E3B\u9898","slug":"\u6CE8\u518C\u4E3B\u9898"},{"level":2,"title":"\u6CE8\u518C\u4E3B\u9898","slug":"\u6CE8\u518C\u4E3B\u9898-1"}],"relativePath":"notes/5.library/\u7B80\u5355\u5B66\u4E60/Monaco-Editor.md"}');
const _sfc_main = { name: "notes/5.library/\u7B80\u5355\u5B66\u4E60/Monaco-Editor.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h1><blockquote><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fmicrosoft.github.io%2Fmonaco-editor%2F" target="_blank" rel="noopener noreferrer">Monaco Editor</a> \u662F <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode" target="_blank" rel="noopener noreferrer">VS Code</a> \u5E95\u5C42\u7684\u4EE3\u7801\u7F16\u8F91\u5668\uFF0C\u5F00\u6E90\u534F\u8BAE\u662FMIT\uFF0C\u652F\u6301Edge\u3001 Chrome\u3001Firefox\u3001Safari\u548COpera\u6D4F\u89C8\u5668\uFF0C\u4F46\u662F\u4E0D\u652F\u6301\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u6216\u79FB\u52A8\u7AEF\u6846\u67B6</p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install monaco-editor </span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> monaco </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">monaco-editor/esm/vs/editor/editor.main.js</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u521D\u59CB\u5316\u7F16\u8F91\u5668" tabindex="-1">\u521D\u59CB\u5316\u7F16\u8F91\u5668 <a class="header-anchor" href="#\u521D\u59CB\u5316\u7F16\u8F91\u5668" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u521D\u59CB\u5316\u7684dom\u8282\u70B9</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> monacoEditor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> monaco</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(targetDom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u521D\u59CB\u5316\u503C     </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">readOnly</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u662F\u5426\u53EA\u8BFB</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8BED\u8A00\u7C7B\u578B     </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vs-dark</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4E3B\u9898 </span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u521D\u59CB\u5316\u7F16\u8F91\u5668\u7684\u503C </span></span>\n<span class="line"><span style="color:#A6ACCD;">monacoEditor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setValue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">{&quot;key&quot;:&quot;value&quot;}</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">) </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u83B7\u53D6\u4EF6\u7F16\u8F91\u5668\u7684\u503C </span></span>\n<span class="line"><span style="color:#A6ACCD;">monacoEditor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getValue</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u6CE8\u9500\u7F16\u8F91\u5668\u5B9E\u4F8B </span></span>\n<span class="line"><span style="color:#A6ACCD;">monacoEditor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispose</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6CE8\u518C\u4E3B\u9898" tabindex="-1">\u6CE8\u518C\u4E3B\u9898 <a class="header-anchor" href="#\u6CE8\u518C\u4E3B\u9898" aria-hidden="true">#</a></h2><h2 id="\u6CE8\u518C\u4E3B\u9898-1" tabindex="-1">\u6CE8\u518C\u4E3B\u9898 <a class="header-anchor" href="#\u6CE8\u518C\u4E3B\u9898-1" aria-hidden="true">#</a></h2><p>\u4E3B\u9898\u7684\u914D\u7F6E\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 monaco-editor \u4E2D\u5B9A\u4E49\u5C5E\u4E8E\u6211\u4EEC\u7684\u4E3B\u9898\u4E86\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> monaco </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">monaco-editor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> theme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../lib/markdownEx-theme.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">monaco</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineTheme</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acrmd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> theme)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mdEditor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> monaco</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">editor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(containerDom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acrmd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div>', 12);
const _hoisted_13 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}
var MonacoEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, MonacoEditor as default };
