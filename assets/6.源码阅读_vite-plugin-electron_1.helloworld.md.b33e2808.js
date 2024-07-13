import{_ as s,o as n,c as a,a as l}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"官方文档","description":"","frontmatter":{},"headers":[{"level":2,"title":"新建文件夹和package.json","slug":"新建文件夹和package-json","link":"#新建文件夹和package-json","children":[]},{"level":2,"title":"下载electron","slug":"下载electron","link":"#下载electron","children":[]},{"level":2,"title":"运行主进程","slug":"运行主进程","link":"#运行主进程","children":[]},{"level":2,"title":"创建页面","slug":"创建页面","link":"#创建页面","children":[]},{"level":2,"title":"在窗口中打开您的页面","slug":"在窗口中打开您的页面","link":"#在窗口中打开您的页面","children":[]}],"relativePath":"6.源码阅读/vite-plugin-electron/1.helloworld.md","lastUpdated":1720835436706}'),p={name:"6.源码阅读/vite-plugin-electron/1.helloworld.md"},o=l(`<h1 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-hidden="true">#</a></h1><blockquote><p><a href="https://www.electronjs.org/zh/docs/latest/tutorial/quick-start" target="_blank" rel="noreferrer">https://www.electronjs.org/zh/docs/latest/tutorial/quick-start</a></p></blockquote><h2 id="新建文件夹和package-json" tabindex="-1">新建文件夹和package.json <a class="header-anchor" href="#新建文件夹和package-json" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">my-electron-app</span><span style="color:#ABB2BF;"> &amp;&amp; </span><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">my-electron-app</span></span>
<span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">init</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-y</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">mkdir </span><span style="color:#9DB1C5;">my-electron-app</span><span style="color:#B392F0;"> </span><span style="color:#BBBBBB;">&amp;&amp;</span><span style="color:#B392F0;"> cd </span><span style="color:#9DB1C5;">my-electron-app</span></span>
<span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">init</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-y</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>package.json调整：</p><ul><li><code>author</code> 与 <code>description</code> 可为任意值，但对于<a href="https://www.electronjs.org/zh/docs/latest/tutorial/quick-start#package-and-distribute-your-application" target="_blank" rel="noreferrer">应用打包</a>是必填项。</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;name&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;my-electron-app&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;version&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1.0.0&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;description&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Hello World!&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;main&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;main.js&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;author&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Jane Doe&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&quot;license&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;MIT&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;name&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;my-electron-app&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;version&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;1.0.0&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;description&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Hello World!&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;main&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;main.js&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;author&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Jane Doe&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F8F8F8;">&quot;license&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;MIT&quot;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="下载electron" tabindex="-1">下载electron <a class="header-anchor" href="#下载electron" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">electron</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">electron</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在的 <a href="https://docs.npmjs.com/cli/v7/using-npm/scripts" target="_blank" rel="noreferrer"><code>package.json</code></a>配置文件中的<code>scripts</code>字段下增加一条<code>start</code>命令：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">&quot;start&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;electron .&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">&quot;scripts&quot;</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">   </span><span style="color:#F8F8F8;">&quot;start&quot;</span><span style="color:#BBBBBB;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;electron .&quot;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="运行主进程" tabindex="-1">运行主进程 <a class="header-anchor" href="#运行主进程" aria-hidden="true">#</a></h2><p>任何 Electron 应用程序的入口都是 <code>main</code> 文件。 这个文件控制了<strong>主进程</strong>，它运行在一个完整的Node.js环境中，负责控制您应用的生命周期，显示原生界面，执行特殊操作并管理渲染器进程(稍后详细介绍)。</p><p>执行期间，Electron 将依据应用中 <code>package.json</code>配置下<a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main" target="_blank" rel="noreferrer"><code>main</code></a>字段中配置的值查找此文件，您应该已在之前的步骤中配置过了。</p><p>要初始化这个<code>main</code>文件，需要在您项目的根目录下创建一个名为<code>main.js</code>的空文件。</p><h2 id="创建页面" tabindex="-1">创建页面 <a class="header-anchor" href="#创建页面" aria-hidden="true">#</a></h2><p>在可以为我们的应用创建窗口前，我们需要先创建加载进该窗口的内容。 在Electron中，各个窗口显示的内容可以是本地HTML文件，也可以是一个远程url。</p><p>此教程中，您将采用本地HTML的方式。 在您的项目根目录下创建一个名为<code>index.html</code>的文件：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">charset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!-- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">http-equiv</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;Content-Security-Policy&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;你好!&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;你好!&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    我们正在使用 Node.js &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;node-version&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">    Chromium &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;chrome-version&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">    和 Electron &lt;</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;electron-version&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">span</span><span style="color:#ABB2BF;">&gt;.</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">&lt;!</span><span style="color:#FFAB70;">DOCTYPE</span><span style="color:#B392F0;"> html&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">html</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">head</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">meta</span><span style="color:#B392F0;"> charset</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;UTF-8&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#6B737C;">&lt;!-- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP --&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">meta</span><span style="color:#B392F0;"> http-equiv</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;Content-Security-Policy&quot;</span><span style="color:#B392F0;"> content</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;default-src &#39;self&#39;; script-src &#39;self&#39;&quot;</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">title</span><span style="color:#B392F0;">&gt;你好!&lt;/</span><span style="color:#FFAB70;">title</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">head</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;</span><span style="color:#FFAB70;">body</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    &lt;</span><span style="color:#FFAB70;">h1</span><span style="color:#B392F0;">&gt;你好!&lt;/</span><span style="color:#FFAB70;">h1</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">    我们正在使用 Node.js &lt;</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;node-version&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;">&gt;,</span></span>
<span class="line"><span style="color:#B392F0;">    Chromium &lt;</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;chrome-version&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;">&gt;,</span></span>
<span class="line"><span style="color:#B392F0;">    和 Electron &lt;</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;"> id</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;electron-version&quot;</span><span style="color:#B392F0;">&gt;&lt;/</span><span style="color:#FFAB70;">span</span><span style="color:#B392F0;">&gt;.</span></span>
<span class="line"><span style="color:#B392F0;">  &lt;/</span><span style="color:#FFAB70;">body</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;/</span><span style="color:#FFAB70;">html</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="在窗口中打开您的页面" tabindex="-1">在窗口中打开您的页面 <a class="header-anchor" href="#在窗口中打开您的页面" aria-hidden="true">#</a></h2><p>现在您有了一个页面，将它加载进应用窗口中。 要做到这一点，你需要 两个Electron模块：</p><ul><li><a href="https://www.electronjs.org/zh/docs/latest/api/app" target="_blank" rel="noreferrer"><code>app</code></a> 模块，它控制应用程序的事件生命周期。</li><li><a href="https://www.electronjs.org/zh/docs/latest/api/browser-window" target="_blank" rel="noreferrer"><code>BrowserWindow</code></a> 模块，它创建和管理应用程序 窗口。</li></ul><p>因为主进程运行着 Node.js，您可以在 main.js 文件头部将它们导入作为 <a href="https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules" target="_blank" rel="noreferrer">CommonJS</a> 模块：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">BrowserWindow</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;electron&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> { </span><span style="color:#79B8FF;">app</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">BrowserWindow</span><span style="color:#B392F0;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&#39;electron&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，添加一个<code>createWindow()</code>方法来将<code>index.html</code>加载进一个新的<code>BrowserWindow</code>实例。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createWindow</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">win</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">BrowserWindow</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">800</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">600</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">win</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">loadFile</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;index.html&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> createWindow </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">win</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">new</span><span style="color:#B392F0;"> BrowserWindow({</span></span>
<span class="line"><span style="color:#B392F0;">    width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">800</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">    height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600</span></span>
<span class="line"><span style="color:#B392F0;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">win</span><span style="color:#B392F0;">.loadFile(</span><span style="color:#FFAB70;">&#39;index.html&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>接着，调用<code>createWindow()</code>函数来打开您的窗口。</p><p>在 Electron 中，只有在 <code>app</code> 模块的 <a href="https://www.electronjs.org/zh/docs/latest/api/app#event-ready" target="_blank" rel="noreferrer"><code>ready</code></a> 事件被激发后才能创建浏览器窗口。 您可以通过使用 <a href="https://www.electronjs.org/zh/docs/latest/api/app#appwhenready" target="_blank" rel="noreferrer"><code>app.whenReady()</code></a> API来监听此事件。 在<code>whenReady()</code>成功后调用<code>createWindow()</code>。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">whenReady</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">createWindow</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">app</span><span style="color:#B392F0;">.whenReady().then(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  createWindow()</span></span>
<span class="line"><span style="color:#B392F0;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>注意：此时，您的电子应用程序应当成功 打开显示您页面的窗口！</p></blockquote>`,30),e=[o];function t(r,c,B,i,y,F){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{u as __pageData,A as default};
