import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-standalone',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="feature-detail">
      <a routerLink="/" class="back">&larr; 返回首页</a>
      <div class="header">
        <span class="icon">🅰️</span>
        <h1>Standalone Components</h1>
        <p class="subtitle">Angular 17 的全新组件模型，告别 NgModule</p>
      </div>

      <div class="content-card">
        <h2>什么是 Standalone Components？</h2>
        <p>Angular 14 引入、Angular 17 全面推荐的组件模型。组件通过 <code>standalone: true</code> 声明为独立组件，
          不再需要包裹在 NgModule 中，直接在 <code>imports</code> 数组中导入所需的依赖。</p>
      </div>

      <div class="content-card">
        <h2>传统方式 vs Standalone</h2>
        <div class="compare">
          <div class="compare-item">
            <h3>❌ 传统 NgModule 方式</h3>
            <pre [textContent]="codeOld"></pre>
          </div>
          <div class="compare-item">
            <h3>✅ Standalone 方式</h3>
            <pre [textContent]="codeNew"></pre>
          </div>
        </div>
      </div>

      <div class="content-card">
        <h2>核心优势</h2>
        <ul>
          <li><strong>更少样板代码</strong> — 无需创建和维护 NgModule 文件</li>
          <li><strong>更好的 Tree-shaking</strong> — 未使用的组件不会被打包</li>
          <li><strong>更直观的依赖管理</strong> — 每个组件自己声明需要什么</li>
          <li><strong>更简单的懒加载</strong> — 直接 <code>loadComponent</code> 而非 <code>loadChildren</code></li>
          <li><strong>渐进式迁移</strong> — 可以与现有 NgModule 项目共存</li>
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
    code { font-family: 'SF Mono', monospace; background: #fce4ec; color: #dd0031; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
    .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
    .compare-item { background: #f8fafc; border-radius: 8px; padding: 1rem; }
    .compare-item h3 { font-size: 1rem; margin-bottom: 0.75rem; }
    pre { font-family: 'SF Mono', monospace; font-size: 0.8rem; line-height: 1.6; color: #334155; overflow-x: auto; white-space: pre-wrap; }
    ul { padding-left: 1.25rem; }
    li { padding: 0.5rem 0; color: #475569; line-height: 1.6; }
    @media (max-width: 768px) { .compare { grid-template-columns: 1fr; } }
  `]
})
export class StandaloneFeatureComponent {
  codeOld = `// app.module.ts
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, RouterModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}`;

  codeNew = `// main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

// app.component.ts
@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: \`...\`
})
export class AppComponent {}`;
}
