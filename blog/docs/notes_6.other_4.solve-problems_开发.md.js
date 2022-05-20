"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u5F00\u53D1","description":"","frontmatter":{},"headers":[{"level":2,"title":"Critical dependency: the request of a dependency is an expression","slug":"critical-dependency-the-request-of-a-dependency-is-an-expression"},{"level":2,"title":"** is defined but never used eslint","slug":"is-defined-but-never-used-eslint"},{"level":2,"title":"for division is deprecated and will be removed in Dart Sass 2.0.0","slug":"for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0"}],"relativePath":"notes/6.other/4.solve-problems/\u5F00\u53D1.md","lastUpdated":1652939654003}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u5F00\u53D1" tabindex="-1">\u5F00\u53D1 <a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a></h1><p>\u8BB0\u5F55\u5F00\u53D1\u9047\u5230\u7684\u95EE\u9898</p><h2 id="critical-dependency-the-request-of-a-dependency-is-an-expression" tabindex="-1">Critical dependency: the request of a dependency is an expression <a class="header-anchor" href="#critical-dependency-the-request-of-a-dependency-is-an-expression" aria-hidden="true">#</a></h2><p>vite\u4E2Drequire\u4E86\u4E00\u4E2A\u8868\u8FBE\u5F0F , \u6539\u4E3A\u5B57\u7B26\u4E32\u5373\u53EF</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">require</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">\`\${</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">path</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}\`</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span>
<span class="line"></span></code></pre></div><h2 id="is-defined-but-never-used-eslint" tabindex="-1">** is defined but never used eslint <a class="header-anchor" href="#is-defined-but-never-used-eslint" aria-hidden="true">#</a></h2><p>eslint\u6821\u9A8C\u672A\u4F7F\u7528\u53D8\u91CF\uFF0Csettings.json\u4E2D\u5173\u95ED\u6821\u9A8C</p><div class="language-json"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">eslintConfig</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">: </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">root</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">true,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">env</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">node</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">true</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">extends</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">[</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">plugin:vue/essential</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">eslint:recommended</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">],</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">parserOptions</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">parser</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">babel-eslint</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">rules</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">no-unused-vars</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">off</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">vue/valid-template-root</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">warn</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span></code></pre></div><h2 id="for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0" tabindex="-1">for division is deprecated and will be removed in Dart Sass 2.0.0 <a class="header-anchor" href="#for-division-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0" aria-hidden="true">#</a></h2><p>sass\u7248\u672C\u51FA\u73B0\u95EE\u9898\uFF0C\u5207\u6362\u56DE\u5408\u9002\u7684\u7248\u672C</p><div class="language-bash"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">npm i -s sass@1.32.6</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/6.other/4.solve-problems/\u5F00\u53D1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var __ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = __;
