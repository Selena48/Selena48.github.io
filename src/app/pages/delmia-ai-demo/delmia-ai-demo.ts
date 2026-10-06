import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delmia-ai-demo',
  imports: [RouterLink],
  templateUrl: './delmia-ai-demo.html',
  styleUrl: './delmia-ai-demo.css',
  host: {
    '[attr.data-theme]': '"portfolio"'
  }
})
export class DelmiaAiDemo {}
