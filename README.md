# Portfolio (Neon edition)

A flashier one-page developer portfolio built with Vite, React, TypeScript and Material UI v7.
No animation libraries: every effect is MUI plus CSS.

## Run it

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## What it shows off

| Effect | Where | MUI pieces |
|---|---|---|
| Custom `gradient` button variant with shine sweep | `theme.ts` | theme `variants`, TypeScript module augmentation |
| Custom `accent` palette color (lime) | `theme.ts` | palette augmentation, `Chip color="accent"` |
| Light/dark schemes via CSS variables | `theme.ts`, `ColorModeToggle.tsx` | `colorSchemes`, `useColorScheme` |
| Animated aurora background | `AuroraBackground.tsx` | `keyframes`, `theme.applyStyles` |
| Glass header with scroll progress bar | `Header.tsx` | `AppBar`, `useScrollTrigger`, `LinearProgress`, `Drawer` |
| Typewriter roles, floating code card | `Hero.tsx` | `keyframes`, `Chip`, `Paper` |
| Count-up stats | `Stats.tsx` | custom hooks |
| Tabbed, animated skill bars | `Skills.tsx` | `Tabs`, `LinearProgress` |
| 3D tilt cards with cursor glow, filter, details dialog | `Projects.tsx` | `Card`, `ToggleButtonGroup`, `Dialog`, `Tooltip` |
| Clickable timeline | `Experience.tsx` | vertical `Stepper` |
| Copy-to-clipboard toast, contact form | `Contact.tsx` | `Snackbar`, `Alert`, `TextField` |
| Speed dial quick actions | `FloatingActions.tsx` | `SpeedDial`, `Zoom` |
| Scroll-reveal animations | `Reveal.tsx` | `IntersectionObserver` hook |

Animations switch off automatically for visitors who set "reduce motion" in their OS.

## Make it yours

- **Content:** edit `src/data/profile.ts`. No component changes needed.
- **Colors:** edit the `gradients` object and the two palettes in `src/theme.ts`.
- **Fonts:** change the Google Fonts link in `index.html` and the font names in `src/theme.ts`.
- **Sections:** add, remove or reorder them in `src/App.tsx`.
- **Contact form:** it opens the visitor's email app. For direct delivery, post to Formspree or Web3Forms in `Contact.tsx`.

## Deploy

Same as before: push to GitHub, connect to Cloudflare Pages, build command `npm run build`, output directory `dist`.

## Inspiration and further reading

- MUI free templates (marketing page, dashboard, blog): https://mui.com/material-ui/getting-started/templates/
- MUI theming, custom variants and palette colors: https://mui.com/material-ui/customization/theming/
- Open-source React + MUI portfolio template by Rodrigo Arenas: https://github.com/rodrigo-arenas/portfolio
- Write-up of a widely forked React + MUI portfolio template: https://dev.to/fayazbuilds_n5f2t7/i-built-a-react-material-ui-portfolio-template-198-forks-later-heres-how-it-works-3f3i
- Colorlib's 2026 roundup of MUI templates and kits: https://colorlib.com/wp/material-ui-templates/
- Overview of Creative Tim's open-source Material Kit 2 React: https://dev.to/sm0ke/material-kit-react-open-source-react-template-bj7
