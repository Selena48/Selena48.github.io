import { Routes } from '@angular/router';

/**
 * Configuration des routes avec thèmes DaisyUI
 *
 * Chaque route peut définir un thème via la propriété data.theme
 * Si aucun thème n'est défini, le thème par défaut 'portfolio' sera utilisé
 *
 * @example
 * {
 *   path: 'works',
 *   component: WorksComponent,
 *   data: { theme: 'dark' }  // Applique le thème 'dark'
 * }
 */
export const routes: Routes = [
  // Exemple de routes avec thèmes différents
  // {
  //   path: 'home',
  //   loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  //   data: { theme: 'portfolio' }  // Thème portfolio (par défaut)
  // },
  // {
  //   path: 'works',
  //   loadComponent: () => import('./pages/works/works.component').then(m => m.WorksComponent),
  //   data: { theme: 'dark' }  // Thème dark pour la page works
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  //   data: { theme: 'portfolio' }  // Même thème que home
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // }
];
