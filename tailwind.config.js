/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-inter)'],
            gloria: ['var(--font-gloria-hallelujah)']
      },
    },
  },
  plugins: [],
}
