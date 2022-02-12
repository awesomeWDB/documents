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
