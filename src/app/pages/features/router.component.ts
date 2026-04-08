import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-router',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="feature-detail">
      <a routerLink="/" class="back">&larr; 返回首页</a>
      <div class="header">
        <span class="icon">🔀</span>
        <h1>Angular Router</h1>
        <p class="subtitle">内置路由系统，SPA 导航的核心</p>
      </div>

      <div class="content-card">
        <h2>路由配置示例</h2>
        <p>Angular Router 使用声明式的路由配置，支持懒加载、路由守卫、路由解析器等高级特性。</p>
        <pre [textContent]="routeCode"></pre>
      </div>

      <div class="content-card">
        <h2>核心特性</h2>
        <ul>
          <li><strong>HTML5 History 模式</strong> — 使用 PathLocationStrategy，URL 干净无 #</li>
          <li><strong>懒加载</strong> — loadComponent 按需加载页面组件，减少首屏包体积</li>
          <li><strong>路由守卫</strong> — canActivate / canDeactivate 控制页面访问权限</li>
          <li><strong>路由解析器</strong> — resolve 在页面渲染前预加载数据</li>
          <li><strong>路由参数</strong> — 支持路径参数 :id 和查询参数 ?key=value</li>
          <li><strong>嵌套路由</strong> — children 配置多层级路由结构</li>
        </ul>
      </div>

      <div class="content-card">
        <h2>SPA 路由 vs 传统导航</h2>
        <ul>
          <li><strong>SPA 路由</strong> — routerLink 拦截点击，JS 更新 DOM + pushState，无页面刷新</li>
          <li><strong>传统导航</strong> — a href 触发浏览器 HTTP 请求，整页重新加载</li>
          <li><strong>本项目的静态页面</strong> — 使用 [href] 绑定，走浏览器原生导航，离开 SPA</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .feature-detail { display: flex; flex-direction: column; gap: 1.5rem; }
    .back { color: #dd0031; font-weight: 500; text-decoration: none; }
    .back:hover { text-decoration: underline; }
    .header { text-align: center; padding: 2rem 0; }
    .icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .subtitle { color: #64748b; font-size: 1.125rem; }
    .content-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .content-card h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .content-card p { color: #475569; line-height: 1.8; margin-bottom: 1rem; }
    pre { font-family: 'SF Mono', monospace; font-size: 0.8rem; line-height: 1.7; color: #334155; background: #f8fafc; padding: 1rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; }
    ul { padding-left: 1.25rem; }
    li { padding: 0.5rem 0; color: #475569; line-height: 1.6; }
  `]
})
export class RouterFeatureComponent {
  routeCode = `export const routes: Routes = [
  // 同步加载 — 首页直接引入组件
  { path: '', component: HomeComponent },

  // 懒加载 — 访问时才下载对应的 JS chunk
  { path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent) },

  // Catch-all — 未匹配路由兜底到 404
  { path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component')
      .then(m => m.NotFoundComponent) },
];`;
}
