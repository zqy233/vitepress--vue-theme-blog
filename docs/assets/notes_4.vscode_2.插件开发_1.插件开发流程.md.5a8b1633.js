import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316\u9879\u76EE","slug":"\u521D\u59CB\u5316\u9879\u76EE"},{"level":2,"title":"package.json","slug":"package-json"},{"level":2,"title":"\u6CE8\u518C\u8D26\u6237","slug":"\u6CE8\u518C\u8D26\u6237"},{"level":2,"title":"\u4E0A\u4F20\u63D2\u4EF6","slug":"\u4E0A\u4F20\u63D2\u4EF6"},{"level":2,"title":"\u63D2\u4EF6\u672C\u5730\u4F7F\u7528","slug":"\u63D2\u4EF6\u672C\u5730\u4F7F\u7528"}],"relativePath":"notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/1.\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B.md"}');
const _sfc_main = { name: "notes/4.vscode/2.\u63D2\u4EF6\u5F00\u53D1/1.\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B" tabindex="-1">\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B <a class="header-anchor" href="#\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u5168\u5C40\u5B89\u88C5vscode\u63D2\u4EF6\u811A\u624B\u67B6\u547D\u4EE4\u548C\u4EE3\u7801\u751F\u6210\u5668</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g yo generator-code</span></span>\n<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u811A\u624B\u67B6\u751F\u6210vscode\u63D2\u4EF6\u9879\u76EE</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yo code</span></span>\n<span class="line"></span></code></pre></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h2><p>vscode\u63D2\u4EF6\u7684\u4E00\u4E9B\u914D\u7F6E\u9700\u8981\u5728package.json\u8FDB\u884C\u8BBE\u7F6E</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u540D</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">displayName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3snippets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u5728vscode\u5546\u5E97\u4E2D\u663E\u793A\u7684\u540D\u5B57</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">for less input</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u63CF\u8FF0</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">publisher</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhuzhuzhuzhuxia</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u53D1\u5E03\u8005\uFF0C\u6709\u53EF\u80FD\u4E0D\u662F\u4F5C\u8005\uFF0C\u800C\u662F\u516C\u53F8\u548C\u7EC4\u7EC7</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zhuzhuzhuzhuxia</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u4F5C\u8005</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// vscode\u5546\u57CE\u4F7F\u7528\u7684\u6A2A\u5E45</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">galleryBanner</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#ffe04b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">theme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0.35</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u7248\u672C\u53F7</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u8981\u6C42\u7684vscode\u7248\u672C</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">engines</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">   vscode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">^1.60.0</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#C792EA;">},</span></span>\n<span class="line"><span style="color:#C792EA;">// \u63D2\u4EF6\u4E3B\u9875\uFF0C\u4E00\u822C\u90FD\u4E3Agithub readme\u6587\u6863\u5730\u5740</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">homepage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&quot;,</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u4EE3\u7801\u4ED3\u5E93</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">repository</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/prettier/prettier-vscode.git</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63D0\u4EA4\u63D2\u4EF6bug\u7684\u5730\u5740</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">bugs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/prettier/prettier-vscode/issues</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">license</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MIT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u7684\u5F00\u6E90\u534F\u8BAE</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u7C7B\u522B</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">categories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Other</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">images/icon.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u56FE\u6807</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u6FC0\u6D3B\u4E8B\u4EF6</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">activationEvents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onCommand:translate.zn</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/extension.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u63D2\u4EF6\u7684\u4E3B\u6587\u4EF6</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// vscode\u63D2\u4EF6\u673A\u5236</span></span>\n<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">contributes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// \u6CE8\u518Cvscode\u547D\u4EE4</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">commands</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">translate.zn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">translate cn to en</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">// \u5FEB\u6377\u952E\u8BBE\u7F6E\u4EE5\u53CA\u4EC0\u4E48\u65F6\u5019\u89E6\u53D1</span></span>\n<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">keybindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">extension.insertColonOrSemiColon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">enter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">when</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">suggestWidgetVisible &amp;&amp; textInputFocus &amp;&amp; editorLangId =~ /javascript|typescript|javascriptreact|typescriptreact/ &amp;&amp;      config.editor.acceptSuggestionOnEnter != &#39;off&#39;</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// \u4EE3\u7801\u63D0\u793A  </span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// language\u8868\u793A\u5728\u4EC0\u4E48\u8BED\u8A00\u4E2D\u751F\u6548 </span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// path\u8868\u793A\u4F7F\u7528\u7684\u63D0\u793A\u6587\u672Cjson\u6587\u4EF6\u8DEF\u5F84</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">snippets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./public/js.json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">typescript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./public/js.json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue-html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./public/vue-html.json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./public/css.json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./public/vue.json</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">],</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// \u9F20\u6807\u53F3\u51FB\u83DC\u5355</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">menus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">editor/context</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">when</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editorFocus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">translate.zn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">navigation</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u6CE8\u518C\u8D26\u6237" tabindex="-1">\u6CE8\u518C\u8D26\u6237 <a class="header-anchor" href="#\u6CE8\u518C\u8D26\u6237" aria-hidden="true">#</a></h2><p>\u6B65\u9AA4\u4E00\uFF0C\u6CE8\u518C\u6210\u4E3Avscode\u63D2\u4EF6\u7684\u5F00\u53D1\u8005\uFF0Cpublisher\uFF0C\u9700\u8981\u79D1\u5B66\u4E0A\u7F51</p><p><a href="https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true" target="_blank" rel="noopener noreferrer">https://marketplace.visualstudio.com/manage/createpublisher?managePageRedirect=true</a></p><p>\u6B65\u9AA4\u4E8C\uFF0C\u524D\u5F80\u7F51\u7AD9\u65B0\u5EFAtoken\uFF08\u5FC5\u987B\u5177\u5907token\u624D\u80FD\u767B\u5F55\u5F00\u53D1\u8005\u8D26\u6237 \uFF0C\u63D0\u4EA4vscode\u63D2\u4EF6\u81F3vscode\u5546\u5E97\u4E2D\uFF09</p><p><a href="https://dev.azure.com" target="_blank" rel="noopener noreferrer">https://dev.azure.com</a></p><ol><li>\u6CE8\u518C\u5FAE\u8F6F\u8D26\u6237\u5E76\u767B\u5F55</li><li>\u767B\u5F55\u540E\u70B9\u51FB\u4E2A\u4EBA\u4FE1\u606F</li><li>\u521B\u5EFA\u65B0\u7EC4\u7EC7</li><li>\u70B9\u51FB\u4EBA\u7269\u5934\u50CF</li><li>\u9009\u62E9personal access token</li><li>\u5FC5\u987B\u9009\u62E9\u6240\u6709\u7EC4\u7EC7<strong>all accessible organizations</strong>\u9009\u9879</li><li>\u9009\u62E9<strong>custom define</strong></li><li>\u9009\u62E9\u6700\u957F\u65E5\u671F\uFF08\u6700\u957F\u4E00\u5E74\uFF09</li><li>\u5FC5\u987B\u9009\u62E9\u6743\u9650\u5168\u5F00<strong>full access</strong></li><li>\u751F\u6210token\uFF0C\u8BB0\u5F97\u4FDD\u7BA1\uFF0Ctoken\u5FD8\u8BB0\u53EA\u80FD\u91CD\u65B0\u6CE8\u518C\uFF0C\u65E0\u6CD5\u627E\u56DE</li></ol><h2 id="\u4E0A\u4F20\u63D2\u4EF6" tabindex="-1">\u4E0A\u4F20\u63D2\u4EF6 <a class="header-anchor" href="#\u4E0A\u4F20\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u4E0A\u4F20\u63D2\u4EF6\u81F3vscode\u63D2\u4EF6\u5E02\u573A</p><p>1.\u5B89\u88C5\u4E0A\u4F20\u63D2\u4EF6\u7684\u5168\u5C40\u547D\u4EE4</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g vsce</span></span>\n<span class="line"></span></code></pre></div><p>2.\u9700\u8981\u8FDB\u884C\u5F00\u53D1\u8005\u8D26\u6237\u767B\u5F55</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vsce login \u4F60\u7684\u53D1\u5E03\u8005\u8D26\u6237\u540D</span></span>\n<span class="line"></span></code></pre></div><p>3.\u8F93\u5165token\u767B\u9646</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6BCF\u4E00\u6B21\u63D0\u4EA4\u7684\u7248\u672C\u53F7\u90FD\u8981\u8DDF\u4EE5\u524D\u7684\u7248\u672C\u53F7\u4E0D\u540C\uFF0C\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539package.json\u91CC\u7684\u7248\u672C\u53F7</span></span>\n<span class="line"><span style="color:#A6ACCD;">vsce publish</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u589E\u7248\u672C\u53F7\u547D\u4EE4</span></span>\n<span class="line"><span style="color:#A6ACCD;">vsce publish patch </span></span>\n<span class="line"></span></code></pre></div><h2 id="\u63D2\u4EF6\u672C\u5730\u4F7F\u7528" tabindex="-1">\u63D2\u4EF6\u672C\u5730\u4F7F\u7528 <a class="header-anchor" href="#\u63D2\u4EF6\u672C\u5730\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u60F3\u628A\u63D2\u4EF6\u53D1\u5E03\u5230vscode\u63D2\u4EF6\u5E02\u573A\u524D\uFF0C\u5148\u672C\u5730\u8BD5\u7528\u4E00\u4E0B\uFF0C\u6216\u8005\u6839\u672C\u4E0D\u60F3\u53D1\u5E03\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u65B9\u547D\u4EE4\u6253\u5305\u63D2\u4EF6</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vsce package</span></span>\n<span class="line"></span></code></pre></div><p>\u6253\u5305\u63D2\u4EF6\u540E\u4F1A\u751F\u6210visx\u6587\u4EF6\uFF0Cvscode\u4E2D\u53F3\u51FB\u8BE5visx\u6587\u4EF6\u5B89\u88C5\uFF0C\u5373\u53EF\u5728vscode\u4E2D\u751F\u6548\u8BE5\u63D2\u4EF6</p>', 27);
const _hoisted_28 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_28);
}
var _1_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _1_______ as default };
