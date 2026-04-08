import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="layout">
      <nav class="navbar">
        <div class="nav-inner">
          <a routerLink="/" class="brand">Angular SPA</a>
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">首页</a>
            <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">仪表盘</a>
            <a routerLink="/about" routerLinkActive="active" class="nav-link">关于</a>
          </div>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <div class="footer-inner">
          <span>Angular SPA Template</span>
          <span class="tag">SPA</span>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .layout { display: flex; flex-direction: column; min-height: 100vh; }
    .navbar { position: sticky; top: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); border-bottom: 1px solid #e2e8f0; z-index: 100; }
    .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; height: 60px; }
    .brand { font-size: 1.125rem; font-weight: 700; color: #dd0031 !important; text-decoration: none; }
    .nav-links { display: flex; gap: 4px; }
    .nav-link { padding: 6px 14px; border-radius: 6px; color: #64748b; font-weight: 500; font-size: 0.9375rem; text-decoration: none; transition: all 0.2s; }
    .nav-link:hover { color: #dd0031; background: #fce4ec; }
    .nav-link.active { color: #dd0031; background: #fce4ec; }
    .main-content { max-width: 1200px; width: 100%; margin: 0 auto; padding: 3rem 1.5rem; flex: 1; }
    .footer { border-top: 1px solid #e2e8f0; padding: 1.5rem 0; }
    .footer-inner { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; color: #94a3b8; font-size: 0.875rem; }
    .tag { display: inline-block; padding: 2px 10px; border-radius: 999px; background: #fce4ec; color: #dd0031; font-size: 0.75rem; font-weight: 600; }
  `]
})
export class AppComponent {}
