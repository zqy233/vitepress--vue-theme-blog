import{_ as e,o as s,c as a,a as n}from"./app.bfa9bd4b.js";const m=JSON.parse('{"title":"Getting Started 开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install esbuild 安装 esbuild","slug":"install-esbuild-安装-esbuild","link":"#install-esbuild-安装-esbuild","children":[]},{"level":2,"title":"Your first bundle 您的第一个捆绑包","slug":"your-first-bundle-您的第一个捆绑包","link":"#your-first-bundle-您的第一个捆绑包","children":[]}],"relativePath":"5.打包/6.esbuild/开始.md","lastUpdated":1720835436706}'),l={name:"5.打包/6.esbuild/开始.md"},t=n(`<h1 id="getting-started-开始" tabindex="-1">Getting Started 开始 <a class="header-anchor" href="#getting-started-开始" aria-hidden="true">#</a></h1><h2 id="install-esbuild-安装-esbuild" tabindex="-1">Install esbuild 安装 esbuild <a class="header-anchor" href="#install-esbuild-安装-esbuild" aria-hidden="true">#</a></h2><p>First, download and install the esbuild command locally. A prebuilt native executable can be installed using <a href="https://docs.npmjs.com/cli/v8/commands/npm-install" target="_blank" rel="noreferrer">npm</a> (which is automatically installed when you install the <a href="https://nodejs.org/" target="_blank" rel="noreferrer">node</a> JavaScript runtime): 首先，在本地下载并安装 esbuild 命令。可以使用 npm 安装预构建的本机可执行文件（在安装 node JavaScript 运行时时自动安装）：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--save-exact</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">esbuild</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">install</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">--save-exact</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">esbuild</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This should have installed esbuild in your local <code>node_modules</code> folder. You can run the esbuild executable to verify that everything is working correctly: 这应该在您的本地 <code>node_modules</code> 文件夹中安装了 esbuild。您可以运行 esbuild 可执行文件来验证一切是否正常工作：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">.</span><span style="color:#ABB2BF;">\\node_modules\\.bin\\esbuild </span><span style="color:#D19A66;">--version</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">.\\node_modules\\.bin\\esbuild </span><span style="color:#9DB1C5;">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The recommended way to install esbuild is to install the native executable using npm. But if you don&#39;t want to do that, there are also some <a href="https://esbuild.github.io/getting-started/#other-ways-to-install" target="_blank" rel="noreferrer">other ways to install</a>. 安装 esbuild 的推荐方法是使用 npm 安装本机可执行文件。但是，如果您不想这样做，还有其他一些安装方法。</p><h2 id="your-first-bundle-您的第一个捆绑包" tabindex="-1">Your first bundle 您的第一个捆绑包 <a class="header-anchor" href="#your-first-bundle-您的第一个捆绑包" aria-hidden="true">#</a></h2><p>This is a quick real-world example of what esbuild is capable of and how to use it. First, install the <code>react</code> and <code>react-dom</code> packages: 这是一个快速的真实示例，说明了 esbuild 的功能以及如何使用它。首先，安装 <code>react</code> 和 <code>react-dom</code> 包：</p><p>Then create a file called <code>app.jsx</code> containing the following code: 然后创建一个名为包含以下代码 <code>app.jsx</code> 的文件：</p>`,10),o=[t];function i(d,r,c,p,u,h){return s(),a("div",null,o)}const y=e(l,[["render",i]]);export{m as __pageData,y as default};
