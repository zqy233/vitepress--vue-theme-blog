"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"mongodb","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D","slug":"\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D"},{"level":2,"title":"\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4E3Abin\u76EE\u5F55","slug":"\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4E3Abin\u76EE\u5F55"},{"level":2,"title":"\u7B2C\u4E09\u6B65\uFF0Cmongodb\u5B89\u88C5\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Amongo.config\u914D\u7F6E\u6587\u4EF6","slug":"\u7B2C\u4E09\u6B65\uFF0Cmongodb\u5B89\u88C5\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Amongo-config\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"\u7B2C\u56DB\u6B65\uFF0C\u521B\u5EFA\u51E0\u4E2A\u6587\u4EF6\u5939","slug":"\u7B2C\u56DB\u6B65\uFF0C\u521B\u5EFA\u51E0\u4E2A\u6587\u4EF6\u5939"},{"level":2,"title":"\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8mongodb\u670D\u52A1","slug":"\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8mongodb\u670D\u52A1"},{"level":2,"title":"\u7B2C\u516D\u6B65\uFF0C\u901A\u8FC7windows\u670D\u52A1\u6765\u7BA1\u7406MongoDB\u7684\u542F\u52A8\u548C\u5173\u95ED","slug":"\u7B2C\u516D\u6B65\uFF0C\u901A\u8FC7windows\u670D\u52A1\u6765\u7BA1\u7406mongodb\u7684\u542F\u52A8\u548C\u5173\u95ED"},{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"}],"relativePath":"notes/6.other/3.just-start/2.mongodb.md","lastUpdated":1652939654001}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="mongodb" tabindex="-1">mongodb <a class="header-anchor" href="#mongodb" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>MongoDB\u662F\u4E00\u4E2A\u57FA\u4E8E\u5206\u5E03\u5F0F\u6587\u4EF6\u5B58\u50A8\u7684\u6570\u636E\u5E93\u3002\u7531 C++ \u8BED\u8A00\u7F16\u5199\u3002\u65E8\u5728\u4E3A WEB \u5E94\u7528\u63D0\u4F9B\u53EF\u6269\u5C55\u7684\u9AD8\u6027\u80FD\u6570\u636E\u5B58\u50A8\u89E3\u51B3\u65B9\u6848\uFF0C\u4E00\u4E2A\u4ECB\u4E8E\u5173\u7CFB\u6570\u636E\u5E93\u548C\u975E\u5173\u7CFB\u6570\u636E\u5E93\u4E4B\u95F4\u7684\u4EA7\u54C1\uFF0C\u662F\u975E\u5173\u7CFB\u6570\u636E\u5E93\u5F53\u4E2D\u529F\u80FD\u6700\u4E30\u5BCC\uFF0C\u6700\u50CF\u5173\u7CFB\u6570\u636E\u5E93\u7684</p></div><h2 id="\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D" tabindex="-1">\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D <a class="header-anchor" href="#\u7B2C\u4E00\u6B65\uFF0C\u4E0B\u8F7D" aria-hidden="true">#</a></h2><h2 id="\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4E3Abin\u76EE\u5F55" tabindex="-1">\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4E3Abin\u76EE\u5F55 <a class="header-anchor" href="#\u7B2C\u4E8C\u6B65\uFF0C\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4E3Abin\u76EE\u5F55" aria-hidden="true">#</a></h2><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5168\u5C40\u4F7F\u7528mongo\u547D\u4EE4\u4E86\uFF0C\u800C\u4E0D\u662F\u53EA\u80FD\u5728mongo\u7684bin\u76EE\u5F55\u4E0B\u4F7F\u7528</p><h2 id="\u7B2C\u4E09\u6B65\uFF0Cmongodb\u5B89\u88C5\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Amongo-config\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u7B2C\u4E09\u6B65\uFF0Cmongodb\u5B89\u88C5\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Amongo.config\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u7B2C\u4E09\u6B65\uFF0Cmongodb\u5B89\u88C5\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Amongo-config\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u6570\u636E\u5E93\u8DEF\u5F84</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">dbpath=D:\\manager\\mongo\\data\\db</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u65E5\u5FD7\u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">logpath=D:\\manager\\mongo\\data\\logs\\mongolog.log</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u9519\u8BEF\u65E5\u5FD7\u91C7\u7528\u8FFD\u52A0\u6A21\u5F0F</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">logappend=true</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u542F\u7528\u65E5\u5FD7\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u542F\u7528</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">journal=true</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u8FD9\u4E2A\u9009\u9879\u53EF\u4EE5\u8FC7\u6EE4\u6389\u4E00\u4E9B\u65E0\u7528\u7684\u65E5\u5FD7\u4FE1\u606F\uFF0C\u82E5\u9700\u8981\u8C03\u8BD5\u4F7F\u7528\u8BF7\u8BBE\u7F6E\u4E3Afalse</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">quiet=true</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">#\u7AEF\u53E3\u53F7 \u9ED8\u8BA4\u4E3A27017</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">port=27017 </span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B2C\u56DB\u6B65\uFF0C\u521B\u5EFA\u51E0\u4E2A\u6587\u4EF6\u5939" tabindex="-1">\u7B2C\u56DB\u6B65\uFF0C\u521B\u5EFA\u51E0\u4E2A\u6587\u4EF6\u5939 <a class="header-anchor" href="#\u7B2C\u56DB\u6B65\uFF0C\u521B\u5EFA\u51E0\u4E2A\u6587\u4EF6\u5939" aria-hidden="true">#</a></h2><p>\u5177\u4F53\u5982\u4E0B\uFF1A\u6570\u636E\u5E93\u8DEF\u5F84\uFF08data\u76EE\u5F55\uFF09\u3001\u65E5\u5FD7\u8DEF\u5F84\uFF08logs\u76EE\u5F55\uFF09\u548C\u65E5\u5FD7\u6587\u4EF6\uFF08logs/mongolog.log\u6587\u4EF6\uFF09</p><h2 id="\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8mongodb\u670D\u52A1" tabindex="-1">\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8mongodb\u670D\u52A1 <a class="header-anchor" href="#\u7B2C\u4E94\u6B65\uFF0C\u542F\u52A8mongodb\u670D\u52A1" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">mongod --config D:\\manager\\mongo\\mongo.config</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7B2C\u516D\u6B65\uFF0C\u901A\u8FC7windows\u670D\u52A1\u6765\u7BA1\u7406mongodb\u7684\u542F\u52A8\u548C\u5173\u95ED" tabindex="-1">\u7B2C\u516D\u6B65\uFF0C\u901A\u8FC7windows\u670D\u52A1\u6765\u7BA1\u7406MongoDB\u7684\u542F\u52A8\u548C\u5173\u95ED <a class="header-anchor" href="#\u7B2C\u516D\u6B65\uFF0C\u901A\u8FC7windows\u670D\u52A1\u6765\u7BA1\u7406mongodb\u7684\u542F\u52A8\u548C\u5173\u95ED" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">mongod \u2013config \u201CD:\\manager\\mongo\\mongo.config\u201D \u2013install \u2013serviceName \u201CMongoDB\u201D</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">net start MongoDB </span></span>
<span class="line"></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"># \u5220\u9664windows\u670D\u52A1</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">mongod \u2013config \u201CD:\\manager\\mongo\\mongo.config\u201D \u2013remove \u2013serviceName \u201CMongoDB\u201D</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">net stop MongoDB</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><p>MongoDB\u548Cmongoose\u517C\u5BB9\u7248\u672C</p><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 2.4.x: mongoose ^3.8 or 4.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 2.6.x: mongoose ^3.8.8 or 4.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 3.0.x: mongoose ^3.8.22, 4.x, or 5.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 3.2.x: mongoose ^4.3.0 or 5.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 3.4.x: mongoose ^4.7.3 or 5.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 3.6.x: mongoose 5.x</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">MongoDB Server 4.0.x: mongoose ^5.2.0</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"># \u4F7F\u7528test\u6570\u636E\u5E93\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u521B\u5EFA\u5E76\u4F7F\u7528</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">use </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">test</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"># \u67E5\u770B\u6240\u6709\u6570\u636E\u5E93</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">show dbs</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"># \u67E5\u770Bmongodb\u7248\u672C</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">db.version</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">()</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">mongod --dbpath </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">D:\\manager\\mongo\\data\\db</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> --logpath </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">D:\\manager\\mongo\\data\\Logs\\MongoDB.log</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> --install --serviceName </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">MongoDB</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/6.other/3.just-start/2.mongodb.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _2_mongodb = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _2_mongodb;
