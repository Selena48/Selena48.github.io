import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'home',
    renderMode: RenderMode.Client, // Redirect, pas besoin de prerender
  },
  {
    path: 'get-to-know-me',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'lightcrowd',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pluka',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'anthropophonie',
    renderMode: RenderMode.Prerender,
  },
];
