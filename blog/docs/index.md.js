"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
var index_md_vue_type_style_index_0_scoped_true_lang = "";
const __pageData = '{"title":"","description":"","frontmatter":{"page":true,"footer":false},"relativePath":"index.md","lastUpdated":1652939653922}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)} data-v-37d9b512><section id="hero" data-v-37d9b512><div class="tagline" data-v-37d9b512><span class="accent" data-v-37d9b512>\u4E2A\u4EBA\u7B14\u8BB0</span><br data-v-37d9b512><p data-v-37d9b512>fork from @vue/theme</p></div><p class="description" data-v-37d9b512></p><p class="actions" data-v-37d9b512><a class="get-started" href="/vite-vue-blog/notes/1.basic/1.html/1.\u57FA\u7840" data-v-37d9b512>\u5FEB\u901F\u5F00\u59CB <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-37d9b512><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-37d9b512></path></svg></a></p></section><section id="highlights" class="vt-box-container" data-v-37d9b512><div class="vt-box" data-v-37d9b512><h2 data-v-37d9b512>\u6613\u5B66\u6613\u7528</h2><p data-v-37d9b512>\u57FA\u4E8Evue,\u4F7F\u7528vitepress\u4E0E@vue/theme</p></div><div class="vt-box" data-v-37d9b512><h2 data-v-37d9b512>\u6027\u80FD\u51FA\u8272</h2><p data-v-37d9b512>\u57FA\u4E8Evite\uFF0C\u6309\u9700\u52A0\u8F7D\uFF0C\u6027\u80FD\u51FA\u8272\uFF0C\u6781\u901F\u66F4\u65B0\u6587\u6863</p></div><div class="vt-box" data-v-37d9b512><h2 data-v-37d9b512>\u4E3B\u9898\u6E32\u67D3</h2><p data-v-37d9b512>\u6839\u636E\u914D\u7F6E\u6E32\u67D3\u9875\u9762\uFF0C\u4EA6\u53EF\u9009\u62E9\u4E3B\u9898\u4E0E\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898</p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-37d9b512"]]);
exports.__pageData = __pageData;
exports["default"] = index;
