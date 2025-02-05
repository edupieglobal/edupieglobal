/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Tailwind will scan these files for class names
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite', // Custom marquee animation with smooth easing
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Starts off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Ends off-screen to the left
        },
      },
      colors: {
        'marquee-color': '#3490dc', // Custom color for marquee text (if needed)
      },
    },
  },
  plugins: [],
};
