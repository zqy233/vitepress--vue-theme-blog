import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.4462bc8e.js";
const __pageData = '{"title":"\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F","slug":"\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F"},{"level":2,"title":"\u6628\u5929","slug":"\u6628\u5929"}],"relativePath":"notes/5.library/\u7B80\u5355\u5B66\u4E60/dayjs.md","lastUpdated":1656572618632}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F" tabindex="-1">\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F <a class="header-anchor" href="#\u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u7684\u65E5\u671F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u5468\u4E94</span></span>\n<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">startDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startOf</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">week</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">YYYY-MM-DD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0B\u5468\u56DB</span></span>\n<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">endDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startOf</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">week</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">YYYY-MM-DD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getMainNetOverhual</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6628\u5929" tabindex="-1">\u6628\u5929 <a class="header-anchor" href="#\u6628\u5929" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">subtract</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">YYYY-MM-DD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>', 4);
const _hoisted_5 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_5);
}
var dayjs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, dayjs as default };
