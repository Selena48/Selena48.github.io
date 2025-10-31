import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

/**
 * Hero pour le thème Lightcrowd
 *
 * Design basé sur la maquette Figma "Get To Know Me"
 */
@Component({
  selector: 'app-hero-lightcrowd',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-theme="lightcrowd" class="hero bg-gradient-to-r from-[#1D0E41] to-[#070919]" [ngClass]="hostClasses()">
      <ng-content></ng-content>
    </div>
  `
})
export class HeroLightcrowdComponent {
  hostClasses = input<string | null>(null);
}
