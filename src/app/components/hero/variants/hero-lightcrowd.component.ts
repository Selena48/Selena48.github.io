import { Component, input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

interface Star {
  left: string;
  top: string;
  size: string;
  animationDelay: string;
  animationDuration: string;
}

/**
 * Hero pour le thème Lightcrowd avec étoiles scintillantes
 *
 * Design basé sur la maquette Figma "Get To Know Me"
 */
@Component({
  selector: 'app-hero-lightcrowd',
  standalone: true,
  imports: [NgClass],
  template: `
    <div data-theme="lightcrowd" class="hero hero-lightcrowd bg-gradient-to-r from-[#1D0E41] to-[#070919] relative overflow-hidden" [ngClass]="hostClasses()">
      <!-- Étoiles scintillantes -->
      @for (star of stars; track $index) {
        <div
          class="star absolute rounded-full bg-primary opacity-0"
          [style.left]="star.left"
          [style.top]="star.top"
          [style.width]="star.size"
          [style.height]="star.size"
          [style.animation-delay]="star.animationDelay"
          [style.animation-duration]="star.animationDuration"
        ></div>
      }

      <!-- Contenu -->
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .hero-lightcrowd {
      min-height: 400px;
      position: relative;
    }

    .star {
      pointer-events: none;
      animation: twinkle ease-in-out infinite;
      box-shadow:
        0 0 4px currentColor,
        0 0 8px currentColor,
        0 0 12px currentColor;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0;
        transform: scale(0.8);
        box-shadow:
          0 0 2px currentColor,
          0 0 4px currentColor,
          0 0 6px currentColor;
      }
      50% {
        opacity: 0.8;
        transform: scale(1);
        box-shadow:
          0 0 6px currentColor,
          0 0 12px currentColor,
          0 0 18px currentColor;
      }
    }
  `]
})
export class HeroLightcrowdComponent implements OnInit {
  hostClasses = input<string | null>(null);
  stars: Star[] = [];

  ngOnInit() {
    // Générer 30 étoiles avec positions et tailles aléatoires
    this.stars = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`, // Entre 2px et 6px
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${Math.random() * 3 + 2}s` // Entre 2s et 5s
    }));
  }
}
