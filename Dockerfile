# 分阶段构建，这里假设第一步构建完成了document-index文件夹下的内容
# 直接拷贝其下的静态资源即可，另外还有拷贝nginx的一些配置
FROM nginx:latest

# 复制静态资源文件html、css、js、png等等
COPY ./document-index /usr/share/nginx/html
# 复制nginx配置文件、ssl证书
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/ssl /etc/nginx/cert

EXPOSE 80 443

# 运行
# docker run -p 80:80 -p 443:443 --name nginx-main-test -d wangdongbing/documents:latest