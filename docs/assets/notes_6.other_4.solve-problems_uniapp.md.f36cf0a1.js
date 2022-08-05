import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"uniapp","description":"","frontmatter":{},"headers":[{"level":2,"title":"The data property \u201Cx\u201C is already declared as a prop. Use prop default value instead","slug":"the-data-property-\u201Cx\u201C-is-already-declared-as-a-prop-use-prop-default-value-instead"},{"level":2,"title":"JS \u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF] \u4EE5\u4E0B\u6587\u4EF6\u4F53\u79EF\u8D85\u8FC7 500KB\uFF0C\u5DF2\u8DF3\u8FC7\u538B\u7F29\u4EE5\u53CA ES6 \u8F6C ES5 \u7684\u5904\u7406\u3002common/vendor.js","slug":"js-\u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF-\u4EE5\u4E0B\u6587\u4EF6\u4F53\u79EF\u8D85\u8FC7-500kb\uFF0C\u5DF2\u8DF3\u8FC7\u538B\u7F29\u4EE5\u53CA-es6-\u8F6C-es5-\u7684\u5904\u7406\u3002common-vendor-js"},{"level":2,"title":"DevTools failed to load SourceMap: Could not load content for *.js.map: HTTP error: code 404","slug":"devtools-failed-to-load-sourcemap-could-not-load-content-for-js-map-http-error-code-404"}],"relativePath":"notes/6.other/4.solve-problems/uniapp.md"}');
const _sfc_main = { name: "notes/6.other/4.solve-problems/uniapp.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="uniapp" tabindex="-1">uniapp <a class="header-anchor" href="#uniapp" aria-hidden="true">#</a></h1><h2 id="the-data-property-\u201Cx\u201C-is-already-declared-as-a-prop-use-prop-default-value-instead" tabindex="-1">The data property \u201Cx\u201C is already declared as a prop. Use prop default value instead <a class="header-anchor" href="#the-data-property-\u201Cx\u201C-is-already-declared-as-a-prop-use-prop-default-value-instead" aria-hidden="true">#</a></h2><p>\u539F\u56E0\uFF1A\u7EC4\u4EF6\u4F20\u503C\u65F6\uFF0Cprops\u4F20\u8FC7\u6765\u4E86\u4E00\u4E2A\u503C\uFF0C\u4F46\u5728\u9875\u9762data\u4E2D\u4E5F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540C\u540D\u503C</p><p>props\u7684\u4F18\u5148\u7EA7 &gt; data\u4E2D\u7684\u4F18\u5148\u7EA7 &gt; methods\u4E2D\u7684\u4F18\u5148\u7EA7</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u66F4\u6362data\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\u540D\u5373\u53EF</p><h2 id="js-\u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF-\u4EE5\u4E0B\u6587\u4EF6\u4F53\u79EF\u8D85\u8FC7-500kb\uFF0C\u5DF2\u8DF3\u8FC7\u538B\u7F29\u4EE5\u53CA-es6-\u8F6C-es5-\u7684\u5904\u7406\u3002common-vendor-js" tabindex="-1">JS \u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF] \u4EE5\u4E0B\u6587\u4EF6\u4F53\u79EF\u8D85\u8FC7 500KB\uFF0C\u5DF2\u8DF3\u8FC7\u538B\u7F29\u4EE5\u53CA ES6 \u8F6C ES5 \u7684\u5904\u7406\u3002common/vendor.js <a class="header-anchor" href="#js-\u6587\u4EF6\u7F16\u8BD1\u9519\u8BEF-\u4EE5\u4E0B\u6587\u4EF6\u4F53\u79EF\u8D85\u8FC7-500kb\uFF0C\u5DF2\u8DF3\u8FC7\u538B\u7F29\u4EE5\u53CA-es6-\u8F6C-es5-\u7684\u5904\u7406\u3002common-vendor-js" aria-hidden="true">#</a></h2><p>\u539F\u56E0\uFF1A\u4F7F\u7528uniapp\u8FD0\u884C\u81F3\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u65F6\u4EE3\u7801\u6587\u4EF6\u4F53\u79EF\u8FC7\u5927</p><p>\u89E3\u51B3\u65B9\u6848\uFF1AHBuilderx\u4E2D\u52FE\u9009\u8FD0\u884C-&gt;\u8FD0\u884C\u65F6\u662F\u5426\u538B\u7F29\u4EE3\u7801</p><h2 id="devtools-failed-to-load-sourcemap-could-not-load-content-for-js-map-http-error-code-404" tabindex="-1">DevTools failed to load SourceMap: Could not load content for ***.js.map: HTTP error: code 404 <a class="header-anchor" href="#devtools-failed-to-load-sourcemap-could-not-load-content-for-js-map-http-error-code-404" aria-hidden="true">#</a></h2><p>\u539F\u56E0\uFF1A\u9879\u76EE\u5F15\u7528\u7684\u7B2C\u4E09\u65B9\u7684JavaScript\u5DE5\u5177\u662F\u538B\u7F29\u540E\u7684\u7248\u672C\uFF0C\u5B58\u5728SourceMap\u7684\u6307\u5411\u4FE1\u606F\uFF0C\u6D4F\u89C8\u5668\u542F\u7528\u4E86JavaScript\u6E90\u6620\u5C04\uFF0C\u4F46\u662F\u9879\u76EE\u4E2D\u6CA1\u6709\u76F8\u5E94\u7684SourceMap\u6587\u4EF6\uFF0C\u6240\u4EE5\u629B\u51FA\u6B64\u5F02\u5E38</p><p>SourceMap\u662F\u4ECE\u5DF2\u8F6C\u6362\u7684\u4EE3\u7801\u6620\u5C04\u5230\u539F\u59CB\u6E90\u7684\u6587\u4EF6\uFF0C\u4F7F\u6D4F\u89C8\u5668\u80FD\u591F\u91CD\u6784\u539F\u59CB\u6E90\u5E76\u5728\u8C03\u8BD5\u5668\u4E2D\u663E\u793A\u91CD\u5EFA\u7684\u539F\u59CB\u6E90\uFF0C\u8C03\u8BD5\u539F\u59CB\u6E90\u4EE3\u7801\u4F1A\u6BD4\u6D4F\u89C8\u5668\u4E0B\u8F7D\u7684\u8F6C\u6362\u540E\u7684\u4EE3\u7801\u66F4\u52A0\u5BB9\u6613</p><p>\u5176\u5B9E\u6CA1\u6709SourceMap\u6587\u4EF6\u662F\u4E0D\u4F1A\u5F71\u54CD\u9879\u76EE\u7684\u6B63\u5E38\u8FD0\u884C\u548C\u4F7F\u7528\u7684</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u63A7\u5236\u53F0\u53F3\u4E0A\u89D2\u70B9\u51FB<code>\u8BBE\u7F6E</code>-&gt;Preferences-&gt;Sources-&gt;\u53D6\u6D88\u52FE\u9009<code>Enable JavaScript source maps</code>\u9009\u9879</p>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var uniapp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, uniapp as default };
