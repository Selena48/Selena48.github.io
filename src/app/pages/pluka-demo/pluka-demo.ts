import { Component, inject } from '@angular/core';
import {HeroPlukaComponent} from '../../components/hero/variants/hero-pluka.component';
import {ExpertiseCard} from '../../components/expertise-card/expertise-card';
import {ExpertiseKey, ExpertiseService} from '../../services/expertise-service';

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
  // protected readonly plukaDeliverables = this.expertise.getExpertiseCollection([
  //   'background-research',
  //   'ux-audit',
  //   'benchmark',
  //   'quantitative-survey',
  //   'personas',
  //   'user-case',
  //   'journey-map',
  //   'content-mapping',
  //   'user-flows',
  //   'composition-sketches',
  //   'graphic-mockups',
  //   'high-fidelity-prototype'
  // ]);

  plukaDeliverables: {
    id: ExpertiseKey;
    colorStart: string;
    colorEnd: string;
  }[] = [
    { id: 'background-research', colorStart: 'rgba(255, 200, 210, 1)', colorEnd: 'rgba(255, 80, 92, 1)'},
    { id: 'ux-audit', colorStart: 'rgba(136, 164, 67, 1)', colorEnd: 'rgba(225, 187, 10, 1)'},
    { id: 'benchmark', colorStart: 'rgba(64, 189, 169, 1)', colorEnd: 'rgba(130, 209, 196, 1)'},
    { id: 'quantitative-survey', colorStart: 'rgba(50, 99, 168, 1)', colorEnd: 'rgba(130, 209, 196, 1)'},
    { id: 'personas', colorStart: 'rgba(225, 187, 10, 1)', colorEnd: 'rgba(255, 216, 34, 1)'},
    { id: 'user-case', colorStart: 'rgba(130, 209, 196, 1)', colorEnd: 'rgba(255, 255, 255, 1)'},
    { id: 'journey-map', colorStart: 'rgba(75, 121, 188, 1)', colorEnd: 'rgba(236, 31, 68, 1)'},
    { id: 'content-mapping', colorStart: 'rgba(136, 164, 67, 1)', colorEnd: 'rgba(201, 208, 127, 1)'},
    { id: 'user-flows', colorStart: 'rgba(183, 193, 84, 1)', colorEnd: 'rgba(55, 188, 166, 1)'},
    { id: 'composition-sketches', colorStart: 'rgba(211, 229, 255, 1)', colorEnd: 'rgba(103, 146, 209, 1)'},
    { id: 'high-fidelity-prototype', colorStart: 'rgba(255, 80, 92, 1)', colorEnd: 'rgba(225, 187, 10, 1)'},
    { id: 'graphic-mockups', colorStart: 'rgba(255, 80, 92, 1)', colorEnd: 'rgba(236, 31, 68, 1)'}
  ];
}
