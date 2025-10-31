import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroComponent} from '../../components/hero/hero.component';
import {HeroLightcrowdComponent} from '../../components/hero/variants/hero-lightcrowd.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroLightcrowdComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
