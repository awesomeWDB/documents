---
nav:
  title: midway
  order: 5
toc: menu
---

docker run -itd --name=spider-emoji-test -p 8101:7001 -v /docker-data/app/logs/spider-emoji-test:/app/logs spider-emoji npm run docker:test
