"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u6982\u62EC","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6269\u5C55\u80FD\u505A\u4EC0\u4E48\uFF1F","slug":"\u6269\u5C55\u80FD\u505A\u4EC0\u4E48\uFF1F"}],"relativePath":"notes/4.vscode/2.\u63D2\u4EF6API\u6982\u62EC/\u6982\u62EC.md","lastUpdated":1652939653978}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u6982\u62EC" tabindex="-1">\u6982\u62EC <a class="header-anchor" href="#\u6982\u62EC" aria-hidden="true">#</a></h1><p>VSCode\u7684\u6784\u5EFA\u8003\u8651\u4E86\u53EF\u6269\u5C55\u6027\u3002\u4ECEUI\u5230\u7F16\u8F91\u4F53\u9A8C\uFF0CVSCode\u7684\u51E0\u4E4E\u6240\u6709\u90E8\u5206\u90FD\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6API\u8FDB\u884C\u5B9A\u5236\u548C\u589E\u5F3A\u3002\u4E8B\u5B9E\u4E0A\uFF0CVSCode\u7684\u8BB8\u591A\u6838\u5FC3\u529F\u80FD\u90FD\u662F\u4F5C\u4E3A\u63D2\u4EF6\u6784\u5EFA\u7684\uFF0C\u5E76\u4F7F\u7528\u540C\u6837\u7684\u63D2\u4EF6API</p><p>\u672C\u6587\u6863\u63CF\u8FF0\u4E86\uFF1A</p><ul><li>\u5982\u4F55\u6784\u5EFA\u3001\u8FD0\u884C\u3001\u8C03\u8BD5\u3001\u6D4B\u8BD5\u548C\u53D1\u5E03\u6269\u5C55</li><li>\u5982\u4F55\u5229\u7528VSCode\u4E30\u5BCC\u7684\u63D2\u4EF6API</li><li>\u5728\u54EA\u53EF\u4EE5\u627E\u5230\u5E2E\u52A9\u5165\u95E8\u7684\u6307\u5357\u548C\u4EE3\u7801\u793A\u4F8B</li><li>\u9075\u5FAA\u6700\u4F73\u5B9E\u8DF5\u6269\u5C55\u6307\u5357</li></ul><p>\u4EE3\u7801\u793A\u4F8B\u53EF\u5728<a href="https://github.com/microsoft/vscode-extension-samples" target="_blank" rel="noopener noreferrer">Microsoft/vscode extension samples</a>\u4E0A\u83B7\u5F97</p><p>\u5982\u679C\u60A8\u6B63\u5728\u5BFB\u627E\u5DF2\u53D1\u5E03\u7684\u63D2\u4EF6\uFF0C\u8BF7\u524D\u5F80VSCode\u63D2\u4EF6\u5E02\u573A</p><h2 id="\u6269\u5C55\u80FD\u505A\u4EC0\u4E48\uFF1F" tabindex="-1">\u6269\u5C55\u80FD\u505A\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#\u6269\u5C55\u80FD\u505A\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u4F7F\u7528\u63D2\u4EF6API\u53EF\u4EE5\u5B9E\u73B0\u7684\u793A\u4F8B\uFF1A</p><ul><li>\u4F7F\u7528\u989C\u8272\u6216\u6587\u4EF6\u56FE\u6807\u4E3B\u9898\u66F4\u6539VSCode\u7684\u5916\u89C2-\u4E3B\u9898\u5316</li><li>\u5728UI\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u548C\u89C6\u56FE-\u6269\u5C55\u5DE5\u4F5C\u53F0</li><li>\u521B\u5EFAWebview\u4EE5\u663E\u793A\u4F7F\u7528HTML/CSS/JS\u6784\u5EFA\u7684\u81EA\u5B9A\u4E49\u7F51\u9875-Webview\u6307\u5357</li><li>\u652F\u6301\u65B0\u7684\u7F16\u7A0B\u8BED\u8A00-\u8BED\u8A00\u6269\u5C55\u6982\u8FF0</li><li>\u652F\u6301\u8C03\u8BD5\u7279\u5B9A\u7684\u8FD0\u884C\u65F6-\u8C03\u8BD5\u5668\u6269\u5C55\u6307\u5357</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/4.vscode/2.\u63D2\u4EF6API\u6982\u62EC/\u6982\u62EC.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var __ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = __;
