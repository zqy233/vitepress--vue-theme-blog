import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const b=JSON.parse('{"title":"Object","description":"","frontmatter":{},"headers":[{"level":2,"title":"对象为空","slug":"对象为空","link":"#对象为空","children":[]},{"level":2,"title":"Object.values","slug":"object-values","link":"#object-values","children":[]},{"level":2,"title":"Object.keys","slug":"object-keys","link":"#object-keys","children":[]},{"level":2,"title":"Object.assign","slug":"object-assign","link":"#object-assign","children":[]},{"level":2,"title":"Function-函数","slug":"function-函数","link":"#function-函数","children":[]},{"level":2,"title":"Function-this指向","slug":"function-this指向","link":"#function-this指向","children":[]}],"relativePath":"2.JS/1.基础/4.Object.md","lastUpdated":1720835436686}'),p={name:"2.JS/1.基础/4.Object.md"},o=l(`<h1 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h1><blockquote><p>JavaScript 中的所有事物都是对象，<code>object</code>，<code>function</code>，<code>array</code>都属于引用类型<code>object</code>，即广义上的对象</p></blockquote><h2 id="对象为空" tabindex="-1">对象为空 <a class="header-anchor" href="#对象为空" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;{}&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">JSON</span><span style="color:#B392F0;">.stringify(data) </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;{}&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.keys(obj).</span><span style="color:#79B8FF;">length</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">===</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">isEmpty</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">obj</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> isEmpty </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> (obj) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">for</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">let</span><span style="color:#B392F0;"> i </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> obj) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="object-values" tabindex="-1">Object.values <a class="header-anchor" href="#object-values" aria-hidden="true">#</a></h2><p><code>Object.values</code>获取对象所有值，合并为数组</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;lhl&#39;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// [&#39;lhl&#39;]</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">data</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> { name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;lhl&#39;</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.values(data)) </span><span style="color:#6B737C;">// [&#39;lhl&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="object-keys" tabindex="-1">Object.keys <a class="header-anchor" href="#object-keys" aria-hidden="true">#</a></h2><p><code>Object.keys</code>获取对象所有 key，合并为数组</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;lhl&#39;</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)) </span><span style="color:#7F848E;font-style:italic;">// [&#39;name&#39;]</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">data</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> { name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;lhl&#39;</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.keys(data)) </span><span style="color:#6B737C;">// [&#39;name&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="object-assign" tabindex="-1">Object.assign <a class="header-anchor" href="#object-assign" aria-hidden="true">#</a></h2><p>Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">source</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">c</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">returnedTarget</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assign</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">returnedTarget</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">target</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> { a</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> b</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">source</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> { b</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> c</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5</span><span style="color:#B392F0;"> }</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">returnedTarget</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">Object</span><span style="color:#B392F0;">.assign(target</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> source)</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(target)</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(returnedTarget)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="function-函数" tabindex="-1">Function-函数 <a class="header-anchor" href="#function-函数" aria-hidden="true">#</a></h2><p>函数声明/普通函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">(){}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> a(){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>函数表达式</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> () {}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>构造函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Fn</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">name</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">name</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">fn</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Fn</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;constructor function&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> Fn(name) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.name</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">name</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> fn </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Fn(</span><span style="color:#FFAB70;">&#39;constructor function&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>匿名函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;">(){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>对象中的函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {},</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">b</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  a</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> () {}</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  b() {}</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="function-this指向" tabindex="-1">Function-this指向 <a class="header-anchor" href="#function-this指向" aria-hidden="true">#</a></h2><table><thead><tr><th>调用方式</th><th>this指向</th></tr></thead><tbody><tr><td>函数声明</td><td>严格模式下是undefined，正常模式是Window</td></tr><tr><td>函数表达式</td><td>严格模式下是undefined，正常模式是Window</td></tr><tr><td>构造函数</td><td>实例对象</td></tr><tr><td>对象中的函数</td><td>该函数所属的对象</td></tr><tr><td>事件绑定方法</td><td>当前事件所绑定的对象</td></tr><tr><td>定时器函数</td><td>Window</td></tr><tr><td>立即执行函数（自调用函数</td><td>严格模式下是undefined，正常模式是Window</td></tr></tbody></table>`,28),e=[o];function c(t,r,B,i,y,d){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{b as __pageData,u as default};
