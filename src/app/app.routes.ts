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
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { theme: 'portfolio' }
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'get-to-know-me',
    loadComponent: () => import('./pages/get-to-know-me/get-to-know-me.component').then(m => m.GetToKnowMeComponent),
    data: { theme: 'portfolio' }
  },
  {
    path: 'lightcrowd',
    loadComponent: () => import('./pages/lightcrowd-demo/lightcrowd-demo').then(m => m.LightcrowdDemo),
    data: { theme: 'lightcrowd' }
  },
  {
    path: 'pluka',
    loadComponent: () => import('./pages/pluka-demo/pluka-demo').then(m => m.PlukaDemo),
    data: { theme: 'pluka' }
  }
];
