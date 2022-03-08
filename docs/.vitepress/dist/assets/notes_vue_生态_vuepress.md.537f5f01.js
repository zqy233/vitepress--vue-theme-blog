import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.39766201.js";
const __pageData = '{"title":"vuepress","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"README.md","slug":"readme-md"},{"level":3,"title":"config.js","slug":"config-js"},{"level":3,"title":"PWA","slug":"pwa"},{"level":3,"title":"emoji\u5927\u5168","slug":"emoji\u5927\u5168"}],"relativePath":"notes/vue/\u751F\u6001/vuepress.md","lastUpdated":1646539101543}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vuepress" tabindex="-1">vuepress <a class="header-anchor" href="#vuepress" aria-hidden="true">#</a></h1><h3 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h3><p>VuePress \u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A\u7B2C\u4E00\u90E8\u5206\u662F\u4E00\u4E2A\u6781\u7B80\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u5B83\u5305\u542B\u7531 Vue \u9A71\u52A8\u7684\u4E3B\u9898\u7CFB\u7EDF\u548C\u63D2\u4EF6 API\uFF0C\u53E6\u4E00\u4E2A\u90E8\u5206\u662F\u4E3A\u4E66\u5199\u6280\u672F\u6587\u6863\u800C\u4F18\u5316\u7684\u9ED8\u8BA4\u4E3B\u9898\uFF0C\u5B83\u7684\u8BDE\u751F\u521D\u8877\u662F\u4E3A\u4E86\u652F\u6301 Vue \u53CA\u5176\u5B50\u9879\u76EE\u7684\u6587\u6863\u9700\u6C42</p><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\u811A\u624B\u67B6</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">yarn global add vuepress </span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u6216\u8005\uFF1Anpm install -g vuepress</span></span>\n<span class="line"></span></code></pre></div><ol><li>\u65B0\u5EFA\u9879\u76EE\u6587\u4EF6\u5939</li><li>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939</li><li>\u521B\u5EFApackage.json</li><li>\u521B\u5EFAdocs\u6587\u4EF6\u5939\uFF08\u5B58\u653E\u6240\u6709markdown\u6587\u4EF6\uFF09</li><li>\u8FDB\u5165docs\u6587\u4EF6\u5939\u4E0B</li><li><a href="http://xn--README-hn3jk46f.md" target="_blank" rel="noopener noreferrer">\u521B\u5EFAREADME.md</a>\uFF08vuepress\u4F1A\u81EA\u52A8\u8BFB\u53D6\uFF09</li><li>\u521B\u5EFA.vuepress\u6587\u4EF6\u5939\uFF08\u5B58\u653E\u6240\u6709 VuePress \u76F8\u5173\u7684\u6587\u4EF6\uFF09</li><li>\u8FDB\u5165.vuepress\u6587\u4EF6\u5939\u4E0B</li><li>\u521B\u5EFAconfig.js\uFF08vuepress\u914D\u7F6E\u6587\u4EF6\uFF0C\u5BFC\u51FA\u4E00\u4E2Ajs\u5BF9\u8C61\uFF09</li><li>\u521B\u5EFApublic\u6587\u4EF6\u5939(\u653E\u7F6E\u9759\u6001\u8D44\u6E90\uFF0C\u6253\u5305\u540E\u4F1A\u653E\u5728.vuepress/dist/\u7684\u6839\u76EE\u5F55)</li></ol><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir project    </span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> project      </span></span>\n<span class="line"><span style="color:#A6ACCD;">yarn init -y    </span></span>\n<span class="line"><span style="color:#A6ACCD;">mkdir docs       </span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docs </span></span>\n<span class="line"><span style="color:#A6ACCD;">cd.</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">README.md</span></span>\n<span class="line"><span style="color:#A6ACCD;">mkdir .vuepress </span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> .vuepress</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">config.js</span></span>\n<span class="line"><span style="color:#A6ACCD;">mkdir public</span></span>\n<span class="line"></span></code></pre></div><p>\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B</p><div class="language-"><pre><code>vuepressProject\n\u251C\u2500\u2500\u2500 docs\n\u2502   \u251C\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 .vuepress\n\u2502       \u251C\u2500\u2500 public\n\u2502       \u2514\u2500\u2500 config.js\n\u2514\u2500\u2500 package.json\n</code></pre></div><p>package.json\u914D\u7F6E\u542F\u52A8\u547D\u4EE4</p><div class="language-json"><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vuepress build docs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="readme-md" tabindex="-1"><a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md</a> <a class="header-anchor" href="#readme-md" aria-hidden="true">#</a></h3><p>vuepress\u4F1A\u8BFB\u53D6docs\u76EE\u5F55\u4E0B\u7684README.md\u6587\u4EF6\uFF0C\u5176\u4E2D\u5185\u5BB9\u53EF\u4EE5\u4F5C\u4E3A\u9996\u9875</p><div class="language-markdown"><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>\n<span class="line"><span style="color:#F07178;">home</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># heroImage: /hero.png</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">actionText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u5FEB\u901F\u4E0A\u624B \u2192</span></span>\n<span class="line"><span style="color:#F07178;">actionLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/accumulate/</span></span>\n<span class="line"><span style="color:#F07178;">features</span><span style="color:#89DDFF;">:</span></span>\n<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u7B80\u6D01\u81F3\u4E0A</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u7B80\u6D01\u5C31\u5B8C\u4E8B\u4E86</span></span>\n<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u7EC4\u4EF6\u5E93</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u7528\u4E8E\u5DE5\u4F5C\u4E2D\u7EC4\u4EF6\u7684\u5206\u4EAB</span></span>\n<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u9AD8\u6027\u80FD</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u6D41\u7545\u5730\u7F16\u5199\u4E0E\u67E5\u770B</span></span>\n<span class="line"><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MIT Licensed | \u5F00\u6E90</span></span>\n<span class="line"><span style="color:#A6ACCD;">---</span></span>\n<span class="line"></span></code></pre></div><p>\u5728docs\u76EE\u5F55\u5EFA\u7ACB\u6587\u4EF6\u5939\uFF0C\u5E76\u5EFA\u7ACBREADME.md\u6587\u4EF6\uFF0C\u4F5C\u4E3A\u94FE\u63A5</p><div class="language-"><pre><code>::: tip \u63D0\u793A\nthis is a tip\n:::\n\n::: warning \u6CE8\u610F\nthis is a tip\n:::\n\n::: danger \u8B66\u544A\nthis is a tip\n:::\n\n:tada: :100: :bamboo: :gift_heart: :fire:\n\n:innocent: learn to death!!!!\n\n## AAA\n\n</code></pre></div><h3 id="config-js" tabindex="-1">config.js <a class="header-anchor" href="#config-js" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello VuePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6807\u9898</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;font-style:italic;">// \u6CE8\u5165\u5230\u5F53\u524D\u9875\u9762\u7684 HTML &lt;head&gt; \u4E2D\u7684\u6807\u7B7E</span></span>\n<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">rel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">icon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/logo.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u589E\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 favicon(\u7F51\u9875\u6807\u7B7E\u7684\u56FE\u6807)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8FD9\u662F\u90E8\u7F72\u5230github\u76F8\u5173\u7684\u914D\u7F6E</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">markdown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lineNumbers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4EE3\u7801\u5757\u663E\u793A\u884C\u53F7</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;font-style:italic;">// \u5BFC\u822A\u680F\u914D\u7F6E</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u524D\u7AEF\u57FA\u7840</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/accumulate/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B97\u6CD5\u9898\u5E93</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/algorithm/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5FAE\u535A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://baidu.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4FA7\u8FB9\u680F\u914D\u7F6E</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sidebarDepth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4FA7\u8FB9\u680F\u663E\u793A2\u7EA7</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="pwa" tabindex="-1">PWA <a class="header-anchor" href="#pwa" aria-hidden="true">#</a></h3><p>PWA\u5168\u79F0Progressive Web App\uFF0C\u5373\u6E10\u8FDB\u5F0FWEB\u5E94\u7528</p><h3 id="emoji\u5927\u5168" tabindex="-1">emoji\u5927\u5168 <a class="header-anchor" href="#emoji\u5927\u5168" aria-hidden="true">#</a></h3><p><a href="https://www.webfx.com/tools/emoji-cheat-sheet/" target="_blank" rel="noopener noreferrer">https://www.webfx.com/tools/emoji-cheat-sheet/</a></p>', 23);
const _hoisted_24 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_24);
}
var vuepress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, vuepress as default };
