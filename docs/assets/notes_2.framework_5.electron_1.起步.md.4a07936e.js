import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE"},{"level":3,"title":"\u65B0\u5EFA\u6587\u4EF6\u5939\u548Cpackage.json","slug":"\u65B0\u5EFA\u6587\u4EF6\u5939\u548Cpackage-json"},{"level":3,"title":"\u4E0B\u8F7Delectron","slug":"\u4E0B\u8F7Delectron"},{"level":3,"title":"\u65B0\u5EFAindex.html","slug":"\u65B0\u5EFAindex-html"},{"level":3,"title":"\u65B0\u5EFAmain.js","slug":"\u65B0\u5EFAmain-js"},{"level":3,"title":"\u914D\u7F6Epackage.json\u547D\u4EE4","slug":"\u914D\u7F6Epackage-json\u547D\u4EE4"},{"level":3,"title":"\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528","slug":"\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528"},{"level":3,"title":"\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3 (macOS)","slug":"\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3-macos"}],"relativePath":"notes/2.framework/5.electron/1.\u8D77\u6B65.md"}');
const _sfc_main = { name: "notes/2.framework/5.electron/1.\u8D77\u6B65.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><h3 id="\u65B0\u5EFA\u6587\u4EF6\u5939\u548Cpackage-json" tabindex="-1">\u65B0\u5EFA\u6587\u4EF6\u5939\u548Cpackage.json <a class="header-anchor" href="#\u65B0\u5EFA\u6587\u4EF6\u5939\u548Cpackage-json" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir my-electron-app </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-electron-app</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm init -y</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u4E0B\u8F7Delectron" tabindex="-1">\u4E0B\u8F7Delectron <a class="header-anchor" href="#\u4E0B\u8F7Delectron" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D electron</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u65B0\u5EFAindex-html" tabindex="-1">\u65B0\u5EFAindex.html <a class="header-anchor" href="#\u65B0\u5EFAindex-html" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u65B0\u5EFAmain-js" tabindex="-1">\u65B0\u5EFAmain.js <a class="header-anchor" href="#\u65B0\u5EFAmain-js" aria-hidden="true">#</a></h3><ul><li><a href="https://www.electronjs.org/zh/docs/latest/api/app" target="_blank" rel="noopener noreferrer"><code>app</code></a> \u6A21\u5757\uFF0C\u63A7\u5236\u5E94\u7528\u7A0B\u5E8F\u7684\u4E8B\u4EF6\u751F\u547D\u5468\u671F</li><li><a href="https://www.electronjs.org/zh/docs/latest/api/browser-window" target="_blank" rel="noopener noreferrer"><code>BrowserWindow</code></a> \u6A21\u5757\uFF0C\u521B\u5EFA\u548C\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u7A97\u53E3</li></ul><p>\u5728 Electron \u4E2D\uFF0C\u53EA\u6709\u5728 <code>app</code> \u6A21\u5757\u7684 <a href="https://www.electronjs.org/zh/docs/latest/api/app#event-ready" target="_blank" rel="noopener noreferrer"><code>ready</code></a> \u4E8B\u4EF6\u88AB\u6FC0\u53D1\u540E\u624D\u80FD\u521B\u5EFA\u6D4F\u89C8\u5668\u7A97\u53E3\u3002\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <a href="https://www.electronjs.org/zh/docs/latest/api/app#appwhenready" target="_blank" rel="noopener noreferrer"><code>app.whenReady()</code></a> API\u6765\u76D1\u542C\u6B64\u4E8B\u4EF6\u3002 \u5728<code>whenReady()</code>\u6210\u529F\u540E\u8C03\u7528<code>createWindow()</code></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> BrowserWindow </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createWindow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">win</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">BrowserWindow</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">600</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">win</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadFile</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">whenReady</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">createWindow</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6Epackage-json\u547D\u4EE4" tabindex="-1">\u914D\u7F6Epackage.json\u547D\u4EE4 <a class="header-anchor" href="#\u914D\u7F6Epackage-json\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">electron</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^18.2.0</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">electron .</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528" tabindex="-1">\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528 <a class="header-anchor" href="#\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528" aria-hidden="true">#</a></h3><p>\u5728Windows\u548CLinux\u4E0A\uFF0C\u5173\u95ED\u6240\u6709\u7A97\u53E3\u901A\u5E38\u4F1A\u5B8C\u5168\u9000\u51FA\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u9700\u8981\u76D1\u542C <code>app</code> \u6A21\u5757\u7684 <a href="https://www.electronjs.org/zh/docs/latest/api/app#event-window-all-closed" target="_blank" rel="noopener noreferrer"><code>&#39;window-all-closed&#39;</code></a> \u4E8B\u4EF6\u3002\u5982\u679C\u7528\u6237\u4E0D\u662F\u5728 macOS(<code>darwin</code>) \u4E0A\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u5219\u8C03\u7528 <a href="https://www.electronjs.org/zh/docs/latest/api/app#appquit" target="_blank" rel="noopener noreferrer"><code>app.quit()</code></a></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">window-all-closed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">platform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">darwin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">quit</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3-macos" tabindex="-1">\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3 (macOS) <a class="header-anchor" href="#\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3-macos" aria-hidden="true">#</a></h3><p>\u5F53 Linux \u548C Windows \u5E94\u7528\u5728\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u65F6\u9000\u51FA\u4E86\uFF0CmacOS \u5E94\u7528\u901A\u5E38\u5373\u4F7F\u5728\u6CA1\u6709\u6253\u5F00\u4EFB\u4F55\u7A97\u53E3\u7684\u60C5\u51B5\u4E0B\u4E5F\u7EE7\u7EED\u8FD0\u884C\uFF0C\u5E76\u4E14\u5728\u6CA1\u6709\u7A97\u53E3\u53EF\u7528\u7684\u60C5\u51B5\u4E0B\u6FC0\u6D3B\u5E94\u7528\u65F6\u4F1A\u6253\u5F00\u65B0\u7684\u7A97\u53E3</p><p>\u4E3A\u4E86\u5B9E\u73B0\u8FD9\u4E00\u7279\u6027\uFF0C\u76D1\u542C <code>app</code> \u6A21\u5757\u7684 <a href="https://www.electronjs.org/zh/docs/latest/api/app#event-activate-macos" target="_blank" rel="noopener noreferrer"><code>activate</code></a> \u4E8B\u4EF6\u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u6D4F\u89C8\u5668\u7A97\u53E3\u662F\u6253\u5F00\u7684\uFF0C\u5219\u8C03\u7528 <code>createWindow()</code> \u65B9\u6CD5\u3002</p><p>\u56E0\u4E3A\u7A97\u53E3\u65E0\u6CD5\u5728 <code>ready</code> \u4E8B\u4EF6\u524D\u521B\u5EFA\uFF0C\u4F60\u5E94\u5F53\u5728\u4F60\u7684\u5E94\u7528\u521D\u59CB\u5316\u540E\u4EC5\u76D1\u542C <code>activate</code> \u4E8B\u4EF6\u3002 \u901A\u8FC7\u5728\u60A8\u73B0\u6709\u7684 <code>whenReady()</code> \u56DE\u8C03\u4E2D\u9644\u4E0A\u60A8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u6765\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">whenReady</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">createWindow</span><span style="color:#F07178;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">activate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">BrowserWindow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAllWindows</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">createWindow</span><span style="color:#F07178;">()</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>', 23);
const _hoisted_24 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_24);
}
var _1___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1___ as default };
