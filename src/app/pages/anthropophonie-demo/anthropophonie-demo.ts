import { Component, inject } from '@angular/core';
import { HeroAnthropophonie } from '../../components/hero/variants/hero-anthropophonie.component';
import { ExpertiseCard } from '../../components/expertise-card/expertise-card';
import { ExpertiseService } from '../../services/expertise-service';

@Component({
  selector: 'app-anthropophonie-demo',
  imports: [
    HeroAnthropophonie,
    ExpertiseCard
  ],
  templateUrl: './anthropophonie-demo.html',
  styleUrl: './anthropophonie-demo.css',
  host: {
    '[attr.data-theme]': '"anthropophonie"'
  }
})
export class AnthrophonieDemo {
  protected readonly expertise = inject(ExpertiseService);

  // Collection des deliverables pour Anthropophonie dans l'ordre exact de la maquette
  protected readonly anthropophonieDeliverables = this.expertise.getExpertiseCollection([
    'background-research',
    'shadowing',
    'benchmark',
    'personas',
    'user-case',
    'composition-sketches',
    'journey-map',
    'user-flows',
    'graphic-mockups',
    'high-fidelity-prototype'
  ]);
}
