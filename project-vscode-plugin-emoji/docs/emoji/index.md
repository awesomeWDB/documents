---
nav:
  title: vscode-plugin-emoji
  order: 1
toc: menu
order: 1
---

# vscode-plugin-emoji

## 介绍

一款方便的在 vscode 中插入 emoji 的工具，包含各种提示（code、关键字、分类、专题集合等），也可以查询 emoji 含义。

## 安装

在 vscode 插件市场搜索

## 使用

输入`:XX`，就可以搜索 XX 相关的 emoji，语法提示：

## 原理

保存 emoji 的相关数据到 plugin 本地中（没有请求 api），会不定期更新相关数据

## 自定义

如果想要自己定义一些 emoji 数据，请按照以下格式，对插件进行配置：

```json
[
  {
    "groupName": "表情与情感",
    "subGroupName": "笑脸表情",
    "image": "😀",
    "nameZh": "嘿嘿",
    "nameEn": "grinning face",
    "href": "/x7pt",
    "detail": {
      "unicode_version": "6.1",
      "unicode_code": "U+1F600",
      "code": ":grinning:",
      "keywords": ["嘿嘿", "笑脸", "脸", "存在", "在线  "]
    },
    "collections": []
  }
]
```
