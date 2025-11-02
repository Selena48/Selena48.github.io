import { Component, input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

interface FloatingElement {
  left: string;
  top: string;
  size: string;
  animationDelay: string;
  animationDuration: string;
  rotation: number;
}

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
      <!-- Étoiles scintillantes en arrière-plan -->
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
    .hero-pluka {
      min-height: 400px;
      position: relative;
      border-radius: 1.527rem;
    }

    .star {
      pointer-events: none;
      animation: twinkle ease-in-out infinite;
      box-shadow:
        0 0 3px currentColor,
        0 0 6px currentColor,
        0 0 9px currentColor;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0;
        transform: scale(0.7);
        box-shadow:
          0 0 2px currentColor,
          0 0 4px currentColor,
          0 0 6px currentColor;
      }
      50% {
        opacity: 0.6;
        transform: scale(1);
        box-shadow:
          0 0 4px currentColor,
          0 0 8px currentColor,
          0 0 12px currentColor;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(var(--rotation));
      }
      50% {
        transform: translateY(-20px) rotate(calc(var(--rotation) + 5deg));
      }
    }

    @keyframes floatSlow {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      50% {
        transform: translateY(-15px) translateX(10px);
      }
    }
  `]
})
export class HeroPlukaComponent implements OnInit {
  hostClasses = input<string | null>(null);
  stars: FloatingElement[] = [];

  ngOnInit() {
    // Générer 25 étoiles avec positions et tailles aléatoires
    this.stars = Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1.5}px`, // Entre 1.5px et 4.5px
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${Math.random() * 2.5 + 2}s`, // Entre 2s et 4.5s
      rotation: Math.random() * 360
    }));
  }
}
