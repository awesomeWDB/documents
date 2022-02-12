---
nav:
  title: Dockfile示例
  order: 3
toc: menu
---

# 我的一些示例

## 本文档项目的 Dockfile

```bash
# 分阶段构建，这里假设第一步构建完成了静态内容的构建，直接拷贝，再加上nginx、ssl的一些配置
FROM node:14 AS build

WORKDIR /app

COPY . .

# 打包（进入各个子项目，安装依赖、构建）
RUN npm run build:doc

# 进入下一阶段构建

FROM nginx:latest

# 添加自己的一些LABEL，我这里仅仅为示例，方便通过github actions使用命令来清理服务器的镜像，如：
# 清理容器
# docker rm -f $(sudo docker ps -a --filter "label=target=documents" -q)
# 清理镜像
# docker rmi -f $(sudo docker images --filter "label=target=documents" -q)
LABEL target="documents"

# 从上一阶段构建的结果中，复制静态资源文件html、css、js、png等等
COPY --from=build /app/nginx/html /usr/share/nginx/html

ENV TZ="Asia/Shanghai"

EXPOSE 80
```

## Node 项目的 Dockfile

TODO
