import{_ as e,o as i,c as t,a}from"./app.bfa9bd4b.js";const u=JSON.parse('{"title":"强缓存与协商缓存","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是缓存？","slug":"什么是缓存","link":"#什么是缓存","children":[]},{"level":2,"title":"缓存的类别","slug":"缓存的类别","link":"#缓存的类别","children":[{"level":3,"title":"强缓存","slug":"强缓存","link":"#强缓存","children":[]},{"level":3,"title":"协商缓存","slug":"协商缓存","link":"#协商缓存","children":[]}]},{"level":2,"title":"Last-Modified，If-Modified-Since","slug":"last-modified-if-modified-since","link":"#last-modified-if-modified-since","children":[]},{"level":2,"title":"Etag，If-None-Match","slug":"etag-if-none-match","link":"#etag-if-none-match","children":[]},{"level":2,"title":"应用场景-vite","slug":"应用场景-vite","link":"#应用场景-vite","children":[]}],"relativePath":"1.基础/4.http/强缓存与协商缓存.md","lastUpdated":1720835436686}'),d={name:"1.基础/4.http/强缓存与协商缓存.md"},o=a('<h1 id="强缓存与协商缓存" tabindex="-1">强缓存与协商缓存 <a class="header-anchor" href="#强缓存与协商缓存" aria-hidden="true">#</a></h1><blockquote><p><a href="https://juejin.cn/post/7065895592613904392" target="_blank" rel="noreferrer">https://juejin.cn/post/7065895592613904392</a></p></blockquote><h2 id="什么是缓存" tabindex="-1">什么是缓存？ <a class="header-anchor" href="#什么是缓存" aria-hidden="true">#</a></h2><p>浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力</p><p>http缓存机制主要在http响应头中设定，响应头中相关字段为Expires、Cache-Control、Last-Modified、Etag。</p><p>HTTP 1.0协议中的。简而言之，就是告诉浏览器在约定的这个时间前，可以直接从缓存中获取资源（representations），而无需跑到服务器去获取。</p><h2 id="缓存的类别" tabindex="-1">缓存的类别 <a class="header-anchor" href="#缓存的类别" aria-hidden="true">#</a></h2><p>浏览器缓存分为强缓存和协商缓存</p><h3 id="强缓存" tabindex="-1">强缓存 <a class="header-anchor" href="#强缓存" aria-hidden="true">#</a></h3><p>强缓存是通过设置响应头中的 <code>Expires</code> 或 <code>Cache-Control</code> 来实现的，这两个字段可以告诉浏览器在一定时间内直接使用本地缓存，而不向服务器发送请求，直接从本地缓存中读取文件并返回Status Code: 200 OK</p><p>可以由这两个字段其中一个决定</p><ul><li><code>expires</code></li><li><code>cache-control(优先级更高)</code></li></ul><blockquote><p>cache-control是http1.1的头字段，expires是http1.0的头字段,如果expires和cache-control同时存在，cache-control会覆盖expires，建议两个都写。</p></blockquote><p>在时效时间内，不走服务端，只走本地缓存</p><h3 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a></h3><p>浏览器向服务器发送请求，服务器会根据这个请求的request header的一些参数来判断是否命中协商缓存，如果命中，则返回304状态码并带上新的response header通知浏览器从缓存中读取资源；</p><p>可以由这两对字段中的一对决定</p><ul><li><code>Last-Modified，If-Modified-Since</code></li><li><code>Etag，If-None-Match(优先级更高)</code></li></ul><h2 id="last-modified-if-modified-since" tabindex="-1">Last-Modified，If-Modified-Since <a class="header-anchor" href="#last-modified-if-modified-since" aria-hidden="true">#</a></h2><p>第一次请求资源时，服务端会把所请求的资源的<code>最后一次修改时间</code>当成响应头中<code>Last-Modified</code>的值发到浏览器并在浏览器存起来</p><p>第二次请求资源时，浏览器会把刚刚存储的时间当成请求头中<code>If-Modified-Since</code>的值，传到服务端，服务端拿到这个时间跟所请求的资源的最后修改时间进行比对</p><p>比对结果如果两个时间相同，则说明此资源没修改过，那就是<code>命中缓存</code>，那就返回<code>304</code>，如果不相同，则说明此资源修改过了，则<code>没命中缓存</code>，则返回修改过后的新资源</p><h2 id="etag-if-none-match" tabindex="-1">Etag，If-None-Match <a class="header-anchor" href="#etag-if-none-match" aria-hidden="true">#</a></h2><ul><li><code>Last-Modified，If-Modified-Since</code>是对比资源最后一次修改时间，来确定资源是否修改了</li><li><code>Etag，If-None-Match</code>是对比资源内容，来确定资源是否修改</li></ul><h2 id="应用场景-vite" tabindex="-1">应用场景-vite <a class="header-anchor" href="#应用场景-vite" aria-hidden="true">#</a></h2><p>vite资源用协商缓存，依赖用强缓存</p>',26),c=[o];function l(n,r,h,s,p,f){return i(),t("div",null,c)}const m=e(d,[["render",l]]);export{u as __pageData,m as default};
