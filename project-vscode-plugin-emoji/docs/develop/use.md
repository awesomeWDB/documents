---
toc: menu
order: 2
---

# 编写代码

## 入口

入口是在`src/extension.ts`下面，暴露的`activate`函数：

```js
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-plugin-xxxx" is now active!',
  );
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'vscode-plugin-xxxx.helloWorld',
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage('Hello World');
    },
  );

  context.subscriptions.push(disposable);
}
```

## 个人习惯

个人是喜欢在其他文件中编写一些功能（个人习惯使用函数，当然也可以使用 class），然后应用过来，比如：

```js
// hover.ts
export default function (context: { subscriptions: vscode.Disposable[] }) {
  // 注册鼠标悬停提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      ['markdown', 'javascript', 'typescript', 'vue'],
      {
        provideHover: (document, position, token) => {
          // balabala
        },
      },
    ),
  );
}
```

```js
// extension.ts
import useHover from './hover';
export function activate(context: vscode.ExtensionContext) {
  // 在active函数中使用
  useHover(context);
  // balabala
}
```
