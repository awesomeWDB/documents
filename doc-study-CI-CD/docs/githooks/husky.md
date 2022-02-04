---
toc: menu
order: 2
---

# husky

## 介绍

Git 是一个多人协作工具，那按理说 Git 仓库中的所有文件都应该被跟踪并且上传至远程仓库的。但是有个例外，.git 文件夹不会，这就导致一个问题，我们在本地配置好 Git Hook 后，怎么分享给其他小伙伴儿呢？这时候，就轮到 Husky 出场了。

Husky 是一个让配置 Git 钩子变得更简单的工具。

## 使用方法

## 注意事项

- husky 不支持服务端钩子；
- 跳过 husky 钩子：`HUSKY_SKIP_HOOKS=1 git commit -m 'xxxx'`;
- 禁用自动安装：`HUSKY_SKIP_INSTALL=1 npm install`。

## 更新为 v7 版本

最近发现，v4 版本升级到 v7，husky 的配置方式改变了，[参考地址](https://typicode.github.io/husky/#/)。
