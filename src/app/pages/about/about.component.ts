import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about">
      <h1>关于此项目</h1>
      <p class="about-desc">
        这是一个基于 <strong>Angular 17</strong> 构建的 SPA 基础模板，
        使用 Standalone Components（无 NgModule），展示 Angular 的纯 SPA 架构。
      </p>
      <div class="about-grid">
        <div class="card-item">
          <h3>🏗️ 技术栈</h3>
          <ul>
            <li><strong>Angular 17</strong> — Standalone Components</li>
            <li><strong>Angular Router</strong> — HTML5 History 模式</li>
            <li><strong>Angular CLI</strong> — esbuild 构建</li>
            <li><strong>TypeScript</strong> — 强类型语言</li>
          </ul>
        </div>
        <div class="card-item">
          <h3>⚡ Angular vs React/Vue</h3>
          <ul>
            <li><strong>架构</strong> — 框架内置 DI、路由、HTTP、表单</li>
            <li><strong>语言</strong> — 首选 TypeScript，强类型保障</li>
            <li><strong>模板</strong> — 增强 HTML 模板语法</li>
            <li><strong>CLI</strong> — 最强大的官方 CLI 工具</li>
          </ul>
        </div>
        <div class="card-item">
          <h3>🔑 SPA 核心特征</h3>
          <ul>
            <li>单一 HTML 入口 <code>index.html</code></li>
            <li>Angular Router 管理所有前端路由</li>
            <li>页面组件懒加载（<code>loadComponent</code>）</li>
            <li>导航无页面刷新</li>
          </ul>
        </div>
        <div class="card-item">
          <h3>📄 静态页面说明</h3>
          <ul>
            <li><code>src/assets/</code> 下的 HTML 原样拷贝</li>
            <li>不经过 Angular 路由和构建</li>
            <li>没有 Angular 的 JS 注入</li>
            <li>不影响 SPA 判定结果</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about h1 { font-size: 2rem; font-weight: 700; margin-bottom: 8px; }
    .about-desc { color: #64748b; line-height: 1.8; margin-bottom: 2rem; max-width: 600px; }
    .about-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .card-item { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .card-item h3 { font-size: 1.125rem; margin-bottom: 1rem; }
    .card-item ul { list-style: none; padding: 0; }
    .card-item li { padding: 6px 0; color: #64748b; line-height: 1.6; border-bottom: 1px solid #fafafa; }
    .card-item li:last-child { border-bottom: none; }
    code { font-family: 'SF Mono', monospace; background: #fce4ec; color: #dd0031; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
    @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent {}
