import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"综合示例","description":"","frontmatter":{},"headers":[{"level":2,"title":"泛型+联合类型+数组","slug":"泛型-联合类型-数组","link":"#泛型-联合类型-数组","children":[]},{"level":2,"title":"vue中定义dom元素","slug":"vue中定义dom元素","link":"#vue中定义dom元素","children":[]},{"level":2,"title":"react类型","slug":"react类型","link":"#react类型","children":[]},{"level":2,"title":"无法重新声明块范围变量","slug":"无法重新声明块范围变量","link":"#无法重新声明块范围变量","children":[]},{"level":2,"title":"vue全局方法设置类型","slug":"vue全局方法设置类型","link":"#vue全局方法设置类型","children":[]},{"level":2,"title":"ts识别路径别名","slug":"ts识别路径别名","link":"#ts识别路径别名","children":[]}],"relativePath":"2.JS/7.typescript/4.综合示例.md","lastUpdated":1720835436690}'),p={name:"2.JS/7.typescript/4.综合示例.md"},o=l(`<h1 id="综合示例" tabindex="-1">综合示例 <a class="header-anchor" href="#综合示例" aria-hidden="true">#</a></h1><h2 id="泛型-联合类型-数组" tabindex="-1">泛型+联合类型+数组 <a class="header-anchor" href="#泛型-联合类型-数组" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">:</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">[]|</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">):</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;">[]|</span><span style="color:#E5C07B;">T</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">//类型正确</span></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">] </span><span style="color:#7F848E;font-style:italic;">//类型正确</span></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&#39;1&#39;</span><span style="color:#ABB2BF;">] </span><span style="color:#7F848E;font-style:italic;">//ts提示不能将类型“string”分配给类型“number”</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> a&lt;T&gt;(arr</span><span style="color:#F97583;">:</span><span style="color:#B392F0;">T[]</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">T)</span><span style="color:#F97583;">:</span><span style="color:#B392F0;">T[]</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">T {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> arr</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> b </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> a([</span><span style="color:#F8F8F8;">1</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;">2</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">])</span></span>
<span class="line"><span style="color:#B392F0;">b</span><span style="color:#F97583;">=</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">//类型正确</span></span>
<span class="line"><span style="color:#B392F0;">b</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">[</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">] </span><span style="color:#6B737C;">//类型正确</span></span>
<span class="line"><span style="color:#B392F0;">b</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">[</span><span style="color:#FFAB70;">&#39;1&#39;</span><span style="color:#B392F0;">] </span><span style="color:#6B737C;">//ts提示不能将类型“string”分配给类型“number”</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="vue中定义dom元素" tabindex="-1">vue中定义dom元素 <a class="header-anchor" href="#vue中定义dom元素" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">echart</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ref</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">HTMLElement</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">&gt;(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">echart</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> ref&lt;HTMLElement </span><span style="color:#F97583;">|</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">null</span><span style="color:#B392F0;">&gt;(</span><span style="color:#79B8FF;">null</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="react类型" tabindex="-1">react类型 <a class="header-anchor" href="#react类型" aria-hidden="true">#</a></h2><p>函数组件类型</p><p>FunctionComponent&lt;P={}&gt;、简写FC&lt;P={}&gt;</p><p>一个泛型接口，可以接受一个参数，可以不传,用来定义props的类型</p><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">EditorsProps</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">detail</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//const Editors: React.FunctionComponent&lt;props: EditorsProps&gt; = () =&gt; {</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Editors</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">React</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">FC</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">props</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">EditorsProps</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">detail</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">props</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (&lt;&gt;&lt;/&gt;)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> EditorsProps {</span></span>
<span class="line"><span style="color:#B392F0;">    detail</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#6B737C;">//const Editors: React.FunctionComponent&lt;props: EditorsProps&gt; = () =&gt; {</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> Editors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> React.FC&lt;props</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> EditorsProps&gt; </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> { </span><span style="color:#79B8FF;">detail</span><span style="color:#B392F0;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> props</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> (&lt;&gt;&lt;/&gt;)</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="无法重新声明块范围变量" tabindex="-1">无法重新声明块范围变量 <a class="header-anchor" href="#无法重新声明块范围变量" aria-hidden="true">#</a></h2><p>在 Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局，因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错</p><p>对于这个问题，最简单的解决方法是在报错的文件底部添加一行代码：<code>export {}</code>。这行代码会「欺骗」tslint 使其认为当前文件是一个 ESModule 模块，因此不存在变量重复声明的可能性。当使用这个方法时，需要配置 <code>tsconfig.json</code> 文件</p><p>加上</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;esModuleInterop&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;esModuleInterop&quot;</span><span style="color:#B392F0;">: </span><span style="color:#79B8FF;">true</span><span style="color:#B392F0;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vue全局方法设置类型" tabindex="-1">vue全局方法设置类型 <a class="header-anchor" href="#vue全局方法设置类型" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">state</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">loading</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">requests</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">any</span><span style="color:#ABB2BF;">[]</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">isShowHeader</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">rightTabIndex</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">startTime</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">endTime</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">lastStartTime</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">lastEndTime</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">type</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">$store</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">state</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">state</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">declare</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">module</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vue/runtime-core&quot;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ComponentCustomProperties</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">/** 动态请求图片路径 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">requireImg</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">string</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">$store</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">$store</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">window</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">any</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#B392F0;"> state </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  loading</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#B392F0;">  requests</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">any</span><span style="color:#B392F0;">[]</span></span>
<span class="line"><span style="color:#B392F0;">  isShowHeader</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#B392F0;">  rightTabIndex</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#B392F0;">  startTime</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">  endTime</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">  lastStartTime</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">  lastEndTime</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#B392F0;"> $store </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  state</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> state</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">module</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;@vue/runtime-core&quot;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> ComponentCustomProperties {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">/** 动态请求图片路径 */</span></span>
<span class="line"><span style="color:#B392F0;">    requireImg</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (path</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span><span style="color:#B392F0;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#B392F0;">    $store</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> $store</span></span>
<span class="line"><span style="color:#B392F0;">    window</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">any</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="ts识别路径别名" tabindex="-1">ts识别路径别名 <a class="header-anchor" href="#ts识别路径别名" aria-hidden="true">#</a></h2><p><code>tsconfig.json</code>设置<code>paths</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;compilerOptions&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#FFFFFF;">...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;paths&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;@/*&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;src/*&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      ],</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">&quot;@utils/*&quot;</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;src/utils/*&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">      ]</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">...</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;compilerOptions&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    ...</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">&quot;paths&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F8F8F8;">&quot;@/*&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#FFAB70;">&quot;src/*&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F8F8F8;">&quot;@utils/*&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#FFAB70;">&quot;src/utils/*&quot;</span></span>
<span class="line"><span style="color:#B392F0;">      ]</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;"> ...</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,20),e=[o];function r(t,c,B,y,i,F){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};
