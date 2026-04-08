import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <section class="hero">
        <h1>Angular SPA</h1>
        <p class="hero-desc">基于 Angular 17 构建的单页应用，使用 Standalone Components 和 Angular Router</p>
        <div class="hero-actions">
          <a routerLink="/dashboard" class="btn btn-primary">进入仪表盘 →</a>
          <a routerLink="/about" class="btn btn-outline">了解架构</a>
        </div>
      </section>

      <section class="features">
        <h2>项目特性</h2>
        <div class="feature-grid">
          @for (f of features; track f.title) {
            <a [routerLink]="f.route" class="card feature-card">
              <span class="feature-icon">{{ f.icon }}</span>
              <h3>{{ f.title }}</h3>
              <p>{{ f.desc }}</p>
              <span class="card-arrow">&rarr;</span>
            </a>
          }
        </div>
      </section>

      <section class="static-pages">
        <h2>静态页面</h2>
        <p class="static-desc">以下页面是 <code>src/assets/</code> 目录下的纯静态 HTML，不经过 Angular Router，由浏览器直接加载。</p>
        <div class="static-grid">
          @for (p of staticPages; track p.href) {
            <a [href]="p.href" class="card static-card">
              <span class="feature-icon">{{ p.icon }}</span>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </a>
          }
        </div>
      </section>

      <section class="structure">
        <h2>项目结构</h2>
        <div class="card">
          <pre class="tree">angular-spa/
├── src/
│   ├── index.html         # 唯一入口 HTML
│   ├── main.ts            # 应用入口（bootstrapApplication）
│   ├── styles.css          # 全局样式
│   ├── assets/            # 静态资源
│   │   ├── terms.html     # 静态页面 — 服务条款
│   │   ├── privacy.html   # 静态页面 — 隐私政策
│   │   └── maintenance.html # 静态页面 — 维护页
│   └── app/
│       ├── app.component.ts   # 根组件（Navbar + RouterOutlet）
│       ├── app.config.ts      # 应用配置（provideRouter）
│       ├── app.routes.ts      # 路由配置
│       └── pages/             # 页面组件
│           ├── home/
│           ├── dashboard/
│           ├── about/
│           └── not-found/
├── angular.json           # Angular CLI 配置
└── package.json</pre>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home { display: flex; flex-direction: column; gap: 3rem; }
    .hero { text-align: center; padding: 3rem 0; }
    .hero h1 { font-size: 2.5rem; font-weight: 700; background: linear-gradient(135deg, #dd0031, #c3002f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1rem; }
    .hero-desc { font-size: 1.125rem; color: #64748b; max-width: 600px; margin: 0 auto 2rem; line-height: 1.8; }
    .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; padding: 10px 20px; border-radius: 6px; font-weight: 500; text-decoration: none; transition: all 0.2s; }
    .btn-primary { background: #dd0031; color: white; }
    .btn-primary:hover { background: #c3002f; transform: translateY(-1px); }
    .btn-outline { border: 2px solid #e2e8f0; color: #64748b; }
    .btn-outline:hover { border-color: #dd0031; color: #dd0031; }
    h2 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
    .card { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); transition: transform 0.3s, box-shadow 0.3s; }
    .card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
    .feature-card { text-align: center; cursor: pointer; text-decoration: none; color: inherit; display: block; }
    .feature-card:hover { color: inherit; }
    .card-arrow { display: inline-block; margin-top: 0.75rem; color: #dd0031; font-size: 1.2rem; transition: transform 0.3s; }
    .feature-card:hover .card-arrow { transform: translateX(4px); }
    .feature-icon { font-size: 2rem; display: block; margin-bottom: 0.75rem; }
    .feature-card h3, .static-card h3 { font-size: 1.125rem; margin-bottom: 0.5rem; }
    .feature-card p, .static-card p { color: #64748b; line-height: 1.6; font-size: 0.9375rem; }
    .static-desc { color: #64748b; margin-top: -1rem; margin-bottom: 1.5rem; line-height: 1.7; }
    .static-desc code { background: #fce4ec; color: #dd0031; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
    .static-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .static-card { text-align: center; text-decoration: none; color: inherit; border: 2px dashed #e2e8f0; }
    .static-card:hover { border-color: #dd0031; background: #fce4ec; }
    .tree { font-family: 'SF Mono', 'Fira Code', monospace; font-size: 0.875rem; line-height: 1.8; color: #64748b; overflow-x: auto; }
    @media (max-width: 768px) { .hero h1 { font-size: 1.75rem; } .static-grid { grid-template-columns: 1fr; } }
  `]
})
export class HomeComponent {
  features = [
    { icon: '🅰️', title: 'Angular 17', desc: 'Standalone Components，无需 NgModule，更简洁的组件组织方式', route: '/features/standalone' },
    { icon: '🔀', title: 'Angular Router', desc: '内置路由系统，支持懒加载和路由守卫', route: '/features/router' },
    { icon: '💉', title: '依赖注入', desc: '框架级 DI 系统，服务自动管理生命周期', route: '/features/di' },
    { icon: '📦', title: 'Angular CLI', desc: '强大的 CLI 工具链，开箱即用的构建优化', route: '/features/cli' },
  ];

  staticPages = [
    { icon: '📄', title: '服务条款', desc: '查看本站的服务使用条款和协议', href: '/assets/terms.html' },
    { icon: '🔒', title: '隐私政策', desc: '了解我们如何处理和保护用户数据', href: '/assets/privacy.html' },
    { icon: '🔧', title: '维护页面', desc: '系统维护时展示的独立静态页面', href: '/assets/maintenance.html' },
  ];
}
