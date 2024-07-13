import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const A=JSON.parse('{"title":"async和await","description":"","frontmatter":{},"headers":[{"level":2,"title":"async","slug":"async","link":"#async","children":[]},{"level":2,"title":"async返回值","slug":"async返回值","link":"#async返回值","children":[{"level":3,"title":"async函数中返回异步函数的值","slug":"async函数中返回异步函数的值","link":"#async函数中返回异步函数的值","children":[]}]}],"relativePath":"2.JS/2.es6/async和await.md","lastUpdated":1720835436690}'),p={name:"2.JS/2.es6/async和await.md"},o=l(`<h1 id="async和await" tabindex="-1">async和await <a class="header-anchor" href="#async和await" aria-hidden="true">#</a></h1><p><code>async</code> 是异步的意思，<code>await</code>则可以理解为 <code>async wait</code>。所以可以理解<code>async</code>就是用来声明一个异步方法，而 <code>await</code>是用来等待异步方法执行</p><h2 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-hidden="true">#</a></h2><p><code>async</code>函数返回一个<code>promise</code>对象，下面两种方法是等效的</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">f</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;TEST&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// asyncF is equivalent to f!</span></span>
<span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncF</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;TEST&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> f() {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#B392F0;">.resolve(</span><span style="color:#FFAB70;">&#39;TEST&#39;</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// asyncF is equivalent to f!</span></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncF() {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;TEST&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>不管<code>await</code>后面跟着的是什么，<code>await</code>都会阻塞后面的代码</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn1</span><span style="color:#ABB2BF;"> (){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn2</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// 阻塞</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn2</span><span style="color:#ABB2BF;"> (){</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;fn2&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">fn1</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> fn1 (){</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> fn2()</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">) </span><span style="color:#6B737C;">// 阻塞</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> fn2 (){</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#FFAB70;">&#39;fn2&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fn1()</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>上面的例子中，<code>await</code> 会阻塞下面的代码（即加入微任务队列），先执行 <code>async</code>外面的同步代码，同步代码执行完，再回到 <code>async</code> 函数中，再执行之前阻塞的代码</p><p>微任务的角度来看，异步函数中的 <code>await</code> 关键字会将 <code>await</code> 之后的代码封装为微任务，并将其加入微任务队列中，等待主线程执行完当前任务之后，再依次执行微任务队列中的任务。</p><p>因此，执行顺序如下：</p><ol><li>执行 <code>fn1()</code> 函数，输出 <code>1</code>，遇到 <code>await fn2()</code>，将 <code>console.log(&#39;fn2&#39;)</code> 封装为微任务。</li><li>执行 <code>fn2()</code> 函数，输出 <code>fn2</code>。</li><li>执行 <code>console.log(3)</code>，输出 <code>3</code>。</li><li>执行微任务 <code>fn1()</code> 中 <code>await</code> 之后的代码，输出 <code>2</code>。</li></ol><p>输出结果为：<code>1</code>，<code>fn2</code>，<code>3</code>，<code>2</code></p><h2 id="async返回值" tabindex="-1">async返回值 <a class="header-anchor" href="#async返回值" aria-hidden="true">#</a></h2><p><code>async</code> 函数的返回值是一个 Promise 对象。当函数内部有明确的 <code>return</code> 语句时，该返回值将成为 Promise 的 resolved 值；如果没有明确的 <code>return</code> 语句，该 Promise 的 resolved 值将会是 undefined。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction2</span><span style="color:#ABB2BF;">()); </span><span style="color:#7F848E;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction2</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> asyncFunction2()); </span><span style="color:#6B737C;">// 1</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction2() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction2</span><span style="color:#ABB2BF;">()); </span><span style="color:#7F848E;font-style:italic;">// unde</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction2</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> asyncFunction2()); </span><span style="color:#6B737C;">// unde</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction2() {</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="async函数中返回异步函数的值" tabindex="-1">async函数中返回异步函数的值 <a class="header-anchor" href="#async函数中返回异步函数的值" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction1</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }, </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction1() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">let</span><span style="color:#B392F0;"> a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  setTimeout(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> a;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在这个例子中，虽然我们在 setTimeout 中将 a 的值更改为 20，但是由于 setTimeout 是一个异步函数，它会在 200 毫秒后才会被调用。在此之前，asyncFunction1 已经在 200 毫秒之内返回了一个 Promise，Promise 的值是 a 的初始值 1，而不是更改后的值 2。</p><p>如果我们想要 asyncFunction1 的结果为更改后的值，可以将 setTimeout 包装成一个 Promise 并在其中返回一个新的值，然后在 asyncFunction1 中使用 await 等待 Promise 的完成，例如：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">asyncFunction1</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  }, </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> asyncFunction1() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">let</span><span style="color:#B392F0;"> a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#B392F0;">(resolve </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> setTimeout(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    resolve();</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200</span><span style="color:#B392F0;">));</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> a;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,21),e=[o];function c(r,t,B,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
