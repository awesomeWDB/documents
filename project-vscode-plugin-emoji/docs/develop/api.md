---
toc: menu
order: 3
---

# 常用 api

## 说明

个人感觉官网的 api 文档不是很好，还是习惯在 vscode 中使用 typescript 的.d.ts 声明文件查看相关 api（主要是有各个类型的相关跳转，比较方便）

下面是在编写本插件时用到的一些 api，做一个记录，详细的 api 的话请自行查看官网或者在项目中点击跳转到.d.ts 定义。

官网文档:[https://code.visualstudio.com/api](https://code.visualstudio.com/api)

## window

```js
// 显示一个提示信息
vscode.window.showInformationMessage('Hello World');
```

## languages

### 注册鼠标悬停提示

```ts
context.subscriptions.push(
  // ts项目可查看registerHoverProvider函数定义
  vscode.languages.registerHoverProvider(
    ['markdown', 'javascript', 'typescript', 'vue'],
    {
      // provideHover自行实现，主要根据需求构造返回值
      provideHover,
    },
  ),
);
```

### 注册代码建议提示

```ts
context.subscriptions.push(
  // ts项目可查看registerCompletionItemProvider函数定义
  vscode.languages.registerCompletionItemProvider(
    ['markdown', 'javascript', 'typescript', 'vue'],
    {
      // provideCompletionItems自行实现，主要根据需求构造返回值
      provideCompletionItems,
    },
    ':',
  ),
);
```

### 其他

TODO

## editor

### 获取 editor

```ts
const editor = vscode.window.activeTextEditor!;
```

### editor 的简单使用

```ts
// 获取document
const document = editor.document;
// 获取position
const position = editor.selection.active;
// 获取offset
const offset = editor.document.offsetAt(editor.selection.start);
// 获取所有选中
const allSelections = editor.selections;
// 获取所有选中的第一个
const sellection = editor.selections;
// 获取所有选中的第一个的文本
const sellectionText = editor.document.getText(selection);
// 获取当前行
const line = document.lineAt(position);
// 截取到光标位置为止
const lineText = line.text.substring(0, position.character);
// 生成一个range（根据需求自行调整参数）
const range = new vscode.Range(position.translate(0, -10), position);
// 编辑一个range（这里使用replace，还有其他相关api）
editor.edit((editBuilder) => {
  editBuilder.replace(range, 'balabala');
});
// balabala
```
