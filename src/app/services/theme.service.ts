import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

/**
 * Service de gestion des thèmes DaisyUI basé sur les routes
 *
 * Écoute les changements de navigation et applique automatiquement
 * le thème défini dans les données de route (route.data.theme)
 *
 * @example
 * // Dans app.routes.ts
 * {
 *   path: 'home',
 *   component: HomeComponent,
 *   data: { theme: 'portfolio' }
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /** Thème par défaut appliqué quand aucun thème n'est défini dans la route */
  private readonly DEFAULT_THEME = 'portfolio';

  /** Signal contenant le thème actuel */
  public readonly currentTheme = signal<string>(this.DEFAULT_THEME);

  constructor(private router: Router) {
    this.initializeThemeListener();
  }

  /**
   * Initialise l'écoute des changements de navigation
   * et met à jour le thème en fonction des données de route
   */
  private initializeThemeListener(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getActiveRouteTheme())
      )
      .subscribe(theme => {
        this.currentTheme.set(theme);
      });

    // Applique le thème initial
    const initialTheme = this.getActiveRouteTheme();
    this.currentTheme.set(initialTheme);
  }

  /**
   * Récupère le thème de la route active
   * Parcourt l'arbre des routes pour trouver la première définition de thème
   */
  private getActiveRouteTheme(): string {
    let route = this.router.routerState.root;

    // Parcourt l'arbre des routes pour trouver le thème
    while (route.firstChild) {
      route = route.firstChild;
      if (route.snapshot.data['theme']) {
        return route.snapshot.data['theme'];
      }
    }

    return this.DEFAULT_THEME;
  }

  /**
   * Change manuellement le thème (utile pour les toggles de thème)
   * @param theme - Nom du thème DaisyUI à appliquer
   */
  public setTheme(theme: string): void {
    this.currentTheme.set(theme);
  }
}
