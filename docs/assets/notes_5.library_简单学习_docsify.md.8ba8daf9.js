import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"dicsify","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528\u547D\u4EE4","slug":"\u4F7F\u7528\u547D\u4EE4"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u8BBE\u7F6E\u76EE\u5F55","slug":"\u8BBE\u7F6E\u76EE\u5F55"}],"relativePath":"notes/5.library/\u7B80\u5355\u5B66\u4E60/docsify.md"}');
const _sfc_main = { name: "notes/5.library/\u7B80\u5355\u5B66\u4E60/docsify.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="dicsify" tabindex="-1">dicsify <a class="header-anchor" href="#dicsify" aria-hidden="true">#</a></h1><blockquote><p>\u4F7F\u7528cdn\u6765\u5728\u7EBF\u7F16\u8BD1md\u6587\u4EF6\u7684\u6846\u67B6</p></blockquote><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -D docsify-cli</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528\u547D\u4EE4" tabindex="-1">\u4F7F\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u4F7F\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><p>package.json\u52A0\u5165\u4E24\u4E2A\u547D\u4EE4\uFF0C\u5206\u522B\u7528\u4E8E\u751F\u6210docs\u6587\u4EF6\u5939\uFF0C\u8FD0\u884Cdocs\u6587\u4EF6\u5939\u4E2Dhtml</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initdoc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docsify init ./docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docsify serve docs</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><p><code>docsify init ./docs</code>\u547D\u4EE4\u4F1A\u751F\u6210\u4E00\u4E2Ahtml\uFF0C\u7528\u4E8E\u7F16\u8BD1md\u4E3A\u7F51\u9875\uFF0C\u5728\u8BE5html\u4E2D\u8FDB\u884C<code>docsify </code>\u914D\u7F6E</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6559\u7A0B</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge,chrome=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0, minimum-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- &lt;link rel=&quot;stylesheet&quot; href=&quot;//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css&quot; /&gt; --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- \u9ED1\u8272\u4E3B\u9898 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$docsify </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u6807\u9898\u540D</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jsPlumb\u4E2D\u6587\u57FA\u7840\u6559\u7A0B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4E3B\u9898\u989C\u8272</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">themeColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#F07178</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Github\u4ED3\u5E93\u5730\u5740</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">repo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/wangduanduan/jsplumb-chinese-tutorial.git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u641C\u7D22\u680F</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">search</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">placeholder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u641C\u7D22</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">noData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u67E5\u65E0\u7ED3\u679C</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5B50\u76EE\u5F55\u6700\u5927\u5C42\u7EA7</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">subMaxLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u683C\u5F0F\u5316\u66F4\u65B0\u65F6\u95F4</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">formatUpdated</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{YYYY}-{MM}-{DD} {HH}:{mm}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u81EA\u52A8\u8DF3\u8F6C\u5230\u9875\u9762\u9876\u90E8</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">auto2top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4EE3\u7801\u590D\u5236\u6587\u672C</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">copyCode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">buttonText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u590D\u5236</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">errorText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">successText</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u590D\u5236\u6210\u529F</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5B57\u6570\u7EDF\u8BA1</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">countable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">fontsize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.9em</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(90,90,90)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">language</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chinese</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">localization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">words</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">minute</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">isExpected</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- docsify\u7684js\u4F9D\u8D56 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/docsify@4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- emoji\u8868\u60C5\u652F\u6301 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- \u56FE\u7247\u653E\u5927\u7F29\u5C0F\u652F\u6301 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- \u641C\u7D22\u529F\u80FD\u652F\u6301 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//unpkg.com/docsify/lib/plugins/search.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!--\u5728\u6240\u6709\u7684\u4EE3\u7801\u5757\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7B80\u5355\u7684Click to copy\u6309\u94AE\u6765\u5141\u8BB8\u7528\u6237\u4ECE\u4F60\u7684\u6587\u6863\u4E2D\u8F7B\u6613\u5730\u590D\u5236\u4EE3\u7801--&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- \u5B57\u6570\u7EDF\u8BA1 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//unpkg.com/docsify-count/dist/countable.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u8BBE\u7F6E\u76EE\u5F55" tabindex="-1">\u8BBE\u7F6E\u76EE\u5F55 <a class="header-anchor" href="#\u8BBE\u7F6E\u76EE\u5F55" aria-hidden="true">#</a></h2><p>\u65B0\u5EFA_navbar.md</p><div class="language-markdown"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u4E3B\u7AD9</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">Sakura \u4E3B\u9898</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;text-decoration:underline;">https://pyrroleach.com</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u535A\u5BA2</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">handsome \u4E3B\u9898</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;text-decoration:underline;">https://blog.pyrroleach.com</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> \u7F51\u7AD9</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">brave \u4E3B\u9898</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;text-decoration:underline;">https://xiaoya.pyrroleach.com</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var docsify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, docsify as default };
