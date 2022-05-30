---
nav:
  title: 总结
toc: menu
order: 1
---

# CI/CD 总结

项目使用 git 作为主要工具，利用`github actions`做一些自动化的工作：

- 在 github 云端进行构建 docker 镜像。
- 登录 docker hub(或者其他镜像仓库)，上传镜像。
- ssh 连接服务器，清理镜像、容器，拉取、运行新镜像。

这样子就完成了自动化的部署服务。

还有一种选择是使用 webhook 的方式，还没尝试过（需要自己搭建一个回调服务，接收 github 传递过来的一些参数，然后根据参数信息执行自动化的逻辑）
