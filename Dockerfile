# 个人作品集 —— 纯静态站点，用 nginx 提供 HTTP 服务
# （WebGL 模型经 XHR 加载 assets/js/obj/*.json，必须走 HTTP，不能 file://）
#
# 基础镜像走国内加速器（DaoCloud），避免连不上 Docker Hub。
# 若该加速器失效，可换成其它可用源，例如：
#   docker.1ms.run/library/nginx:stable-alpine
#   docker.1panel.live/library/nginx:stable-alpine
# 或删掉前缀改回 nginx:stable-alpine 并在 /etc/docker/daemon.json 配 registry-mirrors。
FROM docker.m.daocloud.io/library/nginx:stable-alpine

# 自定义 nginx 配置：gzip 压缩 + 合理缓存
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 站点文件
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

# 基础健康检查：能取到首页即视为健康
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO /dev/null http://127.0.0.1/ || exit 1
