import{_ as s,o as n,c as a,a as e}from"./app.bfa9bd4b.js";const F=JSON.parse('{"title":"sExpress使用JWT","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装JWT","slug":"安装jwt","link":"#安装jwt","children":[]},{"level":2,"title":"导入JWT相关包","slug":"导入jwt相关包","link":"#导入jwt相关包","children":[]},{"level":2,"title":"定义secret密钥","slug":"定义secret密钥","link":"#定义secret密钥","children":[]},{"level":2,"title":"生成JWT字符串","slug":"生成jwt字符串","link":"#生成jwt字符串","children":[]},{"level":2,"title":"JWT还原成JSON","slug":"jwt还原成json","link":"#jwt还原成json","children":[]}],"relativePath":"3.框架/4.express/3.jwt.md","lastUpdated":1720835436694}'),l={name:"3.框架/4.express/3.jwt.md"},p=e(`<h1 id="sexpress使用jwt" tabindex="-1">sExpress使用JWT <a class="header-anchor" href="#sexpress使用jwt" aria-hidden="true">#</a></h1><blockquote><p>JWT属于token机制的一种</p></blockquote><h2 id="安装jwt" tabindex="-1">安装JWT <a class="header-anchor" href="#安装jwt" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">jsonwebtoken</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">express-jwt</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">npm </span><span style="color:#9DB1C5;">i</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">jsonwebtoken</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">express-jwt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>jsonwebtoken</code>用于生成JWT字符串</li><li><code>express-jwt</code>用于将JWT字符串解析还原成JSON对象</li></ul><h2 id="导入jwt相关包" tabindex="-1">导入JWT相关包 <a class="header-anchor" href="#导入jwt相关包" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">jwt</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;jsonwebtoken&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">expressJWT</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;express-jwt&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">jwt</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&#39;jsonwebtoken&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">expressJWT</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&#39;express-jwt&#39;</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="定义secret密钥" tabindex="-1">定义secret密钥 <a class="header-anchor" href="#定义secret密钥" aria-hidden="true">#</a></h2><p>为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的secret密钥：</p><ol><li>当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串</li><li>当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// secretKey 密钥的本质就是一个字符串</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">secretKet</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;zhuzhuxia&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6B737C;">// secretKey 密钥的本质就是一个字符串</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">secretKet</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;zhuzhuxia&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="生成jwt字符串" tabindex="-1">生成JWT字符串 <a class="header-anchor" href="#生成jwt字符串" aria-hidden="true">#</a></h2><p>调用<code>jsonwebtoken</code>包提供的<code>sign()</code>方法，将用户的信息加密成JWT字符串，发送给客户端：</p><ul><li>参数一，用户的信息对象</li><li>参数二，加密的密钥</li><li>参数三，配置对象，可以配置当前token的有效期</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">jwt</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sign</span><span style="color:#ABB2BF;">({ </span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">userinfo</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;"> }, </span><span style="color:#E06C75;">secretKet</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">expiresIn</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;30s&quot;</span><span style="color:#ABB2BF;"> })</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">jwt</span><span style="color:#B392F0;">.sign({ username</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">userinfo</span><span style="color:#B392F0;">.username }</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> secretKet</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> { expiresIn</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;30s&quot;</span><span style="color:#B392F0;"> })</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="jwt还原成json" tabindex="-1">JWT还原成JSON <a class="header-anchor" href="#jwt还原成json" aria-hidden="true">#</a></h2><p>客户端每次在访问那些有权限的接口的时候，都需要主动通过<code>请求头</code>中的<code>Authorization</code>字段，将Token字符串发送到服务器进行身份验证</p><p>此时，服务器可以通过express-jwt这个中间件，自动将客户端发送过来的Token解析还原成JSON对象</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#b392f0;"></span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19),o=[p];function r(t,c,i,d,B,y){return n(),a("div",null,o)}const h=s(l,[["render",r]]);export{F as __pageData,h as default};
