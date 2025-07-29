import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stonefast: {
          blue: '#0066CC',
          'blue-light': '#3388DD',
          'blue-dark': '#004499',
          gray: '#F5F5F5',
          'gray-light': '#FAFAFA',
          'gray-dark': '#333333',
          white: '#FFFFFF',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 