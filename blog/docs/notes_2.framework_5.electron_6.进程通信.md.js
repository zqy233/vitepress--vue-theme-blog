"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B","slug":"\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B"},{"level":2,"title":"\u6E32\u67D3\u8FDB\u7A0BRenderer","slug":"\u6E32\u67D3\u8FDB\u7A0Brenderer"},{"level":2,"title":"ipc","slug":"ipc"},{"level":2,"title":"ipcMain","slug":"ipcmain"}],"relativePath":"notes/2.framework/5.electron/6.\u8FDB\u7A0B\u901A\u4FE1.md","lastUpdated":1652939653967}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><blockquote><p>Electron\u4E2D\u6709\u4E24\u4E2A\u8FDB\u7A0B\uFF0C\u5206\u522B\u662F<code>Main</code>\u4E3B\u8FDB\u7A0B\u548C<code>Renderer</code>\u6E32\u67D3\u8FDB\u7A0B\u3002\u4E24\u4E2A\u8FDB\u7A0B\u95F4\u6709\u591A\u79CD\u65B9\u6CD5\u8FDB\u884C\u901A\u4FE1</p></blockquote><h2 id="\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B" tabindex="-1">\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B <a class="header-anchor" href="#\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B" aria-hidden="true">#</a></h2><p>main.js\u5728\u542F\u52A8\u5E94\u7528\u540E\u5C31\u521B\u5EFA\u4E86\u4E00\u4E2A\u4E3B\u8FDB\u7A0Bmain process\uFF0C\u5B83\u53EF\u4EE5\u901A\u8FC7electron\u4E2D\u7684\u4E00\u4E9B\u6A21\u5757\u76F4\u63A5\u4E0E\u539F\u751FGUI\uFF08\u5728\u4F60\u7684\u5E94\u7528\u7A97\u53E3\uFF09\u4EA4\u4E92</p><h2 id="\u6E32\u67D3\u8FDB\u7A0Brenderer" tabindex="-1">\u6E32\u67D3\u8FDB\u7A0B<code>Renderer</code> <a class="header-anchor" href="#\u6E32\u67D3\u8FDB\u7A0Brenderer" aria-hidden="true">#</a></h2><p>\u4EC5\u542F\u52A8\u4E3B\u8FDB\u7A0B\u5E76\u4E0D\u80FD\u7ED9\u4F60\u7684\u5E94\u7528\u521B\u5EFA\u5E94\u7528\u7A97\u53E3\u3002\u7A97\u53E3\u662F\u901A\u8FC7main\u6587\u4EF6\u91CC\u7684\u4E3B\u8FDB\u7A0B\u8C03\u7528\u53EB<code>BrowserWindow</code>\u7684\u6A21\u5757\u521B\u5EFA\u7684\u3002\u6BCF\u4E2A\u9875\u9762\u90FD\u662F\u8FD0\u884C\u5728\u81EA\u5DF1\u7684\u8FDB\u7A0B\u91CC\uFF0C\u8FD9\u4E9B\u8FDB\u7A0B\u6211\u4EEC\u79F0\u4E4B\u4E3A\u6E32\u67D3\u8FDB\u7A0B\u3002\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u5728\u7A97\u53E3\u4E2D\u6E32\u67D3\u51FAweb\u9875\u9762\uFF08\u5F15\u7528\u4E86CSS\uFF0CJavaScript\uFF0C\u56FE\u7247\u7B49\u7684HTML\u6587\u4EF6\uFF09\u3002web\u9875\u9762\u662FChromium\u6E32\u67D3\u7684\uFF0C\u56E0\u4E3A\u5404\u7CFB\u7EDF\u4E0B\u6807\u51C6\u662F\u7EDF\u4E00\u7684\u7684\uFF0C\u6240\u4EE5\u517C\u5BB9\u6027\u5F88\u597D</p><h2 id="ipc" tabindex="-1"><code>ipc</code> <a class="header-anchor" href="#ipc" aria-hidden="true">#</a></h2><ul><li><code>ipcMain</code>\u6A21\u5757</li><li><code>ipcRenderer</code>\u6A21\u5757</li></ul><h2 id="ipcmain" tabindex="-1">ipcMain <a class="header-anchor" href="#ipcmain" aria-hidden="true">#</a></h2><div class="language-"><pre><code>
</code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/2.framework/5.electron/6.\u8FDB\u7A0B\u901A\u4FE1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _6_____ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _6_____;
