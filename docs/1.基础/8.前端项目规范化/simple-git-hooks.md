#  [simple-git-hooks](https://www.npmjs.com/package/simple-git-hooks)

一个让您轻松管理git钩子的工具

- 零依赖
- 极少的配置（仅为package.json中的1个对象）
- 轻量

## 用法

### 添加`simple-git-hooks`到项目中

1. 安装`simple-git-hooks`作为开发依赖项：

   ```sh
   npm install simple-git-hooks --save-dev
   ```

2. 添加`simple-git-hooks` 到你的 `package.json`，用git钩子和相应的命令填充它
   比如：
   
   ```json
   {
     "simple-git-hooks": {
       "pre-commit": "npx lint-staged",
       "pre-push": "cd ../../ && npm run format",
   
       // All unused hooks will be removed automatically by default
       // but you can use the `preserveUnused` option like following to prevent this behavior
   
       // if you'd prefer preserve all unused hooks
       "preserveUnused": true,
   
       // if you'd prefer preserve specific unused hooks
       "preserveUnused": ["commit-msg"]
     }
   }
   ```
   此配置将在每次提交时运行所有linter，并在推送时运行格式化程序
   
   > 有更多的方法来配置`simple-git-hooks`，请查看[其他配置选项](https://www.npmjs.com/package/simple-git-hooks#additional-configuration-options)章节
   
3. 运行CLI脚本，使用config中的命令更新git挂钩：

   ```sh
   # [Optional] These 2 steps can be skipped for non-husky users
   git config core.hooksPath .git/hooks/
   rm -rf .git/hooks
   
   # Update ./git/hooks
   npx simple-git-hooks
   ```

   现在，所有git钩子都已创建

### 更新git钩子命令

1. 修改配置
2. 在项目根目录运行运行`npx simple-git-hooks`

注意！对于**yarn2**用户: 请运行 `yarn dlx simple-git-hooks`取代上方命令. 更多信息请查看[dlx](https://yarnpkg.com/cli/dlx)

注意！每次你更改命令，都应当手动运行`npx simple-git-hooks` 

### 其他配置选项

你还可以添加一个 `.simple-git-hooks.cjs`, `.simple-git-hooks.js`, `simple-git-hooks.cjs`, `simple-git-hooks.js`, `.simple-git-hooks.json` 或者 `simple-git-hooks.json`文件在项目中并且写入配置

这样 `simple-git-hooks` 在 `package.json` 中的配置将不再起效

`.simple-git-hooks.cjs`, `.simple-git-hooks.js` 或者 `simple-git-hooks.cjs`, `simple-git-hooks.js`应当看起来是这样的：

```js
module.exports = {
  "pre-commit": "npx lint-staged",
  "pre-push": "cd ../../ && npm run format",
};
```

`.simple-git-hooks.json` or `simple-git-hooks.json`应当看起来是这样的：

```json
{
  "pre-commit": "npx lint-staged",
  "pre-push": "cd ../../ && npm run format"
}
```

如果您需要有多个配置文件或你自己的配置文件，你可以手动下载hooks通过`npx simple-git-hooks ./my-config.js`

### 卸载simple-git-hooks

> 卸载行为会移除所有存在的git hooks

```sh
npm uninstall simple-git-hooks
```

## 常见问题

### 当从`husky`迁移，git hooks 不运行了，为什么会发生这种情况

`Husky`可能改变了 `core.gitHooks` 的值，因此，git hooks会搜索`.husky` 目录而不是 `.git/hooks/`

阅读有关git配置的更多信息 [Git book](https://git-scm.com/docs/githooks)

你可以通过在你仓库中运行下方命令来检查

```sh
git config core.hooksPath
```

如果输出`.husky` ，说明你遇到了这个情况

### 如何修复？

你需要指定`core.gitHooks` 的值为 `你的优秀项目/.git/hooks`，你可以使用这个命令

```sh
git config core.hooksPath .git/hooks/
```

验证设置的值：

```sh
git config core.hooksPath
```

应当输出: `.git/hooks/`

然后移除之前由 `husky`生成的 `.husky` 文件

