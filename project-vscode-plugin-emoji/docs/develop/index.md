---
nav:
  title: vscode插件开发
  order: 1
toc: menu
order: 1
---

# 概览

## 官网地址

[官网](https://code.visualstudio.com/api)

[应用商店](https://marketplace.visualstudio.com/vscode)

## 有必要学习 vscode 插件开发吗？

有，非常有必要。可以实现自己（或公司）的定制化需求，大大提升开发/编写效率：以前可能会写一些 python、js 脚本、浏览器插件，但是现在可以编写 IDE 插件来实现自己的需求，更高效。

## 创建第一个项目

```bash
# 安装官方工具：Yeoman和VS Code Extension Generator
npm install -g yo generator-code

# 创建项目
yo code
```

## 运行

按`F5`进行调试，出现一个错误：
```bash
(node:30276) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `Code --trace-deprecation ...` to show where the warning was created)
```
不用管它，点“仍要调试”

## 参考地址

[http://blog.haoji.me/vscode-plugin-overview.html](http://blog.haoji.me/vscode-plugin-overview.html)
