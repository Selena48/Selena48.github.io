import { Directive, ElementRef, OnInit, signal } from '@angular/core';

/**
 * Directive pour détecter automatiquement le thème DaisyUI parent
 *
 * Remonte l'arbre DOM pour trouver l'élément avec [data-theme]
 * et expose le thème via un signal
 *
 * @example
 * ```typescript
 * @Component({
 *   selector: 'app-hero',
 *   hostDirectives: [ThemeAwareDirective]
 * })
 * export class HeroComponent {
 *   constructor(private themeAware: ThemeAwareDirective) {
 *     effect(() => {
 *       console.log('Current theme:', this.themeAware.theme());
 *     });
 *   }
 * }
 * ```
 */
@Directive({
  selector: '[appThemeAware]',
  standalone: true
})
export class ThemeAwareDirective implements OnInit {
  /** Signal contenant le thème détecté depuis le parent */
  public readonly theme = signal<string>('portfolio');

  /** Thème par défaut si aucun parent avec data-theme n'est trouvé */
  private readonly DEFAULT_THEME = 'portfolio';

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.detectParentTheme();
  }

  /**
   * Remonte l'arbre DOM pour trouver l'élément avec [data-theme]
   * et met à jour le signal avec la valeur trouvée
   */
  private detectParentTheme(): void {
    let element: HTMLElement | null = this.elementRef.nativeElement;

    // Remonte l'arbre DOM jusqu'à trouver un [data-theme]
    while (element) {
      const themeAttr = element.getAttribute('data-theme');
      if (themeAttr) {
        this.theme.set(themeAttr);
        return;
      }
      element = element.parentElement;
    }

    // Aucun thème trouvé, utilise le défaut
    this.theme.set(this.DEFAULT_THEME);
  }

  /**
   * Force la re-détection du thème parent
   * Utile si le data-theme parent change dynamiquement
   */
  public refresh(): void {
    this.detectParentTheme();
  }
}
