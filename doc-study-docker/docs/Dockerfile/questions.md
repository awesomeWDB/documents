### alpine 切换源 安装慢 apk add 很慢

- 阿里镜像
  ```
  sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
  ```
- 科大镜像
  ```
  sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
  ```
