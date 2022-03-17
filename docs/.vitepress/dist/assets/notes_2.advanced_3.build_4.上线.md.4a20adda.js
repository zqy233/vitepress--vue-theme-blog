import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.deefcb20.js";
const __pageData = '{"title":"github","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.vue.config.js\u6DFB\u52A0publicPath","slug":"_1-vue-config-js\u6DFB\u52A0publicpath"},{"level":2,"title":"2.\u4F7F\u7528hash\u8DEF\u7531","slug":"_2-\u4F7F\u7528hash\u8DEF\u7531"},{"level":2,"title":"1.\u8D2D\u4E70\u670D\u52A1\u5668","slug":"_1-\u8D2D\u4E70\u670D\u52A1\u5668"},{"level":2,"title":"2.\u9009\u62E9ECS\u5171\u4EAB\u578B","slug":"_2-\u9009\u62E9ecs\u5171\u4EAB\u578B"},{"level":2,"title":"3.\u8FDB\u5165\u5DE5\u4F5C\u53F0","slug":"_3-\u8FDB\u5165\u5DE5\u4F5C\u53F0"},{"level":2,"title":"4.\u8FDE\u63A5\u670D\u52A1\u5668","slug":"_4-\u8FDE\u63A5\u670D\u52A1\u5668"},{"level":2,"title":"5.\u914D\u7F6Enode\u73AF\u5883","slug":"_5-\u914D\u7F6Enode\u73AF\u5883"},{"level":2,"title":"6.\u5B89\u88C5mysql","slug":"_6-\u5B89\u88C5mysql"}],"relativePath":"notes/2.advanced/3.build/4.\u4E0A\u7EBF.md","lastUpdated":1646227242963}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="github" tabindex="-1">github <a class="header-anchor" href="#github" aria-hidden="true">#</a></h1><h2 id="_1-vue-config-js\u6DFB\u52A0publicpath" tabindex="-1">1.vue.config.js\u6DFB\u52A0publicPath <a class="header-anchor" href="#_1-vue-config-js\u6DFB\u52A0publicpath" aria-hidden="true">#</a></h2><p>\u6DFB\u52A0github\u4ED3\u5E93\u7684publicPath\u5730\u5740</p><div class="language-"><pre><code>module.exports = {\n  publicPath: &quot;/goodluck-ui/&quot;,\n  ...\n }\n</code></pre></div><h2 id="_2-\u4F7F\u7528hash\u8DEF\u7531" tabindex="-1">2.\u4F7F\u7528hash\u8DEF\u7531 <a class="header-anchor" href="#_2-\u4F7F\u7528hash\u8DEF\u7531" aria-hidden="true">#</a></h2><h1 id="\u963F\u91CC\u4E91" tabindex="-1">\u963F\u91CC\u4E91 <a class="header-anchor" href="#\u963F\u91CC\u4E91" aria-hidden="true">#</a></h1><h2 id="_1-\u8D2D\u4E70\u670D\u52A1\u5668" tabindex="-1">1.\u8D2D\u4E70\u670D\u52A1\u5668 <a class="header-anchor" href="#_1-\u8D2D\u4E70\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u8FD9\u4E24\u6B3E\u90FD\u662F\u670D\u52A1\u5668\uFF0C\u4E2A\u4EBA\u4F7F\u7528\uFF0C\u4E3B\u8981\u9009\u62E9\u524D\u4E24\u6B3E\uFF0C\u6BD4\u8F83\u4FBF\u5B9C</p><p>\u533A\u522B:</p><p>\u8F7B\u91CF\u5E94\u7528\u670D\u52A1\u5668\u662F\u9700\u8981\u9009\u62E9\u9ED8\u8BA4\u914D\u7F6E\u7684\uFF0C\u9002\u5408\u65B0\u624B\uFF0C\u6BD4\u5982\u53EF\u4EE5\u9009\u62E9nodejs\u73AF\u5883</p><p>ECS\u662F\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u66F4\u52A0\u7075\u6D3B\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5730\u5347\u7EA7\u5176\u4ED6\u578B\u53F7\u670D\u52A1\u5668</p><h2 id="_2-\u9009\u62E9ecs\u5171\u4EAB\u578B" tabindex="-1">2.\u9009\u62E9ECS\u5171\u4EAB\u578B <a class="header-anchor" href="#_2-\u9009\u62E9ecs\u5171\u4EAB\u578B" aria-hidden="true">#</a></h2><h2 id="_3-\u8FDB\u5165\u5DE5\u4F5C\u53F0" tabindex="-1">3.\u8FDB\u5165\u5DE5\u4F5C\u53F0 <a class="header-anchor" href="#_3-\u8FDB\u5165\u5DE5\u4F5C\u53F0" aria-hidden="true">#</a></h2><p>\u4FEE\u6539\u670D\u52A1\u5668\u7684\u5BC6\u7801\u5BC6\u7801</p><h2 id="_4-\u8FDE\u63A5\u670D\u52A1\u5668" tabindex="-1">4.\u8FDE\u63A5\u670D\u52A1\u5668 <a class="header-anchor" href="#_4-\u8FDE\u63A5\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>cmd\u547D\u4EE4\u884Cssh\u5BC6\u7801\u767B\u5F55</p><div class="language-"><pre><code>ssh root@106.14.33.249\n</code></pre></div><h2 id="_5-\u914D\u7F6Enode\u73AF\u5883" tabindex="-1">5.\u914D\u7F6Enode\u73AF\u5883 <a class="header-anchor" href="#_5-\u914D\u7F6Enode\u73AF\u5883" aria-hidden="true">#</a></h2><p>\u4F7F\u7528NVM\u5B89\u88C5\u591A\u7248\u672C</p><p>NVM\uFF08Node Version Manager\uFF09\u662FNode.js\u7684\u7248\u672C\u7BA1\u7406\u8F6F\u4EF6\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5728Node.js\u5404\u4E2A\u7248\u672C\u95F4\u8FDB\u884C\u5207\u6362\u3002\u9002\u7528\u4E8E\u957F\u671F\u505Anode\u5F00\u53D1\u7684\u4EBA\u5458\u6216\u6709\u5FEB\u901F\u66F4\u65B0node\u7248\u672C\u3001\u5FEB\u901F\u5207\u6362node\u7248\u672C\u7684\u573A\u666F</p><p>\u5B8C\u6210\u4EE5\u4E0B\u64CD\u4F5C\uFF0C\u4F7F\u7528NVM\u5B89\u88C5\u591A\u4E2ANode.js\u7248\u672C\uFF1A</p><ol><li><p>\u4F7F\u7528Git\u5C06\u6E90\u7801\u514B\u9686\u5230\u672C\u5730\u7684</p><p>~/.nvm</p><p>\u76EE\u5F55\u4E0B\uFF0C\u5E76\u68C0\u67E5\u6700\u65B0\u7248\u672C\u3002</p><div class="language-"><pre><code>yum install git\ngit clone https://github.com/cnpm/nvm.git ~/.nvm &amp;&amp; cd ~/.nvm &amp;&amp; git checkout `git describe --abbrev=0 --tags`\n</code></pre></div></li><li><p>\u6FC0\u6D3BNVM\u3002</p><div class="language-"><pre><code>echo &quot;. ~/.nvm/nvm.sh&quot; &gt;&gt; /etc/profile\nsource /etc/profile\n</code></pre></div></li><li><p>\u5217\u51FANode.js\u7684\u6240\u6709\u7248\u672C\u3002</p><div class="language-"><pre><code>nvm list-remote\n</code></pre></div></li><li><p>\u5B89\u88C5\u591A\u4E2ANode.js\u7248\u672C\u3002</p><div class="language-"><pre><code>nvm install v6.9.5\nnvm install v7.4.0\n</code></pre></div></li><li><p>\u8FD0\u884C</p><div class="language-"><pre><code>nvm ls\n</code></pre></div><p>\u67E5\u770B\u5DF2\u5B89\u88C5\u7684Node.js\u7248\u672C\u3002</p><p>\u672C\u793A\u4F8B\u4F7F\u7528\u7684\u7248\u672C\u4E3Av7.4.0\u3002\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-"><pre><code>[root@iZXXXXZ .nvm]# nvm ls\n         v6.9.5\n-&gt;       v7.4.0\n         system\nstable -&gt; 7.4 (-&gt; v7.4.0) (default)\nunstable -&gt; 6.9 (-&gt; v6.9.5) (default)\n</code></pre></div></li><li><p>\u8FD0\u884C</p><div class="language-"><pre><code>nvm use &lt;\u7248\u672C\u53F7&gt;\n</code></pre></div><p>\u53EF\u4EE5\u5207\u6362Node.js\u7248\u672C\u3002</p><p>\u4F8B\u5982\uFF0C\u5207\u6362Node.js\u7248\u672C\u81F3v7.4.0\u3002\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\u6240\u793A\u3002</p><div class="language-"><pre><code>[root@iZXXXXZ .nvm]# nvm use v7.4.0\nNow using node v7.4.0\n</code></pre></div></li></ol><h2 id="_6-\u5B89\u88C5mysql" tabindex="-1">6.\u5B89\u88C5mysql <a class="header-anchor" href="#_6-\u5B89\u88C5mysql" aria-hidden="true">#</a></h2><ol><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u66F4\u65B0YUM\u6E90\u3002</p><div class="language-"><pre><code>rpm -Uvh  https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n</code></pre></div></li><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5MySQL\u3002</p><div class="language-"><pre><code>yum -y install mysql-community-server\n</code></pre></div></li><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770BMySQL\u7248\u672C\u53F7\u3002</p><div class="language-"><pre><code>mysql -V\n</code></pre></div><p>\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF0C\u8868\u793AMySQL\u5B89\u88C5\u6210\u529F</p></li></ol><p>\u914D\u7F6EMySQL</p><ol><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8MySQL\u670D\u52A1\u3002</p><div class="language-"><pre><code>systemctl start mysqld\n</code></pre></div></li><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u8BBE\u7F6EMySQL\u670D\u52A1\u5F00\u673A\u81EA\u542F\u52A8\u3002</p><div class="language-"><pre><code>systemctl enable mysqld\n</code></pre></div></li><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B/var/log/mysqld.log\u6587\u4EF6\uFF0C\u83B7\u53D6\u5E76\u8BB0\u5F55root\u7528\u6237\u7684\u521D\u59CB\u5BC6\u7801\u3002</p><div class="language-"><pre><code>grep &#39;temporary password&#39; /var/log/mysqld.log\n</code></pre></div><p>\u6267\u884C\u547D\u4EE4\u7ED3\u679C\u793A\u4F8B\u5982\u4E0B\u3002</p><div class="language-"><pre><code>2020-04-08T08:12:07.893939Z 1 [Note] A temporary password is generated for root@localhost: xvlo1lZs7&gt;uI\n</code></pre></div><p>\u793A\u4F8B\u672B\u5C3E\u7684<code>xvlo1lZs7&gt;uI</code>\u4E3A\u521D\u59CB\u5BC6\u7801\uFF0C\u4E0B\u4E00\u6B65\u5BF9MySQL\u8FDB\u884C\u5B89\u5168\u6027\u914D\u7F6E\u65F6\uFF0C\u4F1A\u4F7F\u7528\u8BE5\u521D\u59CB\u5BC6\u7801\u3002</p></li><li><p>\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\u5BF9MySQL\u8FDB\u884C\u5B89\u5168\u6027\u914D\u7F6E\u3002</p><div class="language-"><pre><code>mysql_secure_installation\n</code></pre></div><ol><li><p>\u91CD\u7F6Eroot\u7528\u6237\u7684\u5BC6\u7801\u3002</p><p><strong>\u8BF4\u660E</strong> \u5728\u8F93\u5165\u5BC6\u7801\u65F6\uFF0C\u7CFB\u7EDF\u4E3A\u4E86\u6700\u5927\u9650\u5EA6\u7684\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\uFF0C\u547D\u4EE4\u884C\u5C06\u4E0D\u505A\u4EFB\u4F55\u56DE\u663E\u3002\u60A8\u53EA\u9700\u8981\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801\u4FE1\u606F\uFF0C\u7136\u540E\u6309Enter\u952E\u5373\u53EF\u3002</p><div class="language-"><pre><code>Enter password for user root: #\u8F93\u5165\u4E0A\u4E00\u6B65\u83B7\u53D6\u7684root\u7528\u6237\u521D\u59CB\u5BC6\u7801\nThe &#39;validate_password&#39; plugin is installed on the server.\nThe subsequent steps will run with the existing configuration of the plugin.\nUsing existing password for root.\nEstimated strength of the password: 100 \nChange the password for root ? ((Press y|Y for Yes, any other key for No) : Y #\u662F\u5426\u66F4\u6539root\u7528\u6237\u5BC6\u7801\uFF0C\u8F93\u5165Y\nNew password: #\u8F93\u5165\u65B0\u5BC6\u7801\uFF0C\u957F\u5EA6\u4E3A8\u81F330\u4E2A\u5B57\u7B26\uFF0C\u5FC5\u987B\u540C\u65F6\u5305\u542B\u5927\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u7279\u6B8A\u7B26\u53F7\u3002\u7279\u6B8A\u7B26\u53F7\u53EF\u4EE5\u662F()` ~!@#$%^&amp;*-+=|{}[]:;\u2018&lt;&gt;,.?/\nRe-enter new password: #\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801\nEstimated strength of the password: 100 \nDo you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : Y #\u662F\u5426\u7EE7\u7EED\u64CD\u4F5C\uFF0C\u8F93\u5165Y\n</code></pre></div></li><li><p>\u5220\u9664\u533F\u540D\u7528\u6237\u8D26\u53F7\u3002</p><div class="language-"><pre><code>By default, a MySQL installation has an anonymous user, allowing anyone to log into MySQL without having to have a user account created for them. This is intended only for testing, and to make the installation go a bit smoother. You should remove them before moving into a production environment.\nRemove anonymous users? (Press y|Y for Yes, any other key for No) : Y  #\u662F\u5426\u5220\u9664\u533F\u540D\u7528\u6237\uFF0C\u8F93\u5165Y\nSuccess.\n</code></pre></div></li><li><p>\u7981\u6B62root\u8D26\u53F7\u8FDC\u7A0B\u767B\u5F55\u3002</p><div class="language-"><pre><code>Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y #\u7981\u6B62root\u8FDC\u7A0B\u767B\u5F55\uFF0C\u8F93\u5165Y\nSuccess.\n</code></pre></div></li><li><p>\u5220\u9664test\u5E93\u4EE5\u53CA\u5BF9test\u5E93\u7684\u8BBF\u95EE\u6743\u9650\u3002</p><div class="language-"><pre><code>Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Y #\u662F\u5426\u5220\u9664test\u5E93\u548C\u5BF9\u5B83\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u8F93\u5165Y\n- Dropping test database...\nSuccess.\n</code></pre></div></li><li><p>\u91CD\u65B0\u52A0\u8F7D\u6388\u6743\u8868\u3002</p><div class="language-"><pre><code>Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y #\u662F\u5426\u91CD\u65B0\u52A0\u8F7D\u6388\u6743\u8868\uFF0C\u8F93\u5165Y\nSuccess.\nAll done!\n</code></pre></div></li></ol><p>\u5B89\u5168\u6027\u914D\u7F6E\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1<a href="https://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html" target="_blank" rel="noopener noreferrer">MySQL\u5B98\u65B9\u6587\u6863</a>\u3002</p></li></ol><p>\u8FDC\u7A0B\u8BBF\u95EEMySQL\u6570\u636E\u5E93</p><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u6570\u636E\u5E93\u5BA2\u6237\u7AEF\u6216\u963F\u91CC\u4E91\u63D0\u4F9B\u7684\u6570\u636E\u7BA1\u7406\u670D\u52A1DMS\uFF08Data Management Service\uFF09\u6765\u8FDC\u7A0B\u8BBF\u95EEMySQL\u6570\u636E\u5E93\u3002\u672C\u8282\u4EE5DMS\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u8FDC\u7A0B\u8BBF\u95EEMySQL\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u6B65\u9AA4\u3002</p><ol><li><p>\u5728ECS\u5B9E\u4F8B\u4E0A\uFF0C\u521B\u5EFA\u8FDC\u7A0B\u767B\u5F55MySQL\u7684\u8D26\u53F7\u3002</p><ol><li><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u540E\uFF0C\u8F93\u5165root\u7528\u6237\u7684\u5BC6\u7801\u767B\u5F55MySQL\u3002</p><div class="language-"><pre><code> mysql -uroot -p\n</code></pre></div></li><li><p>\u4F9D\u6B21\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u8FDC\u7A0B\u767B\u5F55MySQL\u7684\u8D26\u53F7\u3002</p><p>\u5EFA\u8BAE\u60A8\u4F7F\u7528\u975Eroot\u8D26\u53F7\u8FDC\u7A0B\u767B\u5F55MySQL\u6570\u636E\u5E93\uFF0C\u672C\u793A\u4F8B\u8D26\u53F7\u4E3A<code>dms</code>\u3001\u5BC6\u7801\u4E3A<code>123456</code>\u3002</p><p>\u6CE8\u610F\u5B9E\u9645\u521B\u5EFA\u8D26\u53F7\u65F6\uFF0C\u9700\u5C06\u793A\u4F8B\u5BC6\u7801<code>123456</code>\u66F4\u6362\u4E3A\u7B26\u5408\u8981\u6C42\u7684\u5BC6\u7801\uFF0C\u5E76\u59A5\u5584\u4FDD\u5B58\u3002\u5BC6\u7801\u8981\u6C42\uFF1A\u957F\u5EA6\u4E3A8\u81F330\u4E2A\u5B57\u7B26\uFF0C\u5FC5\u987B\u540C\u65F6\u5305\u542B\u5927\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u7279\u6B8A\u7B26\u53F7\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7279\u6B8A\u7B26\u53F7\uFF1A</p><p><code>()</code> ~!@#$%^&amp;*-+=|{}[]:;\u2018&lt;&gt;,.?/`</p><div class="language-"><pre><code>mysql&gt; grant all on *.* to &#39;dms&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39;; #\u4F7F\u7528root\u66FF\u6362dms\uFF0C\u53EF\u8BBE\u7F6E\u4E3A\u5141\u8BB8root\u8D26\u53F7\u8FDC\u7A0B\u767B\u5F55\u3002\nmysql&gt; flush privileges;\n</code></pre></div></li></ol></li><li><p>\u767B\u5F55[\u6570\u636E\u7BA1\u7406\u63A7\u5236\u53F0]\u3002</p></li><li><p>\u5728\u5DE6\u4FA7\u5BFC\u822A\u680F\u4E2D\uFF0C\u9009\u62E9\u81EA\u5EFA\u5E93\uFF08ECS\u3001\u516C\u7F51\u3002</p></li><li><p>\u5355\u51FB\u65B0\u589E\u6570\u636E\u5E93\u3002</p></li><li><p>\u914D\u7F6E\u81EA\u5EFA\u6570\u636E\u5E93\u4FE1\u606F\u3002 \u5177\u4F53\u64CD\u4F5C\uFF0C\u8BF7\u53C2\u89C1[\u7BA1\u7406ECS\u5B9E\u4F8B\u81EA\u5EFA\u6570\u636E\u5E93]\u3002</p></li><li><p>\u5355\u51FB\u767B\u5F55\u3002</p><p>\u6210\u529F\u767B\u5F55\u540E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528DMS\u63D0\u4F9B\u7684\u83DC\u5355\u680F\u529F\u80FD\uFF0C\u521B\u5EFA\u6570\u636E\u5E93\u3001\u8868\u3001\u51FD\u6570\u7B49\u3002</p></li></ol>', 29);
const _hoisted_30 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_30);
}
var _4___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, _4___ as default };
