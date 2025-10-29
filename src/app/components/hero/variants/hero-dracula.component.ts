import { Component } from '@angular/core';

/**
 * Hero pour le thème Dracula
 *
 * Style vibrant avec touches de couleur
 */
@Component({
  selector: 'app-hero-dracula',
  standalone: true,
  template: `
    <section class="hero-dracula">
      <div class="hero-content">
        <div class="gradient-overlay"></div>
        <h1 class="heading-1">
          <span class="gradient-text">My UX Philosophy</span>
        </h1>
        <p class="body-large">
          I believe in creating experiences that are not just visually appealing,
          but also intuitive and meaningful for users.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .hero-dracula {
      @apply min-h-[25rem] flex items-center relative;
    }

    .hero-content {
      @apply flex flex-col gap-[1.5rem] relative z-10;
    }

    .gradient-overlay {
      @apply absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[1.5rem] -z-10;
    }

    .gradient-text {
      @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
    }
  `]
})
export class HeroDraculaComponent {}
