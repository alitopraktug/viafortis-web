import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'slate-900': '#111827',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-manrope)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'Times', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
