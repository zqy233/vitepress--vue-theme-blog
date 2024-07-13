import{_ as s,o as e,c as n,a}from"./app.bfa9bd4b.js";const B=JSON.parse('{"title":"插件api","description":"","frontmatter":{},"headers":[{"level":2,"title":"activeTextEditor","slug":"activetexteditor","link":"#activetexteditor","children":[{"level":3,"title":"showOpenDialog","slug":"showopendialog","link":"#showopendialog","children":[]},{"level":3,"title":"showInformationMessage","slug":"showinformationmessage","link":"#showinformationmessage","children":[]},{"level":3,"title":"showWarningMessage","slug":"showwarningmessage","link":"#showwarningmessage","children":[]},{"level":3,"title":"showErrorMessage","slug":"showerrormessage","link":"#showerrormessage","children":[]},{"level":3,"title":"showInputBox","slug":"showinputbox","link":"#showinputbox","children":[]}]},{"level":2,"title":"commands","slug":"commands","link":"#commands","children":[{"level":3,"title":"executeCommand","slug":"executecommand","link":"#executecommand","children":[]}]},{"level":2,"title":"Range/范围","slug":"range-范围","link":"#range-范围","children":[{"level":3,"title":"with(start?: Position, end?: Position): Range","slug":"with-start-position-end-position-range","link":"#with-start-position-end-position-range","children":[]},{"level":3,"title":"intersection(range: Range): Range","slug":"intersection-range-range-range","link":"#intersection-range-range-range","children":[]},{"level":3,"title":"union(other: Range): Range","slug":"union-other-range-range","link":"#union-other-range-range","children":[]}]},{"level":2,"title":"Position/位置","slug":"position-位置","link":"#position-位置","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]}]},{"level":2,"title":"Selection/光标","slug":"selection-光标","link":"#selection-光标","children":[{"level":3,"title":"Constructors/构造函数","slug":"constructors-构造函数","link":"#constructors-构造函数","children":[]},{"level":3,"title":"Properties/属性","slug":"properties-属性","link":"#properties-属性","children":[]}]}],"relativePath":"7.工具/vscode插件开发/插件语法.md","lastUpdated":1720835436710}'),o={name:"7.工具/vscode插件开发/插件语法.md"},t=a(`<h1 id="插件api" tabindex="-1">插件api <a class="header-anchor" href="#插件api" aria-hidden="true">#</a></h1><blockquote><p><a href="https://code.visualstudio.com/api/references/vscode-api" target="_blank" rel="noreferrer">官方英文文档</a></p></blockquote><h2 id="activetexteditor" tabindex="-1">activeTextEditor <a class="header-anchor" href="#activetexteditor" aria-hidden="true">#</a></h2><blockquote><p>当前激活也就是当前打开的编辑器</p></blockquote><h3 id="showopendialog" tabindex="-1">showOpenDialog <a class="header-anchor" href="#showopendialog" aria-hidden="true">#</a></h3><p>类型：</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">options</span><span style="color:#C678DD;">?:</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">OpenDialogOptions</span><span style="color:#ABB2BF;">): </span><span style="color:#E06C75;">Thenable</span><span style="color:#56B6C2;">&lt;</span><span style="color:#E06C75;">Uri</span><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">|</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">undefined</span><span style="color:#56B6C2;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;">(options</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> OpenDialogOptions): Thenable</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">Uri[] </span><span style="color:#F97583;">|</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>说明：向用户显示一个文件打开对话框，允许用户选择一个文件进行打开</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>options?: OpenDialogOptions</td><td>控制对话框的选项</td></tr></tbody></table><table><thead><tr><th>返回</th><th>描述</th></tr></thead><tbody><tr><td>Thenable&lt;Uri[]</td><td>解析为所选资源或未定义资源的承诺</td></tr></tbody></table><h4 id="opendialogoptions" tabindex="-1">OpenDialogOptions <a class="header-anchor" href="#opendialogoptions" aria-hidden="true">#</a></h4><p>打开文件弹窗的配置选项</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>canSelectFiles?: boolean</td><td>允许选择文件，默认为true</td></tr><tr><td>canSelectFolders?: boolean</td><td>允许选择文件夹，默认为false</td></tr><tr><td>canSelectMany?: boolean</td><td>允许选择多个文件或文件夹</td></tr><tr><td>defaultUri?: Uri</td><td>打开时默认选择的资源</td></tr><tr><td>filters?:</td><td>对话框使用的一组文件筛选器。每个条目都是一个人类可读的标签，比如“TypeScript”，以及一系列扩展名，例如&quot;{&#39;Images&#39;: [&#39;png&#39;, &#39;jpg&#39;] &#39;TypeScript&#39;: [&#39;ts&#39;, &#39;tsx&#39;] }&quot;</td></tr><tr><td>openLabel?: string</td><td>打开按钮的可读字符串</td></tr><tr><td>title?: string</td><td>对话标题，此参数可能会被忽略，因为并非所有操作系统都在打开的对话框（例如macOS）上显示标题</td></tr></tbody></table><h3 id="showinformationmessage" tabindex="-1">showInformationMessage <a class="header-anchor" href="#showinformationmessage" aria-hidden="true">#</a></h3><h3 id="showwarningmessage" tabindex="-1">showWarningMessage <a class="header-anchor" href="#showwarningmessage" aria-hidden="true">#</a></h3><h3 id="showerrormessage" tabindex="-1">showErrorMessage <a class="header-anchor" href="#showerrormessage" aria-hidden="true">#</a></h3><p>右下角消息弹窗</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">showInformationMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;info!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">showWarningMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;warning!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">showErrorMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;error!&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.showInformationMessage(</span><span style="color:#FFAB70;">&quot;info!&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.showWarningMessage(</span><span style="color:#FFAB70;">&quot;warning!&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#79B8FF;">window</span><span style="color:#B392F0;">.showErrorMessage(</span><span style="color:#FFAB70;">&quot;error!&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="showinputbox" tabindex="-1">showInputBox <a class="header-anchor" href="#showinputbox" aria-hidden="true">#</a></h3><p>打开一个输入框，要求用户输入，如果输入框被取消（例如按ESC键），则返回值将为undefined。否则，返回的值将是用户键入的字符串，或者如果用户没有键入任何内容，而是用OK关闭了输入框，则返回的值将是空字符串。</p><h2 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h2><p><code>Commands(命令)</code>触发VSCode中的操作。如果您曾经配置过<code>快捷键(keybinding)</code>，那么您已经使用过<code>Commands</code>。<code>Commands</code>还被插件使用，为用户提供功能，绑定VSCode的UI操作，并实现内部逻辑</p><h3 id="executecommand" tabindex="-1">executeCommand <a class="header-anchor" href="#executecommand" aria-hidden="true">#</a></h3><p>触发vscode命令</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 触发鼠标光标向左移动的命令</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">commands</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">executeCommand</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;cursorLeft&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#B392F0;"> </span><span style="color:#6B737C;">// 触发鼠标光标向左移动的命令</span></span>
<span class="line"><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">commands</span><span style="color:#B392F0;">.executeCommand(</span><span style="color:#FFAB70;">&quot;cursorLeft&quot;</span><span style="color:#B392F0;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>vscode.workspace.getConfiguration().get</code>和<code>vscode.workspace.getConfiguration().update</code>方法可以获取和设置配置项</p><h2 id="range-范围" tabindex="-1">Range/范围 <a class="header-anchor" href="#range-范围" aria-hidden="true">#</a></h2><p>一个range（范围）表示两个position（位置）的有序对。 并且范围开始位置一定大于等于结束位置</p><p>范围对象是不可变的。 使用 with、intersection 或 union 方法从现有范围派生新范围</p><h3 id="with-start-position-end-position-range" tabindex="-1">with(start?: Position, end?: Position): Range <a class="header-anchor" href="#with-start-position-end-position-range" aria-hidden="true">#</a></h3><p>该函数接受两个可选参数：start 和 end。它基于当前范围（Range）派生一个新的范围。</p><p>start 参数表示新范围的起始位置，end 参数表示新范围的结束位置。如果不提供这两个参数，将使用当前范围的起始位置和结束位置作为默认值。</p><p>返回的是一个由当前范围派生而来的新范围。如果提供的 start 和 end 与当前范围的起始位置和结束位置相同，那么将返回当前范围本身。</p><p>换句话说，这个函数的作用是根据给定的起始位置和结束位置，从当前范围中派生出一个新的范围。如果没有提供不同的起始位置和结束位置，将返回当前范围本身。</p><h3 id="intersection-range-range-range" tabindex="-1">intersection(range: Range): Range <a class="header-anchor" href="#intersection-range-range-range" aria-hidden="true">#</a></h3><p>该函数接受一个参数 range，该参数表示一个范围（Range）。它将当前范围与给定范围进行比较，如果两个范围有重叠部分，返回的范围将具有较大的起始位置和较小的结束位置。如果没有重叠部分，则返回 undefined。</p><p>换句话说，这个函数的目的是找出两个范围的交集，并返回交集所表示的新范围，或者当两个范围没有交集时返回 undefined。</p><h3 id="union-other-range-range" tabindex="-1">union(other: Range): Range <a class="header-anchor" href="#union-other-range-range" aria-hidden="true">#</a></h3><p>该函数接受一个参数 other，表示另一个范围（Range）。它计算当前范围与给定范围的并集，并返回一个新的范围。</p><p>返回的范围将具有较小的起始位置和较大的结束位置，它包含了当前范围和给定范围的所有位置。</p><p>换句话说，这个函数的目的是找出两个范围的并集，并返回并集所表示的新范围。新范围的起始位置将是两个范围起始位置中较小的那个，结束位置将是两个范围结束位置中较大的那个。</p><h2 id="position-位置" tabindex="-1"><a href="https://code.visualstudio.com/api/references/vscode-api#Position" target="_blank" rel="noreferrer">Position/位置</a> <a class="header-anchor" href="#position-位置" aria-hidden="true">#</a></h2><p>表示行和字符的位置，例如光标的位置。 位置对象是不可变的。 使用with 或translate 方法从现有位置导出新位置。</p><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Position</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">line</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">number</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">character</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">number</span><span style="color:#ABB2BF;">): </span><span style="color:#E06C75;">Position</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Position(line: number</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> character: number): Position</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>根据行号和字符，创建一个Position位置对象</p><h4 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h4><p>character: number</p><p>从零开始的字符值</p><p>line: number</p><p>从零开始的行值</p><h2 id="selection-光标" tabindex="-1"><a href="https://code.visualstudio.com/api/references/vscode-api#Selection" target="_blank" rel="noreferrer">Selection/光标</a> <a class="header-anchor" href="#selection-光标" aria-hidden="true">#</a></h2><p>表示编辑器中的文本选择</p><p>如果是自左向右选择，光标在最右边，选择范围就是选择开始位置到光标位置，光标位置在选择开始位置之后</p><p>如果是自右向左选择，光标在最左边，选择范围就是光标位置到选择开始位置，光标位置在选择开始位置之前</p><h3 id="constructors-构造函数" tabindex="-1">Constructors/构造函数 <a class="header-anchor" href="#constructors-构造函数" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-dark-pro vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Selection</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">anchor</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Position</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">active</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Position</span><span style="color:#ABB2BF;">): </span><span style="color:#E06C75;">Selection</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light" tabindex="0"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#B392F0;"> Selection(anchor: Position</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> active: Position): Selection</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="properties-属性" tabindex="-1">Properties/属性 <a class="header-anchor" href="#properties-属性" aria-hidden="true">#</a></h3><p>active: Position</p><p>光标位置。 该位置可能在选择开始位置之前或之后</p><p>anchor: Position</p><p>选择开始位置。 该位置可能在光标位置之前或之后</p>`,62),r=[t];function l(p,i,c,d,h,u){return e(),n("div",null,r)}const y=s(o,[["render",l]]);export{B as __pageData,y as default};
