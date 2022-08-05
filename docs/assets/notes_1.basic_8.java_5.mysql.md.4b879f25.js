import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.dd2b519a.js";
const __pageData = JSON.parse('{"title":"mysql","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u540D\u8BCD\u89E3\u91CA","slug":"\u540D\u8BCD\u89E3\u91CA"},{"level":3,"title":"\u6570\u636E\u5E93","slug":"\u6570\u636E\u5E93"},{"level":3,"title":"\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF","slug":"\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF"},{"level":3,"title":"sql","slug":"sql"},{"level":3,"title":"\u5173\u7CFB\u578B\u6570\u636E\u5E93","slug":"\u5173\u7CFB\u578B\u6570\u636E\u5E93"},{"level":2,"title":"\u5B89\u88C5\u4E0E\u5378\u8F7D","slug":"\u5B89\u88C5\u4E0E\u5378\u8F7D"},{"level":3,"title":"\u5B98\u7F51\u4E0B\u8F7D","slug":"\u5B98\u7F51\u4E0B\u8F7D"},{"level":3,"title":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF","slug":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF"},{"level":3,"title":"\u4E0B\u8F7D\u914D\u7F6E","slug":"\u4E0B\u8F7D\u914D\u7F6E"},{"level":3,"title":"\u542F\u52A8\u670D\u52A1","slug":"\u542F\u52A8\u670D\u52A1"},{"level":3,"title":"\u5173\u95ED\u670D\u52A1","slug":"\u5173\u95ED\u670D\u52A1"},{"level":3,"title":"\u767B\u5F55","slug":"\u767B\u5F55"},{"level":3,"title":"\u9000\u51FA","slug":"\u9000\u51FA"},{"level":3,"title":"\u5378\u8F7D","slug":"\u5378\u8F7D"},{"level":2,"title":"\u6E05\u9664id\u5217","slug":"\u6E05\u9664id\u5217"},{"level":2,"title":"sql","slug":"sql-1"},{"level":3,"title":"sql\u5206\u7C7B","slug":"sql\u5206\u7C7B"},{"level":2,"title":"DDL\u8BED\u6CD5","slug":"ddl\u8BED\u6CD5"},{"level":3,"title":"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93","slug":"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93"},{"level":3,"title":"\u521B\u5EFA\u6570\u636E\u5E93","slug":"\u521B\u5EFA\u6570\u636E\u5E93"},{"level":3,"title":"\u5220\u9664\u6570\u636E\u5E93","slug":"\u5220\u9664\u6570\u636E\u5E93"},{"level":3,"title":"\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93","slug":"\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93"},{"level":3,"title":"\u4F7F\u7528\u6570\u636E\u5E93","slug":"\u4F7F\u7528\u6570\u636E\u5E93"},{"level":2,"title":"\u64CD\u4F5C\u8868","slug":"\u64CD\u4F5C\u8868"},{"level":2,"title":"dql","slug":"dql"},{"level":3,"title":"\u67E5\u8BE2\u8BED\u6CD5","slug":"\u67E5\u8BE2\u8BED\u6CD5"},{"level":3,"title":"\u57FA\u7840\u67E5\u8BE2","slug":"\u57FA\u7840\u67E5\u8BE2"},{"level":2,"title":"[Err] 1055 - Expression #1 of ORDER BY clause is not in GROUP BY clause and contains nonaggregated column \u2018informationschema.PROFILING.SEQ\u2019 which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sqlmode=onlyfullgroup_by","slug":"err-1055-expression-1-of-order-by-clause-is-not-in-group-by-clause-and-contains-nonaggregated-column-\u2018information-schema-profiling-seq\u2019-which-is-not-functionally-dependent-on-columns-in-group-by-clause-this-is-incompatible-with-sql-mode-only-full-group-by"}],"relativePath":"notes/1.basic/8.java/5.mysql.md"}');
const _sfc_main = { name: "notes/1.basic/8.java/5.mysql.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h1><blockquote><p>\u4E2D\u5C0F\u578B\u7684\u5173\u7CFB\u578B\u6570\u636E\u5E93</p></blockquote><h2 id="\u540D\u8BCD\u89E3\u91CA" tabindex="-1">\u540D\u8BCD\u89E3\u91CA <a class="header-anchor" href="#\u540D\u8BCD\u89E3\u91CA" aria-hidden="true">#</a></h2><h3 id="\u6570\u636E\u5E93" tabindex="-1">\u6570\u636E\u5E93 <a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p>\u5B58\u50A8\u6570\u636E\u7684\u4ED3\u5E93\uFF0C\u6570\u636E\u662F\u6709\u7EC4\u7EC7\u7684\u8FDB\u884C\u5B58\u50A8\uFF0C\u82F1\u6587\uFF1Adatabase\uFF0C\u7B80\u79F0db</p><h3 id="\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF" tabindex="-1">\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF <a class="header-anchor" href="#\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF" aria-hidden="true">#</a></h3><p>\u7BA1\u7406\u6570\u636E\u5E93\u7684\u5927\u578B\u8F6F\u4EF6\uFF0Cdatabase management system\uFF0C\u68C0\u67E5dbms</p><h3 id="sql" tabindex="-1">sql <a class="header-anchor" href="#sql" aria-hidden="true">#</a></h3><p>structured query language\uFF0C\u7B80\u79F0sql\uFF0C\u7ED3\u6784\u5316\u67E5\u8BE2\u8BED\u8A00</p><p>\u4E00\u95E8\u64CD\u4F5C\u5173\u7CFB\u6570\u636E\u5E93\u7684\u7F16\u7A0B\u8BED\u8A00</p><p>\u5B9A\u4E49\u64CD\u4F5C\u6240\u6709\u5173\u7CFB\u6570\u636E\u5E93\u7684\u7EDF\u4E00\u6807\u51C6</p><h3 id="\u5173\u7CFB\u578B\u6570\u636E\u5E93" tabindex="-1">\u5173\u7CFB\u578B\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5173\u7CFB\u578B\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><p>\u5EFA\u7ACB\u5728\u5173\u7CFB\u6A21\u578B\u57FA\u7840\u4E0A\u7684\u6570\u636E\u5E93\uFF0C\u7B80\u5355\u8BF4\uFF0C\u5173\u7CFB\u6570\u636E\u5E93\u662F\u6709\u591A\u5F20\u80FD\u4E92\u76F8\u8FDE\u63A5\u7684\u4E8C\u7EF4\u8868\u7EC4\u6210\u7684\u6570\u636E\u5E93</p><ul><li>\u4F7F\u7528\u8868\u7ED3\u6784\uFF0C\u683C\u5F0F\u4E00\u81F4\uFF0C\u6613\u4E8E\u7EF4\u62A4</li><li>\u4F7F\u7528\u901A\u7528\u7684sql\u8BED\u8A00\u64CD\u4F5C\uFF0C\u4F7F\u7528\u65B9\u4FBF\uFF0C\u53EF\u7528\u4E8E\u590D\u6742\u67E5\u8BE2</li><li>\u6570\u636E\u5B58\u50A8\u5728\u78C1\u76D8\u4E2D\uFF0C\u5B89\u5168</li></ul><h2 id="\u5B89\u88C5\u4E0E\u5378\u8F7D" tabindex="-1">\u5B89\u88C5\u4E0E\u5378\u8F7D <a class="header-anchor" href="#\u5B89\u88C5\u4E0E\u5378\u8F7D" aria-hidden="true">#</a></h2><blockquote><p><a href="https://blog.csdn.net/qq_42611074/article/details/118177678?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_42611074/article/details/118177678?spm=1001.2014.3001.5502</a></p></blockquote><h3 id="\u5B98\u7F51\u4E0B\u8F7D" tabindex="-1">\u5B98\u7F51\u4E0B\u8F7D <a class="header-anchor" href="#\u5B98\u7F51\u4E0B\u8F7D" aria-hidden="true">#</a></h3><p><a href="https://dev.mysql.com/downloads/mysql" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql</a></p><h3 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u4E0B\u8F7DZIP\u538B\u7F29\u5305\uFF0C\u89E3\u538B</p><ol><li>\u6253\u5F00 \u6211\u7684\u7535\u8111-&gt;\u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E\uFF0C\u6253\u5F00\u73AF\u5883\u53D8\u91CF</li><li>\u5728path\u4E0B\u65B0\u5EFA\u4E00\u6761\u6570\u636E\uFF0C\u6839\u636E\u81EA\u5DF1\u7684mysql\u5B89\u88C5\u76EE\u5F55\u6765\u8BBE\u7F6E\uFF0C\u76EE\u5F55\u5730\u5740\u4E00\u76F4\u5230bin\uFF0C\u76EE\u7684\u662F\u8BA9\u7CFB\u7EDF\u8FD0\u884Cbin\u76EE\u5F55\u4E0B\u7684exe\u6587\u4EF6</li><li>\u5728\u89E3\u538B\u76EE\u5F55\u4E2D\u65B0\u5EFAdata\u6587\u4EF6\u5939\u548Cmysql.ini\u6587\u4EF6</li></ol><p>mysql.ini</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6Emysql\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u5B57\u7B26\u96C6</span></span>\n<span class="line"><span style="color:#A6ACCD;">default-character-set=utf8 </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">#\u8BBE\u7F6E3306\u7AEF\u53E3</span></span>\n<span class="line"><span style="color:#A6ACCD;">port = 3306 </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6Emysql\u7684\u5B89\u88C5\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#A6ACCD;">basedir=E:\\tools\\mysql-8.0.25-winx64</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u8BBE\u7F6Emysql\u6570\u636E\u5E93\u7684\u6570\u636E\u7684\u5B58\u653E\u76EE\u5F55</span></span>\n<span class="line"><span style="color:#A6ACCD;">datadir=E:\\tools\\mysql-8.0.25-winx64\\data</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u5141\u8BB8\u6700\u5927\u8FDE\u63A5\u6570</span></span>\n<span class="line"><span style="color:#A6ACCD;">max_connections=200</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u670D\u52A1\u7AEF\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\u9ED8\u8BA4\u4E3A8\u6BD4\u7279\u7F16\u7801\u7684latin1\u5B57\u7B26\u96C6</span></span>\n<span class="line"><span style="color:#A6ACCD;">character-set-server=utf8</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># \u521B\u5EFA\u65B0\u8868\u65F6\u5C06\u4F7F\u7528\u7684\u9ED8\u8BA4\u5B58\u50A8\u5F15\u64CE</span></span>\n<span class="line"><span style="color:#A6ACCD;">default-storage-engine=INNODB</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u4E0B\u8F7D\u914D\u7F6E" tabindex="-1">\u4E0B\u8F7D\u914D\u7F6E <a class="header-anchor" href="#\u4E0B\u8F7D\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u7BA1\u7406\u5458\u6743\u9650\u6253\u5F00cmd</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysqld install</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8\u670D\u52A1" tabindex="-1">\u542F\u52A8\u670D\u52A1 <a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u7BA1\u7406\u5458\u6743\u9650\u6253\u5F00cmd</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">net start mysql</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u5173\u95ED\u670D\u52A1" tabindex="-1">\u5173\u95ED\u670D\u52A1 <a class="header-anchor" href="#\u5173\u95ED\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">net stop mysql</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u767B\u5F55" tabindex="-1">\u767B\u5F55 <a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a></h3><p>mysql -u \u7528\u6237\u540D -p \u5BC6\u7801 -h \u8981\u8FDE\u63A5\u7684mysql\u670D\u52A1\u5668\u7684ip\u5730\u5740\uFF08\u9ED8\u8BA4127.0.0.1\uFF09-p \u7AEF\u53E3\u53F7\uFF08\u9ED8\u8BA43306\uFF09</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mysql -uroot -p123456</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u9000\u51FA" tabindex="-1">\u9000\u51FA <a class="header-anchor" href="#\u9000\u51FA" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">exit</span></span>\n<span class="line"><span style="color:#A6ACCD;">quit</span></span>\n<span class="line"><span style="color:#A6ACCD;">\\q</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u5378\u8F7D" tabindex="-1">\u5378\u8F7D <a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">net stop mysql</span></span>\n<span class="line"><span style="color:#A6ACCD;">mysqld -remove mysql</span></span>\n<span class="line"></span></code></pre></div><p>\u5220\u9664mysql\u5B89\u88C5\u76EE\u5F55\u7684\u6587\u4EF6\u4E0E\u73AF\u5883\u53D8\u91CF</p><h2 id="\u6E05\u9664id\u5217" tabindex="-1">\u6E05\u9664id\u5217 <a class="header-anchor" href="#\u6E05\u9664id\u5217" aria-hidden="true">#</a></h2><p>id\u5217\u6709\u6570\u636E\u884C\u88AB\u5220\u9664\u540E\u4F1A\u5BFC\u81F4id\u4E0D\u518D\u8FDE\u7EED\uFF0C\u53EF\u4EE5\u91CD\u65B0\u751F\u6210id\u5217\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> tableName </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> id;</span></span>\n<span class="line"><span style="color:#F78C6C;">alter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> tableName </span><span style="color:#F78C6C;">add</span><span style="color:#A6ACCD;"> id </span><span style="color:#F78C6C;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">primary</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">key</span><span style="color:#A6ACCD;"> auto_increment </span><span style="color:#F78C6C;">first</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div><h2 id="sql-1" tabindex="-1">sql <a class="header-anchor" href="#sql-1" aria-hidden="true">#</a></h2><p>sql\u8BED\u53E5\u53EF\u4EE5\u5355\u884C\u6216\u591A\u884C\u4E66\u5199\uFF0C\u4EE5\u5206\u53F7\u7ED3\u5C3E</p><p>mysql\u6570\u636E\u5E93\u7684sql\u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u5173\u952E\u8BCD\u5EFA\u8BAE\u4F7F\u7528\u5927\u5199</p><p>\u6CE8\u91CA\uFF0C\u591A\u884C\u6CE8\u91CA/* \u6CE8\u91CA */\uFF0C\u5355\u884C\u6CE8\u91CA\uFF0C-- \u6CE8\u91CA\u5185\u5BB9 #\u6CE8\u91CA\u5185\u5BB9\uFF08mysql\u7279\u6709\uFF09</p><h3 id="sql\u5206\u7C7B" tabindex="-1">sql\u5206\u7C7B <a class="header-anchor" href="#sql\u5206\u7C7B" aria-hidden="true">#</a></h3><ul><li>ddl\uFF0C\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF0C\u7528\u6765\u5B9A\u4E49\u6570\u636E\u5E93\u5BF9\u8C61\uFF1A\u6570\u636E\u5E93\uFF0C\u8868\uFF0C\u5217\u7B49</li><li>dml\uFF0C\u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF0C\u7528\u6765\u5BF9\u6570\u636E\u5E93\u4E2D\u8868\u7684\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539</li><li>dql\uFF0C\u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF0C\u7528\u6765\u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u8868\u7684\u8BB0\u5F55</li><li>dcl\uFF0C\u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF0C\u7528\u6765\u5B9A\u4E49\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u6743\u9650\u548C\u5B89\u5168\u7EA7\u522B\uFF0C\u53CA\u521B\u5EFA\u7528\u6237</li></ul><h2 id="ddl\u8BED\u6CD5" tabindex="-1">DDL\u8BED\u6CD5 <a class="header-anchor" href="#ddl\u8BED\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93" tabindex="-1">\u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93 <a class="header-anchor" href="#\u67E5\u8BE2\u6240\u6709\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">show databases;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1">\u521B\u5EFA\u6570\u636E\u5E93 <a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> databases;</span></span>\n<span class="line"></span></code></pre></div><p>\u6216</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> databases </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">exists</span><span style="color:#A6ACCD;"> \u6570\u636E\u5E93\u540D\u79F0;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u5220\u9664\u6570\u636E\u5E93" tabindex="-1">\u5220\u9664\u6570\u636E\u5E93 <a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">database</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div><p>\u6216</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">exists</span><span style="color:#A6ACCD;"> \u6570\u636E\u5E93\u540D\u79F0;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93" tabindex="-1">\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93 <a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">database</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528\u6570\u636E\u5E93" tabindex="-1">\u4F7F\u7528\u6570\u636E\u5E93 <a class="header-anchor" href="#\u4F7F\u7528\u6570\u636E\u5E93" aria-hidden="true">#</a></h3><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">use</span><span style="color:#A6ACCD;"> \u6570\u636E\u5E93\u540D\u79F0;</span></span>\n<span class="line"></span></code></pre></div><h2 id="\u64CD\u4F5C\u8868" tabindex="-1">\u64CD\u4F5C\u8868 <a class="header-anchor" href="#\u64CD\u4F5C\u8868" aria-hidden="true">#</a></h2><h2 id="dql" tabindex="-1">dql <a class="header-anchor" href="#dql" aria-hidden="true">#</a></h2><h3 id="\u67E5\u8BE2\u8BED\u6CD5" tabindex="-1">\u67E5\u8BE2\u8BED\u6CD5 <a class="header-anchor" href="#\u67E5\u8BE2\u8BED\u6CD5" aria-hidden="true">#</a></h3><p>select \u5B57\u6BB5\u5217\u8868</p><p>from \u8868\u540D\u5217\u8868</p><p>where \u6761\u4EF6\u5217\u8868</p><p>group by \u5206\u7EC4\u5B57\u6BB5</p><p>having \u5206\u7EC4\u540E\u6761\u4EF6</p><p>limit \u5206\u9875\u9650\u5B9A</p><h3 id="\u57FA\u7840\u67E5\u8BE2" tabindex="-1">\u57FA\u7840\u67E5\u8BE2 <a class="header-anchor" href="#\u57FA\u7840\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>\u5220\u9664stu\u8868</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">exists</span><span style="color:#A6ACCD;"> stu;</span></span>\n<span class="line"></span></code></pre></div><p>\u521B\u5EFAstu\u8868</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> stu (</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">-- \u7F16\u53F7</span></span>\n<span class="line"><span style="color:#A6ACCD;">	id </span><span style="color:#F78C6C;">int</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u59D3\u540D</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">varchar</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u5E74\u9F84</span></span>\n<span class="line"><span style="color:#A6ACCD;">	age </span><span style="color:#F78C6C;">int</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u6027\u522B</span></span>\n<span class="line"><span style="color:#A6ACCD;">	sex </span><span style="color:#F78C6C;">varchar</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u5730\u5740</span></span>\n<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">varchar</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u6570\u5B66\u6210\u7EE9</span></span>\n<span class="line"><span style="color:#A6ACCD;">	math double (</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u82F1\u8BED\u6210\u7EE9	</span></span>\n<span class="line"><span style="color:#A6ACCD;">	english double (</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">-- \u5165\u5B66\u4E8B\u4EF6</span></span>\n<span class="line"><span style="color:#A6ACCD;">	hire_date </span><span style="color:#F78C6C;">date</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">);</span></span>\n<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u6570\u636E</p><div class="language-"><span class="copy"></span><pre><code>drop TABLE\nIF EXISTS stu;\n\nCREATE TABLE stu (\n	-- \u7F16\u53F7\n	id INT,\n	-- \u59D3\u540D\n	name VARCHAR (20),\n	-- \u5E74\u9F84\n	age INT,\n	-- \u6027\u522B\n	sex VARCHAR (5),\n	-- \u5730\u5740\n	address VARCHAR (100),\n	-- \u6570\u5B66\u6210\u7EE9\n	math DOUBLE (5, 2),\n	-- \u82F1\u8BED\u6210\u7EE9	\n	english DOUBLE (5, 2),\n	-- \u5165\u5B66\u4E8B\u4EF6\n	hire_date date\n);\n\nINSERT INTO stu(id,name,age,sex,address,math,english,hire_date)\nVALUES (\n		2,\n		&#39;\u9A6C\u4E91&#39;,\n		55,\n		&#39;\u7537&#39;,\n		&#39;\u6B7B\u5417\u73A9\u610F&#39;,\n		66,\n		78,\n		&#39;1995-09-01&#39;\n	)\n</code></pre></div><h2 id="err-1055-expression-1-of-order-by-clause-is-not-in-group-by-clause-and-contains-nonaggregated-column-\u2018information-schema-profiling-seq\u2019-which-is-not-functionally-dependent-on-columns-in-group-by-clause-this-is-incompatible-with-sql-mode-only-full-group-by" tabindex="-1">[Err] 1055 - Expression #1 of ORDER BY clause is not in GROUP BY clause and contains nonaggregated column \u2018information_schema.PROFILING.SEQ\u2019 which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by <a class="header-anchor" href="#err-1055-expression-1-of-order-by-clause-is-not-in-group-by-clause-and-contains-nonaggregated-column-\u2018information-schema-profiling-seq\u2019-which-is-not-functionally-dependent-on-columns-in-group-by-clause-this-is-incompatible-with-sql-mode-only-full-group-by" aria-hidden="true">#</a></h2><p>\u67E5sql_mode</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> @@</span><span style="color:#F78C6C;">global</span><span style="color:#A6ACCD;">.sql_mode;</span></span>\n<span class="line"></span></code></pre></div><p>\u67E5\u51FA\u6765\u7684\u7ED3\u679C\u5C31\u662F\uFF1Aonly_full_group_by</p><p>\u9700\u8981\u5C06only_full_group_by\u7ED9\u53BB\u6389\uFF0C\u5728Navicat\u91CC\u9762\u6267\u884C</p><div class="language-sql"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> @@</span><span style="color:#F78C6C;">global</span><span style="color:#A6ACCD;">.sql_mode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>\n<span class="line"></span></code></pre></div>', 85);
const _hoisted_86 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_86);
}
var _5_mysql = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _5_mysql as default };
