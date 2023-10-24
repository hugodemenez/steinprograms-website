/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend:{}
  },
  plugins: [nextui()],
}