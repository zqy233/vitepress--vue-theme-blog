import{_ as e,o as a,c as i,a as t}from"./app.bfa9bd4b.js";const g=JSON.parse('{"title":"ps","description":"","frontmatter":{},"headers":[{"level":2,"title":"暂存盘已满","slug":"暂存盘已满","link":"#暂存盘已满","children":[]},{"level":2,"title":"右侧面板折叠","slug":"右侧面板折叠","link":"#右侧面板折叠","children":[]},{"level":2,"title":"不能移动选区，因为已选定画板","slug":"不能移动选区-因为已选定画板","link":"#不能移动选区-因为已选定画板","children":[]},{"level":2,"title":"设置形状颜色","slug":"设置形状颜色","link":"#设置形状颜色","children":[]},{"level":2,"title":"设置自定义快捷键","slug":"设置自定义快捷键","link":"#设置自定义快捷键","children":[]},{"level":2,"title":"快捷键合并图层","slug":"快捷键合并图层","link":"#快捷键合并图层","children":[]},{"level":2,"title":"ps日期","slug":"ps日期","link":"#ps日期","children":[]}],"relativePath":"3.框架/问题解决/ps.md","lastUpdated":1720835436698}'),l={name:"3.框架/问题解决/ps.md"},r=t('<h1 id="ps" tabindex="-1">ps <a class="header-anchor" href="#ps" aria-hidden="true">#</a></h1><h2 id="暂存盘已满" tabindex="-1">暂存盘已满 <a class="header-anchor" href="#暂存盘已满" aria-hidden="true">#</a></h2><p>问题：ps一直提示暂存盘已满，一看c盘，满了</p><p>原因：ps会缓存所有之前打开的文件，作为一个前端，经常打开ui发来的psd文件进行切图，最终导致c盘满了</p><p>解决方案：打开ps&gt;文件&gt;最近打开文件&gt;清除最近打开文件列表</p><h2 id="右侧面板折叠" tabindex="-1">右侧面板折叠 <a class="header-anchor" href="#右侧面板折叠" aria-hidden="true">#</a></h2><p>问题：右侧面板莫名地折叠了</p><p>解决方案：窗口&gt;工作区&gt;复位基本单位</p><h2 id="不能移动选区-因为已选定画板" tabindex="-1">不能移动选区，因为已选定画板 <a class="header-anchor" href="#不能移动选区-因为已选定画板" aria-hidden="true">#</a></h2><p>问题：选中图层时提示不能移动选区，因为已选定画板</p><p>原因：上次矩形选框工具未关闭</p><p>解决方案：选中左侧矩形选框工具，选一下即可</p><h2 id="设置形状颜色" tabindex="-1">设置形状颜色 <a class="header-anchor" href="#设置形状颜色" aria-hidden="true">#</a></h2><p>问题：图标跟自己想要的颜色不一样</p><p>解决方案：右击-&gt;混合选项-&gt;颜色叠加-&gt;选择颜色</p><h2 id="设置自定义快捷键" tabindex="-1">设置自定义快捷键 <a class="header-anchor" href="#设置自定义快捷键" aria-hidden="true">#</a></h2><p>编辑&gt;键盘快捷键</p><h2 id="快捷键合并图层" tabindex="-1">快捷键合并图层 <a class="header-anchor" href="#快捷键合并图层" aria-hidden="true">#</a></h2><p>ctrl+e</p><h2 id="ps日期" tabindex="-1">ps日期 <a class="header-anchor" href="#ps日期" aria-hidden="true">#</a></h2><p>比如我想ps日期，直接输入文字肯定是不像的，假如图片日期数字比较多的话，可以把其他数字移动到需要ps的数字上</p><ol><li>左侧第二个图标-矩形选框工具</li><li>选中要ps的日期，右击<code>通过拷贝的图层</code>（注意！需要注意，图层是最开始的图层，不然可能选区是空的）</li><li>左侧第一个图标-移动工具</li><li>按住方向键可以将之前选中的选区图层进行移动，移动到需要挡住的数字上</li></ol>',22),s=[r];function d(h,p,n,c,o,_){return a(),i("div",null,s)}const f=e(l,[["render",d]]);export{g as __pageData,f as default};
