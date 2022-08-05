import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"Object","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u8C61\u4E3A\u7A7A","slug":"\u5BF9\u8C61\u4E3A\u7A7A"},{"level":2,"title":"Object.values","slug":"object-values"},{"level":2,"title":"Object.keys","slug":"object-keys"},{"level":2,"title":"Object.assign","slug":"object-assign"},{"level":2,"title":"Function-\u51FD\u6570","slug":"function-\u51FD\u6570"},{"level":2,"title":"Function-this\u6307\u5411","slug":"function-this\u6307\u5411"}],"relativePath":"notes/1.basic/3.javaScript/4.Object.md"}');
const _sfc_main = { name: "notes/1.basic/3.javaScript/4.Object.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h1><blockquote><p>JavaScript \u4E2D\u7684\u6240\u6709\u4E8B\u7269\u90FD\u662F\u5BF9\u8C61\uFF0C<code>object</code>\uFF0C<code>function</code>\uFF0C<code>array</code>\u90FD\u5C5E\u4E8E\u5F15\u7528\u7C7B\u578B<code>object</code>\uFF0C\u5373\u5E7F\u4E49\u4E0A\u7684\u5BF9\u8C61</p></blockquote><h2 id="\u5BF9\u8C61\u4E3A\u7A7A" tabindex="-1">\u5BF9\u8C61\u4E3A\u7A7A <a class="header-anchor" href="#\u5BF9\u8C61\u4E3A\u7A7A" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(data) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isEmpty </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="object-values" tabindex="-1">Object.values <a class="header-anchor" href="#object-values" aria-hidden="true">#</a></h2><p><code>Object.values</code>\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u503C\uFF0C\u5408\u5E76\u4E3A\u6570\u7EC4</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lhl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">(data)) </span><span style="color:#676E95;font-style:italic;">// [&#39;lhl&#39;]</span></span>\n<span class="line"></span></code></pre></div><h2 id="object-keys" tabindex="-1">Object.keys <a class="header-anchor" href="#object-keys" aria-hidden="true">#</a></h2><p><code>Object.keys</code>\u83B7\u53D6\u5BF9\u8C61\u6240\u6709 key\uFF0C\u5408\u5E76\u4E3A\u6570\u7EC4</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lhl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(data)) </span><span style="color:#676E95;font-style:italic;">// [&#39;name&#39;]</span></span>\n<span class="line"></span></code></pre></div><h2 id="object-assign" tabindex="-1">Object.assign <a class="header-anchor" href="#object-assign" aria-hidden="true">#</a></h2><p>Object.assign()\u65B9\u6CD5\u7528\u4E8E\u5C06\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u503C\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u6E90\u5BF9\u8C61\u5206\u914D\u5230\u76EE\u6807\u5BF9\u8C61\u3002\u5B83\u5C06\u8FD4\u56DE\u76EE\u6807\u5BF9\u8C61</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> returnedTarget </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(target</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> source)</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(target)</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(returnedTarget)</span></span>\n<span class="line"></span></code></pre></div><h2 id="function-\u51FD\u6570" tabindex="-1">Function-\u51FD\u6570 <a class="header-anchor" href="#function-\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u58F0\u660E/\u666E\u901A\u51FD\u6570</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">(){}</span></span>\n<span class="line"></span></code></pre></div><p>\u51FD\u6570\u8868\u8FBE\u5F0F</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"></span></code></pre></div><p>\u6784\u9020\u51FD\u6570</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Fn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">name</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Fn</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">constructor function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>\u533F\u540D\u51FD\u6570</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span></span>\n<span class="line"></span></code></pre></div><p>\u5BF9\u8C61\u4E2D\u7684\u51FD\u6570</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="function-this\u6307\u5411" tabindex="-1">Function-this\u6307\u5411 <a class="header-anchor" href="#function-this\u6307\u5411" aria-hidden="true">#</a></h2><table><thead><tr><th>\u8C03\u7528\u65B9\u5F0F</th><th>this\u6307\u5411</th></tr></thead><tbody><tr><td>\u51FD\u6570\u58F0\u660E</td><td>\u4E25\u683C\u6A21\u5F0F\u4E0B\u662Fundefined\uFF0C\u6B63\u5E38\u6A21\u5F0F\u662FWindow</td></tr><tr><td>\u51FD\u6570\u8868\u8FBE\u5F0F</td><td>\u4E25\u683C\u6A21\u5F0F\u4E0B\u662Fundefined\uFF0C\u6B63\u5E38\u6A21\u5F0F\u662FWindow</td></tr><tr><td>\u6784\u9020\u51FD\u6570</td><td>\u5B9E\u4F8B\u5BF9\u8C61</td></tr><tr><td>\u5BF9\u8C61\u4E2D\u7684\u51FD\u6570</td><td>\u8BE5\u51FD\u6570\u6240\u5C5E\u7684\u5BF9\u8C61</td></tr><tr><td>\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u6CD5</td><td>\u5F53\u524D\u4E8B\u4EF6\u6240\u7ED1\u5B9A\u7684\u5BF9\u8C61</td></tr><tr><td>\u5B9A\u65F6\u5668\u51FD\u6570</td><td>Window</td></tr><tr><td>\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF08\u81EA\u8C03\u7528\u51FD\u6570</td><td>\u4E25\u683C\u6A21\u5F0F\u4E0B\u662Fundefined\uFF0C\u6B63\u5E38\u6A21\u5F0F\u662FWindow</td></tr></tbody></table>', 28);
const _hoisted_29 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_29);
}
var _4_Object = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _4_Object as default };
