# 部署（Docker）

纯静态站点，用 nginx 容器提供服务。

## 在服务器上

```bash
# 1. 上传并解压（把 tar 包传到服务器后）
mkdir -p portfolio && tar xzf up2017-clone-deploy.tar.gz -C portfolio
cd portfolio

# 2. 构建镜像
docker build -t portfolio .

# 3. 运行（宿主机 8888 → 容器 80，可自行改端口）
docker run -d --name portfolio --restart unless-stopped -p 8888:80 portfolio
```

然后访问 `http://<服务器IP>:8888/`。

## 常用操作

```bash
docker logs -f portfolio        # 看日志
docker stop portfolio           # 停止
docker rm -f portfolio          # 删除容器
# 更新：重新解压覆盖后
docker build -t portfolio . && docker rm -f portfolio && \
  docker run -d --name portfolio --restart unless-stopped -p 8888:80 portfolio
```

## 说明
- 容器内监听 80，用 `-p 宿主端口:80` 映射。配 80 端口直接对外：`-p 80:80`。
- nginx 已开启 gzip（webgl.js / obj 的 json 压缩后明显更快）并设置了静态资源缓存。
- 如需 HTTPS，建议在前面挂一层反向代理（Nginx / Caddy / Traefik）或云负载均衡来终止 TLS。
