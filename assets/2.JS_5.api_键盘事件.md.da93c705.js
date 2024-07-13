import{_ as s,o as n,c as a,a as p}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"keyCode is deprecated","slug":"keycode-is-deprecated","link":"#keycode-is-deprecated","children":[]}],"relativePath":"2.JS/5.api/键盘事件.md","lastUpdated":1720835436690}'),l={name:"2.JS/5.api/键盘事件.md"},e=p(`<h2 id="keycode-is-deprecated" tabindex="-1">keyCode is deprecated <a class="header-anchor" href="#keycode-is-deprecated" aria-hidden="true">#</a></h2><p>使用以下写法，ts会提示<code>keyCode is deprecated</code></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 判断是否按住了shift键（左右都包括） </span></span>
<span class="line"><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;keydown&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">code</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">code</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">keyCode</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ...</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">// 判断是否按住了shift键（左右都包括） </span></span>
<span class="line"><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.addEventListener(</span><span style="color:#FFAB70;">&quot;keydown&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> code </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">code</span><span style="color:#B392F0;">.keyCode </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    })</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>改为</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;keydown&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">code</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">code</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;Shift&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ...</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.addEventListener(</span><span style="color:#FFAB70;">&quot;keydown&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> code </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">code</span><span style="color:#B392F0;">.key </span><span style="color:#F97583;">===</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Shift&quot;</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    })</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),o=[e];function c(t,r,B,i,y,d){return n(),a("div",null,o)}const A=s(l,[["render",c]]);export{u as __pageData,A as default};
