import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard">
      <div class="page-header">
        <h1>仪表盘</h1>
        <p class="subtitle">Angular SPA 路由页面，共享同一个应用实例</p>
      </div>
      <div class="stats-grid">
        @for (s of stats; track s.label) {
          <div class="stat-card">
            <div class="stat-value">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        }
      </div>
      <div class="content-card">
        <h2>状态保留演示</h2>
        <p>当前计数器：<strong>{{ count }}</strong></p>
        <div class="btn-group">
          <button class="dbtn primary" (click)="count = count + 1">+1</button>
          <button class="dbtn" (click)="count = count - 1">-1</button>
          <button class="dbtn" (click)="count = 0">重置</button>
        </div>
        <p class="hint">Angular 默认不缓存路由组件，切换页面后计数器会重置。可通过自定义 RouteReuseStrategy 实现状态保留。</p>
      </div>
      <div class="content-card">
        <h2>路由信息</h2>
        <div class="info-row"><span class="label">当前路径</span><code>{{ currentPath }}</code></div>
        <div class="info-row"><span class="label">路由模式</span><code>HTML5 History (PathLocationStrategy)</code></div>
        <div class="info-row"><span class="label">构建工具</span><code>Angular CLI (esbuild)</code></div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard { display: flex; flex-direction: column; gap: 1.5rem; }
    .page-header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 4px; }
    .subtitle { color: #64748b; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
    .stat-card { background: white; border-radius: 12px; padding: 1.5rem; text-align: center; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .stat-value { font-size: 2rem; font-weight: 700; color: #dd0031; }
    .stat-label { color: #64748b; font-size: 0.875rem; margin-top: 4px; }
    .content-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .content-card h2 { font-size: 1.25rem; margin-bottom: 1rem; }
    .btn-group { display: flex; gap: 8px; margin: 1rem 0; }
    .dbtn { padding: 8px 18px; border-radius: 6px; border: 1px solid #e2e8f0; background: transparent; font-weight: 500; cursor: pointer; transition: all 0.2s; color: #64748b; }
    .dbtn:hover { border-color: #dd0031; color: #dd0031; }
    .dbtn.primary { background: #dd0031; color: white; border-color: #dd0031; }
    .dbtn.primary:hover { background: #c3002f; }
    .hint { color: #94a3b8; font-size: 0.875rem; margin-top: 1rem; line-height: 1.6; }
    .info-row { display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
    .info-row:last-child { border-bottom: none; }
    .label { width: 120px; color: #64748b; font-size: 0.875rem; flex-shrink: 0; }
    code { font-family: 'SF Mono', monospace; background: #fce4ec; color: #dd0031; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
    @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
  `]
})
export class DashboardComponent {
  count = 0;
  currentPath = '';
  stats = [
    { value: '3', label: '路由总数' },
    { value: 'SPA', label: '应用类型' },
    { value: 'Angular 17', label: '框架版本' },
    { value: 'esbuild', label: '构建工具' },
  ];

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }
}
