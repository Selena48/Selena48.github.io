import { Component } from '@angular/core';

/**
 * Hero pour le thème Portfolio
 *
 * Design basé sur la maquette Figma "Get To Know Me"
 */
@Component({
  selector: 'app-hero-portfolio',
  standalone: true,
  template: `
    <section class="hero-portfolio">
      <div class="hero-content">
        <h1 class="heading-1">My UX Philosophy</h1>
        <p class="body-large">
          I believe in creating experiences that are not just visually appealing,
          but also intuitive and meaningful for users.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .hero-portfolio {
      @apply min-h-[25rem] flex items-center;
    }

    .hero-content {
      @apply flex flex-col gap-[1.5rem];
    }
  `]
})
export class HeroPortfolioComponent {}
