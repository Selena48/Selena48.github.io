import { Component, inject } from '@angular/core';
import {HeroComponent} from '../../components/hero/hero.component';
import {HeroLightcrowdComponent} from '../../components/hero/variants/hero-lightcrowd.component';
import {ExpertiseService} from '../../services/expertise-service';
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
}
