import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'features/standalone', loadComponent: () => import('./pages/features/standalone.component').then(m => m.StandaloneFeatureComponent) },
  { path: 'features/router', loadComponent: () => import('./pages/features/router.component').then(m => m.RouterFeatureComponent) },
  { path: 'features/di', loadComponent: () => import('./pages/features/di.component').then(m => m.DiFeatureComponent) },
  { path: 'features/cli', loadComponent: () => import('./pages/features/cli.component').then(m => m.CliFeatureComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
