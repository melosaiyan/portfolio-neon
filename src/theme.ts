import { createTheme } from '@mui/material/styles';

// ---------------------------------------------------------------------------
// Type extensions: a custom "accent" palette color and a custom "gradient"
// button variant. This is how you teach TypeScript about theme additions.
// ---------------------------------------------------------------------------
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
  }
}

// Brand gradients, reused by components. Change these three hex values and
// the palette below to re-skin the whole site.
export const gradients = {
  brand: 'linear-gradient(120deg, #7c4dff 0%, #ff4d8d 52%, #ffb84d 100%)',
  cool: 'linear-gradient(120deg, #7c4dff 0%, #22d3ee 100%)',
  lime: 'linear-gradient(120deg, #c6ff3d 0%, #22d3ee 100%)',
};

const headingFont = '"Space Grotesk", "Inter", system-ui, sans-serif';
export const monoFont = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#9d7bff' },
        secondary: { main: '#ff5c9a' },
        accent: { main: '#c6ff3d', light: '#dcff85', dark: '#9fd600', contrastText: '#12180a' },
        background: { default: '#0a0714', paper: '#151022' },
        text: { primary: '#f3efff', secondary: '#b3abc9' },
        divider: 'rgba(190, 170, 255, 0.16)',
      },
    },
    light: {
      palette: {
        primary: { main: '#5b2be0' },
        secondary: { main: '#d81b6a' },
        accent: { main: '#3d7a00', light: '#5ea516', dark: '#2a5600', contrastText: '#ffffff' },
        background: { default: '#faf7ff', paper: '#ffffff' },
        text: { primary: '#170f2e', secondary: '#584f73' },
        divider: 'rgba(91, 43, 224, 0.16)',
      },
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.03em' },
    h2: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.01em' },
    h5: { fontFamily: headingFont, fontWeight: 600 },
    h6: { fontFamily: headingFont, fontWeight: 600 },
    overline: { fontFamily: monoFont, fontWeight: 600, letterSpacing: '0.18em' },
    button: { textTransform: 'none', fontWeight: 600, fontSize: '0.95rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        '::selection': { background: '#ff4d8d', color: '#fff' },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 22,
          transition: 'transform 0.2s ease, box-shadow 0.3s ease, background-position 0.5s ease, border-color 0.3s ease',
          '&:active': { transform: 'scale(0.97)' },
        },
        sizeLarge: { paddingBlock: 12, paddingInline: 28 },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            borderColor: '#ff4d8d',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 0 4px rgba(255, 77, 141, 0.15), 0 10px 30px -10px rgba(255, 77, 141, 0.55)',
          },
        },
      },
      variants: [
        {
          // <Button variant="gradient"> — animated gradient with a shine sweep on hover.
          props: { variant: 'gradient' },
          style: {
            position: 'relative',
            overflow: 'hidden',
            color: '#fff',
            backgroundImage: gradients.brand,
            backgroundSize: '200% 100%',
            backgroundPosition: '0% 50%',
            boxShadow: '0 10px 28px -10px rgba(255, 77, 141, 0.7)',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-80%',
              width: '50%',
              height: '100%',
              background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.5), transparent)',
              transform: 'skewX(-20deg)',
              transition: 'left 0.7s ease',
              pointerEvents: 'none',
            },
            '&:hover': {
              backgroundPosition: '100% 50%',
              transform: 'translateY(-2px)',
              boxShadow: '0 16px 36px -10px rgba(124, 77, 255, 0.8)',
            },
            '&:hover::after': { left: '130%' },
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: { transition: 'transform 0.25s ease, color 0.25s ease, background-color 0.25s ease' },
      },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 500 } },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: 24, border: '1px solid var(--mui-palette-divider)' },
      },
    },
  },
});

// Frosted-glass surface, used with the sx prop: <Paper sx={glass} />
export const glass = {
  backgroundColor: 'color-mix(in srgb, var(--mui-palette-background-paper) 62%, transparent)',
  backdropFilter: 'blur(14px) saturate(140%)',
  WebkitBackdropFilter: 'blur(14px) saturate(140%)',
  border: '1px solid var(--mui-palette-divider)',
} as const;

// Gradient-filled text, used with the sx prop.
export const gradientText = {
  backgroundImage: gradients.brand,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
} as const;

export default theme;
