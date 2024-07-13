import{_ as s,o as a,c as n,a as e}from"./app.bfa9bd4b.js";const h=JSON.parse('{"title":"jspdf.md","description":"","frontmatter":{},"headers":[{"level":2,"title":"new jsPDF-实例化","slug":"new-jspdf-实例化","link":"#new-jspdf-实例化","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"orientation","slug":"orientation","link":"#orientation","children":[]},{"level":3,"title":"unit","slug":"unit","link":"#unit","children":[]},{"level":3,"title":"compress","slug":"compress","link":"#compress","children":[]}]},{"level":2,"title":"deletePage-删除某页","slug":"deletepage-删除某页","link":"#deletepage-删除某页","children":[]},{"level":2,"title":"save-导出pdf文档","slug":"save-导出pdf文档","link":"#save-导出pdf文档","children":[]}],"relativePath":"4.库/导出pdf/jspdf.md","lastUpdated":1720835436702}'),l={name:"4.库/导出pdf/jspdf.md"},p=e(`<h1 id="jspdf-md" tabindex="-1"><a href="http://jspdf.md" target="_blank" rel="noreferrer">jspdf.md</a> <a class="header-anchor" href="#jspdf-md" aria-hidden="true">#</a></h1><blockquote><p>官方文档 <a href="http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#setPage" target="_blank" rel="noreferrer">http://raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html#setPage</a></p></blockquote><h2 id="new-jspdf-实例化" tabindex="-1"><code>new jsPDF</code>-实例化 <a class="header-anchor" href="#new-jspdf-实例化" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsPDF</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> jsPDF(options)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">orientation</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;p&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">unit</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;mm&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">format</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;a4&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">putOnlyUsedFonts</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">floatPrecision</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">16</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// or &quot;smart&quot;, default is 16</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;"> orientation</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;p&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;"> unit</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;mm&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;"> format</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;a4&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;"> putOnlyUsedFonts</span><span style="color:#BBBBBB;">:</span><span style="color:#79B8FF;">true</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;"> floatPrecision</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// or &quot;smart&quot;, default is 16</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="orientation" tabindex="-1">orientation <a class="header-anchor" href="#orientation" aria-hidden="true">#</a></h3><p>第一页的方向。可能的值是“纵向”或“横向”（或快捷键“p”或“l”）</p><h3 id="unit" tabindex="-1">unit <a class="header-anchor" href="#unit" aria-hidden="true">#</a></h3><p>指定坐标时使用的测量单位（基本单位） 可能的值为“pt”（点）、“mm”、“cm”、“in”、“px”、“pc”、“em”或“ex”。请注意，为了获得“px”单位的正确缩放，您需要通过设置选项启用options.hotfixes = [&quot;px_scaling&quot;]</p><h3 id="compress" tabindex="-1">compress <a class="header-anchor" href="#compress" aria-hidden="true">#</a></h3><p>是否压缩</p><h2 id="deletepage-删除某页" tabindex="-1"><code>deletePage</code>-删除某页 <a class="header-anchor" href="#deletepage-删除某页" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">targetPage</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pdf</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">internal</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">getNumberOfPages</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;font-style:italic;">//获取总页</span></span>
<span class="line"><span style="color:#E5C07B;">pdf</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">deletePage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">targetPage</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 删除目标页</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> targetPage </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pdf</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">internal</span><span style="color:#B392F0;">.getNumberOfPages(); </span><span style="color:#6B737C;">//获取总页</span></span>
<span class="line"><span style="color:#79B8FF;">pdf</span><span style="color:#B392F0;">.deletePage(targetPage); </span><span style="color:#6B737C;">// 删除目标页</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="save-导出pdf文档" tabindex="-1"><code>save</code>-导出pdf文档 <a class="header-anchor" href="#save-导出pdf文档" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pdf</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">save</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`测试.pdf\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pdf</span><span style="color:#B392F0;">.save(</span><span style="color:#FFAB70;">\`测试.pdf\`</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16),o=[p];function t(r,c,i,B,d,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
