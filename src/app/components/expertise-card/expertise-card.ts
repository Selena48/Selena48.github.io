import {Component, Input, input, computed} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {NgStyle} from '@angular/common';
import {ExpertiseItem} from '../../services/expertise-service';

@Component({
  selector: 'app-expertise-card',
  imports: [NgStyle],
  templateUrl: './expertise-card.html',
  styleUrl: './expertise-card.css'
})
export class ExpertiseCard {
  @Input() expertise!: ExpertiseItem;

  // Couleurs pour le dégradé - peut être une variable CSS ou un code hexa
  gradientStart = input<string>('var(--primary)');
  gradientEnd = input<string>('var(--secondary)');

  // Génère le HTML sécurisé du SVG avec les couleurs appliquées
  svgHtml = computed<SafeHtml>(() => {
    const svgWithColors = this.expertise.svgTemplate
      .replace(/--gradient-start/g, `--gradient-start-${this.expertise.name.replace(/\s/g, '-')}`)
      .replace(/--gradient-end/g, `--gradient-end-${this.expertise.name.replace(/\s/g, '-')}`);

    return this.sanitizer.bypassSecurityTrustHtml(svgWithColors);
  });

  // Génère les variables CSS pour les couleurs
  cssVariables = computed(() => ({
    [`--gradient-start-${this.expertise.name.replace(/\s/g, '-')}`]: this.gradientStart(),
    [`--gradient-end-${this.expertise.name.replace(/\s/g, '-')}`]: this.gradientEnd()
  }));

  constructor(private sanitizer: DomSanitizer) {}
}
