import { Component, effect, Type } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ThemeAwareDirective } from '../../directives/theme-aware.directive';
import { HeroPortfolioComponent } from './variants/hero-portfolio.component';
import { HeroDarkComponent } from './variants/hero-dark.component';
import { HeroDraculaComponent } from './variants/hero-dracula.component';

/**
 * Composant Hero intelligent qui s'adapte automatiquement au thème parent
 *
 * Détecte le data-theme du parent via DOM traversal (pas via ThemeService)
 * et affiche la variante appropriée du Hero
 *
 * @example
 * ```html
 * <!-- Le Hero détectera automatiquement le thème du parent -->
 * <div data-theme="portfolio">
 *   <app-hero />
 * </div>
 *
 * <!-- Ou avec un thème local différent du thème de route -->
 * <section data-theme="dracula">
 *   <app-hero />
 * </section>
 * ```
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgComponentOutlet],
  hostDirectives: [ThemeAwareDirective],
  template: `
    <ng-container *ngComponentOutlet="currentVariant" />
  `
})
export class HeroComponent {
  /** Variante de Hero actuellement affichée */
  protected currentVariant: Type<any> = HeroPortfolioComponent;

  /** Map des thèmes vers leurs composants de Hero respectifs */
  private readonly themeVariants: Record<string, Type<any>> = {
    'portfolio': HeroPortfolioComponent,
    'dark': HeroDarkComponent,
    'dracula': HeroDraculaComponent,
    // 'ocean': HeroOceanComponent,      // Peut être ajouté plus tard
  };

  constructor(private themeAware: ThemeAwareDirective) {
    // Réagit automatiquement aux changements de thème
    effect(() => {
      const theme = this.themeAware.theme();
      this.switchVariant(theme);
    });
  }

  /**
   * Change la variante affichée en fonction du thème détecté
   * Fallback vers portfolio si le thème n'a pas de variante définie
   */
  private switchVariant(theme: string): void {
    this.currentVariant = this.themeVariants[theme] ?? HeroPortfolioComponent;
  }
}
