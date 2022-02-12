---
nav:
  title: puppeteer utils
  order: 2
toc: menu
order: 1
---

# puppeteer utils

## 项目地址

[github](https://github.com/awesomeWDB/project-puppeteer-utils.git)

## docker 镜像

```bash
# 拉取镜像
docker pull wangdongbing/puppeteer-utils:latest
# 运行镜像
docker run --restart=always -d -p YOUR_PORT:7001 --name puppeteer-utils-container wangdongbing/puppeteer-utils:latest
```

## 服务说明

### /puppeteer/toPDF

- 请求方法：
  GET
- 请求参数：
  - url：string
- 示例：
  `/puppeteer/toPDF?url=https://www.baidu.com/`

### TODO

TODO
