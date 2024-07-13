import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"事件委托","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"事件冒泡","slug":"事件冒泡","link":"#事件冒泡","children":[]},{"level":2,"title":"委托的优点-减少内存消耗","slug":"委托的优点-减少内存消耗","link":"#委托的优点-减少内存消耗","children":[]},{"level":2,"title":"委托的优点-动态绑定事件","slug":"委托的优点-动态绑定事件","link":"#委托的优点-动态绑定事件","children":[]},{"level":2,"title":"Vue巧用事件委托","slug":"vue巧用事件委托","link":"#vue巧用事件委托","children":[]},{"level":2,"title":"事件冒泡/事件捕获","slug":"事件冒泡-事件捕获","link":"#事件冒泡-事件捕获","children":[]},{"level":2,"title":"event.stopPropagation","slug":"event-stoppropagation","link":"#event-stoppropagation","children":[]},{"level":2,"title":"event.preventDefault","slug":"event-preventdefault","link":"#event-preventdefault","children":[]},{"level":2,"title":"return false","slug":"return-false","link":"#return-false","children":[]}],"relativePath":"2.JS/1.基础/事件委托.md","lastUpdated":1720835436686}'),p={name:"2.JS/1.基础/事件委托.md"},e=l(`<h1 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-hidden="true">#</a></h1><h2 id="基本概念" tabindex="-1"><strong>基本概念</strong> <a class="header-anchor" href="#基本概念" aria-hidden="true">#</a></h2><blockquote><p>事件委托，就是将本该添加在当前点击的元素的事件，添加到别的元素上来完成这一事件，利用的是事件冒泡机制</p></blockquote><p>一般来讲，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，当事件响应到需要绑定的元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数</p><p>举个例子，比如一个宿舍的同学同时快递到了，一种方法就是他们都傻傻地一个个去领取，还有一种方法就是把这件事情委托给宿舍长，让一个人出去拿好所有快递，然后再根据收件人一一分发给每个宿舍同学</p><p>在这里，取快递就是一个事件，每个同学指的是需要响应事件的 DOM 元素，而出去统一领取快递的宿舍长就是代理的元素，所以真正绑定事件的是这个元素，按照收件人分发快递的过程就是在事件执行中，需要判断当前响应的事件应该匹配到被代理元素中的哪一个或者哪几个</p><h2 id="事件冒泡" tabindex="-1">事件冒泡 <a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a></h2><p>前面提到 DOM 中事件委托的实现是利用事件冒泡的机制，那么事件冒泡是什么呢？</p><p>在 document.addEventListener 的时候我们可以设置事件模型：事件冒泡、事件捕获，一般来说都是用事件冒泡的模型</p><p>事件模型是指分为三个阶段：</p><ul><li>捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件</li><li>目标阶段：目标阶段就是指事件响应到触发事件的最底层元素上</li><li>冒泡阶段：冒泡阶段就是事件的触发响应会从最底层目标一层层地向外到最外层（根节点），事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层</li></ul><h2 id="委托的优点-减少内存消耗" tabindex="-1">委托的优点-减少内存消耗 <a class="header-anchor" href="#委托的优点-减少内存消耗" aria-hidden="true">#</a></h2><p>试想一下，若果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件；</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;list&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;item 1&lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;item 2&lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;item 3&lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  ......</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;item n&lt;/</span><span style="color:#E06C75;">li</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">ul</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">// ...... 代表中间还有未知数个 li</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">ul</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;list&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;item 1&lt;/</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;item 2&lt;/</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;item 3&lt;/</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  ......</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;item n&lt;/</span><span style="color:#FFAB70;">li</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">ul</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">// ...... 代表中间还有未知数个 li</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的，效率上需要消耗很多性能；</p><p>因此，比较好的方法就是把这个点击事件绑定到他的父层，也就是 <code>ul</code> 上，然后在执行事件的时候再去匹配判断目标元素；</p><p>所以事件委托可以减少大量的内存消耗，节约效率</p><h2 id="委托的优点-动态绑定事件" tabindex="-1">委托的优点-动态绑定事件 <a class="header-anchor" href="#委托的优点-动态绑定事件" aria-hidden="true">#</a></h2><p>比如上述的例子中列表项就几个，我们给每个列表项都绑定了事件</p><p>在很多时候，我们需要通过 AJAX 或者用户操作动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件</p><p>如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的</p><p>所以使用事件在动态绑定事件的情况下是可以减少很多重复工作的</p><h2 id="vue巧用事件委托" tabindex="-1">Vue巧用事件委托 <a class="header-anchor" href="#vue巧用事件委托" aria-hidden="true">#</a></h2><p>开发中经常遇到vue中v-for一个列表，列表的每一项都绑定了@click处理事件。</p><p>绑定这么多监听，从性能方面来说是不太好的。就可以使用事件委托的方式来优化</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//html</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">table</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">@click=&quot;edit&quot;&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#FFFFFF;">&lt;tr</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">v-for</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;item in list&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">td</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#C678DD;">{</span><span style="color:#ABB2BF;">{item.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">}</span><span style="color:#C678DD;">}</span><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">td</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">td</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">:data-id=&quot;item.id&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">title</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;eidt&quot;</span><span style="color:#ABB2BF;">&gt;编辑&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">   &lt;/</span><span style="color:#E06C75;">td</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">tr</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#56B6C2;">&lt;/</span><span style="color:#E06C75;">table</span><span style="color:#56B6C2;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//js </span></span>
<span class="line"><span style="color:#61AFEF;">edit</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">event</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// target是鼠标点击的直接元素，所以委托者最好不要有很多子元素</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">event</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;edit&quot;</span><span style="color:#ABB2BF;">){ </span><span style="color:#7F848E;font-style:italic;">//如果点击到了edit </span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">evenr</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">target</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">dataset</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//拿着id参数执行着相关的操作</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">//html</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">table</span><span style="color:#B392F0;"> @click=&quot;edit&quot;&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;tr v-for</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;item in list&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">td</span><span style="color:#B392F0;">&gt;{{item.name}}&lt;/</span><span style="color:#FFAB70;">td</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    ...</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">td</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> :data-id=&quot;item.id&quot; title</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;eidt&quot;</span><span style="color:#B392F0;">&gt;编辑&lt;/</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">   &lt;/</span><span style="color:#FFAB70;">td</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">tr</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#B392F0;">table</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">//js </span></span>
<span class="line"><span style="color:#B392F0;">edit (event){</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">// target是鼠标点击的直接元素，所以委托者最好不要有很多子元素</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">if</span><span style="color:#B392F0;">(</span><span style="color:#79B8FF;">event</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">target</span><span style="color:#B392F0;">.title </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;edit&quot;</span><span style="color:#B392F0;">){ </span><span style="color:#6B737C;">//如果点击到了edit </span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">let</span><span style="color:#B392F0;"> id </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">evenr</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">target</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">dataset</span><span style="color:#B392F0;">.id;</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#6B737C;">//拿着id参数执行着相关的操作</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="事件冒泡-事件捕获" tabindex="-1">事件冒泡/事件捕获 <a class="header-anchor" href="#事件冒泡-事件捕获" aria-hidden="true">#</a></h2><p>现有父子孙三层 dom 元素,依次包裹,大小相同,且三层 dom 都有点击事件</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;father&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;son&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;grandson&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;father&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;son&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;grandson&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>事件冒泡执行过程：点击 dom 元素,事件依次向上(向父一级)开始触发,触发顺序为孙&gt;子&gt;父</p><p>事件捕获执行过程：点击 dom 元素,事件依次向下(向子一级)开始触发,触发顺序为父&gt;子&gt;孙</p><h2 id="event-stoppropagation" tabindex="-1">event.stopPropagation <a class="header-anchor" href="#event-stoppropagation" aria-hidden="true">#</a></h2><p>这是阻止事件冒泡的方法，不让事件向上冒泡，但是默认事件仍然会执行</p><h2 id="event-preventdefault" tabindex="-1">event.preventDefault <a class="header-anchor" href="#event-preventdefault" aria-hidden="true">#</a></h2><p>这是阻止默认事件的方法，调用此方法，默认事件会被阻止，但是会发生冒泡，冒泡会传递到上一层的父元素</p><h2 id="return-false" tabindex="-1">return false <a class="header-anchor" href="#return-false" aria-hidden="true">#</a></h2><p>阻止事件的冒泡方法和默认事件</p>`,37),o=[e];function t(r,c,B,i,y,F){return n(),a("div",null,o)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};
