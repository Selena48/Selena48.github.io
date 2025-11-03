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

  // Nettoie le nom pour créer un identifiant CSS valide
  private getSafeVarName(): string {
    return this.expertise.name
      .replace(/[^a-zA-Z0-9\s-]/g, '') // Retire tous les caractères spéciaux sauf espaces et tirets
      .replace(/\s+/g, '-')            // Remplace les espaces par des tirets
      .toLowerCase();                  // Convertit en minuscules
  }

  // Génère le HTML sécurisé du SVG avec les couleurs appliquées
  svgHtml = computed<SafeHtml>(() => {
    const varName = this.getSafeVarName();
    const gradientId = `gradient-${varName}`;

    let svgWithColors = this.expertise.svgTemplate
      // Remplace les noms de variables CSS
      .replace(/--gradient-start(?!-)/g, `--gradient-start-${varName}`)
      .replace(/--gradient-end(?!-)/g, `--gradient-end-${varName}`)
      // Remplace l'id du gradient pour le rendre unique (si encore générique)
      .replace(/id="paint0_linear"/g, `id="${gradientId}"`)
      // Remplace les références au gradient
      .replace(/url\(#paint0_linear\)/g, `url(#${gradientId})`);

    return this.sanitizer.bypassSecurityTrustHtml(svgWithColors);
  });

  // Génère les variables CSS pour l'élément conteneur
  cssVariables = computed(() => {
    const varName = this.getSafeVarName();
    return {
      [`--gradient-start-${varName}`]: this.gradientStart(),
      [`--gradient-end-${varName}`]: this.gradientEnd()
    };
  });

  constructor(private sanitizer: DomSanitizer) {}
}
