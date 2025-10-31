import {Component, Input} from '@angular/core';
import {ExpertiseItem} from '../../services/expertise-service';

@Component({
  selector: 'app-expertise-card',
  imports: [],
  templateUrl: './expertise-card.html',
  styleUrl: './expertise-card.css'
})
export class ExpertiseCard {
  @Input() expertise!: ExpertiseItem;
}
