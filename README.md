# Zhang Yupeng 个人作品集

沉浸式个人网站，保留 WebGL 粒子动画、滚轮切屏、侧栏导航、音乐、项目弹层和全屏交互。全站已替换为个人作品集文案及 ZYP 视觉标识。

项目内容集中在 `assets/js/personalize.js` 的 `PORTFOLIO_CONFIG` 中，可直接修改姓名、邮箱和项目介绍。

当前联系邮箱为 `zyp414598579@gmail.com`。右下角联系按钮支持悬停或点击，粒子会重组为该邮箱的 `mailto:` 二维码。

WebGL 镜头、粒子材质、五段模型变形、进入动画和栏目过场沿用原站参数；品牌穿场纹理已替换为个人版，并针对高分屏提升了渲染精度。

## 启动

```bash
npm start
```

然后访问 `http://localhost:4173/`。

不要直接双击 `index.html`：WebGL 模型通过 XHR 加载，需要 HTTP 服务。
# personal-page
