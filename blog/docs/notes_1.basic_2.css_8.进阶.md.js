"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"transform","description":"","frontmatter":{},"headers":[{"level":2,"title":"transform","slug":"transform"},{"level":3,"title":"matrix","slug":"matrix"}],"relativePath":"notes/1.basic/2.css/8.\u8FDB\u9636.md","lastUpdated":1652939653927}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-hidden="true">#</a></h2><ul><li>translate\uFF08\u5E73\u79FB\uFF09</li><li>skew\uFF08\u503E\u659C\uFF09</li><li>rotate\uFF08\u65CB\u8F6C\uFF09</li><li>scale\uFF08\u7F29\u653E\uFF09</li><li>matrix\uFF08\u77E9\u9635\u64CD\u4F5C\uFF0C\u53EF\u6DB5\u76D6\u524D\u56DB\u8005\uFF0C\u5A01\u529B\u5341\u5206\u5F3A\u5927\uFF09</li></ul><h3 id="matrix" tabindex="-1">matrix <a class="header-anchor" href="#matrix" aria-hidden="true">#</a></h3><p>CSS\u51FD\u6570 <code>matrix()</code> \u6307\u5B9A\u4E86\u4E00\u4E2A\u7531\u6307\u5B9A\u7684 6 \u4E2A\u503C\u7EC4\u6210\u7684 2D \u53D8\u6362\u77E9\u9635\u3002\u8FD9\u79CD\u77E9\u9635\u7684\u5E38\u91CF\u503C\u662F\u9690\u542B\u7684\uFF0C\u800C\u4E0D\u662F\u7531\u53C2\u6570\u4F20\u9012\u7684\uFF1B\u5176\u4ED6\u7684\u53C2\u6570\u662F\u4EE5\u5217\u4F18\u5148\u7684\u987A\u5E8F\u63CF\u8FF0\u7684\u3002</p><ul><li><p>\u53C2\u65701 \u7F29\u653E\u6BD4\u4F8B</p></li><li><p>\u53C2\u65702 z\u8F74</p></li><li><p>\u53C2\u65703 z\u8F74</p></li><li><p>\u53C2\u65704 z\u8F74</p></li><li><p>\u53C2\u65705 x\u8F74\u4F4D\u7F6E</p></li><li><p>\u53C2\u65706 y\u8F74\u4F4D\u7F6E</p></li></ul><p>\u8FD9\u4E9B\u503C\u8868\u793A\u4EE5\u4E0B\u51FD\u6570:matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">transform</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">matrix</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">0.46</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">0.56</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">468.391</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">424.111</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/1.basic/2.css/8.\u8FDB\u9636.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _8___ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _8___;
