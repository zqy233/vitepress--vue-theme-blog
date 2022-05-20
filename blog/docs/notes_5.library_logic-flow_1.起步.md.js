"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./assets/plugin-vue_export-helper.db096aab.js");
const __pageData = '{"title":"\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"},{"level":2,"title":"\u51C6\u5907\u6570\u636E","slug":"\u51C6\u5907\u6570\u636E"},{"level":2,"title":"\u6E32\u67D3\u753B\u5E03","slug":"\u6E32\u67D3\u753B\u5E03"},{"level":2,"title":"edges\u8FB9","slug":"edges\u8FB9"},{"level":2,"title":"grid\u7F51\u683C","slug":"grid\u7F51\u683C"}],"relativePath":"notes/5.library/logic-flow/1.\u8D77\u6B65.md","lastUpdated":1652939653987}';
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h1><blockquote><p>\u5B98\u65B9\u6587\u6863 <a href="http://logic-flow.org/" target="_blank" rel="noopener noreferrer">http://logic-flow.org/</a></p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>npm</code> \u6216 <code>yarn</code> \u6765\u5B89\u88C5 <code>LogicFlow</code></p><div class="language-sh"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">npm i @logicflow/core @logicflow/extension -s</span></span>
<span class="line"></span></code></pre></div><p>\u5B89\u88C5\u5B8C\u5BFC\u5165<code>js</code>\u548C<code>css</code></p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> LogicFlow </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">from</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">@logicflow/core</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">@logicflow/core/dist/style/index.css</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><p>\u5728\u9875\u9762\u4E2D\u6307\u5B9A\u4E00\u4E2A<code>html\u5143\u7D20</code>\u4F5C\u4E3A\u7ED8\u56FE\u7684\u5BB9\u5668-<code>\u753B\u5E03</code>\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A <code>div</code> \u6807\u7B7E</p><div class="language-html"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">id</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">container</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;&lt;/</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u51C6\u5907\u6570\u636E" tabindex="-1">\u51C6\u5907\u6570\u636E <a class="header-anchor" href="#\u51C6\u5907\u6570\u636E" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>JSON</code> \u7684\u6570\u636E\u683C\u5F0F\uFF0C\u6765\u8BA9 <code>LogicFlow</code> \u6E32\u67D3\u3002\u8BE5\u6570\u636E\u4E2D\u9700\u8981\u6709 <code>nodes</code>\uFF08\u8282\u70B9\uFF09 \u548C <code>edges</code>\uFF08\u8FB9\uFF09 \u5B57\u6BB5\uFF0C\u5206\u522B\u7528\u6570\u7EC4\u8868\u793A\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> data </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8282\u70B9</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">nodes</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> [</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">id</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">21</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">rect</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">x</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">100</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">y</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">200</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">text</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">\u77E9\u5F62\u8282\u70B9</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">x</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">100</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">y</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">200</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">id</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">circle</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">x</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">300</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">y</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">400</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">text</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">value</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">\u5706\u5F62\u8282\u70B9</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">x</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">300</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">y</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">400</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">},</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  ]</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8FB9</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">edges</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">[</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">polyline</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">sourceNodeId</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">50</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">      </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">targetNodeId</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">21</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  ]</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6E32\u67D3\u753B\u5E03" tabindex="-1">\u6E32\u67D3\u753B\u5E03 <a class="header-anchor" href="#\u6E32\u67D3\u753B\u5E03" aria-hidden="true">#</a></h2><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A <code>LogicFlow</code> \u7684\u5B9E\u4F8B\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F20\u5165\u4E00\u4E9B\u53C2\u6570\u6765\u63A7\u5236\u753B\u5E03\uFF0C\u6BD4\u5982\u753B\u5E03\u7684\u5927\u5C0F\uFF0C\u6700\u540E\u6E32\u67D3\u6570\u636E</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> lf </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">new</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">LogicFlow</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">container</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> document</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">querySelector</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">(</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">#container</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">)</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">width</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">700</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">height</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F78C6C" })}">600</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">)</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7\u521A\u624D\u521B\u5EFA\u7684\u5B9E\u4F8B\u6570\u636E\u6E32\u67D3\u5230\u753B\u5E03\u4E0A</p><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">lf</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#82AAFF" })}">render</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">(data)</span></span>
<span class="line"></span></code></pre></div><h2 id="edges\u8FB9" tabindex="-1">edges\u8FB9 <a class="header-anchor" href="#edges\u8FB9" aria-hidden="true">#</a></h2><p>\u8FB9\u6307\u7684\u662F\u56FE\u5F62\u4E4B\u95F4\u7684\u8FDE\u7EBF</p><h2 id="grid\u7F51\u683C" tabindex="-1">grid\u7F51\u683C <a class="header-anchor" href="#grid\u7F51\u683C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">export</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C792EA" })}">type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">GridOptions</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">size</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">number</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8BBE\u7F6E\u7F51\u683C\u5927\u5C0F</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">visible</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">boolean</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8BBE\u7F6E\u662F\u5426\u53EF\u89C1\uFF0C\u82E5\u8BBE\u7F6E\u4E3Afalse\u5219\u4E0D\u663E\u793A\u7F51\u683C\u7EBF\u4F46\u662F\u4ECD\u7136\u4FDD\u7559size\u6805\u683C\u7684\u6548\u679C</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">type</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">dot</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">|</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#C3E88D" })}">mesh</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8BBE\u7F6E\u7F51\u683C\u7C7B\u578B\uFF0C\u76EE\u524D\u652F\u6301 dot \u70B9\u72B6\u548C mesh \u7EBF\u72B6\u4E24\u79CD</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">config</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">color</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">string</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8BBE\u7F6E\u7F51\u683C\u7684\u989C\u8272</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#F07178" })}">thickness</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#FFCB6B" })}">number</span><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">// \u8BBE\u7F6E\u7F51\u683C\u7EBF\u7684\u5BBD\u5EA6</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#A6ACCD" })}">  </span><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${serverRenderer.ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("notes/5.library/logic-flow/1.\u8D77\u6B65.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _1___ = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.__pageData = __pageData;
exports["default"] = _1___;
