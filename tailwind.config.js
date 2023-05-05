/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'parfum-bg-desktop': 'url(/assets/image-product-desktop.jpg)',
        'parfum-bg-mobile': 'url(/assets/image-product-mobile.jpg)',
      },
      fontFamily: {
        fraunces: 'Fraunces',
        montserrat: 'Montserrat',
      },
      fontSize: {
        display: '2rem',
        body: '0.9rem',
        button: '0.9rem',
        overline: '0.8rem',
      },
      colors: {
        white: '#FFFFFF',
        cream: '#F2EAE2',
        gray: '#6C7289',
        aquamarine: '#3D8168',
        'aquamarine-hover': '#1A4032',
        metal: '#1C232B',
      },
    },
  },
  plugins: [],
}
