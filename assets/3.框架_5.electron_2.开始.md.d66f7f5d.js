import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const A=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"下载模板","slug":"下载模板","link":"#下载模板","children":[]},{"level":2,"title":"运行项目","slug":"运行项目","link":"#运行项目","children":[]},{"level":2,"title":"主进程中配置","slug":"主进程中配置","link":"#主进程中配置","children":[]},{"level":2,"title":"入门示例","slug":"入门示例","link":"#入门示例","children":[]},{"level":2,"title":"Electron是什么","slug":"electron是什么","link":"#electron是什么","children":[{"level":3,"title":"关于浏览器内核，可以在【主进程】中查看浏览器内核版本","slug":"关于浏览器内核-可以在【主进程】中查看浏览器内核版本","link":"#关于浏览器内核-可以在【主进程】中查看浏览器内核版本","children":[]},{"level":3,"title":"主进程与渲染进程（窗口）之间如何通信","slug":"主进程与渲染进程-窗口-之间如何通信","link":"#主进程与渲染进程-窗口-之间如何通信","children":[]}]},{"level":2,"title":"是否可以使用vuex","slug":"是否可以使用vuex","link":"#是否可以使用vuex","children":[{"level":3,"title":"vuex-electron","slug":"vuex-electron","link":"#vuex-electron","children":[]}]}],"relativePath":"3.框架/5.electron/2.开始.md","lastUpdated":1720835436694}'),p={name:"3.框架/5.electron/2.开始.md"},o=l(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><h2 id="下载模板" tabindex="-1">下载模板 <a class="header-anchor" href="#下载模板" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">create</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">electron-app</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">my-app</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">create</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">electron-app</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">my-app</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="运行项目" tabindex="-1">运行项目 <a class="header-anchor" href="#运行项目" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">start</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">yarn </span><span style="color:#9DB1C5;">start</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="主进程中配置" tabindex="-1">主进程中配置 <a class="header-anchor" href="#主进程中配置" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createWindow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Create the browser window</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">mainWindow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">BrowserWindow</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">800</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">600</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">webPreferences</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">       </span><span style="color:#7F848E;font-style:italic;">// 是否可使用node混合(浏览器中调用node方法)，默认是false</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">nodeIntegration</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 只能在预加载脚本中使用node，而页面中不行，这样是为了安全</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">contextIsolation</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// 允许使用webview</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">webviewTag</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createWindow </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// Create the browser window</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">mainWindow</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> BrowserWindow({</span></span>
<span class="line"><span style="color:#B392F0;">    width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">800</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    webPreferences</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">       </span><span style="color:#6B737C;">// 是否可使用node混合(浏览器中调用node方法)，默认是false</span></span>
<span class="line"><span style="color:#B392F0;">      nodeIntegration</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#6B737C;">// 只能在预加载脚本中使用node，而页面中不行，这样是为了安全</span></span>
<span class="line"><span style="color:#B392F0;">      contextIsolation</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">false</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#6B737C;">// 允许使用webview</span></span>
<span class="line"><span style="color:#B392F0;">      webviewTag</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  })</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="入门示例" tabindex="-1">入门示例 <a class="header-anchor" href="#入门示例" aria-hidden="true">#</a></h2><p>拖拽文件，获取文件信息，浏览器中调用node方法读取文件内容</p><p>index.html</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">charset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;Hello World!&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">link</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">rel</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;stylesheet&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;index.css&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;holder&quot;</span><span style="color:#ABB2BF;">&gt;拖入此上传文件内容&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        读取的文件内容</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;readList&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">src</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;./render.js&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;!</span><span style="color:#FFAB70;">DOCTYPE</span><span style="color:#B392F0;"> html&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">html</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">head</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">meta</span><span style="color:#B392F0;"> charset</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;UTF-8&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">title</span><span style="color:#B392F0;">&gt;Hello World!&lt;/</span><span style="color:#FFAB70;">title</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">link</span><span style="color:#B392F0;"> rel</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;stylesheet&quot;</span><span style="color:#B392F0;"> href</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;index.css&quot;</span><span style="color:#B392F0;"> /&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">head</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">body</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">h2</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;holder&quot;</span><span style="color:#B392F0;">&gt;拖入此上传文件内容&lt;/</span><span style="color:#FFAB70;">h2</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;</span><span style="color:#FFAB70;">h1</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">        读取的文件内容</span></span>
<span class="line"><span style="color:#B392F0;">        &lt;</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;readList&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">      &lt;/</span><span style="color:#FFAB70;">h1</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;/</span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">body</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">script</span><span style="color:#B392F0;"> src</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;./render.js&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">script</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">html</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>render.js</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">holder</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;#holder&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">readlist</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;#readList&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">fs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;fs&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">holder</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;drop&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stopPropagation</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">file</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">of</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">dataTransfer</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">files</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">file</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">readFile</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">file</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;font-style:italic;">err</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">readlist</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerHTML</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">file</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">data</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#E5C07B;">holder</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;dragover&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">preventDefault</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stopPropagation</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> holder </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">document</span><span style="color:#B392F0;">.querySelector(</span><span style="color:#FFAB70;">&quot;#holder&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> readlist </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">document</span><span style="color:#B392F0;">.querySelector(</span><span style="color:#FFAB70;">&quot;#readList&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#B392F0;"> fs </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&quot;fs&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#79B8FF;">holder</span><span style="color:#B392F0;">.addEventListener(</span><span style="color:#FFAB70;">&quot;drop&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> e </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.preventDefault()</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.stopPropagation()</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(e)</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">for</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">file</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">of</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">dataTransfer</span><span style="color:#B392F0;">.files) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(file)</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">fs</span><span style="color:#B392F0;">.readFile(</span><span style="color:#79B8FF;">file</span><span style="color:#B392F0;">.path</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> (err</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> data) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (err) </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(err)</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">readlist</span><span style="color:#B392F0;">.innerHTML </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">file</span><span style="color:#B392F0;">.name </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;/&quot;</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> data</span></span>
<span class="line"><span style="color:#B392F0;">    })</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">})</span></span>
<span class="line"><span style="color:#79B8FF;">holder</span><span style="color:#B392F0;">.addEventListener(</span><span style="color:#FFAB70;">&quot;dragover&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> e </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.preventDefault()</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">e</span><span style="color:#B392F0;">.stopPropagation()</span></span>
<span class="line"><span style="color:#B392F0;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="electron是什么" tabindex="-1">Electron是什么 <a class="header-anchor" href="#electron是什么" aria-hidden="true">#</a></h2><p>一款跨平台的桌面应用，兼容Windows、Mac、Linux系统 可以理解为一个包了浏览器的壳，提供了浏览器+Node.js+框架API的运行环境，可以打开多个静态html脚本（或vue项目）</p><p>分为主进程和渲染进程</p><p>主进程是程序入口，提供了Node.js和Native API（框架）环境； 渲染进程提供了浏览器环境，负责加载页面，完成业务逻辑，可以在主进程同时打开多个渲染进程</p><h3 id="关于浏览器内核-可以在【主进程】中查看浏览器内核版本" tabindex="-1">关于浏览器内核，可以在【主进程】中查看浏览器内核版本 <a class="header-anchor" href="#关于浏览器内核-可以在【主进程】中查看浏览器内核版本" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">process.versions.chrome</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">process.versions.chrome</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="主进程与渲染进程-窗口-之间如何通信" tabindex="-1">主进程与渲染进程（窗口）之间如何通信 <a class="header-anchor" href="#主进程与渲染进程-窗口-之间如何通信" aria-hidden="true">#</a></h3><p>渲染进程之间，需要通过主进程转发通知</p><h2 id="是否可以使用vuex" tabindex="-1">是否可以使用vuex <a class="header-anchor" href="#是否可以使用vuex" aria-hidden="true">#</a></h2><p>因为不同的窗口，属于不同的渲染进程， vuex 是被隔离的，相互之间是不能通过 vuex 进行通信的，2个渲染进程之间进行通信，需要通过 主进程进行分发才行。 <strong>可以用 vuex - electron 来实现</strong></p><h3 id="vuex-electron" tabindex="-1">vuex-electron <a class="header-anchor" href="#vuex-electron" aria-hidden="true">#</a></h3><p>通过拦截所有渲染进程（窗口）内状态机实例的action、mutation提交，把数据同步到主进程进行管理，这里注意，所有的action、mutation方法块内的执行环境，都是主进程，不建议在状态机API进行渲染进程（窗口）间的直接通信和交互操作。</p>`,25),e=[o];function t(r,c,B,y,F,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
