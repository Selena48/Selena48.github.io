import { Component } from '@angular/core';
import { HeroAnthropophonie } from '../../components/hero/variants/hero-anthropophonie.component';

@Component({
  selector: 'app-anthropophonie-demo',
  imports: [
    HeroAnthropophonie
  ],
  templateUrl: './anthropophonie-demo.html',
  styleUrl: './anthropophonie-demo.css',
  host: {
    '[attr.data-theme]': '"anthropophonie"'
  }
})
export class AnthrophonieDemo {
}
