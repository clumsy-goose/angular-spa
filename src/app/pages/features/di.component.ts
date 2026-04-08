import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-di',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="feature-detail">
      <a routerLink="/" class="back">&larr; 返回首页</a>
      <div class="header">
        <span class="icon">💉</span>
        <h1>依赖注入（DI）</h1>
        <p class="subtitle">Angular 的核心设计模式，框架级的服务管理</p>
      </div>

      <div class="content-card">
        <h2>什么是依赖注入？</h2>
        <p>依赖注入是一种设计模式，让组件不自己创建依赖的对象，而是由框架的注入器（Injector）自动提供。
          Angular 的 DI 系统是框架级别的，贯穿整个应用的生命周期。</p>
      </div>

      <div class="content-card">
        <h2>示例：创建和使用服务</h2>
        <pre [textContent]="diCode"></pre>
      </div>

      <div class="content-card">
        <h2>DI 的层级结构</h2>
        <ul>
          <li><strong>Root 级</strong> — providedIn: 'root'，全应用共享一个实例（单例）</li>
          <li><strong>组件级</strong> — 在 Component.providers 中声明，每个组件实例一份</li>
          <li><strong>路由级</strong> — 在 Route.providers 中声明，路由激活时创建</li>
          <li><strong>环境级</strong> — EnvironmentInjector，用于动态创建组件</li>
        </ul>
      </div>

      <div class="content-card">
        <h2>与 React/Vue 的对比</h2>
        <ul>
          <li><strong>React</strong> — 无内置 DI，通常用 Context、Redux 或直接 import 模块</li>
          <li><strong>Vue</strong> — provide/inject 提供基础 DI，但不如 Angular 完整</li>
          <li><strong>Angular</strong> — 框架级 DI，支持层级注入器、多提供者、工厂函数等高级特性</li>
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
    .content-card p { color: #475569; line-height: 1.8; margin-bottom: 0.5rem; }
    pre { font-family: 'SF Mono', monospace; font-size: 0.8rem; line-height: 1.7; color: #334155; background: #f8fafc; padding: 1rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; }
    ul { padding-left: 1.25rem; }
    li { padding: 0.5rem 0; color: #475569; line-height: 1.6; }
  `]
})
export class DiFeatureComponent {
  diCode = `// user.service.ts — 创建服务
@Injectable({
  providedIn: 'root'  // 全局单例，自动 Tree-shake
})
export class UserService {
  private users: User[] = [];

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  constructor(private http: HttpClient) {}
}

// dashboard.component.ts — 使用服务
@Component({ ... })
export class DashboardComponent {
  // Angular 自动注入 UserService 实例
  constructor(private userService: UserService) {}
}`;
}
