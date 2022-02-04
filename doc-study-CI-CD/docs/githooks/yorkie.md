---
toc: menu
order: 2
---

# yorkie

yorkie实际是fork husky，然后做了一些定制化的改动，使得钩子能从package.json的 "gitHooks"属性中读取。

是另一种配置githooks的工具。

## 安装

```bash
npm install --save-dev yorkie
```

## 配置

```bash
# package.json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
}
```