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
    <div data-theme="cohabitation" class="hero hero-cohabitation relative overflow-hidden" [ngClass]="hostClasses()">
      <!-- Background gradient overlay -->
      <div class="gradient-overlay"></div>
      
      <!-- Pattern géométrique -->
      <div class="geometric-pattern">
        <div class="pattern-lines"></div>
        <div class="pattern-splines"></div>
        <div class="pattern-circles"></div>
        <div class="pattern-rectangles"></div>
        <div class="pattern-triangles"></div>
      </div>

      <!-- Cartes inclinées gauche -->
      <div class="card-tilt card-left">
        <div class="card-content"></div>
        <div class="card-border"></div>
      </div>

      <!-- Carte centrale (Défi) -->
      <div class="card-center">
        <div class="card-header">Défi !</div>
        <div class="card-text">
          Transformez les corvées en jeu !<br>
          Organisez une mini-compétition de pliage de linge.
          Celui qui plie le plus vite 3 t-shirts remporte un jeton.
          À vos chronomètres !
        </div>
      </div>

      <!-- Cartes inclinées droite -->
      <div class="card-tilt card-right">
        <div class="card-content"></div>
        <div class="card-border"></div>
      </div>

      <!-- Contenu principal -->
      <div class="content relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .hero-cohabitation {
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, 
        #2d2d2d 0%,
        #242424 50%,
        #1a1a1a 100%
      );
      border-radius: 1.527rem;
      position: relative;
    }

    /* Gradient overlay pour profondeur */
    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        ellipse at 50% 20%,
        rgba(255, 63, 73, 0.15) 0%,
        transparent 60%
      );
      pointer-events: none;
    }

    /* Pattern géométrique */
    .geometric-pattern {
      position: absolute;
      width: 160px;
      height: 308px;
      left: 285px;
      top: 323px;
      opacity: 0.46;
      overflow: hidden;
      border-radius: 7.365px;
    }

    .pattern-lines,
    .pattern-splines,
    .pattern-circles,
    .pattern-rectangles,
    .pattern-triangles {
      position: absolute;
      width: 100%;
      height: 100%;
      background-repeat: repeat;
      opacity: 0.5;
    }

    .pattern-lines {
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(255, 255, 255, 0.03) 10px,
        rgba(255, 255, 255, 0.03) 20px
      );
    }

    .pattern-rectangles {
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 15px,
        rgba(255, 255, 255, 0.02) 15px,
        rgba(255, 255, 255, 0.02) 30px
      );
    }

    .pattern-circles {
      background: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 50%
      );
    }

    /* Cartes inclinées */
    .card-tilt {
      position: absolute;
      width: 134px;
      height: 254px;
      border-radius: 4px;
    }

    .card-left {
      left: 162px;
      top: 367px;
      transform: rotate(-13.195deg);
    }

    .card-right {
      left: 366px;
      top: 285px;
      transform: rotate(12.629deg);
    }

    .card-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 4px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }

    .card-border {
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      pointer-events: none;
    }

    /* Carte centrale (Défi) */
    .card-center {
      position: absolute;
      left: 285px;
      top: 323px;
      width: 160px;
      height: 308px;
      background: linear-gradient(135deg, #e8a658 0%, #d89944 100%);
      border-radius: 7.365px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      padding: 20px;
      z-index: 5;
    }

    .card-header {
      font-family: 'Gloria Hallelujah', cursive;
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .card-text {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      line-height: 1.4;
      color: #ffffff;
      text-align: center;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Contenu principal */
    .content {
      text-align: center;
      padding: 60px 40px;
      max-width: 900px;
      color: white;
    }

    .content :deep(h1) {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 25px;
      line-height: 1.1;
      letter-spacing: -1px;
      background: linear-gradient(135deg, #ff3f49 0%, #ff8f97 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .content :deep(.subtitle) {
      display: inline-block;
      font-size: 0.875rem;
      margin-bottom: 20px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: rgba(255, 63, 73, 0.23);
      border: 0.582px solid #ff3f49;
      border-radius: 100px;
      padding: 6px 12px;
      color: #ff3f49;
    }

    .content :deep(.description) {
      font-size: 1rem;
      line-height: 1.8;
      max-width: 700px;
      margin: 0 auto 30px;
      opacity: 0.9;
      color: #ffffff;
    }

    .content :deep(.btn) {
      background: rgba(255, 255, 255, 0.2);
      border: none;
      padding: 12px 24px;
      border-radius: 100px;
      color: #ffffff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .content :deep(.btn:hover) {
      background: rgba(255, 255, 255, 0.3);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-cohabitation {
        min-height: 450px;
      }

      .content :deep(h1) {
        font-size: 2rem;
      }

      .content :deep(.subtitle) {
        font-size: 0.75rem;
      }

      .content :deep(.description) {
        font-size: 0.875rem;
      }

      /* Masquer les cartes sur mobile pour plus de clarté */
      .card-tilt,
      .card-center,
      .geometric-pattern {
        display: none;
      }
    }
  `]
})
export class HeroCohabitationComponent {
  hostClasses = input<string | null>(null);
}
