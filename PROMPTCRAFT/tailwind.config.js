/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    // Disable the CSS reset so it doesn't conflict with our existing styles
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
