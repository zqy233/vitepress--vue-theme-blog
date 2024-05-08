# prettier

Prettier是一个固执己见的代码格式化程序

一般通过以下方式使用prettier

- 使用vscode等代码编辑器的`prettier插件`：搭配快捷键如ctrl+s，保存时自动格式化，配置简单，使用方便，但是缺点是由于团队成员可能使用不同的编辑器，prettier版本、配置不同，从而格式化的风格迥异且难统一。所以这种使用方式个人使用没问题，团队推广不太适合
- 下载`prettier`npm 包，在项目中配置好，统一格式化风格

## cli方式使用

下载

```sh
npm i -D prettier
```

新建test.js

```js
function uglyCode(){console.log("this is an ugly function!")}
```

使用命令格式化指定文件

```sh
npx prettier --write .\test.js
```

使用命令格式化所有文件

```sh
npx prettier --write .
```

格式化后

```js
function uglyCode() {
  console.log("this is an ugly function!");
}
```

prettier默认不会处理`node_modules`里的文件，如果想忽略其他的文件或目录，可以在项目目录下新建`.prettierignore`文件，表示忽略某些文件或文件夹，具体格式跟`.gitignore`类似

目前的代码格式化都是Prettier根据自己的默认配置帮我们做的，当然也可以通过Prettier的配置项实现自定义的格式化

## .prettierignore

设置prettier格式化忽视哪些文件

### 示例，出自vitepress源码

```sh
*.md
*.vue
dist
pnpm-lock.yaml
cache
```

## prettier配置文件

prettier的配置文件支持很多种格式，vscode-prettier插件会优先使用配置文件，如果没有，再使用插件本身的prettier配置

如下是一个`.prettierrc.js`，列出了目前所有支持的prettier配置属性

```json
module.exports = {
  // 指定prettier将换行的行长<int>，默认80
  printWidth: 80,

  // 指定每个缩进级别的空格数<int>，默认2
  tabWidth: 2,

  // 用制表符而不是空格缩进行<bool>，默认false
  useTabs: false,

  // 在语句末尾添加分号<bool>，默认true
  semi: true,

  // 使用单引号而不是双引号<bool>，默认false
  singleQuote: true,

  // object对象中key值是否加引号<as-needed|consistent|preserve>，默认as-needed
  // as-needed-仅在需要时在对象属性周围添加引号
  // consistent-如果一个对象中至少有一个属性需要引号，所有属性添加引号
  // preserve-保留对象属性中用户输入使用的引号
  quoteProps: 'as-needed',

  // 在 JSX 中使用单引号而不是双引号<bool>，默认false
  jsxSingleQuote: false,

  // 在多行逗号分隔的句法结构中尽可能打印尾随逗号<es5|none|all>，默认es5
  // es5-在 ES5 中有效的尾随逗号（对象、数组等），TypeScript 的类型参数中没有尾随逗号
  // none-没有尾随逗号
  // all-尽可能以逗号结尾（包括函数参数和调用）。要运行以这种方式格式化的 JavaScript 代码需要一个支持 ES2017（Node.js 8+ 或现代浏览器）或下层编译的引擎。这还会在 TypeScript 的类型参数中启用尾随逗号（自 2018 年 1 月发布的 TypeScript 2.7 起支持）
  trailingComma: 'all',

  // 对象字面量中括号之间的空格<bool>，默认true
  bracketSpacing: true,

  // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）<bool>，默认false
  // true：
  // <button
  //   className="prettier-class"
  //   id="prettier-id"
  //   onClick={this.handleClick}>
  //   Click Here
  // </button>
  // false：
  // <button
  //   className="prettier-class"
  //   id="prettier-id"
  //   onClick={this.handleClick}
  // >
  //   Click Here
  // </button>
  bracketSameLine: true,

  // 在唯一的箭头函数参数周围包含括号<always|avoid>
  // always-始终包含括号
  // avoid-尽可能省略括号
  arrowParens: 'always',

  // Prettier 可以限制自己只格式化在文件顶部包含特殊注释（称为 pragma）的文件。这在逐渐将大型、未格式化的代码库过渡到 Prettier 时非常有用<bool>
  requirePragma: false,

  // Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。在使用 --require-pragma参数处理一连串的文件时这个功能将十分有用。如果文件顶部已经有一个doclock，这个选项将新建一行注释，并打上@format标记<bool>，默认false
  insertPragma: false,

  // 超过最大宽度是否换行<always|never|preserve>，默认preserve
  // always-如果超过最大宽度换行
  // never-不要换行
  // preserve-按原样显示
  proseWrap: 'preserve',

  // 指定 HTML、Vue、Angular 和 Handlebars 的全局空格敏感度<css|strict|ignore>，默认css
  // css-遵循CSS属性的默认值
  // strict-所有标签周围的空格（或缺少空格）被认为是重要的
  // ignore-所有标签周围的空格（或缺少空格）被认为是无关紧要的
  htmlWhitespaceSensitivity: 'css',

  // vue文件script和style标签中是否缩进<bool>，默认false
  vueIndentScriptAndStyle: false,

  // 行尾换行符<lf|crlf|cr|auto>，默认lf
  endOfLine: 'lf',

  // 控制 Prettier 是否格式化嵌入在文件中的引用代码<off|auto>，默认auto
  // auto–如果 Prettier 可以自动识别，则格式化嵌入代码
  // off-从不自动格式化嵌入代码
  embeddedLanguageFormatting: 'auto',

  // 在 HTML、Vue 和 JSX 中强制执行每行单个属性<bool>，默认false
  singleAttributePerLine: true
};
```



