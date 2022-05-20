import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.0a216a24.js";
const __pageData = '{"title":"babel","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5165\u95E8\u4F7F\u7528","slug":"\u5165\u95E8\u4F7F\u7528"},{"level":2,"title":"babel.config.js","slug":"babel-config-js"},{"level":2,"title":"polyfill","slug":"polyfill"}],"relativePath":"notes/3.build/3.babel/3.babel.md","lastUpdated":1652939653975}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-hidden="true">#</a></h1><blockquote><p>babel\u662F\u4E00\u4E2A\u5DE5\u5177\u96C6\uFF0C\u4E3B\u8981\u7528\u4E8E\u5C06ES6\u7248\u672C\u7684javascript\u4EE3\u7801\u8F6C\u4E3AES5\u7B49\u5411\u540E\u517C\u5BB9\u7684js\u4EE3\u7801\uFF0C\u4ECE\u800C\u53EF\u4EE5\u8FD0\u884C\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u6216\u5176\u5B83\u73AF\u5883\u4E2D</p></blockquote><h2 id="\u5165\u95E8\u4F7F\u7528" tabindex="-1">\u5165\u95E8\u4F7F\u7528 <a class="header-anchor" href="#\u5165\u95E8\u4F7F\u7528" aria-hidden="true">#</a></h2><p>1.\u65B0\u5EFAbabel.config.js\uFF0C\u8BE5\u6587\u4EF6\u662Fbabel\u914D\u7F6E\u6587\u4EF6</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">presets</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@babel/env</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>2.\u65B0\u5EFA\u4E00\u4E2Amain.js\uFF0C\u8BE5js\u91CC\u7684\u4EE3\u7801\u4F7F\u7528\u4E86es6\u7684\u7BAD\u5934\u51FD\u6570</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"></span></code></pre></div><p>3.\u5B89\u88C5\u4E09\u4E2Ababel\u5B98\u65B9npm\u5305</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D @babel/cli @babel/core @babel/preset-env</span></span>\n<span class="line"></span></code></pre></div><p>4.\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u8FDB\u884C\u8F6C\u7801\uFF0C\u8BE5\u547D\u4EE4\u542B\u4E49\u662F\u628Amain.js\u8F6C\u7801\u751F\u6210compiled.js\u6587\u4EF6</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">npx babel main.js -o compiled.js</span></span>\n<span class="line"></span></code></pre></div><p>5.\u751F\u6210\u4E86compiled.js\uFF0C\u67E5\u770B\u5185\u5BB9\uFF0C\u53D1\u73B0es6\u8BED\u6CD5\u8F6C\u6362\u6210\u4E86es5\u8BED\u6CD5\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684babel\u4F7F\u7528\u8FC7\u7A0B</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span></code></pre></div><h2 id="babel-config-js" tabindex="-1">babel.config.js <a class="header-anchor" href="#babel-config-js" aria-hidden="true">#</a></h2><blockquote><p>babel.config.js\u662Fbabel\u6267\u884C\u65F6\u4F1A\u9ED8\u8BA4\u5728\u5F53\u524D\u76EE\u5F55\u5BFB\u627E\u7684babel\u914D\u7F6E\u6587\u4EF6</p></blockquote><p>\u9664\u4E86babel.config.js\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u7528.babelrc\u6216.babelrc.js\u8FD9\u4E24\u79CD\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u5C06\u914D\u7F6E\u53C2\u6570\u5199\u5728package.json\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u53EA\u9700\u8981\u9009\u62E9\u5176\u4E2D\u4E00\u79CD</p><p>@babel/cli\uFF0C@babel/core\u4E0E@babel/preset-env\u662FBabel\u5B98\u65B9\u7684\u4E09\u4E2A\u5305\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u5982\u4E0B\uFF1A</p><ul><li><p>@babel/cli\u662Fbabel\u547D\u4EE4\u884C\u8F6C\u7801\u5DE5\u5177\uFF0C\u4F7F\u7528\u547D\u4EE4\u884C\u8FDB\u884Cbabel\u8F6C\u7801\u5C31\u9700\u8981\u5B89\u88C5\u5B83</p></li><li><p>@babel/cli\u4F9D\u8D56@babel/core\uFF0C\u56E0\u6B64\u4E5F\u9700\u8981\u5B89\u88C5@babel/core\u8FD9\u4E2Ababel\u6838\u5FC3npm\u5305</p></li><li><p>@babel/preset-env\u8FD9\u4E2Anpm\u5305\u63D0\u4F9B\u4E86ES6\u8F6C\u6362ES5\u7684\u8BED\u6CD5\u8F6C\u6362\u89C4\u5219\uFF0C\u6211\u4EEC\u5728babel\u914D\u7F6E\u6587\u4EF6\u91CC\u6307\u5B9A\u4F7F\u7528\u5B83\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528\u7684\u8BDD\uFF0C\u4E5F\u53EF\u4EE5\u5B8C\u6210\u8F6C\u7801\uFF0C\u4F46\u8F6C\u7801\u540E\u7684\u4EE3\u7801\u4ECD\u7136\u662FES6\u7684\uFF0C\u76F8\u5F53\u4E8E\u6CA1\u6709\u8F6C\u7801</p><p>\u5C0F\u7ED3\uFF1A</p><p>1.\u4E00\u4E2A\u5B8C\u6574\u7684babel\u8F6C\u7801\u5DE5\u7A0B\u901A\u5E38\u5305\u62EC\u5982\u4E0B\uFF1A</p><ul><li>babel\u914D\u7F6E\u6587\u4EF6</li><li>babel\u76F8\u5173\u7684npm\u5305</li><li>\u9700\u8981\u8F6C\u7801\u7684JS\u6587\u4EF6</li></ul><p>2.\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5BF9\u5355\u4E2AJS\u6587\u4EF6\u8FDB\u884C\u8F6C\u7801\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">npx babel main</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o compiled</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js</span></span>\n<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>compiled.js\u547D\u4EE4\u91CCnpx\u662F\u65B0\u7248node\u91CC\u9644\u5E26\u7684\u547D\u4EE4\uFF0C\u5B83\u8FD0\u884C\u7684\u65F6\u5019\u9ED8\u8BA4\u4F1A\u627E\u5230node_modules/.bin/\u4E0B\u7684\u8DEF\u5F84\u6267\u884C\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5FEB\u6377\u8FD0\u884C-D\u4E0B\u8F7D\u7684npm\u5305</p></div></li></ul><h2 id="polyfill" tabindex="-1">polyfill <a class="header-anchor" href="#polyfill" aria-hidden="true">#</a></h2><p>babel\u9ED8\u8BA4\u53EA\u8F6C\u6362\u65B0\u7684JavaScript\u8BED\u6CD5\uFF08syntax\uFF09\uFF0C\u800C\u4E0D\u8F6C\u6362\u65B0\u7684 API\uFF0C\u65B0\u7684API\u5206\u7C7B\u4E24\u7C7B\uFF0C\u4E00\u7C7B\u662FPromise\u3001Map\u3001Symbol\u3001Proxy\u3001Iterator\u7B49\u5168\u5C40\u5BF9\u8C61\u53CA\u5176\u5BF9\u8C61\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982Object.assign\uFF0CPromise.resolve\uFF1B\u53E6\u4E00\u7C7B\u662F\u65B0\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u4F8B\u5982\u6570\u7EC4\u5B9E\u4F8B\u65B9\u6CD5[1, 4, -5, 10].find((item) =&gt; item &lt; 0)</p><p>\u6240\u4EE5\u9700\u8981\u4F7F\u7528polyfill\uFF0C\u4E3A\u5F53\u524D\u73AF\u5883\u63D0\u4F9B\u4E00\u4E2A\u57AB\u7247\uFF0C\u6240\u8C13\u57AB\u7247\uFF0C\u662F\u6307\u57AB\u5E73\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u5DEE\u5F02\u7684\u4E1C\u897F\u3002polyfill\u63D0\u4F9B\u4E86\u5168\u5C40\u7684ES6\u5BF9\u8C61\u4EE5\u53CA\u901A\u8FC7\u4FEE\u6539\u539F\u578B\u94FEArray.prototype\u7B49\u5B9E\u73B0\u5BF9\u5B9E\u4F8B\u7684\u5B9E\u73B0\uFF0Cpolyfill\u5E7F\u4E49\u4E0A\u8BB2\u662F\u4E3A\u73AF\u5883\u63D0\u4F9B\u4E0D\u652F\u6301\u7684\u7279\u6027\u7684\u4E00\u7C7B\u6587\u4EF6\u6216\u5E93\uFF0C\u72ED\u4E49\u4E0A\u8BB2\u662Fpolyfill.js\u6587\u4EF6\u4EE5\u53CA@babel/polyfill\u8FD9\u4E2Anpm\u5305\u3002</p>', 21);
const _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
var _3_babel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _3_babel as default };
