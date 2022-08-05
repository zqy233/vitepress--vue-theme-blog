import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"BrowserWindow","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u5EFA\u7A97\u53E3","slug":"\u65B0\u5EFA\u7A97\u53E3"},{"level":2,"title":"\u7A97\u53E3\u6700\u5C0F\u5316","slug":"\u7A97\u53E3\u6700\u5C0F\u5316"},{"level":2,"title":"\u7A97\u53E3\u5173\u95ED","slug":"\u7A97\u53E3\u5173\u95ED"},{"level":2,"title":"\u7A97\u53E3\u4E0D\u53EF\u4EE5\u8C03\u6574\u5927\u5C0F","slug":"\u7A97\u53E3\u4E0D\u53EF\u4EE5\u8C03\u6574\u5927\u5C0F"},{"level":2,"title":"\u7A97\u53E3\u56FA\u5B9A","slug":"\u7A97\u53E3\u56FA\u5B9A"}],"relativePath":"notes/2.framework/5.electron/8.BrowserWindow.md"}');
const _sfc_main = { name: "notes/2.framework/5.electron/8.BrowserWindow.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="browserwindow" tabindex="-1">BrowserWindow <a class="header-anchor" href="#browserwindow" aria-hidden="true">#</a></h1><blockquote><p>\u521B\u5EFA\u5E76\u63A7\u5236\u6D4F\u89C8\u5668\u7A97\u53E3</p></blockquote><h2 id="\u65B0\u5EFA\u7A97\u53E3" tabindex="-1">\u65B0\u5EFA\u7A97\u53E3 <a class="header-anchor" href="#\u65B0\u5EFA\u7A97\u53E3" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">BrowserWindow</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> win</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BrowserWindow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Main window</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../packages/icon/logo.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">webPreferences</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">preload</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../preload/index.cjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">nodeIntegration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">contextIsolation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">webSecurity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7A97\u53E3\u6700\u5C0F\u5316" tabindex="-1">\u7A97\u53E3\u6700\u5C0F\u5316 <a class="header-anchor" href="#\u7A97\u53E3\u6700\u5C0F\u5316" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">win</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">minimize</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7A97\u53E3\u5173\u95ED" tabindex="-1">\u7A97\u53E3\u5173\u95ED <a class="header-anchor" href="#\u7A97\u53E3\u5173\u95ED" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">win</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hide</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7A97\u53E3\u4E0D\u53EF\u4EE5\u8C03\u6574\u5927\u5C0F" tabindex="-1">\u7A97\u53E3\u4E0D\u53EF\u4EE5\u8C03\u6574\u5927\u5C0F <a class="header-anchor" href="#\u7A97\u53E3\u4E0D\u53EF\u4EE5\u8C03\u6574\u5927\u5C0F" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">win</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">resizable </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u7A97\u53E3\u56FA\u5B9A" tabindex="-1">\u7A97\u53E3\u56FA\u5B9A <a class="header-anchor" href="#\u7A97\u53E3\u56FA\u5B9A" aria-hidden="true">#</a></h2><p>\u4F4D\u4E8E\u5176\u4ED6\u5E94\u7528\u4E4B\u4E0A</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  win</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAlwaysOnTop</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var _8_BrowserWindow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _8_BrowserWindow as default };
