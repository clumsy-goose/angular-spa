import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-cli',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="feature-detail">
      <a routerLink="/" class="back">&larr; 返回首页</a>
      <div class="header">
        <span class="icon">📦</span>
        <h1>Angular CLI</h1>
        <p class="subtitle">强大的命令行工具，开箱即用的开发体验</p>
      </div>

      <div class="content-card">
        <h2>常用命令</h2>
        <div class="cmd-list">
          @for (cmd of commands; track cmd.name) {
            <div class="cmd-item">
              <code>{{ cmd.name }}</code>
              <p>{{ cmd.desc }}</p>
            </div>
          }
        </div>
      </div>

      <div class="content-card">
        <h2>Angular 17 的构建革新</h2>
        <ul>
          <li><strong>esbuild 构建器</strong> — 替代传统 Webpack，构建速度提升 2-4 倍</li>
          <li><strong>Vite 开发服务器</strong> — 开发模式使用 Vite，启动和 HMR 速度大幅提升</li>
          <li><strong>自动代码分割</strong> — 每个懒加载路由自动生成独立 chunk</li>
          <li><strong>差异化加载</strong> — 为现代浏览器和旧浏览器生成不同的 bundle</li>
        </ul>
      </div>

      <div class="content-card">
        <h2>与其他 CLI 工具对比</h2>
        <ul>
          <li><strong>vs CRA</strong> — Angular CLI 功能更全（代码生成、lint、测试），CRA 已停止维护</li>
          <li><strong>vs Vite</strong> — Angular 17 底层已集成 Vite，享受相同的开发速度</li>
          <li><strong>vs Vue CLI</strong> — 类似定位，Angular CLI 的代码脚手架（generate）更强大</li>
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
    code { font-family: 'SF Mono', monospace; background: #fce4ec; color: #dd0031; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; }
    .cmd-list { display: flex; flex-direction: column; gap: 1rem; }
    .cmd-item { background: #f8fafc; border-radius: 8px; padding: 1rem; }
    .cmd-item code { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; }
    .cmd-item p { color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0; }
    ul { padding-left: 1.25rem; }
    li { padding: 0.5rem 0; color: #475569; line-height: 1.6; }
  `]
})
export class CliFeatureComponent {
  commands = [
    { name: 'ng new my-app', desc: '创建新项目，自动配置 TypeScript、路由、样式预处理器' },
    { name: 'ng serve', desc: '启动开发服务器，支持 HMR 热替换，自动刷新' },
    { name: 'ng build', desc: '构建生产产物，自动 Tree-shaking、压缩、代码分割' },
    { name: 'ng generate component pages/home', desc: '自动生成组件文件，包含 .ts、.html、.css、.spec.ts' },
    { name: 'ng add @angular/material', desc: '一键添加第三方库，自动配置依赖和导入' },
  ];
}
