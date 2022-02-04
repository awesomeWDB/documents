---
toc: menu
order: 4
---

# commitlint

参考[官网](https://commitlint.js.org/)

## 安装：

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

## 配置文件：

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

## 结合 husky 的 commit-msg 钩子，[参考地址](https://typicode.github.io/husky/)：

```bash
# .huskyrc.json (v4)
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

```bash
# .husky/commit-msg (v7)
# ...
npx --no-install commitlint --edit $1
# or
yarn commitlint --edit $1
```
