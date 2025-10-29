# Theme Service - Gestion des thèmes DaisyUI par route

## 📋 Vue d'ensemble

Le `ThemeService` permet de gérer automatiquement les thèmes DaisyUI en fonction de la route active. Chaque route peut définir son propre thème via la propriété `data.theme`.

## 🚀 Utilisation

### 1. Définir un thème dans les routes

Dans `app.routes.ts`, ajoutez la propriété `data.theme` à vos routes :

```typescript
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { theme: 'portfolio' }  // Applique le thème 'portfolio'
  },
  {
    path: 'works',
    component: WorksComponent,
    data: { theme: 'dark' }  // Applique le thème 'dark'
  },
  {
    path: 'about',
    component: AboutComponent
    // Pas de thème défini = thème par défaut 'portfolio'
  }
];
```

### 2. Le thème s'applique automatiquement

Le service écoute les changements de navigation et applique automatiquement le bon thème à la `div` wrapper dans `app.html` :

```html
<div [attr.data-theme]="themeService.currentTheme()" class="bg-base-100">
  <router-outlet />
</div>
```

## ⚙️ Configuration

### Thème par défaut

Le thème par défaut est `'portfolio'`. Pour le changer, modifiez la constante dans `theme.service.ts` :

```typescript
private readonly DEFAULT_THEME = 'votre-theme';
```

### Changer le thème manuellement

Vous pouvez aussi changer le thème manuellement (utile pour un toggle dark/light) :

```typescript
constructor(private themeService: ThemeService) {}

toggleTheme() {
  const newTheme = this.themeService.currentTheme() === 'portfolio' ? 'dark' : 'portfolio';
  this.themeService.setTheme(newTheme);
}
```

## 🎨 Thèmes disponibles

Les thèmes sont définis dans `src/styles.css` :

- `portfolio` (défaut) - Thème principal pour Home et Get To Know Me
- `dark` - Thème sombre
- `mytheme` - Thème personnalisé exemple
- `ocean` - Thème palette marine

## 📚 Exemple complet

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { theme: 'portfolio' }
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works.component').then(m => m.WorksComponent),
    data: { theme: 'dark' }
  }
];
```

## 🔍 Architecture

Le service utilise :
- **RxJS** pour écouter les événements de navigation (`NavigationEnd`)
- **Signals Angular** pour la réactivité (`currentTheme`)
- **Router snapshot** pour récupérer les données de route

### Flux de données

1. Navigation vers une nouvelle route
2. `NavigationEnd` event émis
3. Service parcourt l'arbre des routes
4. Récupère `route.data.theme` de la route active
5. Met à jour le signal `currentTheme`
6. Template réactif applique `[attr.data-theme]`
7. DaisyUI applique les variables CSS du thème
