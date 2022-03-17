import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.deefcb20.js";
const __pageData = '{"title":"vue-router","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u4F7F\u7528","slug":"\u4E0B\u8F7D\u4F7F\u7528"},{"level":2,"title":"\u4F20\u53C2","slug":"\u4F20\u53C2"},{"level":2,"title":"\u8DEF\u7531\u5360\u4F4D\u7B26","slug":"\u8DEF\u7531\u5360\u4F4D\u7B26"},{"level":2,"title":"\u8DEF\u7531\u4F20\u9012 props \u7684\u4E09\u79CD\u5199\u6CD5","slug":"\u8DEF\u7531\u4F20\u9012-props-\u7684\u4E09\u79CD\u5199\u6CD5"},{"level":2,"title":"router-view","slug":"router-view"},{"level":2,"title":"","slug":""}],"relativePath":"notes/3.vue/3.\u751F\u6001/vue-router.md","lastUpdated":1647259912211}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D\u4F7F\u7528" tabindex="-1">\u4E0B\u8F7D\u4F7F\u7528 <a class="header-anchor" href="#\u4E0B\u8F7D\u4F7F\u7528" aria-hidden="true">#</a></h2><p>@next\u8868\u793A\u4E0B\u8F7D\u6700\u65B0\u7248</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">npm i vue-router@next -s</span></span>\n<span class="line"></span></code></pre></div><p>src \u4E0B\u65B0\u5EFA router \u6587\u4EF6\u5939\uFF0C\u65B0\u5EFA index.ts</p><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHistory</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RouteRecordRaw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RouteRecordRaw</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">]</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  routes</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> router</span></span>\n<span class="line"></span></code></pre></div><p>main.ts \u4E2D\u52A0\u5165</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./router</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(router)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>App.vue\u4F7F\u7528router-view\u6807\u7B7E\u5373\u53EF\u6E32\u67D3home\u9875\u9762</p><h2 id="\u4F20\u53C2" tabindex="-1">\u4F20\u53C2 <a class="header-anchor" href="#\u4F20\u53C2" aria-hidden="true">#</a></h2><ul><li><p>$router \u662F\u8DEF\u7531\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u53EA\u5199\u5BF9\u8C61</p></li><li><p>$route \u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61\uFF0C\u53EA\u8BFB\u5BF9\u8C61</p></li><li><p>name \u53EF\u4EE5\u4F7F\u7528 query \u548C params \u4F20\u53C2</p></li><li><p>path \u4E0D\u80FD\u4F7F\u7528 params \u4F20\u53C2\uFF0C\u53EA\u80FD\u4F7F\u7528 query \u4F20\u53C2</p></li><li><p>query \u76F8\u5F53\u4E8E get \u8BF7\u6C42\uFF0C\u9875\u9762\u8DF3\u8F6C\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5728\u5730\u5740\u680F\u770B\u5230\u8BF7\u6C42\u53C2\u6570\uFF0C\u5237\u65B0\u540E\u4F9D\u65E7\u5B58\u5728</p></li><li><p>params \u76F8\u5F53\u4E8E post \u8BF7\u6C42\uFF0C\u53C2\u6570\u4E0D\u4F1A\u518D\u5730\u5740\u680F\u4E2D\u663E\u793A\uFF0C\u5237\u65B0\u540E\u4E0D\u590D\u5B58\u5728</p></li></ul><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div><p>\u63A5\u6536</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span></span>\n<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8DEF\u7531\u5360\u4F4D\u7B26" tabindex="-1">\u8DEF\u7531\u5360\u4F4D\u7B26 <a class="header-anchor" href="#\u8DEF\u7531\u5360\u4F4D\u7B26" aria-hidden="true">#</a></h2><p>\u58F0\u660E\u63A5\u6536 params \u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u4F20\u9012 params \u6216\u4F20\u9012 params \u4E3A\u7A7A\uFF0C\u90FD\u4F1A\u76F4\u63A5\u62A5\u9519\uFF0CUncaught Error: Missing required param &quot;code&quot;</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">import</span><span style="color:#F07178;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;about&quot; */</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">k</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// Uncaught Error: Missing required param &quot;code&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">k</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// Uncaught Error: Missing required param &quot;code&quot;</span></span>\n<span class="line"></span></code></pre></div><p>\u5982\u679C\u5E0C\u671B params \u53C2\u6570\u662F\u53EF\u9009\u4F20\u9012\uFF0C\u53EF\u4F20\u53EF\u4E0D\u4F20,\u5728\u5360\u4F4D\u7B26\u540E\u9762\u52A0\u4E2A\uFF1F\u53F7\u5373\u53EF</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:code?</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">import</span><span style="color:#F07178;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;about&quot; */</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8DEF\u7531\u4F20\u9012-props-\u7684\u4E09\u79CD\u5199\u6CD5" tabindex="-1">\u8DEF\u7531\u4F20\u9012 props \u7684\u4E09\u79CD\u5199\u6CD5 <a class="header-anchor" href="#\u8DEF\u7531\u4F20\u9012-props-\u7684\u4E09\u79CD\u5199\u6CD5" aria-hidden="true">#</a></h2><p>\u8DEF\u7531\u8DF3\u8F6C</p><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">useRouter</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> const router = useRouter() function</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">goSearch</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> params</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> code</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> query</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">222</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h4 id="\u5E03\u5C14\u503C" tabindex="-1">\u5E03\u5C14\u503C <a class="header-anchor" href="#\u5E03\u5C14\u503C" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">props</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u4F1A\u5C06params\u4F20\u9012\u81F3\u8BE5\u7EC4\u4EF6\u4E2D</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>\u7EC4\u4EF6\u4E2D\u6B63\u5E38\u4F7F\u7528 props \u63A5\u6536\u5373\u53EF</p><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h4 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">props</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>\n<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h4 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h4><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/:code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../views/Home.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">props</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$router</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">code</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><div class="language-typescript"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> props </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>\n<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="router-view" tabindex="-1">router-view <a class="header-anchor" href="#router-view" aria-hidden="true">#</a></h2><p>router-view \u662F\u8DEF\u7531\u7684\u5360\u4F4D\u6807\u7B7E\uFF0C\u4F1A\u6839\u636E\u5F53\u524D\u8DEF\u5F84\u5C06\u8BE5\u4F4D\u7F6E\u66FF\u6362\u4E3A\u8BE5\u8DEF\u5F84\u76F8\u5339\u914D\u7684 vue \u7EC4\u4EF6</p><p>\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528 router-view\uFF0C\u4F1A\u6839\u636E\u5B50\u7EC4\u4EF6\u7684\u8DEF\u7531\u81EA\u52A8\u5339\u914D\u663E\u793A\u76F8\u5E94\u5185\u5BB9</p><p>router-view \u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</p><p>\u7236\u7EC4\u4EF6</p><p>\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u4E00\u4E2A\u65B9\u6CD5 getTitle</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">router-view</span><span style="color:#89DDFF;"> :hdId=&quot;hdidArr&quot; @getTitle=&quot;showtitle&quot; /&gt;</span></span>\n<span class="line"></span></code></pre></div><p>\u5B50\u7EC4\u4EF6</p><p>\u5B50\u7EC4\u4EF6\u901A\u8FC7 getTitle \u8FD9\u4E2A\u65B9\u6CD5\u4F20\u503C</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getTitle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tit)</span></span>\n<span class="line"></span></code></pre></div><p>e \u5373\u662F\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u503C</p><p>\u7236\u7EC4\u4EF6\u901A\u8FC7\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u65B9\u6CD5 getTitle \u7ED1\u5B9A\u7684\u65B9\u6CD5 showtitle \u8FDB\u884C\u63A5\u6536</p><div class="language-js"><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">showtitle</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>element-plus \u4E2D el-menu \u5185\u7F6E vue-route\uFF0C\u8BBE\u7F6E router \u5C5E\u6027\u4E3A true \u540E\uFF0Cel-menu-item \u4E2D\u53EF\u4EE5\u4F7F\u7528 index \u5C5E\u6027\u8FDB\u884C\u8DEF\u5F84\u8DF3\u8F6C\uFF0C\u4F7F\u7528 route \u5C5E\u6027\u8FDB\u884C\u8DEF\u5F84\u4F20\u53C2</p><div class="language-vue"><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;el-menu-item</span></span>\n<span class="line"><span style="color:#A6ACCD;">  v-for=&quot;item in items&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  :key=&quot;item.id&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  :index=&quot;item.url&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  :route=&quot;{ path: item.url, query: { name: item.id } }&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">&lt;/el-menu-item&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>', 49);
const _hoisted_50 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_50);
}
var vueRouter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, vueRouter as default };
