/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // other paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Remove this line if present
    // require('@tailwindcss/line-clamp'),
  ],
}
