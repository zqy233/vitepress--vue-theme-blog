import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"\u5C0F\u7A0B\u5E8F\u5F00\u53D1","description":"","frontmatter":{},"headers":[{"level":2,"title":"openid","slug":"openid"},{"level":3,"title":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u83B7\u53D6openid","slug":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u83B7\u53D6openid"},{"level":3,"title":"\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42jscode2session","slug":"\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42jscode2session"},{"level":2,"title":"unionid","slug":"unionid"},{"level":2,"title":"\u83B7\u53D6\u7528\u6237\u4FE1\u606F","slug":"\u83B7\u53D6\u7528\u6237\u4FE1\u606F"},{"level":2,"title":"\u70ED\u66F4\u65B0\u5931\u6548","slug":"\u70ED\u66F4\u65B0\u5931\u6548"},{"level":2,"title":"Cannot read property \u2018forceUpdate\u2018 of undefined","slug":"cannot-read-property-\u2018forceupdate\u2018-of-undefined"}],"relativePath":"notes/2.framework/4.uniapp/5.\u5C0F\u7A0B\u5E8F\u5F00\u53D1.md"}');
const _sfc_main = { name: "notes/2.framework/4.uniapp/5.\u5C0F\u7A0B\u5E8F\u5F00\u53D1.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5C0F\u7A0B\u5E8F\u5F00\u53D1" tabindex="-1">\u5C0F\u7A0B\u5E8F\u5F00\u53D1 <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u5F00\u53D1" aria-hidden="true">#</a></h1><h2 id="openid" tabindex="-1">openid <a class="header-anchor" href="#openid" aria-hidden="true">#</a></h2><p><code>\u5FAE\u4FE1\u7528\u6237\u552F\u4E00\u8BA4\u8BC1</code>\uFF0C\u4E3A\u4E86\u8BC6\u522B\u7528\u6237\uFF0C\u6BCF\u4E2A\u7528\u6237\u9488\u5BF9\u6BCF\u4E2A\u516C\u4F17\u53F7\u6216\u5C0F\u7A0B\u5E8F\u7B49\u5E94\u7528\u4F1A\u4EA7\u751F\u4E00\u4E2A\u5B89\u5168\u7684openid</p><h3 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u83B7\u53D6openid" tabindex="-1">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u83B7\u53D6openid <a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u83B7\u53D6openid" aria-hidden="true">#</a></h3><h4 id="\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1" tabindex="-1">\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1 <a class="header-anchor" href="#\u83B7\u53D6\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1" aria-hidden="true">#</a></h4><p>login\u65B9\u6CD5\u83B7\u53D6<code>\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1code </code>\uFF0C\u7528\u4E8E\u4F20\u5165\u5230\u5F00\u53D1\u8005\u670D\u52A1\u5668\u5B8C\u6210\u767B\u5F55\u6D41\u7A0B</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">login</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">weixin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> res </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">complete</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42jscode2session" tabindex="-1">\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42<code>jscode2session</code> <a class="header-anchor" href="#\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42jscode2session" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u4E00\u4E2Alogin\u4E91\u51FD\u6570\uFF0C\u8BF7\u6C42\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F<code>jscode2session</code>\u63A5\u53E3\uFF0C\u901A\u8FC7\u4F20\u5165<code>\u56DB\u4E2A\u53C2\u6570</code>\u5230\u5F00\u53D1\u8005\u670D\u52A1\u5668\u6765\u83B7\u53D6<code>openid</code></p><ul><li>appid \u5C0F\u7A0B\u5E8FappId</li><li>secret \u5C0F\u7A0B\u5E8FappSecret</li><li>js_code \u767B\u5F55\u65F6\u83B7\u53D6\u7684<code>\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1code</code></li><li>grant_type \u6388\u6743\u7C7B\u578B\uFF0C\u56FA\u5B9A\u503C\uFF0C\u53EA\u9700\u586B\u5199<code>authorization_code</code></li></ul><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> context</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//event\u4E3A\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684\u53C2\u6570</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">event : </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4ECE\u4E2D\u53D6\u51FA\u4E34\u65F6\u767B\u5F55\u51ED\u8BC1code</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">code</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">appId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u81EA\u5DF1\u7684appId</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">appSecret</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u81EA\u5DF1\u7684appSecret</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u62FC\u63A5\u53C2\u6570\u8BF7\u6C42\u5FAE\u4FE1\u5B98\u65B9\u63A5\u53E3\uFF0C\u8FDB\u884C\u767B\u5F55\u51ED\u8BC1\u6821\u9A8C</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uniCloud</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">httpclient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://api.weixin.qq.com/sns/jscode2session?appid=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">appId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&amp;secret=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">appSecret</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&amp;js_code=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&amp;grant_type=authorization_code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      dataType</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">  )</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//\u8FD4\u56DE\u6570\u636E\u7ED9\u5BA2\u6237\u7AEF</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">event</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5C0F\u7A0B\u5E8FappId\u548C\u5C0F\u7A0B\u5E8FappSecret\u5728<a href="https://mp.weixin.qq.com/" target="_blank" rel="noopener noreferrer">\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0</a>&gt;\u5F00\u53D1&gt;\u5F00\u53D1\u7BA1\u7406\u4E2D\u67E5\u770B\u83B7\u53D6</p></div><p>\u524D\u7AEF\u9875\u9762\u8C03\u7528login\u4E91\u51FD\u6570</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;login&quot;&gt;\u767B\u5F55&lt;/button&gt;&lt;/view&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  methods: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">login</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">login</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">code</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">uniCloud</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">callFunction</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">            name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">            data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">code</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="unionid" tabindex="-1">unionid <a class="header-anchor" href="#unionid" aria-hidden="true">#</a></h2><p>unionid\u4E5F\u662F\u7528\u6237\u7684\u6807\u8BC6\u7B26\uFF0C\u4F46\u5B83\u4E0Eopenid\u4E0D\u540C\u7684\u662F\uFF0C\u540C\u4E00\u4E2A\u5FAE\u4FE1\u7528\u6237\uFF0C\u767B\u5F55\u540C\u4E00\u4E2A\u5F00\u53D1\u4E3B\u4F53\u4E0B\u7684\u591A\u4E2A\u5C0F\u7A0B\u5E8F\u6216\u516C\u4F17\u53F7\u65F6\uFF0C\u5206\u914D\u7684unionid\u662F\u4E00\u6837\u7684</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F00\u53D1\u8005\u62E5\u6709\u591A\u4E2A\u79FB\u52A8\u5E94\u7528\u3001\u7F51\u7AD9\u5E94\u7528\u3001\u548C\u516C\u4F17\u5E10\u53F7\uFF08\u5305\u62EC\u5C0F\u7A0B\u5E8F\uFF09\uFF0C\u53EF\u901A\u8FC7unionid\u6765\u533A\u5206\u7528\u6237\u7684\u552F\u4E00\u6027</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u6C42<code>jscode2session</code>\u4F1A\u8FD4\u56DE<code>openid</code>\uFF0C\u4F46\u4E0D\u4F1A\u8FD4\u56DE<code>unionid</code>\uFF0C\u9664\u975E\u5C0F\u7A0B\u5E8F\u7B49\u5E94\u7528\u4EE5\u53CA\u5728<a href="https://open.weixin.qq.com/" target="_blank" rel="noopener noreferrer">\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0</a>\u8FDB\u884C\u4E86\u540C\u4E00\u4E2A\u5F00\u53D1\u4E3B\u4F53\u7684\u7ED1\u5B9A</p><h2 id="\u83B7\u53D6\u7528\u6237\u4FE1\u606F" tabindex="-1">\u83B7\u53D6\u7528\u6237\u4FE1\u606F <a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u6CE8\u610F\u70B9\uFF1A</p><ol><li>\u8BE5\u65B9\u6CD5\u73B0\u5728\u53EA\u80FD\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u6635\u79F0\u548C\u5934\u50CF\uFF0C\u4E0D\u80FD\u83B7\u53D6\u6027\u522B\uFF0C\u56FD\u5BB6\u548C\u7701\u5E02\u4E86</li><li>\u8BE5\u65B9\u6CD5\u53EA\u80FD\u4F5C\u4E3A\u5355\u72EC\u7684\u70B9\u51FB\u4E8B\u4EF6\u8C03\u7528</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUserProfile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">desc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6D4B\u8BD5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> res </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u70ED\u66F4\u65B0\u5931\u6548" tabindex="-1">\u70ED\u66F4\u65B0\u5931\u6548 <a class="header-anchor" href="#\u70ED\u66F4\u65B0\u5931\u6548" aria-hidden="true">#</a></h2><p>HBuilderX\u4E2D\u8FD0\u884Cuniapp\u9879\u76EE\u81F3\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u4FEE\u6539HBuilderX\u4E2D\u7684\u4EE3\u7801\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\u89C6\u56FE\u4E0D\u70ED\u66F4\u65B0</p><p>1.\u8BBE\u7F6E&gt;\u901A\u7528\u8BBE\u7F6E&gt;\u7F16\u8F91\u5668&gt;\u53D6\u6D88\u52FE\u9009\u4FEE\u6539\u6587\u4EF6\u65F6\u81EA\u52A8\u4FDD\u5B58</p><p>2.\u5173\u95ED\u70ED\u91CD\u8F7D</p><h2 id="cannot-read-property-\u2018forceupdate\u2018-of-undefined" tabindex="-1">Cannot read property \u2018forceUpdate\u2018 of undefined <a class="header-anchor" href="#cannot-read-property-\u2018forceupdate\u2018-of-undefined" aria-hidden="true">#</a></h2><p>\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u5DE5\u5177\u63A7\u5236\u53F0\u51FA\u73B0\u4E0A\u65B9\u62A5\u9519</p><p>\u9700\u8981\u5728uniapp\u9879\u76EE\u7684manifest.json\u914D\u7F6E\u5C0F\u7A0B\u5E8F\u7684ID</p>', 29);
const _hoisted_30 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_30);
}
var _5______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _5______ as default };
