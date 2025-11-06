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
    <div data-theme="anthropophonie" class="hero hero-anthropophonie relative overflow-hidden" [ngClass]="hostClasses()">
      <!-- Formes organiques flottantes -->
      <div class="organic-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>

      <!-- Pattern feuilles -->
      <div class="leaf-pattern"></div>

      <!-- Overlay gradient -->
      <div class="gradient-overlay"></div>

      <!-- Points scintillants -->
      <div class="floating-elements">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>

      <!-- Contenu -->
      <div class="content relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .hero-anthropophonie {
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg,
        #A4C639 0%,
        #7FB8B0 25%,
        #4A9B9B 50%,
        #2B5F7E 75%,
        #1E4D6B 100%
      );
      border-radius: 1.527rem;
    }

    /* Formes organiques */
    .organic-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .shape {
      position: absolute;
      border-radius: 50% 40% 60% 50%;
      filter: blur(40px);
      opacity: 0.4;
      animation: float 20s ease-in-out infinite;
    }

    .shape-1 {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle at 30% 30%, #C4D96F, #A4C639);
      top: -100px;
      left: -100px;
      animation-delay: 0s;
    }

    .shape-2 {
      width: 400px;
      height: 400px;
      background: radial-gradient(circle at 60% 40%, #8DD4CC, #6BB8B0);
      top: 50px;
      right: -50px;
      animation-delay: -5s;
    }

    .shape-3 {
      width: 450px;
      height: 450px;
      background: radial-gradient(circle at 50% 50%, #5AABA8, #3D8E8C);
      bottom: -80px;
      left: 10%;
      animation-delay: -10s;
    }

    .shape-4 {
      width: 350px;
      height: 350px;
      background: radial-gradient(circle at 40% 60%, #F4E76D, #E5D84F);
      top: 40%;
      right: 15%;
      animation-delay: -15s;
    }

    .shape-5 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle at 50% 50%, #FFB3B8, #FF9BA1);
      bottom: 20%;
      right: 5%;
      animation-delay: -7s;
    }

    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(50px, -30px) scale(1.1);
      }
      66% {
        transform: translate(-30px, 40px) scale(0.9);
      }
    }

    /* Pattern feuilles */
    .leaf-pattern {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(196, 217, 111, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(107, 184, 176, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 90%, rgba(90, 171, 168, 0.1) 0%, transparent 50%);
    }

    /* Overlay gradient */
    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg,
        rgba(164, 198, 57, 0.1) 0%,
        rgba(75, 155, 155, 0.2) 50%,
        rgba(30, 77, 107, 0.1) 100%
      );
    }

    /* Contenu */
    .content {
      text-align: center;
      color: white;
    }

    .content :deep(h1) {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 25px;
      text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
      line-height: 1.1;
      letter-spacing: -1px;
    }

    .content :deep(.subtitle) {
      font-size: 1.4rem;
      margin-bottom: 20px;
      text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
      opacity: 0.95;
    }

    .content :deep(.description) {
      font-size: 1.2rem;
      line-height: 1.8;
      text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
      max-width: 700px;
      margin: 0 auto;
      opacity: 0.9;
    }

    /* Points scintillants */
    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    .dot {
      position: absolute;
      width: 8px;
      height: 8px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      animation: twinkle 3s ease-in-out infinite;
    }

    .dot:nth-child(1) { top: 15%; left: 20%; animation-delay: 0s; }
    .dot:nth-child(2) { top: 25%; right: 25%; animation-delay: 1s; }
    .dot:nth-child(3) { bottom: 30%; left: 15%; animation-delay: 2s; }
    .dot:nth-child(4) { top: 60%; right: 20%; animation-delay: 1.5s; }
    .dot:nth-child(5) { bottom: 20%; right: 35%; animation-delay: 0.5s; }

    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.5); }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-anthropophonie {
        min-height: 450px;
      }

      .content :deep(h1) {
        font-size: 2.5rem;
      }

      .content :deep(.subtitle) {
        font-size: 1.1rem;
      }

      .content :deep(.description) {
        font-size: 1rem;
      }

      .shape {
        filter: blur(30px);
      }

      .shape-1, .shape-2, .shape-3, .shape-4, .shape-5 {
        width: 250px;
        height: 250px;
      }
    }
  `]
})
export class HeroAnthropophonie {
  hostClasses = input<string | null>(null);
}
