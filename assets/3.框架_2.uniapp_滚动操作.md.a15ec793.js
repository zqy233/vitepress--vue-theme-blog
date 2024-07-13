import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"滚动操作","description":"","frontmatter":{},"headers":[{"level":2,"title":"滚动底部触发事件","slug":"滚动底部触发事件","link":"#滚动底部触发事件","children":[]},{"level":2,"title":"滚动到底加载更多","slug":"滚动到底加载更多","link":"#滚动到底加载更多","children":[]},{"level":2,"title":"自定义开局启动动画","slug":"自定义开局启动动画","link":"#自定义开局启动动画","children":[]},{"level":2,"title":"下拉刷新","slug":"下拉刷新","link":"#下拉刷新","children":[{"level":3,"title":"全局开启下拉刷新","slug":"全局开启下拉刷新","link":"#全局开启下拉刷新","children":[]},{"level":3,"title":"单个页面开启下拉刷新","slug":"单个页面开启下拉刷新","link":"#单个页面开启下拉刷新","children":[]},{"level":3,"title":"添加 onPullDownRefresh生命周期函数","slug":"添加-onpulldownrefresh生命周期函数","link":"#添加-onpulldownrefresh生命周期函数","children":[]}]},{"level":2,"title":"滚动底部","slug":"滚动底部","link":"#滚动底部","children":[{"level":3,"title":"页面触发","slug":"页面触发","link":"#页面触发","children":[]},{"level":3,"title":"scroll-view触发","slug":"scroll-view触发","link":"#scroll-view触发","children":[]}]},{"level":2,"title":"滚动顶部","slug":"滚动顶部","link":"#滚动顶部","children":[]}],"relativePath":"3.框架/2.uniapp/滚动操作.md","lastUpdated":1720835436694}'),e={name:"3.框架/2.uniapp/滚动操作.md"},p=l(`<h1 id="滚动操作" tabindex="-1">滚动操作 <a class="header-anchor" href="#滚动操作" aria-hidden="true">#</a></h1><h2 id="滚动底部触发事件" tabindex="-1">滚动底部触发事件 <a class="header-anchor" href="#滚动底部触发事件" aria-hidden="true">#</a></h2><p>滚动到底部/右边，会触发 scrolltolower 事件</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> &lt;</span><span style="color:#E06C75;">scroll-view</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;main_box&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">scroll-y</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">@scrolltolower</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;lower&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;"> &lt;/</span><span style="color:#E06C75;">scroll-view</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> &lt;</span><span style="color:#FFAB70;">scroll-view</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;main_box&quot;</span><span style="color:#B392F0;"> scroll-y</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;true&quot;</span><span style="color:#B392F0;"> @scrolltolower</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;lower&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;"> &lt;/</span><span style="color:#FFAB70;">scroll-view</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="滚动到底加载更多" tabindex="-1">滚动到底加载更多 <a class="header-anchor" href="#滚动到底加载更多" aria-hidden="true">#</a></h2><p>淘宝的滚动到底请求数据方案</p><ul><li>滚动不出现toast加载中弹窗，而是在最底部显示一行灰色的loading图标+加载文本,不仔细看都看不到</li><li>一次渲染大概十几条数据</li><li>应当滚动时就请求下次数据，避免滚动卡顿</li></ul><p>csdn的滚动到底请求数据方案</p><ul><li>骨架屏站位</li></ul><h2 id="自定义开局启动动画" tabindex="-1">自定义开局启动动画 <a class="header-anchor" href="#自定义开局启动动画" aria-hidden="true">#</a></h2><p><a href="https://ext.dcloud.net.cn/plugin?id=73751" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=73751</a></p><h2 id="下拉刷新" tabindex="-1">下拉刷新 <a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a></h2><h3 id="全局开启下拉刷新" tabindex="-1">全局开启下拉刷新 <a class="header-anchor" href="#全局开启下拉刷新" aria-hidden="true">#</a></h3><p>在<code>pages.json</code>文件的<code>globalStyle</code>对象中开启<code>enablePullDownRefresh</code>属性</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;globalStyle&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;enablePullDownRefresh&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;globalStyle&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">&quot;enablePullDownRefresh&quot;</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="单个页面开启下拉刷新" tabindex="-1"><code>单个页面</code>开启下拉刷新 <a class="header-anchor" href="#单个页面开启下拉刷新" aria-hidden="true">#</a></h3><p>在<code>pages.json</code>文件中的<code>pages</code>数组中找到对应的页面，并在对应页面的<code>style</code>属性中开启<code>enablePullDownRefresh</code></p><h3 id="添加-onpulldownrefresh生命周期函数" tabindex="-1">添加 onPullDownRefresh生命周期函数 <a class="header-anchor" href="#添加-onpulldownrefresh生命周期函数" aria-hidden="true">#</a></h3><p>或者在vue文件中添加 onPullDownRefresh生命周期函数，特定功能完成后，使用<code>uni.stopPullDownRefresh()</code>，来终止刷新，否则则一直刷新</p><h2 id="滚动底部" tabindex="-1">滚动底部 <a class="header-anchor" href="#滚动底部" aria-hidden="true">#</a></h2><h3 id="页面触发" tabindex="-1">页面触发 <a class="header-anchor" href="#页面触发" aria-hidden="true">#</a></h3><p><code>onReachBottom</code></p><h3 id="scroll-view触发" tabindex="-1">scroll-view触发 <a class="header-anchor" href="#scroll-view触发" aria-hidden="true">#</a></h3><blockquote><p><a href="https://uniapp.dcloud.net.cn/component/scroll-view.html#scroll-view" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/component/scroll-view.html#scroll-view</a></p></blockquote><p>scroll-view滚动到底或右<code>@scrolltolower</code>方法</p><h2 id="滚动顶部" tabindex="-1">滚动顶部 <a class="header-anchor" href="#滚动顶部" aria-hidden="true">#</a></h2><p><code>onPageScroll</code>监听页面滚动</p><p><code>uni.pageScrollTo</code>设置滚动到的位置和动画时长</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  export default </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      return {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">showBackTop</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">onPageScroll</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">showBackTop</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">scrollTop</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">500</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">scrollTop</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">uni</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pageScrollTo</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">scrollTop</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">duration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">100</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#56B6C2;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#56B6C2;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">script</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  export default {</span></span>
<span class="line"><span style="color:#B392F0;">    data() {</span></span>
<span class="line"><span style="color:#B392F0;">      return {</span></span>
<span class="line"><span style="color:#B392F0;">        showBackTop</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    onPageScroll(e) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.showBackTop </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.scrollTop </span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">500</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    methods</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      scrollTop() {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#79B8FF;">uni</span><span style="color:#B392F0;">.pageScrollTo({</span></span>
<span class="line"><span style="color:#B392F0;">          scrollTop</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">          duration</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100</span></span>
<span class="line"><span style="color:#B392F0;">        })</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#B392F0;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,29),o=[p];function r(c,t,B,i,d,y){return n(),a("div",null,o)}const h=s(e,[["render",r]]);export{u as __pageData,h as default};
