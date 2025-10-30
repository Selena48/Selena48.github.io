import { Component } from '@angular/core';

/**
 * Hero pour le thème Dark
 *
 * Style minimaliste avec accent sur le contraste
 */
@Component({
  selector: 'app-hero-dark',
  standalone: true,
  template: `
    <section class="hero-dark">
      <div class="hero-content">
        <div class="accent-line"></div>
        <h1 class="heading-1">My UX Philosophy</h1>
        <p class="body-large">
          I believe in creating experiences that are not just visually appealing,
          but also intuitive and meaningful for users.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .hero-dark {
      @apply min-h-[25rem] flex items-center;
    }

    .hero-content {
      @apply flex flex-col gap-[1.5rem];
    }

    .accent-line {
      @apply w-[4rem] h-[0.25rem] bg-primary rounded-full;
    }
  `]
})
export class HeroDarkComponent {}
