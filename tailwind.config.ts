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
          blue: '#1E3A8A', // Bleu plus profond et sophistiqué
          'blue-light': '#3B82F6',
          'blue-dark': '#1E40AF',
          'blue-accent': '#60A5FA',
          gray: '#F8FAFC', // Gris plus doux
          'gray-light': '#F1F5F9',
          'gray-dark': '#1E293B', // Gris plus foncé et élégant
          'gray-muted': '#64748B',
          white: '#FFFFFF',
          black: '#0F172A',
          gold: '#F59E0B', // Accent doré pour le luxe
          'gold-light': '#FCD34D',
          silver: '#94A3B8', // Accent argenté
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'], // Police serif élégante
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #60A5FA 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        'elegant': '0 20px 40px -10px rgba(30, 58, 138, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 