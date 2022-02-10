# 分阶段构建，这里假设第一步构建完成了静态内容的构建，直接拷贝，再加上nginx、ssl的一些配置
FROM node:14 AS build

WORKDIR /app

COPY . .

RUN npm run build:doc

# 进入下一阶段构建

FROM nginx:latest

LABEL target="documents"

# 复制静态资源文件html、css、js、png等等
COPY --from=build /app/nginx/html /usr/share/nginx/html

ENV TZ="Asia/Shanghai"

EXPOSE 80
