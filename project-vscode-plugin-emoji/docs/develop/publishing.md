---
toc: menu
order: 4
---

# 发布插件

参考：[官网](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

## 安装

```bash
npm install -g vsce
```

### 安装 vsce 失败

我这里出现了安装失败的情况，查看官网、百度都没查到类似的提问，然后摸索了一下，亲测以下配置是没有问题的：

- 宿主机环境：windows11
- 宿主机安装 python，版本：3.10
- 宿主机安装 node，版本：14.18.3（小版本不知道有什么影响，但是 10.x 和 16.x 试了安装失败）

这也体现在我的持续集成的 yml 配置里：

```yml
on:
  push:
    branches:
      - master

jobs:
  build:
    strategy:
      matrix:
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

## 尝试打包

先尝试打包一下，解决打包过程中出现的问题，运行`vsce package`，如果没有错误会在根目录下出现一个以`.vsix`结尾的文件，这个就是结果插件。

可能出现的问题：（打包的时候会提示的很清楚，根据需要修改就行了！）

- 缺少 yarn，解决办法：全局安装 yarn 就行啦，`npm install -g yarn`
- 缺少"repository"，解决办法，在 package.json 中添加对应字段
- vscode 版本不一致类似的错误，确保`devDependencies['@types/vscode']`和`engines['vscode']`的版本一样
- 如果是打包的话，package.json 中还需要添加"publisher"字段
- version问题，新发布的版本号一定要高于以前的
- ...

## 账号设置

如果打包没有问题的话，就可以尝试发布插件市场了，这些在[官网](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)中可以很清楚的了解到。

### Microsoft 账号

首先访问 https://login.live.com/ 登录你的 Microsoft 账号，没有的先注册一个

### Azure DevOps

然后访问： https://aka.ms/SignupAzureDevOps，默认会创建一个以邮箱为前缀的组织

### 创建个人令牌

默认进入组织的主页后，打开您的个人资料图片旁边的用户设置下拉菜单，然后选择个人访问令牌。

在 Personal Access Tokens 页面上，选择 New Token 以创建新的 Personal Access Token 并设置以下详细信息：

- 给它一个名字
- 将组织设置为所有可访问的组织
- 可选择延长其有效期
- 将范围设置为自定义并选择市场 > 管理范围

### 创建发布者

发布者是可以将扩展发布到 Visual Studio Code Marketplace 的身份。每个扩展都需要在其文件 publisher 中包含一个名称。

创建新发布者页面：[https://marketplace.visualstudio.com/manage](https://marketplace.visualstudio.com/manage)

### 测试登录和 token

运行以下命令，测试以上两步骤：

```bash
vsce login xxxx
```

然后输入刚才的 token，登录成功即没有问题。

## 正式发布

运行以下命令发布扩展：

```bash
vsce publish
```

如果您尚未使用 vsce login 上面的命令提供个人访问令牌，此命令将要求提供个人访问令牌。

或者，您可以打包扩展`vsce package`, 并手动将其上传到[Visual Studio Marketplace 发布者管理页面](https://marketplace.visualstudio.com/manage)。
