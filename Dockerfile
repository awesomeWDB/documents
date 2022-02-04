# 分阶段构建，这里假设第一步构建完成了静态内容的构建，直接拷贝，再加上nginx、ssl的一些配置
FROM nginx:latest

# 复制静态资源文件html、css、js、png等等
COPY ./nginx/html /usr/share/nginx/html

# 复制nginx配置文件、ssl证书
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/ssl /etc/nginx/cert

EXPOSE 80 443

# 运行
# docker run -p 80:80 -p 443:443 --name nginx-main -d wangdongbing/documents:latest