# Angular SPA

基于 Angular 17 构建的纯客户端单页应用（SPA），使用 Standalone Components 和 Angular Router。

## 启动

```bash
npm install
npm start        # 开发服务器 http://localhost:4200/
npm run build    # 构建产物在 dist/angular-spa/browser/
```

## 项目结构

```
angular-spa/
├── src/
│   ├── index.html              # 唯一入口 HTML（SPA 挂载点）
│   ├── main.ts                 # 应用入口（bootstrapApplication）
│   ├── styles.css              # 全局样式
│   ├── assets/                 # 静态资源（原样拷贝，不走 Angular Router）
│   │   ├── terms.html          # 静态页面 — 服务条款
│   │   ├── privacy.html        # 静态页面 — 隐私政策
│   │   └── maintenance.html    # 静态页面 — 维护页
│   └── app/
│       ├── app.component.ts    # 根组件（Navbar + RouterOutlet + Footer）
│       ├── app.config.ts       # 应用配置（provideRouter）
│       ├── app.routes.ts       # 路由配置
│       └── pages/              # 页面组件
│           ├── home/           # 首页
│           ├── dashboard/      # 仪表盘（状态保留演示）
│           ├── about/          # 关于
│           ├── features/       # 特性详情页（4 个）
│           └── not-found/      # 404 页面
├── angular.json
└── package.json
```

## 路由表

| 路径 | 组件 | 加载方式 |
|------|------|---------|
| `/` | HomeComponent | 同步加载 |
| `/dashboard` | DashboardComponent | 懒加载 |
| `/about` | AboutComponent | 懒加载 |
| `/features/standalone` | StandaloneFeatureComponent | 懒加载 |
| `/features/router` | RouterFeatureComponent | 懒加载 |
| `/features/di` | DiFeatureComponent | 懒加载 |
| `/features/cli` | CliFeatureComponent | 懒加载 |
| `**`（通配） | NotFoundComponent | 懒加载 |

---

## 测试说明

> 本项目是**纯客户端 SPA**，无服务端 API、无 SSR/SSG、无 ISR。
> 所有页面由 Angular Router 在客户端渲染，部署时需要配置回源兜底到 `index.html`。

### A 组：首页与基础渲染

A1 执行：`GET /`。断言：`status === 200`，`content-type` 包含 `text/html`。
A2 执行：`GET /` 并读取响应文本。断言：`body` 包含 `<html`，`body` 包含 `Angular SPA`（首页标题）。
A3 执行：`GET /` 并读取响应文本。断言：`body` 包含 `<app-root>`（Angular 挂载点），`body` 包含 `<script`（JS bundle 引用）。

### B 组：SPA 路由页面

B1 执行：`GET /dashboard`。断言：`status === 200`，`content-type` 包含 `text/html`（返回 index.html，由 JS 渲染仪表盘）。
B2 执行：`GET /about`。断言：`status === 200`，`body` 包含 `<app-root>`。
B3 执行：`GET /features/standalone`。断言：`status === 200`，`body` 包含 `<app-root>`。
B4 执行：`GET /features/router`。断言：`status === 200`。
B5 执行：`GET /features/di`。断言：`status === 200`。
B6 执行：`GET /features/cli`。断言：`status === 200`。

> **注意**：所有 SPA 路由返回的都是同一个 `index.html`（空壳），具体页面内容由 JS 在客户端渲染。
> 因此 B1~B6 的响应 body 中**不会包含**页面的实际文字内容（如"仪表盘"），只有 `<app-root></app-root>` 挂载点。
> 这正是 SPA 需要回源兜底的原因 — 服务器不知道 `/dashboard` 对应什么内容，只能返回 `index.html` 让 JS 处理。

### C 组：SPA 404（通配路由）

C1 执行：`GET /non-existent-page`。断言：`status === 200`（SPA 兜底到 index.html），`body` 包含 `<app-root>`。
C2 执行：`GET /random/deep/path`。断言：`status === 200`（同上）。

> **说明**：SPA 的 404 由 Angular Router 的 `**` 通配路由在客户端渲染，HTTP 状态码始终是 200（因为服务器返回的是 index.html）。
> 用户在浏览器中看到的是 NotFoundComponent 渲染的 404 页面。

### D 组：静态资源页面（不走 SPA 路由）

D1 执行：`GET /assets/terms.html`。断言：`status === 200`，`content-type` 包含 `text/html`，`body` 包含 `服务条款`。
D2 执行：`GET /assets/privacy.html`。断言：`status === 200`，`body` 包含 `隐私政策`。
D3 执行：`GET /assets/maintenance.html`。断言：`status === 200`，`body` 包含 `系统维护中`。

> **说明**：这些是 `src/assets/` 下的纯静态 HTML，构建时原样拷贝到产物目录，不经过 Angular Router。
> 浏览器直接加载独立 HTML 文件，不依赖 JS bundle。

### E 组：静态资源文件

E1 执行：`GET /favicon.ico`。断言：`status === 200`。

### F 组：SPA 回源兜底验证

F1 执行：不配置兜底时，`GET /dashboard`。断言：`status === 404`（服务器找不到 `dashboard` 文件）。
F2 执行：配置 `try_files $uri $uri/ /index.html` 后，`GET /dashboard`。断言：`status === 200`，`body` 包含 `<app-root>`。
F3 执行：配置兜底后，`GET /features/standalone`。断言：`status === 200`。
F4 执行：配置兜底后，`GET /non-existent`。断言：`status === 200`（兜底到 index.html，Angular Router 渲染 404 组件）。

> **说明**：F 组验证了 SPA 部署的核心问题 —— 没有兜底配置时子路由会 404，配置后由 index.html + JS 接管。

### G 组：构建产物验证

G1 执行：`npm run build`。断言：`dist/angular-spa/browser/index.html` 存在。
G2 执行：检查构建产物。断言：`dist/angular-spa/browser/` 下只有 1 个 `index.html`（不含其他路由的 HTML）。
G3 执行：检查构建产物。断言：`dist/angular-spa/browser/assets/` 下包含 `terms.html`、`privacy.html`、`maintenance.html`。
G4 执行：检查构建产物中 JS 文件。断言：存在包含 `pushState` 或 `popstate` 关键词的 JS 文件（SPA 路由特征）。
