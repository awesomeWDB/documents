---
nav:
  title: 通用能力
  order: 2
toc: menu
order: 1
---

# 通用能力

## 多环境配置

`src/config/`下有几个配置文件：

- `config.default.ts`默认配置文件，也是主要的配置文件
- `config.local.ts`本地开发的配置文件
- `config.prod.ts`生产环境的配置文件

我一般就配置这 3 个。

## 日志

### 函数方法引用

```ts
// 引入
import { loggers } from '@midwayjs/logger';
// 使用
const coreLogger = loggers.getLogger('coreLogger');
coreLogger.error('xxxxx');
```

### 装饰器使用

**获取`coreLogger`：**

```ts
import { Provide, Logger } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';

@Provide()
export class UserService {
  @Logger()
  coreLogger: ILogger; // 获取 coreLogger

  @Logger('coreLogger')
  anotherLogger: ILogger; // 这里和依赖注入的规则相同，依旧获取的是 coreLogger

  async getUser() {
    // this.coreLogger === this.anotherLogger
    this.coreLogger.warn('warn message');
  }
}
```

获取`appLogger`：

```ts
import { Provide, Logger } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';

@Provide()
export class UserService {
  @Logger()
  logger: ILogger; // 获取 appLogger

  async getUser() {
    this.logger.info('hello user');
    this.coreLogger.warn('warn message');
  }
}
```
