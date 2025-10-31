import { Component } from '@angular/core';
import {HeroComponent} from '../../components/hero/hero.component';
import {HeroLightcrowdComponent} from '../../components/hero/variants/hero-lightcrowd.component';

@Component({
  selector: 'app-lightcrowd-demo',
  imports: [
    HeroLightcrowdComponent
  ],
  templateUrl: './lightcrowd-demo.html',
  styleUrl: './lightcrowd-demo.css',
  host: {
    '[attr.data-theme]': '"lightcrowd"'
  }
})
export class LightcrowdDemo {

}
