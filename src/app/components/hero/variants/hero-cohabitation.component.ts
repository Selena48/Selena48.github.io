import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Hero pour le thème Cohabitation - Collective Well-being
 *
 * Design basé sur la maquette Figma "Designing Cohabitation"
 * Style sombre avec cartes inclinées et pattern géométrique
 */
@Component({
  selector: 'app-hero-cohabitation',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-theme="cohabitation" class="hero bg-base-300 relative overflow-hidden" [ngClass]="hostClasses()">

      <!-- Contenu principal -->
      <div class="content relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.hero {
      background-image: url("/assets/image.png");
      background-size: cover;
      background-position: center;
    }`
  ]
})
export class HeroCohabitationComponent {
  hostClasses = input<string | null>(null);
}
