import { Component, inject } from '@angular/core';
import {HeroComponent} from '../../components/hero/hero.component';
import {HeroLightcrowdComponent} from '../../components/hero/variants/hero-lightcrowd.component';
import {ExpertiseKey, ExpertiseService} from '../../services/expertise-service';
import {ExpertiseCard} from '../../components/expertise-card/expertise-card';

@Component({
  selector: 'app-lightcrowd-demo',
  imports: [
    HeroLightcrowdComponent,
    ExpertiseCard
  ],
  templateUrl: './lightcrowd-demo.html',
  styleUrl: './lightcrowd-demo.css',
  host: {
    '[attr.data-theme]': '"lightcrowd"'
  }
})
export class LightcrowdDemo {
  protected readonly expertise = inject(ExpertiseService);

  selectedExpertise: {
    id: ExpertiseKey,
    colorStart: string,
    colorEnd: string
  }[] = [
    { id: 'intent-note', colorStart: '#D8B4FE', colorEnd: '#D8B4FE' },
    { id: 'benchmark', colorStart: 'rgba(216, 180, 254, 1)', colorEnd: 'rgba(255, 143, 143, 1)' },
    { id: 'data-collection', colorStart: 'rgba(255, 182, 225, 1)', colorEnd: 'rgba(251, 227, 234, 1)' },
    { id: 'personas', colorStart: 'rgba(233, 184, 255, 1)', colorEnd: 'rgba(249, 236, 255, 1)' },
    { id: 'empathy-maps', colorStart: 'rgba(233, 184, 255, 1)', colorEnd: 'rgba(249, 236, 255, 1)' },
    { id: 'experience-vision', colorStart: 'rgba(233, 184, 255, 1)', colorEnd: 'rgba(249, 236, 255, 1)' },
    { id: 'content-mapping', colorStart: 'rgba(223, 153, 247, 1)', colorEnd: 'rgba(255, 219, 176, 1)' },
    { id: 'flow-diagrams', colorStart: 'rgba(167, 181, 255, 1)', colorEnd: 'rgba(243, 172, 255, 1)' },
    { id: 'composition-sketches', colorStart: 'rgba(167, 181, 255, 1)', colorEnd: 'rgba(243, 172, 255, 1)' },
    { id: 'graphic-mockups', colorStart: 'rgba(233, 184, 255, 1)', colorEnd: 'rgba(249, 236, 255, 1)' },
    { id: 'low-fidelity-prototype', colorStart: 'rgba(223, 153, 247, 1)', colorEnd: 'rgba(255, 219, 176, 1)' },
    { id: 'five-second-test', colorStart: 'rgba(167, 181, 255, 1)', colorEnd: 'rgba(243, 172, 255, 1)' },
    { id: 'high-fidelity-prototype', colorStart: 'rgba(167, 181, 255, 1)', colorEnd: 'rgba(243, 172, 255, 1)' },
    { id: 'user-test-protocol', colorStart: 'rgba(223, 153, 247, 1)', colorEnd: 'rgba(255, 219, 176, 1)' },
    { id: 'portfolio-page', colorStart: 'rgba(167, 181, 255, 1)', colorEnd: 'rgba(243, 172, 255, 1)' },
    { id: 'presentation-video', colorStart: 'rgba(255, 63, 73, 1)', colorEnd: 'rgba(216, 180, 254, 1)' },
  ]
}