## 结合lint-staged与simple-git-hooks

lint-staged是检测git add . 中暂存区的文件，对检测出的文件执行脚本

simple-git-hooks是git钩子库，对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序

pageage.json添加如下，表示在git提交前执行lint-staged，lint-staged又触发prettier，从而进行所有提交文件的格式化

```json
 "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },  
"lint-staged": {
    "*": [
      "prettier --write --ignore-unknown"
    ]
  }
```

## stylelint-prettier

将prettier作为stylelint规则运行，并将差异报告为独立的stylelint问题

```sh
pnpm i -D stylelint stylelint-prettier prettier
```

## 搭配eslint

> https://prettier.io/docs/en/integrating-with-linters.html

### eslint-config-prettier

> https://github.com/prettier/eslint-config-prettier

关闭和prettier冲突的eslint规则

```sh
pnpm i -D eslint-config-prettier
```

```json
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

### eslint-plugin-prettier

将prettier作为eslint规则运行，并将差异作为单个eslint问题报告
如果所需的格式与prettier的输出不匹配，则应使用其他工具，比如 [prettier-eslint](https://github.com/prettier/prettier-eslint)
安装前请阅读“与过梁集成”。

> https://github.com/prettier/eslint-plugin-prettier

如果您禁用与代码格式相关的所有其他ESLint规则，并且仅启用检测潜在错误的规则，则此插件工作得最好。（如果另一个激活的ESLint规则与prettier的规则不一致，则无法避免lint错误。）您可以使用`  eslint-config-prettier`来禁用所有与格式化相关的ESLin规则。

```sh
pnpm i -D eslint-plugin-prettier
```

eslintrc.json

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### prettier-eslint

> https://github.com/prettier/prettier-eslint

使用prettier格式代码，并且遵循eslint --fix

## 编程方式使用prettier

> 翻译自 https://prettier.io/docs/en/api.html

### 以编程方式运行Pretier

```js
const prettier = require("prettier");
```

### `prettier.format(source, options)`

`format`方法用于使用`prettier`格式化文本。必须根据您正在格式化的语言进行设置`options.parser`（请参阅`可用parser解析器列表`）。或者可以为`prettier`指定`options.filepath`，`prettier`会从文件扩展名推断出解析器。可以提供其他选项来覆盖默认值。

```js
prettier.format("foo ( );", { semi: false, parser: "babel" });
// -> "foo()"
```

### `prettier.check(source [, options])`

检查文件是否已使用Pretier格式化，并返回布尔值。这类似于CLI中的--check或--list不同参数，对于在CI场景中运行Pretier非常有用。

### `prettier.resolveConfig(filePath [, options])`

`resolveConfig`可用于解析给定源文件的配置，将其路径作为第一个参数传递（这里官方文档讲的有点拗口，实际上就是prettier通过一个给定的路径搜索配置文件，因为prettier有很多配置文件类型，所以可以通过这个api来判断是否存在prettier配置文件）

配置搜索将从文件路径开始，并继续搜索目录（您可以使用process.cwd（）从当前目录开始搜索）。或者如果不想搜索，可以直接将配置文件的路径作为`options.config`传递。将返回一个promise，该promise将解析为：

- 找到提供配置文件的选项对象
- 如果找不到文件，则返回null
- 如果解析配置文件时出错，promise将rejected

如果`options.useCache`为false，则将绕过所有缓存

```js
const text = fs.readFileSync(filePath, "utf8");
prettier.resolveConfig(filePath).then((options) => {
  const formatted = prettier.format(text, options);
});
```

如果`options.editorconfig`为true，并且项目中有`.editorconfig`文件，Prettier将对其进行解析，并将其转换为相应的prettier配置。此配置将被.prettierrc等覆盖。目前，支持以下editorconfig属性：

- `end_of_line`
- `indent_style`
- `indent_size`/`tab_width`
- `max_line_length`

如果要使用同步版本，请使用prettier的`.resolveConfig.sync（filePath[，options]）`

### `prettier.formatWithCursor(source [, options])`

formatWithCursor既格式化代码，又将光标位置从未格式化代码转换为格式化代码。这对于编辑器集成非常有用，可以防止代码格式化时光标移动。
应提供cursorOffset选项，以指定光标的位置。此选项不能与rangeStart和rangeEnd一起使用。

```js
prettier.formatWithCursor(" 1", { cursorOffset: 2, parser: "babel" });
// -> { formatted: '1;\n', cursorOffset: 1 }
```

### `prettier.resolveConfigFile([filePath])`

resolveConfigFile可用于查找解析配置时（即调用resolveConfig时）将使用的Pretier配置文件的路径。返回promise，该promise将决定：

- 配置文件的路径。
- 如果找不到文件，则返回null。
- 如果解析配置文件时出错，则promise将被拒绝。
- 搜索从process.cwd（）或filePath（如果提供）开始。有关解决方案的详细信息，请参阅 [cosmiconfig docs](https://github.com/davidtheclark/cosmiconfig#explorersearch) 

### `prettier.getFileInfo`

编辑器扩展可以使用getFileInfo来决定是否需要格式化特定文件。此方法返回一个promise，它解析为具有以下属性的对象：

```js
{
  ignored: boolean,
  inferredParser: string | null,
}
```

### `prettier.getSupportInfo()`

返回表示prettier支持的选项、解析器、语言和文件类型的对象

<img src="../../imgs/image-20230221115940825.png" alt="image-20230221115940825" />



## 插件列表

### 官方插件

- [`@prettier/plugin-php`](https://github.com/prettier/plugin-php)
- [`@prettier/plugin-pug`](https://github.com/prettier/plugin-pug) by [**@Shinigami92**](https://github.com/Shinigami92)
- [`@prettier/plugin-ruby`](https://github.com/prettier/plugin-ruby)
- [`@prettier/plugin-xml`](https://github.com/prettier/plugin-xml)

### 社区插件

- [`prettier-plugin-apex`](https://github.com/dangmai/prettier-plugin-apex) by [**@dangmai**](https://github.com/dangmai)
- [`prettier-plugin-astro`](https://github.com/withastro/prettier-plugin-astro) by [**@withastro contributors**](https://github.com/withastro/prettier-plugin-astro/graphs/contributors)
- [`prettier-plugin-elm`](https://github.com/gicentre/prettier-plugin-elm) by [**@giCentre**](https://github.com/gicentre)
- [`prettier-plugin-erb`](https://github.com/adamzapasnik/prettier-plugin-erb) by [**@adamzapasnik**](https://github.com/adamzapasnik)
- [`prettier-plugin-glsl`](https://github.com/NaridaL/glsl-language-toolkit/tree/main/packages/prettier-plugin-glsl) by [**@NaridaL**](https://github.com/NaridaL)
- [`prettier-plugin-go-template`](https://github.com/NiklasPor/prettier-plugin-go-template) by [**@NiklasPor**](https://github.com/NiklasPor)
- [`prettier-plugin-java`](https://github.com/jhipster/prettier-java) by [**@JHipster**](https://github.com/jhipster)
- [`prettier-plugin-jsonata`](https://github.com/Stedi/prettier-plugin-jsonata) by [**@Stedi**](https://github.com/Stedi)
- [`prettier-plugin-kotlin`](https://github.com/Angry-Potato/prettier-plugin-kotlin) by [**@Angry-Potato**](https://github.com/Angry-Potato)
- [`prettier-plugin-motoko`](https://github.com/dfinity/prettier-plugin-motoko) by [**@dfinity**](https://github.com/dfinity)
- [`prettier-plugin-nginx`](https://github.com/joedeandev/prettier-plugin-nginx) by [**@joedeandev**](https://github.com/joedeandev)
- [`prettier-plugin-prisma`](https://github.com/umidbekk/prettier-plugin-prisma) by [**@umidbekk**](https://github.com/umidbekk)
- [`prettier-plugin-properties`](https://github.com/eemeli/prettier-plugin-properties) by [**@eemeli**](https://github.com/eemeli)
- [`prettier-plugin-sh`](https://github.com/un-ts/prettier/tree/master/packages/sh) by [**@JounQin**](https://github.com/JounQin)
- [`prettier-plugin-sql`](https://github.com/un-ts/prettier/tree/master/packages/sql) by [**@JounQin**](https://github.com/JounQin)
- [`prettier-plugin-sql-cst`](https://github.com/nene/prettier-plugin-sql-cst) by [**@nene**](https://github.com/nene)
- [`prettier-plugin-solidity`](https://github.com/prettier-solidity/prettier-plugin-solidity) by [**@mattiaerre**](https://github.com/mattiaerre)
- [`prettier-plugin-svelte`](https://github.com/UnwrittenFun/prettier-plugin-svelte) by [**@UnwrittenFun**](https://github.com/UnwrittenFun)
- [`prettier-plugin-toml`](https://github.com/bd82/toml-tools/tree/master/packages/prettier-plugin-toml) by [**@bd82**](https://github.com/bd82)

## 转换.editorconfig

.editorconfig配置

```json
[*]
end_of_line = lf
indent_style = space
indent_size = 8
max_line_length = 80
```

会被prettier转换成

```js
{ useTabs: false, tabWidth: 8, printWidth: 80, endOfLine: 'lf' }
```

options添加`editorconfig: true`选项

```js
const prettier = require("prettier");
const path = require("path");

prettier.resolveConfigFile(path.resolve(__dirname)).then((configFile) => {
  prettier.resolveConfig(configFile, { editorconfig: true }).then(async (options) => {
    console.log(options);
  });
});

```

## 使用插件支持其他语言

安装java语言插件，设置.prettierrc.json

```json
{
  "plugins": [
    "prettier-plugin-java"
  ]
}
```

api方式使用prettier，可以正常格式化java

```js
const prettier = require("prettier");
const fs = require("fs");
const path = require("path");

prettier.resolveConfigFile(path.resolve(__dirname)).then((configFile) => {
  prettier.resolveConfig(configFile, { editorconfig: true }).then(async (options) => {
    console.log(options);
    fs.readFile("./test.java", "utf-8", async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const text = prettier.format(data, {
          filepath: "./test.java",
          ...options
        });
      }
    });
  });
});

```

## 判断文件是否被ignore

指定ignorePath参数为.prettierignore文件路径

```js
prettier.getFileInfo(path.resolve(__dirname, "test.vue"), {
  ignorePath: path.resolve(__dirname, ".prettierignore")
}).then((info) => {
  console.log(info);
})
```
