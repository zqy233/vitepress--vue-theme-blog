import{_ as s,o as n,c as a,a as p}from"./app.bfa9bd4b.js";const F=JSON.parse('{"title":"移动端自适应","description":"","frontmatter":{},"headers":[{"level":2,"title":"px/em/rem","slug":"px-em-rem","link":"#px-em-rem","children":[]},{"level":2,"title":"rem与font-size换算","slug":"rem与font-size换算","link":"#rem与font-size换算","children":[]},{"level":2,"title":"px与rem的换算","slug":"px与rem的换算","link":"#px与rem的换算","children":[]}],"relativePath":"1.基础/2.css/移动端自适应.md","lastUpdated":1720835436686}'),e={name:"1.基础/2.css/移动端自适应.md"},l=p(`<h1 id="移动端自适应" tabindex="-1">移动端自适应 <a class="header-anchor" href="#移动端自适应" aria-hidden="true">#</a></h1><h2 id="px-em-rem" tabindex="-1">px/em/rem <a class="header-anchor" href="#px-em-rem" aria-hidden="true">#</a></h2><p><strong>px</strong>: 像素，它是一个固定大小的单元，像素的计算是针对屏幕的，一个像素（1px)就是屏幕的一个点，但是因为它是固定大小的，所以不能够自适应</p><p><strong>em</strong>: em是相对于父级元素的单位，它是用来设置文本的字体尺寸，相对于当前对象内的文本的字体尺寸；一般浏览器默认(1em=16px)，会随父级元素的属性（font-size或其他属性）变化而变化</p><p><strong>rem</strong>: (css3新增的相对长度单位)，相对于根目录，即HTML元素，所以只要在HTML标签上设置字体大小（font-size)，文档中的字体大小都会以此为参照标准，一般用于自适应布局</p><h2 id="rem与font-size换算" tabindex="-1">rem与font-size换算 <a class="header-anchor" href="#rem与font-size换算" aria-hidden="true">#</a></h2><p>1rem=html标签的font-size大小</p><p>浏览器一般默认字号为16px，即font-size: 16px，则1rem为16px</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;"> // 相当于16px</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">  // 相当于3*</span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> = </span><span style="color:#D19A66;">48</span><span style="color:#E06C75;">px</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100% // 相当于16px</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3rem  // 相当于3*16px = 48px</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可以根据不同尺寸调整html的font-size</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;"> // 相当于32px</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">  // 相当于3*</span><span style="color:#D19A66;">32</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> = </span><span style="color:#D19A66;">96</span><span style="color:#E06C75;">px</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200% // 相当于32px</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3rem  // 相当于3*32px = 96px</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="px与rem的换算" tabindex="-1">px与rem的换算 <a class="header-anchor" href="#px与rem的换算" aria-hidden="true">#</a></h2><table><thead><tr><th>px</th><th>rem</th></tr></thead><tbody><tr><td>12</td><td>12/16 = 0.75</td></tr><tr><td>14</td><td>14/16 = 0.875</td></tr><tr><td>16</td><td>16/16 = 1</td></tr><tr><td>...</td><td></td></tr></tbody></table><p>实际开发中，ui给出设计稿，按照设计稿的px转换成相应的rem，从而达到完美实现设计稿的同时，兼容不同分辨率</p><p>实际开发中，一般都是使用js转换，开发者直接写px，然后借助js自动转换px为rem，比如经典的<code>lib-flexible</code></p>`,15),o=[l];function r(t,c,i,d,B,y){return n(),a("div",null,o)}const h=s(e,[["render",r]]);export{F as __pageData,h as default};
