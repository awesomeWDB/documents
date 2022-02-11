---
nav:
  title: Dockfile
  order: 2
toc: menu
order: 1
---

# Dockfile

## 介绍

Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

## 从一个最简单的例子开始

### 新建 Dockfile 文件

在一个空目录下，新建一个名为 `Dockerfile` 文件，并在文件内添加以下内容：

```bash
FROM nginx
RUN echo '这是一个本地构建的nginx镜像' > /usr/share/nginx/html/index.html
```

参数解释：

- FROM nginx：`From`指令是指定基础镜像，后续的操作都是基于`nginx`，nginx 后面跟着（默认的）tag：`latest`，当然也可以使用其他 tag
- RUN：`RUN`指令用于执行后面跟着的命令

### 从 Dockfile 文件构建

在当前目录下运行：

```bash
docker build -t nginx:mynginx .
```

参数解释

- `docker build`是 docker 构建镜像的命令
- `-t nginx:mynginx`表示镜像名称
- `.`代表上下文路径，这里指的是当前文件夹

> **注意**：上下文路径下不要放无用的文件，因为会一起打包发送给 docker 引擎，如果文件过多会造成过程缓慢。

## 指令详解

### COPY

