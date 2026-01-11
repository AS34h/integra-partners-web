/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '48px',
        lg: '64px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', // Max-width
      },
    },
    extend: {
      fontFamily: {
        heading: ['Tiempos Headline', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2': ['36px', { lineHeight: '125%', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['28px', { lineHeight: '130%', letterSpacing: '0', fontWeight: '500' }],
        'h4': ['22px', { lineHeight: '135%', letterSpacing: '0', fontWeight: '500' }],
        'body-l': ['18px', { lineHeight: '160%', letterSpacing: '0' }],
        'body-m': ['16px', { lineHeight: '160%', letterSpacing: '0' }],
        'caption': ['13px', { lineHeight: '150%', letterSpacing: '0' }],
        'label': ['12px', { lineHeight: '150%', letterSpacing: '0.04em', textTransform: 'uppercase' }],
      },
      colors: {
        // Institutionnel
        'navy': {
          DEFAULT: '#0A1628',
          50: '#F0F2F5',
          100: '#E1E5EB',
          200: '#B8C1D1',
          300: '#8F9DB7',
          400: '#66799D',
          500: '#3D5583',
          600: '#0A1628', // Principal
          700: '#081220',
          800: '#060E18',
          900: '#040A10',
        },
        
        'anthracite': {
          DEFAULT: '#2D3748',
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748', // Principal
          800: '#1A202C',
          900: '#171923',
        },
        
        // Accent souverain (usage < 5%)
        'gold': {
          DEFAULT: '#B8860B',
          50: '#FEF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7DC6F',
          400: '#F4D03F',
          500: '#F1C40F',
          600: '#B8860B', // Principal
          700: '#9C7A0A',
          800: '#7D6208',
          900: '#5E4A06',
        },
        
        // Grayscale institutionnel (priorité)
        'gray': {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          500: '#94A3B8',
          400: '#CBD5E1',
          300: '#E2E8F0',
          200: '#F1F5F9',
          100: '#F8FAFC',
          50: '#FAFBFC',
        },
        
        // Sémantiques (désaturées)
        'success': {
          DEFAULT: '#2F6F4E',
          light: '#D4EDDA',
          dark: '#1E4A32',
        },
        'warning': {
          DEFAULT: '#8A6D1D',
          light: '#FFF3CD',
          dark: '#6B5416',
        },
        'error': {
          DEFAULT: '#7A2E2E',
          light: '#F8D7DA',
          dark: '#581F1F',
        },
      },
    },
  },
  plugins: [],
}
