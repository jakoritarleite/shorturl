import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#FFFFFF'
    },
    fonts: {
      body: 'Inter, sans-serif'
    },
    transitions: {
      duration: '0.2s'
    },
    radii: {
      borderRadius: '10px'
    }
  },
  media: {
    sm: '(max-width: 425px)',
    md: '(max-width: 760px)',
    lg: '(max-width: 780px)',
    xl: '(max-width: 1024px)'
  }
});

const globalStyles = globalCss({
  '*': {
    fontFamily: '$body'
  },
  'html, body': {
    margin: '0',
    padding: '0',
    WebkitFontSmoothing: 'antialiased',
    background: '$background'
  },
  '@font-face': [],
  '@keyframes loading-spinner': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

globalStyles();
