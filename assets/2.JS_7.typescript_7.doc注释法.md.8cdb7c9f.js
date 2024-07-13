import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"doc注释法","description":"","frontmatter":{},"headers":[{"level":2,"title":"function","slug":"function","link":"#function","children":[]},{"level":2,"title":"interface","slug":"interface","link":"#interface","children":[]},{"level":2,"title":"@link","slug":"link","link":"#link","children":[]},{"level":2,"title":"enum","slug":"enum","link":"#enum","children":[]},{"level":2,"title":"代码提示","slug":"代码提示","link":"#代码提示","children":[]},{"level":2,"title":"单词添加背景色","slug":"单词添加背景色","link":"#单词添加背景色","children":[]},{"level":2,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[]}],"relativePath":"2.JS/7.typescript/7.doc注释法.md","lastUpdated":1720835436690}'),p={name:"2.JS/7.typescript/7.doc注释法.md"},e=l(`<h1 id="doc注释法" tabindex="-1">doc注释法 <a class="header-anchor" href="#doc注释法" aria-hidden="true">#</a></h1><blockquote><p>在代码补全时或鼠标悬浮时提供注释说明</p><p>与typescript搭配，可以实现易于维护的代码</p></blockquote><h2 id="function" tabindex="-1">function <a class="header-anchor" href="#function" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 获取店铺签约合同信息</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@access</span><span style="color:#7F848E;font-style:italic;"> http://api.xxx.com/getUserNameByTagIdFromServer</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">tagId</span><span style="color:#7F848E;font-style:italic;"> 标签id {number}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * </span><span style="color:#C678DD;font-style:italic;">@returns</span><span style="color:#7F848E;font-style:italic;"> name 用户名称 {string}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">queryUserNameByTagId</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">tagId</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">userName</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getUserNameByTagIdFromServer</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tagId</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">userName</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;">   * 获取店铺签约合同信息</span></span>
<span class="line"><span style="color:#6B737C;">   * </span><span style="color:#F97583;">@access</span><span style="color:#6B737C;"> http://api.xxx.com/getUserNameByTagIdFromServer</span></span>
<span class="line"><span style="color:#6B737C;">   * </span><span style="color:#F97583;">@param</span><span style="color:#6B737C;"> tagId 标签id {number}</span></span>
<span class="line"><span style="color:#6B737C;">   * </span><span style="color:#F97583;">@returns</span><span style="color:#6B737C;"> name 用户名称 {string}</span></span>
<span class="line"><span style="color:#6B737C;">   */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">async</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> queryUserNameByTagId(tagId</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">userName</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> getUserNameByTagIdFromServer(tagId);</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> userName;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="interface" tabindex="-1">interface <a class="header-anchor" href="#interface" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">IUser</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 用户姓名</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 用户年龄</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {} </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">IUser</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">user</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;赵云&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#B392F0;"> IUser {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;">   * 用户姓名</span></span>
<span class="line"><span style="color:#6B737C;">   */</span></span>
<span class="line"><span style="color:#B392F0;">  name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">string</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;">   * 用户年龄</span></span>
<span class="line"><span style="color:#6B737C;">   */</span></span>
<span class="line"><span style="color:#B392F0;">  age</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">number</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">user</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {} </span><span style="color:#F97583;">as</span><span style="color:#B392F0;"> IUser;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">user</span><span style="color:#B392F0;">.age </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#79B8FF;">user</span><span style="color:#B392F0;">.name </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;赵云&#39;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="link" tabindex="-1">@link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h2><p>可以跳转至指定类型路径</p><h2 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 水果枚举定义</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">APPLE</span><span style="color:#7F848E;font-style:italic;"> apple 苹果</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">ORANGE</span><span style="color:#7F848E;font-style:italic;"> orange 橘子</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">enum</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">EFruit</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 苹果 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">APPLE</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;apple&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 苹果 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">ORANGE</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;orange&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;"> * 水果枚举定义</span></span>
<span class="line"><span style="color:#6B737C;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6B737C;"> APPLE apple 苹果</span></span>
<span class="line"><span style="color:#6B737C;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6B737C;"> ORANGE orange 橘子</span></span>
<span class="line"><span style="color:#6B737C;"> */</span></span>
<span class="line"><span style="color:#F97583;">enum</span><span style="color:#B392F0;"> EFruit {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">/** 苹果 */</span></span>
<span class="line"><span style="color:#B392F0;">  APPLE </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;apple&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">/** 苹果 */</span></span>
<span class="line"><span style="color:#B392F0;">  ORANGE </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;orange&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="代码提示" tabindex="-1">代码提示 <a class="header-anchor" href="#代码提示" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * Callback with latest motion values, fired max once per frame.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * \`\`\`jsx</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * function onUpdate(latest) {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *   console.log(latest.x, latest.opacity)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * &lt;Frame animate={{ x: 100, opacity: 0 }} onUpdate={onUpdate} /&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * \`\`\`</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">   </span><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;">     * Callback with latest motion values, fired max once per frame.</span></span>
<span class="line"><span style="color:#6B737C;">     *</span></span>
<span class="line"><span style="color:#6B737C;">     * \`\`\`jsx</span></span>
<span class="line"><span style="color:#6B737C;">     * function onUpdate(latest) {</span></span>
<span class="line"><span style="color:#6B737C;">     *   console.log(latest.x, latest.opacity)</span></span>
<span class="line"><span style="color:#6B737C;">     * }</span></span>
<span class="line"><span style="color:#6B737C;">     *</span></span>
<span class="line"><span style="color:#6B737C;">     * &lt;Frame animate={{ x: 100, opacity: 0 }} onUpdate={onUpdate} /&gt;</span></span>
<span class="line"><span style="color:#6B737C;">     * \`\`\`</span></span>
<span class="line"><span style="color:#6B737C;">     */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="单词添加背景色" tabindex="-1">单词添加背景色 <a class="header-anchor" href="#单词添加背景色" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">/** \`最高负荷\` */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#6B737C;">/** \`最高负荷\` */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Given an input range of \`[-200, -100, 100, 200]\` and an output range of</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * - When provided a value between \`-200\` and \`-100\`, will return a value between \`0\` and  \`1\`.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * - When provided a value between \`-100\` and \`100\`, will return \`1\`.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * - When provided a value between \`100\` and \`200\`, will return a value between \`1\` and  \`0\`</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;"> * Given an input range of \`[-200, -100, 100, 200]\` and an output range of</span></span>
<span class="line"><span style="color:#6B737C;"> * </span></span>
<span class="line"><span style="color:#6B737C;"> * - When provided a value between \`-200\` and \`-100\`, will return a value between \`0\` and  \`1\`.</span></span>
<span class="line"><span style="color:#6B737C;"> * - When provided a value between \`-100\` and \`100\`, will return \`1\`.</span></span>
<span class="line"><span style="color:#6B737C;"> * - When provided a value between \`100\` and \`200\`, will return a value between \`1\` and  \`0\`</span></span>
<span class="line"><span style="color:#6B737C;"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,16),o=[e];function c(t,r,i,y,B,d){return n(),a("div",null,o)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};
