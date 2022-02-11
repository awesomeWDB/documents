---
toc: menu
order: 2
---

# 常见问题

## alpine 安装慢 apk add 很慢

很多情况下，会使用轻量级的基础镜像 alpine，但是在安装应用的时候很慢，造成这种情况是网络原因，解决办法是切换源：

- 阿里镜像
  ```
  sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
  ```
- 科大镜像
  ```
  sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
  ```

_或者使用 github actions 进行构建，完美避开这种问题 😺_
