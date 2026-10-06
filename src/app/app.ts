import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selenaWebsite');
  menuOpen = false;
  scrolled = false;
  currentYear = new Date().getFullYear();

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 10;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(protected themeService: ThemeService) { }
}
