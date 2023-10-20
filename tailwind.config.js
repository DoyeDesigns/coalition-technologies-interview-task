/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/hero-section.jpg')",
        'history-section': "url('/peak.png')",
        'mountain-section': "url('/mountain-section.jpg')",
      },
    },
  },
  plugins: [],
}
