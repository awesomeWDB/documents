---
nav:
  title: midway
  order: 1
toc: menu
order: 1
---

# midway

## 介绍

Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架。

[官网地址](http://www.midwayjs.org/docs/2.0.0/intro)

## ...

不多说了，官网的文档非常详细，建议大家如果要使用的话，通读几遍文档。

**这里就简单整理一下学习的笔记，或者在项目中用到的知识点：**

## 创建项目

```bash
# npm6
npm init midway --type=web my_midway_app
```

### 启动

```bash
npm run dev
```

## 开发习惯

midway 根据业务需求提供了很多的抽象，一般有以下开发习惯：

- controller，控制应用路由
- middleware，中间件
- service， 服务逻辑
- config，配置项（根据环境，default、prod 等）
- util，工具类、工具函数

## 控制器 Controll

形如：

```ts
// src/controller/home.ts

import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }
}
```

### 路由方法

`@Get` 、 `@Post` 、 `@Put()` 、 `@Del()` 、 `@Patch()` 、 `@Options()` 、 `@Head()` 和 `@All()`等

### 请求参数

`@Query()` 、 `@Body()` 、 `@Param()` 、 `@Headers()`等

## 服务 Service

形如：

```ts
// src/service/user.ts
import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserService {
  async getUser(id: number) {
    return {
      id,
      name: 'Harry',
      age: 18,
    };
  }
}
```

### 依赖注入

使用`@Provide`和`@Inject`使用上面定义的服务，midway 会自动帮你实例化属性，两者成对出现，通过冒号后的类名进行关联。

详情参考：[http://www.midwayjs.org/docs/2.0.0/container](http://www.midwayjs.org/docs/2.0.0/container)

## 部署

这里整理一下使用`docker`的方式部署，`Dockfile`如下：

```bash
# 分阶段构建
FROM node:12 AS build

WORKDIR /app

COPY . .

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm run build

# 第二阶段，复制第一阶段的结果，和必要的runtime文件
FROM node:12-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/bootstrap.js ./
COPY --from=build /app/package.json ./

# 添加下载镜像源，加快下载sudo
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
# 设置时区
RUN apk add --no-cache tzdata

ENV TZ="Asia/Shanghai"

RUN npm install --production

# 如果端口更换，这边可以更新一下
EXPOSE 7001

CMD ["npm", "run", "start"]
```

> 注意：如果使用 github actions 在外网环境构建镜像的话，或者其他不需要镜像加速的话，也可以省略这些步骤。
