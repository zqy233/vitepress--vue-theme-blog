import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"ES6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"},{"level":2,"title":"ES6\u62FC\u63A5\u8BED\u6CD5","slug":"es6\u62FC\u63A5\u8BED\u6CD5"},{"level":2,"title":"ES6-symbol","slug":"es6-symbol"},{"level":2,"title":"ES6-BigInt","slug":"es6-bigint"},{"level":2,"title":"ES6-const/let","slug":"es6-const-let"},{"level":2,"title":"ES6-\u7BAD\u5934\u51FD\u6570","slug":"es6-\u7BAD\u5934\u51FD\u6570"},{"level":2,"title":"ES6-\u62D3\u5C55\u8FD0\u7B97\u7B26(\u5BF9\u8C61\u5C55\u5F00\u7B26)","slug":"es6-\u62D3\u5C55\u8FD0\u7B97\u7B26-\u5BF9\u8C61\u5C55\u5F00\u7B26"},{"level":2,"title":"ES6-for ... in/for ... of","slug":"es6-for-in-for-of"},{"level":2,"title":"ES6--Promise.all","slug":"es6-promise-all"}],"relativePath":"notes/1.basic/3.javaScript/16.ES6.md"}');
const _sfc_main = { name: "notes/1.basic/3.javaScript/16.ES6.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-hidden="true">#</a></h1><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><ul><li>\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u65F6\u53EF\u7701\u7565\u62EC\u53F7</li><li>\u51FD\u6570\u5185\u53EA\u6709\u4E00\u884C\u4EE3\u7801\u65F6\u53EF\u7701\u7565{}\u548C return</li><li>\u5982\u679C\u6709{}\u5219\u5FC5\u987B\u6709 return</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u5B8C\u6574\u5F62\u5F0F</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#676E95;font-style:italic;">//\u7B80\u5316\u6A21\u5F0F</span></span>\n<span class="line"></span></code></pre></div><h2 id="es6\u62FC\u63A5\u8BED\u6CD5" tabindex="-1">ES6\u62FC\u63A5\u8BED\u6CD5 <a class="header-anchor" href="#es6\u62FC\u63A5\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">\u6570\u636E</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">}`</span></span>\n<span class="line"></span></code></pre></div><h2 id="es6-symbol" tabindex="-1">ES6-symbol <a class="header-anchor" href="#es6-symbol" aria-hidden="true">#</a></h2><p>symbol \u4E0D\u652F\u6301\u8BED\u6CD5\uFF1A&quot;<code>new Symbol()</code>&quot;\u3002\u56F4\u7ED5\u539F\u59CB\u6570\u636E\u7C7B\u578B\u521B\u5EFA\u4E00\u4E2A\u663E\u5F0F\u5305\u88C5\u5668\u5BF9\u8C61\u4ECE ECMAScript 6 \u5F00\u59CB\u4E0D\u518D\u88AB\u652F\u6301\u3002 \u7136\u800C\uFF0C\u73B0\u6709\u7684\u539F\u59CB\u5305\u88C5\u5668\u5BF9\u8C61\uFF0C\u5982 <code>new Boolean</code>\u3001<code>new String</code>\u4EE5\u53CA<code>new Number</code>\uFF0C\u56E0\u4E3A\u9057\u7559\u539F\u56E0\u4ECD\u53EF\u88AB\u521B\u5EFA\u3002\u6240\u4EE5\u60F3\u521B\u5EFA\u4E00\u4E2A Symbol \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7 object()\u51FD\u6570\u6765\u5305\u88C5\u3002</p><p>\u76F4\u63A5\u4F7F\u7528 Symbol()\u4F20\u53C2\u540E\u4E0D\u4F1A\u8F6C\u6362\u53C2\u6570\u4E3A symbol \u7C7B\u578B\u800C\u662F\u65B0\u5EFA\u4E00\u4E2A symbol \u7C7B\u578B\uFF0C \u4F7F\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for" target="_blank" rel="noopener noreferrer"><code>Symbol.for()</code></a> \u65B9\u6CD5\u548C <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor" target="_blank" rel="noopener noreferrer"><code>Symbol.keyFor()</code></a> \u65B9\u6CD5\u4ECE\u5168\u5C40\u7684 symbol \u6CE8\u518C\u8868\u8BBE\u7F6E\u548C\u53D6\u5F97 symbol\u3002</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" target="_blank" rel="noopener noreferrer"><code>Object.getOwnPropertySymbols()</code></a> \u65B9\u6CD5\u8BA9\u4F60\u5728\u67E5\u627E\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684\u7B26\u53F7\u5C5E\u6027\u65F6\u8FD4\u56DE\u4E00\u4E2A symbol \u7C7B\u578B\u7684\u6570\u7EC4\u3002\u6CE8\u610F\uFF0C\u6BCF\u4E2A\u521D\u59CB\u5316\u7684\u5BF9\u8C61\u90FD\u662F\u6CA1\u6709\u81EA\u5DF1\u7684 symbol \u5C5E\u6027\u7684\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u6570\u7EC4\u53EF\u80FD\u4E3A\u7A7A\uFF0C\u9664\u975E\u4F60\u5DF2\u7ECF\u5728\u5BF9\u8C61\u4E0A\u8BBE\u7F6E\u4E86 symbol \u5C5E\u6027\u3002</p><h2 id="es6-bigint" tabindex="-1">ES6-BigInt <a class="header-anchor" href="#es6-bigint" aria-hidden="true">#</a></h2><p>\u662F\u4E00\u79CD\u5185\u7F6E\u5BF9\u8C61\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u6CD5\u6765\u8868\u793A\u5927\u4E8E <code>253 - 1</code> \u7684\u6574\u6570\u3002\u8FD9\u539F\u672C\u662F Javascript \u4E2D\u53EF\u4EE5\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer"><code>Number</code></a> \u8868\u793A\u7684\u6700\u5927\u6570\u5B57\u3002<strong><code>BigInt</code></strong> \u53EF\u4EE5\u8868\u793A\u4EFB\u610F\u5927\u7684\u6574\u6570\u3002</p><p>\u4E0D\u80FD\u7528\u4E8E <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" rel="noopener noreferrer"><code>Math</code></a> \u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\uFF1B\u4E0D\u80FD\u548C\u4EFB\u4F55 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer"><code>Number</code></a> \u5B9E\u4F8B\u6DF7\u5408\u8FD0\u7B97\uFF0C\u4E24\u8005\u5FC5\u987B\u8F6C\u6362\u6210\u540C\u4E00\u79CD\u7C7B\u578B\u3002\u5728\u4E24\u79CD\u7C7B\u578B\u6765\u56DE\u8F6C\u6362\u65F6\u8981\u5C0F\u5FC3\uFF0C\u56E0\u4E3A <code>BigInt</code> \u53D8\u91CF\u5728\u8F6C\u6362\u6210 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer"><code>Number</code></a> \u53D8\u91CF\u65F6\u53EF\u80FD\u4F1A\u4E22\u5931\u7CBE\u5EA6\u3002</p><p><code>BigInt</code> \u548C <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer"><code>Number</code></a> \u4E0D\u662F\u4E25\u683C\u76F8\u7B49\u7684\uFF0C\u4F46\u662F\u5BBD\u677E\u76F8\u7B49\u7684\u3002 === false == true</p><h2 id="es6-const-let" tabindex="-1">ES6-const/let <a class="header-anchor" href="#es6-const-let" aria-hidden="true">#</a></h2><p>\u5148\u6765\u4E86\u89E3\u4E00\u4E0B var \u7684\u89C4\u5219\uFF0C\u5728 function \u5185\u90E8\uFF0C \u52A0 var \u7684\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C \u4E0D\u52A0 var \u7684\u5219\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u5728 function \u5916\u90E8\uFF0C \u4E0D\u7BA1\u6709\u6CA1\u6709\u4F7F\u7528 var \u58F0\u660E\u53D8\u91CF\uFF0C\u90FD\u662F\u5168\u5C40\u53D8\u91CF</p><p>\u4E3E\u4E2A\u6817\u5B50\uFF1A</p><p>\u5C40\u90E8\u53D8\u91CF</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b) </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519 b is not defined</span></span>\n<span class="line"></span></code></pre></div><p>\u5168\u5C40\u53D8\u91CF</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>\n<span class="line"></span></code></pre></div><p>var \u7684\u7F3A\u9677:</p><ul><li>\u5E0C\u671B\u662F\u5C40\u90E8\u53D8\u91CF\u7684\u53D8\u91CF\u5916\u90E8\u5374\u53EF\u4EE5\u8BBF\u95EE\u5230</li><li>for \u5FAA\u73AF\u6307\u5411\u7684\u90FD\u662F\u540C\u4E00\u4E2A\u53D8\u91CF</li><li>\u53EF\u4EE5\u91CD\u590D\u5B9A\u4E49</li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(i) </span><span style="color:#676E95;font-style:italic;">// 10</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">//3 3 3</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528 let \u540E</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(i) </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519 i is not defined</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// \u4E0A\u4E00\u6B65\u62A5\u9519\uFF0C\u6267\u884C\u4E0D\u5230\u8FD9\u4E00\u6B65</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 0 1 2</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>const \u5E38\u91CF let \u53D8\u91CF</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u58F0\u660E\u7684\u53D8\u91CF\u62E5\u6709\u5757\u7EA7\u4F5C\u7528\u57DF</li><li>\u5982 for \u5FAA\u73AF\u7B49\u5728\u6BCF\u6B21\u5FAA\u73AF\u65F6\u90FD\u521B\u5EFA\u65B0\u7684\u7ED1\u5B9A</li><li>\u4E0D\u53EF\u4EE5\u91CD\u590D\u5B9A\u4E49</li></ul><p>\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\u4E0D\u662F\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u4E0D\u5B58\u5728 window \u5BF9\u8C61\u4E0A\uFF0C\u800C\u662F\u4E00\u4E2A\u4E0D\u53EF\u89C1\u7684\u5757\u4F5C\u7528\u57DF\u4E2D</p><p>const \u5B9A\u4E49\u539F\u59CB\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u662F\u4E0D\u53EF\u4EE5\u6539\u53D8\u7684\uFF1B\u5B9A\u4E49\u5F15\u7528\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6307\u7684\u662F\u5F53\u524D\u53D8\u91CF\u7684\u6307\u9488\u4E0D\u53EF\u4EE5\u66F4\u6539\uFF0C\u4E0E\u5BF9\u8C61\u5185\u90E8\u7684\u503C\u662F\u5426\u66F4\u6539\u65E0\u5173</p><h2 id="es6-\u7BAD\u5934\u51FD\u6570" tabindex="-1">ES6-\u7BAD\u5934\u51FD\u6570 <a class="header-anchor" href="#es6-\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u7BAD\u5934\u51FD\u6570\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u65F6\u53EF\u4EE5\u7701\u7565\uFF08\uFF09\uFF0C\u51FD\u6570\u5185\u53EA\u6709\u4E00\u884C\u4EE3\u7801\u65F6\u53EF\u4EE5\u7701\u7565{ } \uFF0C\u540C\u65F6\u53EF\u4EE5\u7701\u7565 return</p><p>\u6CE8\u610F\uFF01\u6709{ } \u65F6\uFF0C\u4E0D\u80FD\u7701\u7565 return\uFF0C\u5426\u5219\u8FD4\u56DE\u7A7A\uFF0C\u6709 return \u65F6\uFF0C\u4E0D\u80FD\u7701\u7565 { }\uFF0C\u5426\u5219\u76F4\u63A5\u62A5\u9519</p><h2 id="es6-\u62D3\u5C55\u8FD0\u7B97\u7B26-\u5BF9\u8C61\u5C55\u5F00\u7B26" tabindex="-1">ES6-\u62D3\u5C55\u8FD0\u7B97\u7B26(\u5BF9\u8C61\u5C55\u5F00\u7B26) <a class="header-anchor" href="#es6-\u62D3\u5C55\u8FD0\u7B97\u7B26-\u5BF9\u8C61\u5C55\u5F00\u7B26" aria-hidden="true">#</a></h2><p>\u5C55\u5F00\u5BF9\u8C61</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5468</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">obj1</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7537</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj2) </span><span style="color:#676E95;font-style:italic;">// { name: &#39;\u5468&#39;, age: 23, sex: &#39;\u7537&#39; }</span></span>\n<span class="line"></span></code></pre></div><p>\u51FD\u6570\u4F20\u53C2</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> numbers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">numbers</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">numbers</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">array</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> array </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(array</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">numbers)) </span><span style="color:#676E95;font-style:italic;">// [ 0, 1, 2 ]</span></span>\n<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">numbers)) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>\n<span class="line"></span></code></pre></div><p>\u5C55\u5F00\u6570\u7EC4</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3</span></span>\n<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3 4 5</span></span>\n<span class="line"></span></code></pre></div><p>\u5B57\u7B26\u4E32\u62C6\u4E3A\u6570\u7EC4</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// [ &quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot; ]</span></span>\n<span class="line"></span></code></pre></div><h2 id="es6-for-in-for-of" tabindex="-1">ES6-for ... in/for ... of <a class="header-anchor" href="#es6-for-in-for-of" aria-hidden="true">#</a></h2><p>i \u662F\u6570\u7EC4\u7684\u7D22\u5F15\uFF0C\u53EF\u4EE5\u6839\u636E\u7D22\u5F15\u53D6\u503C</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">A</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">B</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">C</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> a) console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a[i]) </span><span style="color:#676E95;font-style:italic;">//{A:1},{B:2},{C:3}</span></span>\n<span class="line"></span></code></pre></div><p>i of \u662F\u6570\u636E\u5143\u7D20</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">A</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">B</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">C</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> a) console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(i) </span><span style="color:#676E95;font-style:italic;">//{A:1},{B:2},{C:3}</span></span>\n<span class="line"></span></code></pre></div><h2 id="es6-promise-all" tabindex="-1">ES6--Promise.all <a class="header-anchor" href="#es6-promise-all" aria-hidden="true">#</a></h2><p>\u540C\u65F6\u6267\u884C\u63A5\u53E3\u8BF7\u6C42</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> async </span><span style="color:#82AAFF;">getCode</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#F07178;">([</span><span style="color:#82AAFF;">getCode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BUSINESS_TYPR</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getCode</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">post</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ROLE_TYPR</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)])</span></span>\n<span class="line"></span></code></pre></div>', 54);
const _hoisted_55 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_55);
}
var _16_ES6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _16_ES6 as default };
