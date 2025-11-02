import { Component, input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Hero pour le thème Pluka avec éléments flottants (main, étoiles)
 *
 * Design basé sur la maquette Figma "Pluka - Health Tech"
 */
@Component({
  selector: 'app-hero-pluka',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-theme="pluka" class="hero hero-pluka bg-[#224452] relative overflow-hidden" [ngClass]="hostClasses()">
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class HeroPlukaComponent {
  hostClasses = input<string | null>(null);
}
