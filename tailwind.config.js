const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: '#0bba48',
        yellowColor: '#FEB60D',
        uxBgMain: '#F9FAFB',
      },
      fontFamily: {
        title: ['Orbitron', 'serif'],
        regular: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #559ED8, #1D61AD)',
        uxGradientGraytoPurpole: 'linear-gradient(135deg, #292933, #9559F7)',
        uxGradientGraytoPurpoleToRight:
          'linear-gradient(to right, #292933 30%, #9559F7 70%)',
        uxGradientGraytoPurpoleCircle:
          'radial-gradient(circle, #292933, #9559F7)',
      },
    },
  },
  plugins: [addVariablesForColors, require('tailwindcss-animate')],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
