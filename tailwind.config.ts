import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-image': "url('/background.jpeg')",
        logo: "url('/blockChainLogo.png')",
      },

      colors: {
        primary: '#9945FF',
        secondary: '#6DFF8B',
        accent: '#00554B',
        borders: '#464646',
        priceText: '#666666',
        actionButton: '#3980FF',
        exchangeBg: '#1E1E1E',
        exchangeDropdown: '#868686',
        exchangeRate: '#666666',
        exchangeBalance: '#3980FF',
        pricePositive: '#6DFFDC',
        priceNegative: '#FF5454',
      },
    },
  },
  plugins: [],
};
export default config;
