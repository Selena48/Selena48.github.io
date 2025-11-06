import { Component, inject } from '@angular/core';
import { HeroAnthropophonie } from '../../components/hero/variants/hero-anthropophonie.component';
import { ExpertiseCard } from '../../components/expertise-card/expertise-card';
import {ExpertiseKey, ExpertiseService} from '../../services/expertise-service';
import {HeroLightcrowdComponent} from '../../components/hero/variants/hero-lightcrowd.component';

@Component({
  selector: 'app-anthropophonie-demo',
  imports: [
    HeroAnthropophonie,
    ExpertiseCard,
    HeroLightcrowdComponent
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
  protected readonly anthropophonieDeliverables: {
    id: ExpertiseKey
    color: string
  }[] = [
    { id: "field-research", color: "rgba(179, 196, 94, 1)" },
    { id: "shadowing", color: "rgba(121, 201, 188, 1)" },
    { id: "data-collection", color: "rgba(237, 132, 175, 1)"},
    { id: "personas", color: "rgba(225, 187, 10, 1)"},
    { id: "user-case", color: "rgba(121, 201, 188, 1)"},
    { id: "2x2-matrix", color: "rgba(255, 255, 255, 1)" },
    { id: "journey-map", color: "rgba(202, 210, 39, 1)"},
    { id: "facilitate-ideation-workshops", color: "#FFFFFF"},
    { id: "low-fidelity-prototype", color: "rgba(237, 132, 175, 1)"},
    { id: "concept-testing", color: "rgba(225, 187, 10, 1)"}
  ];
}
