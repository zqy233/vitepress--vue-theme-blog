import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"部署上线","description":"","frontmatter":{},"headers":[{"level":2,"title":"部署在同一服务器","slug":"部署在同一服务器","link":"#部署在同一服务器","children":[{"level":3,"title":"微应用改造","slug":"微应用改造","link":"#微应用改造","children":[]},{"level":3,"title":"主应用改造","slug":"主应用改造","link":"#主应用改造","children":[]}]}],"relativePath":"3.框架/7.乾坤/3.部署上线.md","lastUpdated":1720835436698}'),p={name:"3.框架/7.乾坤/3.部署上线.md"},o=l(`<h1 id="部署上线" tabindex="-1">部署上线 <a class="header-anchor" href="#部署上线" aria-hidden="true">#</a></h1><p>微前端项目在本地开发完成后，接下来就需要考虑如何部署上线。主应用和微应用都应该是独立开发和打包</p><h2 id="部署在同一服务器" tabindex="-1">部署在同一服务器 <a class="header-anchor" href="#部署在同一服务器" aria-hidden="true">#</a></h2><p>如果服务器数量有限，或不能跨域等原因需要把主应用和微应用部署在一起</p><p>通常的做法是主应用部署在一级目录，微应用部署在二/三级目录</p><h3 id="微应用改造" tabindex="-1">微应用改造 <a class="header-anchor" href="#微应用改造" aria-hidden="true">#</a></h3><p>由于微应用部署在非根目录，微应用打包之前需要配置webpack构建时的publicPath为目录名称，以便于主应用注册微应用后能正常访问。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">filename</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">isBuild</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;[name].[contenthash].js&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;[name].js&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#7F848E;font-style:italic;">//编译时要加hash防止缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">__dirname</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;dist&#39;</span><span style="color:#ABB2BF;">),</span><span style="color:#7F848E;font-style:italic;">//产物输出目录</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">publicPath</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;/mkc/&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">chunkFilename</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">isBuild</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;[name].[contenthash].chunk.js&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;[name].chunk.js&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">library</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">pkgJson</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">-[name]\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">libraryTarget</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;umd&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">jsonpFunction</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`webpackJsonp_</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">pkgJson</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">globalObject</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;window&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">    output</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        filename</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> isBuild </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;[name].[contenthash].js&#39;</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;[name].js&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#6B737C;">//编译时要加hash防止缓存</span></span>
<span class="line"><span style="color:#B392F0;">        path</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">path</span><span style="color:#B392F0;">.join(__dirname</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;dist&#39;</span><span style="color:#B392F0;">)</span><span style="color:#BBBBBB;">,</span><span style="color:#6B737C;">//产物输出目录</span></span>
<span class="line"><span style="color:#B392F0;">        publicPath</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;/mkc/&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        chunkFilename</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> isBuild </span><span style="color:#F97583;">?</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;[name].[contenthash].chunk.js&#39;</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;[name].chunk.js&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        library</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`</span><span style="color:#F97583;">\${</span><span style="color:#B392F0;">pkgJson</span><span style="color:#F97583;">}</span><span style="color:#FFAB70;">-[name]\`</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        libraryTarget</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;umd&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        jsonpFunction</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`webpackJsonp_</span><span style="color:#F97583;">\${</span><span style="color:#B392F0;">pkgJson</span><span style="color:#F97583;">}</span><span style="color:#FFAB70;">\`</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">        globalObject</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;window&#39;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="主应用改造" tabindex="-1">主应用改造 <a class="header-anchor" href="#主应用改造" aria-hidden="true">#</a></h3><p>主应用在注册微应用时，需要注意：</p><ul><li>activeRule不能和微应用的真实访问路径一样；</li><li>微应用的真实访问路径就是entry，entry可以是相对路径；</li><li>微应用entry路径最后面的 / 不可省略；</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 微应用为hash，注册微应用</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@param</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E5C07B;font-style:italic;">{*}</span><span style="color:#7F848E;font-style:italic;"> </span><span style="color:#E06C75;font-style:italic;">hash</span><span style="color:#7F848E;font-style:italic;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@returns</span><span style="color:#7F848E;font-style:italic;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">getActiveRule</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">hash</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">location</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">location</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">hash</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">startsWith</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">hash</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">defApps</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;imarket&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">entry</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`/life/\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#subapp-container&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">activeRule</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">getActiveRule</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#/imarket&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;MKCenter&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">entry</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\`/mkc/\`</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;#subapp-container&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">activeRule</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">getActiveRule</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#/MKCenter&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;"> * 微应用为hash，注册微应用</span></span>
<span class="line"><span style="color:#6B737C;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6B737C;"> </span><span style="color:#B392F0;">{*}</span><span style="color:#6B737C;"> hash </span></span>
<span class="line"><span style="color:#6B737C;"> * </span><span style="color:#F97583;">@returns</span><span style="color:#6B737C;"> </span></span>
<span class="line"><span style="color:#6B737C;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> getActiveRule </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> (hash) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> (location) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">location</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">hash</span><span style="color:#B392F0;">.startsWith(hash);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">defApps</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> [</span></span>
<span class="line"><span style="color:#B392F0;">  {</span></span>
<span class="line"><span style="color:#B392F0;">    name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;imarket&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    entry</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`/life/\`</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    container</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;#subapp-container&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    activeRule</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> getActiveRule(</span><span style="color:#FFAB70;">&#39;#/imarket&#39;</span><span style="color:#B392F0;">)</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  {</span></span>
<span class="line"><span style="color:#B392F0;">    name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;MKCenter&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    entry</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">\`/mkc/\`</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    container</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&#39;#subapp-container&#39;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    activeRule</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> getActiveRule(</span><span style="color:#FFAB70;">&#39;#/MKCenter&#39;</span><span style="color:#B392F0;">)</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  }</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,12),e=[o];function c(B,t,r,y,i,F){return n(),a("div",null,e)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};
