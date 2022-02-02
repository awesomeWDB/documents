---
nav:
  title: mongo
  order: 4
toc: menu
---

# docker 中 mongo 的使用

## 安装

拉取官方的最新版本的镜像：

```
docker pull mongo:latest
```

验证：`docker images`，查看是否已经安装了 mongo。

## 运行容器

使用以下命令来运行 mongo 容器：

```
docker run -itd --name mongo -v /docker-data/mongodb/data/db:/data/db -p 27017:27017 mongo --auth
```

- `-v /docker-data/mongodb/data/db:/data/db`：挂载宿主机目录
- `-p 27017:27017`：映射端口
- `--auth`：需要密码才能访问容器服务
  验证：`docker ps`，查看正在运行的容器，是否有 mongo 服务。

## 添加用户和设置密码

使用以下命令来添加用户和设置密码：

```
docker exec -it mongo mongo admin
# 创建一个名为 admin，密码为 123456 的用户。
db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
# 尝试使用上面创建的用户信息进行连接。
db.auth('admin', '123456')
```

## midway 中使用 mongo

参考：
