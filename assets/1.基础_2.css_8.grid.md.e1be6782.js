import{_ as s,o as a,c as n,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"grid布局","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例html与css","slug":"示例html与css","link":"#示例html与css","children":[]},{"level":2,"title":"repeat/auto-fill/fr/minmax","slug":"repeat-auto-fill-fr-minmax","link":"#repeat-auto-fill-fr-minmax","children":[]},{"level":2,"title":"grid-template-columns设置列宽","slug":"grid-template-columns设置列宽","link":"#grid-template-columns设置列宽","children":[]},{"level":2,"title":"grid-template-rows设置行高","slug":"grid-template-rows设置行高","link":"#grid-template-rows设置行高","children":[]},{"level":2,"title":"grid-auto-rows设置行高","slug":"grid-auto-rows设置行高","link":"#grid-auto-rows设置行高","children":[]},{"level":2,"title":"grid-column","slug":"grid-column","link":"#grid-column","children":[]},{"level":2,"title":"grid-row","slug":"grid-row","link":"#grid-row","children":[]},{"level":2,"title":"Autoprefixer适配grid","slug":"autoprefixer适配grid","link":"#autoprefixer适配grid","children":[]},{"level":2,"title":"Autoprefixer不支持repeat auto-fit auto-fill","slug":"autoprefixer不支持repeat-auto-fit-auto-fill","link":"#autoprefixer不支持repeat-auto-fit-auto-fill","children":[]},{"level":2,"title":"ie11下flex布局align-items：center不居中无法生效","slug":"ie11下flex布局align-items-center不居中无法生效","link":"#ie11下flex布局align-items-center不居中无法生效","children":[]},{"level":2,"title":"place-items","slug":"place-items","link":"#place-items","children":[]},{"level":2,"title":"KaTeX","slug":"katex","link":"#katex","children":[]}],"relativePath":"1.基础/2.css/8.grid.md","lastUpdated":1720835436682}'),p={name:"1.基础/2.css/8.grid.md"},e=l(`<h1 id="grid布局" tabindex="-1">grid布局 <a class="header-anchor" href="#grid布局" aria-hidden="true">#</a></h1><h2 id="示例html与css" tabindex="-1">示例html与css <a class="header-anchor" href="#示例html与css" aria-hidden="true">#</a></h2><p>html</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;wrapper&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;one item&quot;</span><span style="color:#ABB2BF;">&gt;One&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;two item&quot;</span><span style="color:#ABB2BF;">&gt;Two&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;three item&quot;</span><span style="color:#ABB2BF;">&gt;Three&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;four item&quot;</span><span style="color:#ABB2BF;">&gt;Four&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;five item&quot;</span><span style="color:#ABB2BF;">&gt;Five&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;six item&quot;</span><span style="color:#ABB2BF;">&gt;Six&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;wrapper&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;one item&quot;</span><span style="color:#B392F0;">&gt;One&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;two item&quot;</span><span style="color:#B392F0;">&gt;Two&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;three item&quot;</span><span style="color:#B392F0;">&gt;Three&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;four item&quot;</span><span style="color:#B392F0;">&gt;Four&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;five item&quot;</span><span style="color:#B392F0;">&gt;Five&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;six item&quot;</span><span style="color:#B392F0;">&gt;Six&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>css</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.wrapper</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">grid</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 声明一个容器 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  grid-template-columns: </span><span style="color:#56B6C2;">repeat</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/*  声明列的宽度  */</span></span>
<span class="line"><span style="color:#ABB2BF;">  grid-gap: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*  声明行间距和列间距  */</span></span>
<span class="line"><span style="color:#ABB2BF;">  grid-template-rows: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*  声明行的高度  */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.one</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#19CAAD</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.two</span><span style="color:#ABB2BF;"> { </span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#8CC7B5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.three</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#D1BA74</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.four</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#BEE7E9</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.five</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#E6CEAC</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.six</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background: </span><span style="color:#D19A66;">#ECAD9E</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-align: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.wrapper {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">grid</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* 声明一个容器 */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">grid-template-columns</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> repeat</span><span style="color:#F8F8F8;">(3</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 200px)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明列的宽度  */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">grid-gap</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明行间距和列间距  */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">grid-template-rows</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100px 200px</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明行的高度  */</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.one {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#19CAAD</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.two { </span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#8CC7B5</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.three {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#D1BA74</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.four {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#BEE7E9</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.five {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#E6CEAC</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.six {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ECAD9E</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.item {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">center</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>设置父元素为grid容器</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#D19A66;">.wrapper</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      margin: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      display: </span><span style="color:#D19A66;">grid</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 声明一个容器 */</span></span>
<span class="line"><span style="color:#ABB2BF;">      grid-template-columns: </span><span style="color:#56B6C2;">repeat</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/*  声明列的宽度  */</span></span>
<span class="line"><span style="color:#ABB2BF;">      grid-gap: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*  声明行间距和列间距  */</span></span>
<span class="line"><span style="color:#ABB2BF;">      grid-template-rows: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/*  声明行的高度  */</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">   .wrapper {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">grid</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* 声明一个容器 */</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">grid-template-columns</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> repeat</span><span style="color:#F8F8F8;">(3</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 200px)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明列的宽度  */</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">grid-gap</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明行间距和列间距  */</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">grid-template-rows</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100px 200px</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/*  声明行的高度  */</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>1.，grid容器设置height后，所有行平分容器高度，为每一行设置固定高度后，剩下的行会平分剩余高度</p><p>2.grid-gap，设置行列间距</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-gap</span><span style="color:#C678DD;">: 20px;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 行列间距 */</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-gap</span><span style="color:#C678DD;">: 20px 40px;</span><span style="color:#ABB2BF;">   </span><span style="color:#7F848E;font-style:italic;">/* 行间距和列间距 */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-gap</span><span style="color:#B392F0;">: 20px; </span><span style="color:#6B737C;">/* 行列间距 */</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-gap</span><span style="color:#B392F0;">: 20px 40px;   </span><span style="color:#6B737C;">/* 行间距和列间距 */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="repeat-auto-fill-fr-minmax" tabindex="-1">repeat/auto-fill/fr/minmax <a class="header-anchor" href="#repeat-auto-fill-fr-minmax" aria-hidden="true">#</a></h2><ul><li>repeat函数 用于简化重复的值，该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值</li><li>auto-fill关键字 表示自动填充，可以用于每行不固定列数，和选择所有行</li><li>fr关键字 用于分配剩余空间，根据fr的数值进行等分，如1fr 2fr，则分别为1/3 2/3，fr的个数也代表行或列的个数</li><li>minmax函数 用于设置最小最大行宽或列高，接受两个参数，分别为最小值和最大值</li></ul><h2 id="grid-template-columns设置列宽" tabindex="-1">grid-template-columns设置列宽 <a class="header-anchor" href="#grid-template-columns设置列宽" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-template-columns</span><span style="color:#C678DD;">: 100px 500px;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 列数等于宽度个数。列数为2，宽度分别为100px,500px */</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-template-columns</span><span style="color:#C678DD;">: 100px 1fr;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 列数等于宽度个数。列数为2，宽度分别为100px，容器剩余宽度 */</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-template-columns</span><span style="color:#C678DD;">: 100px minmax(200px</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> 1fr</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/* 列数等于宽度个数。列数为2，宽度分别为100px，最小200px最大所有剩余容器高度 */</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-template-columns</span><span style="color:#C678DD;">: repeat(3</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> 400px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/* 每行固定列数和宽度。三列的宽度都为400px */</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">grid-template-columns</span><span style="color:#C678DD;">: repeat(</span><span style="color:#E06C75;">auto-fill</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> 400px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/* 每行不固定列数，自动根据容器宽度调整列数。每列宽度都为400px */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-template-columns</span><span style="color:#B392F0;">: 100px 500px; </span><span style="color:#6B737C;">/* 列数等于宽度个数。列数为2，宽度分别为100px,500px */</span><span style="color:#B392F0;"> </span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-template-columns</span><span style="color:#B392F0;">: 100px 1fr; </span><span style="color:#6B737C;">/* 列数等于宽度个数。列数为2，宽度分别为100px，容器剩余宽度 */</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-template-columns</span><span style="color:#B392F0;">: 100px minmax(200px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 1fr); </span><span style="color:#6B737C;">/* 列数等于宽度个数。列数为2，宽度分别为100px，最小200px最大所有剩余容器高度 */</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-template-columns</span><span style="color:#B392F0;">: repeat(3</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 400px); </span><span style="color:#6B737C;">/* 每行固定列数和宽度。三列的宽度都为400px */</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">grid-template-columns</span><span style="color:#B392F0;">: repeat(</span><span style="color:#FFAB70;">auto-fill</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 400px); </span><span style="color:#6B737C;">/* 每行不固定列数，自动根据容器宽度调整列数。每列宽度都为400px */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="grid-template-rows设置行高" tabindex="-1">grid-template-rows设置行高 <a class="header-anchor" href="#grid-template-rows设置行高" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">grid-template-rows</span><span style="color:#C678DD;">: 100px 200px;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 设置一二行高度分别为100px 200px,其余未设置高度的行平分剩余容器高度 */</span></span>
<span class="line"><span style="color:#E06C75;">grid-template-rows</span><span style="color:#C678DD;">: repeat(</span><span style="color:#E06C75;">auto-fill</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> 100px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/* 设置每行高度都为100px */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">grid-template-rows</span><span style="color:#B392F0;">: 100px 200px; </span><span style="color:#6B737C;">/* 设置一二行高度分别为100px 200px,其余未设置高度的行平分剩余容器高度 */</span></span>
<span class="line"><span style="color:#FFAB70;">grid-template-rows</span><span style="color:#B392F0;">: repeat(</span><span style="color:#FFAB70;">auto-fill</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 100px); </span><span style="color:#6B737C;">/* 设置每行高度都为100px */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="grid-auto-rows设置行高" tabindex="-1">grid-auto-rows设置行高 <a class="header-anchor" href="#grid-auto-rows设置行高" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">grid-auto-rows</span><span style="color:#C678DD;">: 100px ;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 所有行高为100px*/</span></span>
<span class="line"><span style="color:#E06C75;">grid-auto-rows</span><span style="color:#C678DD;">: 100px 200px;</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/* 第一行行高为100px，第二行行高为200px，剩余行行高高为100px */</span></span>
<span class="line"><span style="color:#E06C75;">grid-auto-rows</span><span style="color:#C678DD;">: 100px 1fr;</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/* 第一行行高为100px，第二行行高为容器剩余高度，剩下行高为100px */</span></span>
<span class="line"><span style="color:#E06C75;">grid-auto-rows</span><span style="color:#C678DD;">: 100px minmax(200px</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> 1fr</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">/* 第一行行高为100px，第二行行高最小为200px，最大为容易所有剩余高度 */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">grid-auto-rows</span><span style="color:#B392F0;">: 100px ; </span><span style="color:#6B737C;">/* 所有行高为100px*/</span></span>
<span class="line"><span style="color:#FFAB70;">grid-auto-rows</span><span style="color:#B392F0;">: 100px 200px; </span><span style="color:#6B737C;">/* 第一行行高为100px，第二行行高为200px，剩余行行高高为100px */</span></span>
<span class="line"><span style="color:#FFAB70;">grid-auto-rows</span><span style="color:#B392F0;">: 100px 1fr;  </span><span style="color:#6B737C;">/* 第一行行高为100px，第二行行高为容器剩余高度，剩下行高为100px */</span></span>
<span class="line"><span style="color:#FFAB70;">grid-auto-rows</span><span style="color:#B392F0;">: 100px minmax(200px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> 1fr) </span><span style="color:#6B737C;">/* 第一行行高为100px，第二行行高最小为200px，最大为容易所有剩余高度 */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="grid-column" tabindex="-1">grid-column <a class="header-anchor" href="#grid-column" aria-hidden="true">#</a></h2><p>是 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start" target="_blank" rel="noreferrer"><code>grid-column-start</code></a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end" target="_blank" rel="noreferrer"><code>grid-column-end</code></a> 的简写属性</p><h2 id="grid-row" tabindex="-1">grid-row <a class="header-anchor" href="#grid-row" aria-hidden="true">#</a></h2><p>是 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start" target="_blank" rel="noreferrer"><code>grid-row-start</code></a>和 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end" target="_blank" rel="noreferrer"><code>grid-row-end</code></a> 的简写属性</p><h2 id="autoprefixer适配grid" tabindex="-1">Autoprefixer适配grid <a class="header-anchor" href="#autoprefixer适配grid" aria-hidden="true">#</a></h2><blockquote><p><a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noreferrer">https://github.com/postcss/autoprefixer</a></p><p><a href="https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/" target="_blank" rel="noreferrer">https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/</a></p></blockquote><h2 id="autoprefixer不支持repeat-auto-fit-auto-fill" tabindex="-1">Autoprefixer不支持repeat auto-fit auto-fill <a class="header-anchor" href="#autoprefixer不支持repeat-auto-fit-auto-fill" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.grid</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/* This will never be IE friendly */</span></span>
<span class="line"><span style="color:#ABB2BF;">  grid-template-columns: </span><span style="color:#56B6C2;">repeat</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">auto-fit</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">min-max(200px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">fr</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.grid {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">/* This will never be IE friendly */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">grid-template-columns</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> repeat</span><span style="color:#F8F8F8;">(</span><span style="color:#79B8FF;">auto-fit</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> min-max(200px</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 1fr)</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="ie11下flex布局align-items-center不居中无法生效" tabindex="-1">ie11下flex布局align-items：center不居中无法生效 <a class="header-anchor" href="#ie11下flex布局align-items-center不居中无法生效" aria-hidden="true">#</a></h2><p>与min-height会冲突</p><h2 id="place-items" tabindex="-1">place-items <a class="header-anchor" href="#place-items" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a> 中的 <strong><code>place-items</code></strong> 是一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties" target="_blank" rel="noreferrer">简写属性</a> ，它允许你在相关的布局（如 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noreferrer">Grid</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noreferrer">Flexbox</a>）中可以同时沿着块级和内联方向对齐元素 (例如：<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items" target="_blank" rel="noreferrer"><code>align-items</code></a> 和 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items" target="_blank" rel="noreferrer"><code>justify-items</code></a> 属性) 。如果未提供第二个值，则第一个值作为第二个值的默认值。</p><details><summary>展开查看</summary>11111</details><h2 id="katex" tabindex="-1">KaTeX <a class="header-anchor" href="#katex" aria-hidden="true">#</a></h2><p>You can render LaTeX mathematical expressions using <a href="https://khan.github.io/KaTeX/" target="_blank" rel="noreferrer">KaTeX</a>:</p><p>The <em>Gamma function</em> satisfying $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$ is via the Euler integral</p><p>$$ \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt,. $$</p><blockquote><p>You can find more information about <strong>LaTeX</strong> mathematical expressions <a href="http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference" target="_blank" rel="noreferrer">here</a>.</p></blockquote>`,37),o=[e];function r(t,c,i,B,y,F){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
