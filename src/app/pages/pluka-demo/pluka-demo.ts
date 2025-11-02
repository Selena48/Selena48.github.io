import { Component, inject } from '@angular/core';
import {HeroPlukaComponent} from '../../components/hero/variants/hero-pluka.component';
import {ExpertiseCard} from '../../components/expertise-card/expertise-card';
import {ExpertiseService} from '../../services/expertise-service';

@Component({
  selector: 'app-pluka-demo',
  imports: [
    HeroPlukaComponent,
    ExpertiseCard
  ],
  templateUrl: './pluka-demo.html',
  styleUrl: './pluka-demo.css',
  host: {
    '[attr.data-theme]': '"pluka"'
  }
})
export class PlukaDemo {
  protected readonly expertise = inject(ExpertiseService);

  // Collection des deliverables pour Pluka dans l'ordre exact de la maquette
  protected readonly plukaDeliverables = this.expertise.getExpertiseCollection([
    'background-research',
    'ux-audit',
    'benchmark',
    'quantitative-survey',
    'personas',
    'user-case',
    'journey-map',
    'content-mapping',
    'user-flows',
    'composition-sketches',
    'graphic-mockups',
    'high-fidelity-prototype'
  ]);
}
