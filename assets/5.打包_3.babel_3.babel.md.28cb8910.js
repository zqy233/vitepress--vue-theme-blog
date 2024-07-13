import{_ as s,o as a,c as n,a as l}from"./app.bfa9bd4b.js";const F=JSON.parse('{"title":"babel","description":"","frontmatter":{},"headers":[{"level":2,"title":"入门使用","slug":"入门使用","link":"#入门使用","children":[]},{"level":2,"title":"babel.config.js","slug":"babel-config-js","link":"#babel-config-js","children":[]},{"level":2,"title":"polyfill","slug":"polyfill","link":"#polyfill","children":[]}],"relativePath":"5.打包/3.babel/3.babel.md","lastUpdated":1720835436706}'),p={name:"5.打包/3.babel/3.babel.md"},e=l(`<h1 id="babel" tabindex="-1">babel <a class="header-anchor" href="#babel" aria-hidden="true">#</a></h1><blockquote><p>babel是一个工具集，主要用于将ES6版本的javascript代码转为ES5等向后兼容的js代码，从而可以运行在低版本浏览器或其它环境中</p></blockquote><h2 id="入门使用" tabindex="-1">入门使用 <a class="header-anchor" href="#入门使用" aria-hidden="true">#</a></h2><p>1.新建babel.config.js，该文件是babel配置文件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">presets</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">&quot;@babel/env&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: []</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#B392F0;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  presets</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> [</span><span style="color:#FFAB70;">&quot;@babel/env&quot;</span><span style="color:#B392F0;">]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  plugins</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> []</span></span>
<span class="line"><span style="color:#B392F0;"> }</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>2.新建一个main.js，该js里的代码使用了es6的箭头函数</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> fn </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> num </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> num </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.安装三个babel官方npm包</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@babel/cli</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@babel/core</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@babel/preset-env</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">@babel/cli</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">@babel/core</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">@babel/preset-env</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.安装完成后，执行下面的命令进行转码，该命令含义是把main.js转码生成compiled.js文件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npx</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">babel</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">main.js</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-o</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">compiled.js</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npx </span><span style="color:#9DB1C5;">babel</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">main.js</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-o</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">compiled.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>5.生成了compiled.js，查看内容，发现es6语法转换成了es5语法，这就是一个最简单的babel使用过程</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#98C379;">&quot;use strict&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">num</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">&quot;use strict&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#B392F0;"> fn </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">function</span><span style="color:#B392F0;"> fn(num) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">return</span><span style="color:#B392F0;"> num </span><span style="color:#F97583;">+</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="babel-config-js" tabindex="-1">babel.config.js <a class="header-anchor" href="#babel-config-js" aria-hidden="true">#</a></h2><blockquote><p>babel.config.js是babel执行时会默认在当前目录寻找的babel配置文件</p></blockquote><p>除了babel.config.js，也可以选择用.babelrc或.babelrc.js这两种配置文件，还可以直接将配置参数写在package.json，它们的作用都是相同的，只需要选择其中一种</p><p>@babel/cli，@babel/core与@babel/preset-env是Babel官方的三个包，它们的作用如下：</p><ul><li><p>@babel/cli是babel命令行转码工具，使用命令行进行babel转码就需要安装它</p></li><li><p>@babel/cli依赖@babel/core，因此也需要安装@babel/core这个babel核心npm包</p></li><li><p>@babel/preset-env这个npm包提供了ES6转换ES5的语法转换规则，我们在babel配置文件里指定使用它，如果不使用的话，也可以完成转码，但转码后的代码仍然是ES6的，相当于没有转码</p><p>小结：</p><p>1.一个完整的babel转码工程通常包括如下：</p><ul><li>babel配置文件</li><li>babel相关的npm包</li><li>需要转码的JS文件</li></ul><p>2.通过以下命令对单个JS文件进行转码：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E06C75;">npx</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">babel</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">main</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">js</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#E06C75;">o</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">compiled</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">js</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npx babel </span><span style="color:#79B8FF;">main</span><span style="color:#B392F0;">.js </span><span style="color:#F97583;">-</span><span style="color:#B392F0;">o </span><span style="color:#79B8FF;">compiled</span><span style="color:#B392F0;">.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>d.js命令里npx是新版node里附带的命令，它运行的时候默认会找到node_modules/.bin/下的路径执行，这样就可以快捷运行-D下载的npm包</p></li></ul><h2 id="polyfill" tabindex="-1">polyfill <a class="header-anchor" href="#polyfill" aria-hidden="true">#</a></h2><p>babel默认只转换新的JavaScript语法（syntax），而不转换新的 API，新的API分类两类，一类是Promise、Map、Symbol、Proxy、Iterator等全局对象及其对象自身的方法，例如Object.assign，Promise.resolve；另一类是新的实例方法，例如数组实例方法[1, 4, -5, 10].find((item) =&gt; item &lt; 0)</p><p>所以需要使用polyfill，为当前环境提供一个垫片，所谓垫片，是指垫平不同浏览器之间差异的东西。polyfill提供了全局的ES6对象以及通过修改原型链Array.prototype等实现对实例的实现，polyfill广义上讲是为环境提供不支持的特性的一类文件或库，狭义上讲是polyfill.js文件以及@babel/polyfill这个npm包。</p>`,21),o=[e];function c(r,t,i,B,b,y){return a(),n("div",null,o)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
