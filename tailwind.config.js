/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
        'tech-pattern': 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '50px 50px',
        'tech-size': '30px 30px',
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}