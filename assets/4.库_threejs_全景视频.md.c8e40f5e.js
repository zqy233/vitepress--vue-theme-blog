import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"请求全屏","slug":"请求全屏","link":"#请求全屏","children":[]}],"relativePath":"4.库/threejs/全景视频.md","lastUpdated":1720835436702}'),e={name:"4.库/threejs/全景视频.md"},p=l(`<h2 id="请求全屏" tabindex="-1">请求全屏 <a class="header-anchor" href="#请求全屏" aria-hidden="true">#</a></h2><p><strong><code>Element.requestFullscreen()</code></strong> 方法用于发出异步请求使元素进入全屏模式。</p><p>调用此 API 并不能保证元素一定能够进入全屏模式。如果元素被允许进入全屏幕模式，返回的<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer"><code>Promise</code></a>会 resolve，并且该元素会收到一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/fullscreenchange_event" target="_blank" rel="noreferrer"><code>fullscreenchange</code></a>事件，通知它已经进入全屏模式。如果全屏请求被拒绝，返回的 promise 会变成 rejected 并且该元素会收到一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/fullscreenerror_event" target="_blank" rel="noreferrer"><code>fullscreenerror</code></a>事件。如果该元素已经从原来的文档中分离，那么该文档将会收到这些事件。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">requestFullScreen</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">de</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getElementById</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;screenContainer&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">requestFullscreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">requestFullscreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">mozRequestFullScreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mozRequestFullScreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">webkitRequestFullScreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">webkitRequestFullScreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">playVariables</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isBigScreen</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> requestFullScreen() {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> de </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">document</span><span style="color:#B392F0;">.getElementById(</span><span style="color:#FFAB70;">&quot;screenContainer&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.requestFullscreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.requestFullscreen();</span></span>
<span class="line"><span style="color:#B392F0;">        } </span><span style="color:#F97583;">else</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.mozRequestFullScreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.mozRequestFullScreen();</span></span>
<span class="line"><span style="color:#B392F0;">        } </span><span style="color:#F97583;">else</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.webkitRequestFullScreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.webkitRequestFullScreen();</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#79B8FF;">playVariables</span><span style="color:#B392F0;">.isBigScreen </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong><code>Document.exitFullscreen()</code></strong> 方法用于让当前文档退出全屏模式。调用这个方法会让文档回退到上一个调用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullscreen" target="_blank" rel="noreferrer"><code>Element.requestFullscreen()</code></a>方法进入全屏模式之前的状态。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">exitFullscreen</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">de</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">document</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">exitFullscreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">exitFullscreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">mozCancelFullScreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mozCancelFullScreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">webkitCancelFullScreen</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">de</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">webkitCancelFullScreen</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">playVariables</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isBigScreen</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> exitFullscreen() {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> de </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> document;</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.exitFullscreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.exitFullscreen();</span></span>
<span class="line"><span style="color:#B392F0;">        } </span><span style="color:#F97583;">else</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.mozCancelFullScreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.mozCancelFullScreen();</span></span>
<span class="line"><span style="color:#B392F0;">        } </span><span style="color:#F97583;">else</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.webkitCancelFullScreen) {</span></span>
<span class="line"><span style="color:#B392F0;">          </span><span style="color:#79B8FF;">de</span><span style="color:#B392F0;">.webkitCancelFullScreen();</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#79B8FF;">playVariables</span><span style="color:#B392F0;">.isBigScreen </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6),o=[p];function r(c,t,B,F,y,i){return n(),a("div",null,o)}const A=s(e,[["render",r]]);export{u as __pageData,A as default};
