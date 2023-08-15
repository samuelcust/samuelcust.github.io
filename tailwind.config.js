const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    colors: {
      // this palette is based on material design color system creation:
      // https://m2.material.io/design/color/the-color-system.html#color-theme-creation

      // Brand colors
      'primary': '#2563EB',

      // Background colors
      'surface': '#172135',
      'background': '#111827',

      // Text colors
      'on-primary': ({ theme }) => theme('colors.on-background'),
      'on-surface': ({ theme }) => theme('colors.on-background'),
      'on-background': '#F7F3F3',
    },
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      serif: defaultTheme.fontFamily.serif,
      mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
}

