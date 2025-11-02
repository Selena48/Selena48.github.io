# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Selena Portfolio Website** - UX/UI Designer portfolio built with Angular 20+ (standalone components), Tailwind CSS 4, and DaisyUI theming system.

## Commands

### Development
```bash
ng serve              # Dev server on http://localhost:4200
pnpm start            # Alias for ng serve
ng build --watch      # Build with watch mode
```

### Building
```bash
ng build              # Production build
pnpm run build        # Alias for ng build
```

### Testing
```bash
ng test               # Run unit tests with Karma
```

### Code Generation
```bash
ng generate component component-name              # Generate component
ng generate component path/to/component --skip-import   # For standalone components
```

## Architecture

### Theme System (DaisyUI)

The project uses a **dual-layer theme system**:

1. **Global Theme (Route-based)** - `ThemeService` + `app.routes.ts`
   - Each route defines its theme via `data: { theme: 'portfolio' }`
   - Service automatically applies theme to root `<div [attr.data-theme]>`
   - Default theme: `portfolio`

2. **Local Theme (DOM-based)** - `ThemeAwareDirective`
   - Components detect parent `[data-theme]` attribute via DOM traversal
   - Allows multiple themes on same page
   - Used by Hero component system

**Available themes**: `portfolio` (default), `lightcrowd`, `pluka`

#### Theme Configuration Location
All themes are defined in `src/styles.css`:
- DaisyUI plugin config with theme list
- Custom theme definitions using `@plugin "daisyui/theme"`
- Theme-specific CSS variables (colors, radius, etc.)

### Hero Component System

**Dynamic theme-aware hero variants** that adapt based on parent theme:

- **Base**: `HeroComponent` (src/app/components/hero/hero.component.ts)
  - Uses `ThemeAwareDirective` to detect theme
  - Switches between variants using `@switch` template syntax
  - Supports `hostClasses` input for custom styling

- **Variants** (src/app/components/hero/variants/):
  - `hero-portfolio.component.ts` - Portfolio theme
  - `hero-lightcrowd.component.ts` - LightCrowd theme with twinkling stars animation
  - `hero-pluka.component.ts` - Pluka health tech theme with floating elements

**Adding a new Hero variant**:
1. Create variant component in `src/app/components/hero/variants/hero-{theme}.component.ts`
2. Import in `hero.component.ts`
3. Add to imports array and template `@switch` cases
4. Define theme in `src/styles.css`

See `src/app/components/hero/README.md` for detailed documentation.

### Styling Architecture

**Tailwind CSS 4 + DaisyUI (theme-only)**:
- `src/styles.css` - Global styles and theme definitions
- DaisyUI components are **disabled** (only theme system used)
- Custom utility classes defined for typography, cards, sections
- Figma-based design system with precise sizing

**Key utility classes**:
- Typography: `.heading-1` to `.heading-5`, `.body`, `.body-large`, `.body-muted`
- Cards: `.portfolio-card`, `.portfolio-card-subtle`, `.portfolio-card-accent`
- Sections: `.portfolio-section`, `.portfolio-section-header`, `.portfolio-container`
- Buttons: `.btn`, `.btn.out`
- Hero: `.hero .heading-*`, `.hero.rounded`

### Component Structure

```
src/app/
├── components/          # Reusable components
│   └── hero/           # Theme-aware hero system
│       ├── hero.component.ts
│       ├── variants/   # Theme-specific implementations
│       └── README.md
├── directives/         # Custom directives
│   └── theme-aware.directive.ts   # DOM-based theme detection
├── pages/              # Route components
│   ├── home/
│   ├── get-to-know-me/
│   └── lightcrowd-demo/
└── services/           # Application services
    ├── theme.service.ts           # Global theme management
    └── expertise-service.ts       # Expertise data management
```

### Standalone Components

All components use Angular's **standalone** architecture:
- No NgModules
- Direct imports in component metadata
- Lazy loading via `loadComponent()` in routes

### Routing

Routes defined in `src/app/app.routes.ts`:
- Lazy loading for all routes
- Theme specification via `data: { theme: 'name' }`
- Example: `{ path: 'lightcrowd', loadComponent: ..., data: { theme: 'lightcrowd' } }`

## Design System Integration

Project follows **Figma design specifications**:
- Font: Inter (with Gloria Hallelujah for captions)
- Precise font sizes defined in `@theme` block (rem-based)
- Color system from DaisyUI themes
- Spacing and border radius from Figma mockups

## Important Notes

### Assets Location
- Static assets: `public/` directory (referenced as `/assets/`)
- Angular serves `public/` at root during dev and build

### SSR Support
Project includes Angular SSR configuration but uses `outputMode: "static"` for static site generation (prerendering).

### TypeScript Configuration
- Strict mode enabled
- Angular 20+ features (signals, standalone components)
- Target: ES2022
