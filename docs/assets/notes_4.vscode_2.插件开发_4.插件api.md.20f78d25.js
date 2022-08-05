import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"\u63D2\u4EF6api","description":"","frontmatter":{},"headers":[{"level":2,"title":"activeTextEditor","slug":"activetexteditor"},{"level":3,"title":"showOpenDialog","slug":"showopendialog"},{"level":3,"title":"showInformationMessage","slug":"showinformationmessage"},{"level":3,"title":"showWarningMessage","slug":"showwarningmessage"},{"level":3,"title":"showErrorMessage","slug":"showerrormessage"},{"level":3,"title":"showInputBox","slug":"showinputbox"},{"level":2,"title":"commands","slug":"commands"},{"level":3,"title":"executeCommand","slug":"executecommand"}],"relativePath":"notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/4.\u63D2\u4EF6api.md"}');
const _sfc_main = { name: "notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/4.\u63D2\u4EF6api.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u63D2\u4EF6api" tabindex="-1">\u63D2\u4EF6api <a class="header-anchor" href="#\u63D2\u4EF6api" aria-hidden="true">#</a></h1><blockquote><p><a href="https://code.visualstudio.com/api/references/vscode-api" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u82F1\u6587\u6587\u6863</a></p></blockquote><h2 id="activetexteditor" tabindex="-1">activeTextEditor <a class="header-anchor" href="#activetexteditor" aria-hidden="true">#</a></h2><blockquote><p>\u5F53\u524D\u6FC0\u6D3B\u4E5F\u5C31\u662F\u5F53\u524D\u6253\u5F00\u7684\u7F16\u8F91\u5668</p></blockquote><h3 id="showopendialog" tabindex="-1">showOpenDialog <a class="header-anchor" href="#showopendialog" aria-hidden="true">#</a></h3><p>\u7C7B\u578B\uFF1A</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> OpenDialogOptions): Thenable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Uri[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined&gt;</span></span>\n<span class="line"></span></code></pre></div><p>\u8BF4\u660E\uFF1A\u5411\u7528\u6237\u663E\u793A\u4E00\u4E2A\u6587\u4EF6\u6253\u5F00\u5BF9\u8BDD\u6846\uFF0C\u5141\u8BB8\u7528\u6237\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u8FDB\u884C\u6253\u5F00</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>options?: OpenDialogOptions</td><td>\u63A7\u5236\u5BF9\u8BDD\u6846\u7684\u9009\u9879</td></tr></tbody></table><table><thead><tr><th>\u8FD4\u56DE</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>Thenable&lt;Uri[]</td><td>\u89E3\u6790\u4E3A\u6240\u9009\u8D44\u6E90\u6216\u672A\u5B9A\u4E49\u8D44\u6E90\u7684\u627F\u8BFA</td></tr></tbody></table><h4 id="opendialogoptions" tabindex="-1">OpenDialogOptions <a class="header-anchor" href="#opendialogoptions" aria-hidden="true">#</a></h4><p>\u6253\u5F00\u6587\u4EF6\u5F39\u7A97\u7684\u914D\u7F6E\u9009\u9879</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>canSelectFiles?: boolean</td><td>\u5141\u8BB8\u9009\u62E9\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4E3Atrue</td></tr><tr><td>canSelectFolders?: boolean</td><td>\u5141\u8BB8\u9009\u62E9\u6587\u4EF6\u5939\uFF0C\u9ED8\u8BA4\u4E3Afalse</td></tr><tr><td>canSelectMany?: boolean</td><td>\u5141\u8BB8\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u6216\u6587\u4EF6\u5939</td></tr><tr><td>defaultUri?: Uri</td><td>\u6253\u5F00\u65F6\u9ED8\u8BA4\u9009\u62E9\u7684\u8D44\u6E90</td></tr><tr><td>filters?:</td><td>\u5BF9\u8BDD\u6846\u4F7F\u7528\u7684\u4E00\u7EC4\u6587\u4EF6\u7B5B\u9009\u5668\u3002\u6BCF\u4E2A\u6761\u76EE\u90FD\u662F\u4E00\u4E2A\u4EBA\u7C7B\u53EF\u8BFB\u7684\u6807\u7B7E\uFF0C\u6BD4\u5982\u201CTypeScript\u201D\uFF0C\u4EE5\u53CA\u4E00\u7CFB\u5217\u6269\u5C55\u540D\uFF0C\u4F8B\u5982&quot;{&#39;Images&#39;: [&#39;png&#39;, &#39;jpg&#39;] &#39;TypeScript&#39;: [&#39;ts&#39;, &#39;tsx&#39;] }&quot;</td></tr><tr><td>openLabel?: string</td><td>\u6253\u5F00\u6309\u94AE\u7684\u53EF\u8BFB\u5B57\u7B26\u4E32</td></tr><tr><td>title?: string</td><td>\u5BF9\u8BDD\u6807\u9898\uFF0C\u6B64\u53C2\u6570\u53EF\u80FD\u4F1A\u88AB\u5FFD\u7565\uFF0C\u56E0\u4E3A\u5E76\u975E\u6240\u6709\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u5728\u6253\u5F00\u7684\u5BF9\u8BDD\u6846\uFF08\u4F8B\u5982macOS\uFF09\u4E0A\u663E\u793A\u6807\u9898</td></tr></tbody></table><h3 id="showinformationmessage" tabindex="-1">showInformationMessage <a class="header-anchor" href="#showinformationmessage" aria-hidden="true">#</a></h3><h3 id="showwarningmessage" tabindex="-1">showWarningMessage <a class="header-anchor" href="#showwarningmessage" aria-hidden="true">#</a></h3><h3 id="showerrormessage" tabindex="-1">showErrorMessage <a class="header-anchor" href="#showerrormessage" aria-hidden="true">#</a></h3><p>\u53F3\u4E0B\u89D2\u6D88\u606F\u5F39\u7A97</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showInformationMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showWarningMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showErrorMessage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="showinputbox" tabindex="-1">showInputBox <a class="header-anchor" href="#showinputbox" aria-hidden="true">#</a></h3><p>\u6253\u5F00\u4E00\u4E2A\u8F93\u5165\u6846\uFF0C\u8981\u6C42\u7528\u6237\u8F93\u5165\uFF0C\u5982\u679C\u8F93\u5165\u6846\u88AB\u53D6\u6D88\uFF08\u4F8B\u5982\u6309ESC\u952E\uFF09\uFF0C\u5219\u8FD4\u56DE\u503C\u5C06\u4E3Aundefined\u3002\u5426\u5219\uFF0C\u8FD4\u56DE\u7684\u503C\u5C06\u662F\u7528\u6237\u952E\u5165\u7684\u5B57\u7B26\u4E32\uFF0C\u6216\u8005\u5982\u679C\u7528\u6237\u6CA1\u6709\u952E\u5165\u4EFB\u4F55\u5185\u5BB9\uFF0C\u800C\u662F\u7528OK\u5173\u95ED\u4E86\u8F93\u5165\u6846\uFF0C\u5219\u8FD4\u56DE\u7684\u503C\u5C06\u662F\u7A7A\u5B57\u7B26\u4E32\u3002</p><h2 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h2><h3 id="executecommand" tabindex="-1">executeCommand <a class="header-anchor" href="#executecommand" aria-hidden="true">#</a></h3><p>\u89E6\u53D1vscode\u547D\u4EE4</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// \u89E6\u53D1\u9F20\u6807\u5149\u6807\u5411\u5DE6\u79FB\u52A8\u7684\u547D\u4EE4</span></span>\n<span class="line"><span style="color:#A6ACCD;"> commands</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">executeCommand</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cursorLeft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p><code>vscode.workspace.getConfiguration().get</code>\u548C<code>vscode.workspace.getConfiguration().update</code>\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u548C\u8BBE\u7F6E\u914D\u7F6E\u9879</p>', 25);
const _hoisted_26 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_26);
}
var _4___api = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _4___api as default };
