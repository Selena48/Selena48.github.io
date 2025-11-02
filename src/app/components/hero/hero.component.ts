import { Component, computed, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ThemeAwareDirective } from '../../directives/theme-aware.directive';
import { HeroPortfolioComponent } from './variants/hero-portfolio.component';
import { HeroLightcrowdComponent } from './variants/hero-lightcrowd.component';
import { HeroPlukaComponent } from './variants/hero-pluka.component';

/**
 * Composant Hero intelligent qui s'adapte automatiquement au thème parent
 *
 * Détecte le data-theme du parent via DOM traversal (pas via ThemeService)
 * et affiche la variante appropriée du Hero
 *
 * Tous les attributs passés à app-hero seront automatiquement propagés
 * au composant Hero variant sous-jacent.
 *
 * @example
 * ```html
 * <!-- Le Hero détectera automatiquement le thème du parent -->
 * <div data-theme="portfolio">
 *   <app-hero class="my-4 p-8" id="hero-section">
 *     <h1>Mon contenu</h1>
 *   </app-hero>
 * </div>
 *
 * <!-- Les classes et attributs seront transmis automatiquement -->
 * <section data-theme="lightcrowd">
 *   <app-hero>
 *     <p>Contenu projeté</p>
 *   </app-hero>
 * </section>
 * ```
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroLightcrowdComponent,
    HeroPortfolioComponent,
    HeroPlukaComponent,
  ],
  hostDirectives: [ThemeAwareDirective],
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `
    @switch (currentTheme()) {
      @case ('lightcrowd') {
        <app-hero-lightcrowd [hostClasses]="hostClasses()">
          <ng-content />
        </app-hero-lightcrowd>
      }
      @case ('pluka') {
        <app-hero-pluka [hostClasses]="hostClasses()">
          <ng-content />
        </app-hero-pluka>
      }
      @case ('portfolio') {
        <app-hero-portfolio [hostClasses]="hostClasses()">
          <ng-content />
        </app-hero-portfolio>
      }
    }
  `
})
export class HeroComponent {
  /** Signal du thème actuel détecté */
  currentTheme = computed(() => {
    const theme = this.themeAware.theme();
    console.log('[HeroComponent] Current theme:', theme);
    return theme;
  });

  /** Classes CSS de l'élément host */
  hostClasses = input<string | null>(null, { alias: 'class' });

  constructor(private themeAware: ThemeAwareDirective) {
  }
}
