import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"强制格式化","slug":"强制格式化","link":"#强制格式化","children":[]}],"relativePath":"6.源码阅读/vscode-prettier/强制格式化.md","lastUpdated":1720835436710}'),p={name:"6.源码阅读/vscode-prettier/强制格式化.md"},o=l(`<h2 id="强制格式化" tabindex="-1">强制格式化 <a class="header-anchor" href="#强制格式化" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * 强制格式化</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     * </span><span style="color:#C678DD;font-style:italic;">@returns</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">public</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">forceFormatDocument</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">try</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">activeTextEditor</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 当前激活的编辑器</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">editor</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">loggingService</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">logInfo</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;No active document. Nothing was formatted.&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 强制格式化不会使用忽略文件</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">loggingService</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">logInfo</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Forced formatting will not use ignore files.&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">edits</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">provideEdits</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">document</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">force</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">edits</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#C678DD;">return</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 替换编辑器文本为格式化后的</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">editor</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">edit</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">editBuilder</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#7F848E;font-style:italic;">// 第一个参数范围，第二个参数替换文本</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">editBuilder</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">replace</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">edits</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">].</span><span style="color:#E06C75;">range</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">edits</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">].</span><span style="color:#E06C75;">newText</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">            })</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">catch</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">loggingService</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">logError</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;Error formatting document&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">/**</span></span>
<span class="line"><span style="color:#6B737C;">     * 强制格式化</span></span>
<span class="line"><span style="color:#6B737C;">     * </span><span style="color:#F97583;">@returns</span></span>
<span class="line"><span style="color:#6B737C;">     */</span></span>
<span class="line"><span style="color:#B392F0;">    public forceFormatDocument </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">async</span><span style="color:#B392F0;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">        </span><span style="color:#F97583;">try</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.activeTextEditor </span><span style="color:#6B737C;">// 当前激活的编辑器</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">editor) {</span></span>
<span class="line"><span style="color:#B392F0;">                </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">loggingService</span><span style="color:#B392F0;">.logInfo(</span><span style="color:#FFAB70;">&#39;No active document. Nothing was formatted.&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">                </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#6B737C;">// 强制格式化不会使用忽略文件</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">loggingService</span><span style="color:#B392F0;">.logInfo(</span><span style="color:#FFAB70;">&#39;Forced formatting will not use ignore files.&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">            </span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">edits</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.provideEdits(</span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.document</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> { force</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#B392F0;"> })</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">edits</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">length</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">!==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">                </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#B392F0;">            }</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#6B737C;">// 替换编辑器文本为格式化后的</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#F97583;">await</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">editor</span><span style="color:#B392F0;">.edit(editBuilder </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">                </span><span style="color:#6B737C;">// 第一个参数范围，第二个参数替换文本</span></span>
<span class="line"><span style="color:#B392F0;">                </span><span style="color:#79B8FF;">editBuilder</span><span style="color:#B392F0;">.replace(edits[</span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">].range</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> edits[</span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">].newText)</span></span>
<span class="line"><span style="color:#B392F0;">            })</span></span>
<span class="line"><span style="color:#B392F0;">        } </span><span style="color:#F97583;">catch</span><span style="color:#B392F0;"> (e) {</span></span>
<span class="line"><span style="color:#B392F0;">            </span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">loggingService</span><span style="color:#B392F0;">.logError(</span><span style="color:#FFAB70;">&#39;Error formatting document&#39;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> e)</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,2),e=[o];function t(c,r,B,y,F,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
