import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <h1>404</h1>
      <p>页面未找到</p>
      <a routerLink="/" class="back-btn">返回首页</a>
    </div>
  `,
  styles: [`
    .not-found { text-align: center; padding: 4rem 0; }
    .not-found h1 { font-size: 6rem; font-weight: 800; color: #dd0031; opacity: 0.3; }
    .not-found p { font-size: 1.25rem; color: #64748b; margin-bottom: 2rem; }
    .back-btn { display: inline-block; padding: 10px 20px; background: #dd0031; color: white; border-radius: 6px; font-weight: 500; text-decoration: none; transition: background 0.2s; }
    .back-btn:hover { background: #c3002f; }
  `]
})
export class NotFoundComponent {}
