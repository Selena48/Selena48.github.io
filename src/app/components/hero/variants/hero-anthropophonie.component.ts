import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Hero pour le thème Anthropophonie avec dégradé bleu-vert aquatique
 *
 * Design basé sur la maquette Figma "Anthropophonie - Sensory Design"
 */
@Component({
  selector: 'app-hero-anthropophonie',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-theme="anthropophonie" class="hero hero-anthropophonie bg-gradient-to-br from-[#5e8b99] to-[#7ba88f] relative overflow-hidden" [ngClass]="hostClasses()">
      <!-- Contenu -->
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .hero-anthropophonie {
      min-height: 400px;
      position: relative;
      border-radius: 1.527rem;
    }
  `]
})
export class HeroAnthropophonie {
  hostClasses = input<string | null>(null);
}
