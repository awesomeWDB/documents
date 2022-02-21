---
nav:
  title: 机试
  order: 100000
toc: menu
order: 1
---

# 机试（基于牛客网，js）

## 常用的方法（代码片段）

### 读取输入

```js
//
const line = readline();
//
const [m, n] = readline().split(' ').map(Number);
```

### 创建数组

```js
//
new Array(10).fill(0);
```

### 判断质数

```js
function isZhishu(no) {
  // no >= 2
  if (no === 2) return true;
  for (let i = 2; i < no; i++) {
    if (no % i === 0) return false;
  }
  return true;
}
```
