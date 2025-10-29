# Hero Component - Système de variantes par thème

## 📋 Vue d'ensemble

Le composant Hero s'adapte **automatiquement** au thème DaisyUI du parent via détection DOM, sans dépendance au `ThemeService`. Cela permet une utilisation flexible aussi bien globalement (via routes) que localement (avec `data-theme` sur n'importe quel élément).

## 🚀 Utilisation

### Usage basique

```typescript
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-page',
  imports: [HeroComponent],
  template: `
    <!-- Le Hero détecte automatiquement le thème du parent -->
    <app-hero />
  `
})
```

### Avec thème de route (global)

```html
<!-- app.html -->
<section [attr.data-theme]="themeService.currentTheme()">
  <router-outlet />
</section>
```

```typescript
// app.routes.ts
{
  path: 'home',
  component: HomeComponent,
  data: { theme: 'portfolio' }  // Hero affichera HeroPortfolioComponent
}
```

### Avec thème local (override)

```html
<!-- Utilise le thème de la route -->
<app-hero />

<!-- Force un thème spécifique localement -->
<div data-theme="dracula">
  <app-hero />  <!-- Affichera HeroDraculaComponent -->
</div>

<!-- Même page, thèmes différents ! -->
<div data-theme="dark">
  <app-hero />  <!-- Affichera HeroDarkComponent -->
</div>
```

## 🎨 Variantes disponibles

| Thème | Composant | Style |
|-------|-----------|-------|
| `portfolio` | `HeroPortfolioComponent` | Design basé maquette Figma |
| `dark` | `HeroDarkComponent` | Minimaliste avec accent |
| `dracula` | `HeroDraculaComponent` | Vibrant avec gradients |

## ➕ Ajouter une variante

### 1. Créer le composant

```typescript
// src/app/components/hero/variants/hero-ocean.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-ocean',
  standalone: true,
  template: `
    <section class="hero-ocean">
      <h1 class="heading-1">My UX Philosophy</h1>
      <!-- Votre design spécifique -->
    </section>
  `,
  styles: [`
    .hero-ocean {
      /* Styles du thème ocean */
    }
  `]
})
export class HeroOceanComponent {}
```

### 2. Enregistrer dans le Hero principal

```typescript
// src/app/components/hero/hero.component.ts
import { HeroOceanComponent } from './variants/hero-ocean.component';

private readonly themeVariants: Record<string, Type<any>> = {
  'portfolio': HeroPortfolioComponent,
  'dark': HeroDarkComponent,
  'dracula': HeroDraculaComponent,
  'ocean': HeroOceanComponent,  // ✅ Ajouté
};
```

### 3. C'est tout ! 🎉

Le Hero basculera automatiquement vers `HeroOceanComponent` quand il détectera `data-theme="ocean"`.

## 🔍 Architecture

### Flux de détection

1. `HeroComponent` utilise `hostDirectives: [ThemeAwareDirective]`
2. Au `ngOnInit`, la directive remonte le DOM pour trouver `[data-theme]`
3. Le thème détecté est exposé via un **signal** `theme()`
4. `HeroComponent` réagit avec `effect()` et change la variante affichée
5. Angular rend dynamiquement le bon composant via `NgComponentOutlet`

### Pourquoi pas ThemeService ?

- **ThemeService** = thème global basé sur la route
- **ThemeAwareDirective** = thème local détecté par DOM

Cela permet :
- ✅ Utiliser différents thèmes sur la même page
- ✅ Réutiliser le composant partout sans config
- ✅ Override ponctuel du thème sans changer la route

## 📦 Structure des fichiers

```
src/app/components/hero/
├── hero.component.ts              # Composant principal avec logique de switch
├── variants/
│   ├── hero-portfolio.component.ts   # Variante Portfolio
│   ├── hero-dark.component.ts        # Variante Dark
│   ├── hero-dracula.component.ts     # Variante Dracula
│   └── hero-ocean.component.ts       # (exemple à créer)
└── README.md                      # Documentation
```

## 🎯 Bonnes pratiques

1. **Fallback automatique** : Si le thème n'a pas de variante, Portfolio est utilisé par défaut
2. **Naming convention** : `Hero{Theme}Component` (ex: `HeroOceanComponent`)
3. **Styles isolés** : Chaque variante gère son propre style, pas de CSS global partagé
4. **Props communes** : Si vous avez besoin de passer des données, utilisez `@Input()` dans chaque variante

## 💡 Exemple complet

```typescript
// page.component.ts
import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-page',
  imports: [HeroComponent],
  template: `
    <!-- Zone 1: Thème portfolio (défaut de la route) -->
    <app-hero />

    <!-- Zone 2: Thème dark pour une section spécifique -->
    <div data-theme="dark" class="my-section">
      <app-hero />
      <p>Contenu avec thème dark</p>
    </div>

    <!-- Zone 3: Retour au thème de la route -->
    <app-hero />
  `
})
export class PageComponent {}
```

Résultat :
- Zone 1 → `HeroPortfolioComponent`
- Zone 2 → `HeroDarkComponent`
- Zone 3 → `HeroPortfolioComponent`
