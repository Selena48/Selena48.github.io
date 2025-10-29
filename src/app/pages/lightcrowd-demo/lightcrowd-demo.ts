import { Component } from '@angular/core';

@Component({
  selector: 'app-lightcrowd-demo',
  imports: [],
  templateUrl: './lightcrowd-demo.html',
  styleUrl: './lightcrowd-demo.css',
  host: {
    '[attr.data-theme]': '"lightcrowd"'
  }
})
export class LightcrowdDemo {

}
