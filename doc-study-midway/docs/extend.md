---
nav:
  title: 扩展能力
  order: 3
toc: menu
order: 1
---

# 扩展能力

## swagger

Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。Swagger 让部署管理和使用功能强大的 API 从未如此简单。

Midway 通过组件化的形式来支持 swagger 能力。

### 安装

```bash
npm install @midwayjs/swagger@1 --save
npm install swagger-ui-dist --save
```

### 配置

```ts
// configuration.ts
import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [swagger],
})
export class ContainerConfiguration {}
```

### 访问

访问：http://127.0.0.1:7001/swagger-ui/index.html 拿到 swagger UI 界面。

访问：http://127.0.0.1:7001/swagger-ui/json 拿到 swagger json 结构。

## mongoDB

参考：[http://www.midwayjs.org/docs/2.0.0/extensions/mongo](http://www.midwayjs.org/docs/2.0.0/extensions/mongo)

### Mongoose 版本

根据 mongoDB server 确定 Mongoose 版本，访问上述网址查看。

示例：支持 MongoDB Server 5.x

```json
{
  "dependencies": {
    "mongoose": "^6.0.7",
    "@typegoose/typegoose": "^9.0.0" // 使用 typegoose 需要安装此依赖
  }
}
```

### 使用 Typegoose

1. 安装组件、配置组件

```bash
npm i @midwayjs/typegoose@2 --save
```

```ts
// configuration.ts
import { Configuration } from '@midwayjs/decorator';
import * as typegoose from '@midwayjs/typegoose';

@Configuration({
  imports: [
    typegoose, // 加载 typegoose 组件
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerConfiguration {}
```

2. 配置连接信息
3. 创建实体文件
4. 引用实体，调用数据库
5. 多库的情况

具体使用查看[官网](http://www.midwayjs.org/docs/2.0.0/extensions/mongo)
