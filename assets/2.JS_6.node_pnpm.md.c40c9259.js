import{_ as s,o as n,c as a,a as p}from"./app.bfa9bd4b.js";const F=JSON.parse('{"title":"pnpm","description":"","frontmatter":{},"headers":[{"level":2,"title":"package.json","slug":"package-json","link":"#package-json","children":[]}],"relativePath":"2.JS/6.node/pnpm.md","lastUpdated":1720835436690}'),l={name:"2.JS/6.node/pnpm.md"},e=p(`<h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h1><p>pnpm 是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:</p><ul><li>包安装速度极快;</li><li>磁盘空间利用非常高效</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pnpm</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-g</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">pnpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>作者Zoltan Kochan认为，yarn只是对npm做了些微改进，提升了速度、增加了一些属性，但并没有改变npm的扁平化依赖结构。而扁平化结构自带以下问题：</p><ol><li>模块可以访问自身并不依赖的包</li><li>依赖树的扁平化算法相当复杂</li><li>有一些包不得不拷贝进项目的node_modules目录</li></ol><p>Zoltan Kochan对pnpm的研发投入了更多的时间，pnpm取得了成功，囊括了yarn所有增加的属性：</p><ol><li>安全：代码执行前对其进行检查，以确保依赖安装的完整性</li><li>离线模式：pnpm将所有已下载包的压缩文件保存在本地镜像仓库，以实现离线使用，只需要配置--offline参数</li><li>快速：pnpm速度大概是npm和yarn的1/3左右。因为yarn需要拷贝包，而 pnpm只需要把包存在全局仓库，任何需要的地方指向它即可</li></ol><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 全局安装</span></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">packageNam</span><span style="color:#ABB2BF;">e&gt; </span><span style="color:#D19A66;">-g</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查询当前地址配置</span></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">get</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换淘宝镜像</span></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换回原先地址</span></span>
<span class="line"><span style="color:#61AFEF;">pnpm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">registry</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">https://registry.npmjs.org</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;"># 全局安装</span></span>
<span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9DB1C5;">packageNam</span><span style="color:#B392F0;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-g</span></span>
<span class="line"><span style="color:#6B737C;"># 查询当前地址配置</span></span>
<span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">get</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span></span>
<span class="line"><span style="color:#6B737C;"># 切换淘宝镜像</span></span>
<span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">set</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#6B737C;"># 切换回原先地址</span></span>
<span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">config</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">set</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">registry</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">https://registry.npmjs.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h2><p>The manifest file of a package. It contains all the package&#39;s metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.</p><p>包的清单文件。它包含包的所有元数据，包括依赖项、标题、作者等。这是所有主要Node.JS包管理器（包括pnpm）中保留的标准。</p>`,12),o=[e];function r(t,c,i,y,B,d){return n(),a("div",null,o)}const g=s(l,[["render",r]]);export{F as __pageData,g as default};
