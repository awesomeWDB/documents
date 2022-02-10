---
toc: menu
order: 5
---

# 持续集成

参考：[官网](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)

上一章节主要讲的是使用vsce命令发布，本章节分享的是使用github actions在push代码的时候也能自动构建，并发布。

## github actions

这里选择的是`github actions`，关于其他的平台，官网也给出了详细的使用示例。

关于 github actions 的基本使用也不说明了，最后面给出本插件的示例。

## 详细步骤

- 生成个人令牌
  参照上一章节，获取个人令牌 token

- 设置 github actions 秘钥
  [参考 github actions secrets](https://help.github.com/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)，设置秘钥：`VSCE_PAT`，值为第一步的 token

- package.json 添加 scripts：
  ```json
  "scripts": {
    "deploy": "vsce publish --yarn"
  }
  ```
- 编写 yml 脚本（查看下面的使用示例）
  - ...
  - 安装 nodejs、python 环境
  - 安装项目依赖，即 node_modules，包含全局的 vsce、yarn
  - 发布

## 我的配置示例

配置文件：`.github/workflows/publishing.yml`，和官网有些不同（我反正是运行官网的例子失败），可以看到其中踩了一些坑哈，主要是：

- 需要配置 python 环境
- nodejs 的版本不同。我先在自己本地的电脑上尝试正确的安装，然后在写脚本确认成功的。

```yml
on:
  push:
    branches:
      - master

jobs:
  build:
    strategy:
      matrix:
        # os: [macos-latest, ubuntu-latest, windows-latest]
        os: [windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      # 修改了node版本：成功
      - name: Install Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 14.18.3
      # 安装python成功
      - name: Set up Python 3.10
        uses: actions/setup-python@v2
        with:
          python-version: '3.10'
      - run: npm install
      - run: npm install -g vsce yarn
      - run: npm run deploy
        env:
          VSCE_PAT: ${{ secrets.VSCE_PAT }}
```
