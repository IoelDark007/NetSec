import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0617',
        secondary: '#1E1141',
        accent: '#C43BFB',
        highlight: '#18BFFF',
        body: '#D1D5DB', // text-gray-300
      },
      backgroundImage: {
        'hero-pattern': "url('/images/download1.png')",
        'circuit': "url('/images/download2.png')",
      },
    },
  },
  plugins: [],
};

export default config;
