---
nav:
  title: 我的实践
  order: 4
toc: menu
order: 1
---

# 我的实践

## TryCatch 装饰器

鉴于在 Controller 层和 Service 层或者其他逻辑处理情况下，都会产生错误，统一在 Controller 层捕获异常，编写装饰器进行处理。

### 实现

```ts
import { loggers } from '@midwayjs/logger';
import { ResponseFactory } from '../util/ResponseFactory';

export function Try(errInfo = ''): MethodDecorator {
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const method = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      try {
        return await method.apply(this, [...args]);
      } catch (err) {
        const coreLogger = loggers.getLogger('coreLogger');
        if (errInfo) coreLogger.error(errInfo);
        const info = `~~出现错误~~，${target.constructor.name}-${propertyKey}:`;
        coreLogger.error(info);
        coreLogger.error(err);
        return ResponseFactory.buildFail('服务器异常！');
      }
    };
    return descriptor;
  };
}
```

### 使用

```ts
@Provide()
@Controller('/')
export class HomeController {
  @App()
  app: Application;

  @Try()
  @Get('/')
  async home() {
    return ResponseFactory.buildSuccess('Hello!');
  }
}
```

## ResponseFactory 统一返回格式

### 实现

```ts
export interface Response<T> {
  code: number;
  data: T;
  message: string;
}

export class ResponseFactory {
  public static buildSuccess<T>(
    data: T,
    code = 200,
    message = '成功',
  ): Response<T> {
    return {
      code,
      data,
      message,
    };
  }

  public static buildFail<T>(
    data: T,
    code = 400,
    message = '失败',
  ): Response<T> {
    return {
      code,
      data,
      message,
    };
  }
}
```

### 使用

```ts
ResponseFactory.buildSuccess('Hello!');
ResponseFactory.buildFail('服务器异常！');
```

## pm2 启动（基于 docker）

### 基本命令

- 安装 pm2，`npm install -g pm2`
- 启动应用（通过 docker 容器启动），添加`npm run start`脚本，对应命令为`NODE_ENV=production pm2-runtime start ./bootstrap.js --name midway_app -i 4`
- 容器启动运行的脚本，`CMD ["npm", "run", "start"]`

## alinode 监控（基于 docker）

### 获取 appid 和 secret

官网地址：

- [midway 文档：http://www.midwayjs.org/docs/2.0.0/alinode](http://www.midwayjs.org/docs/2.0.0/alinode)
- [开通地址：https://www.aliyun.com/product/nodejs](https://www.aliyun.com/product/nodejs)
- [性能平台地址：https://node.console.aliyun.com/#!/owned](https://node.console.aliyun.com/#!/owned)

### docker 镜像

[地址：https://help.aliyun.com/document_detail/66027.html](https://help.aliyun.com/document_detail/66027.html)

### Dockerfile

```bash
...
# 选择基础镜像
FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:6.7.1-alpine
# alinode应用的appid和secret
ENV APP_ID="xxxx"
ENV APP_SECRET="xxxxxxxx"
...
```

## Prometheus+grafana

[参考官网:http://www.midwayjs.org/docs/extensions/prometheus](http://www.midwayjs.org/docs/extensions/prometheus)
