// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Use template literals or a regular string
        "mountain":"url('images/mountain.png')",
        "darkMode":"url('images/darkMode.png')"
      }
    },
  },
  plugins: [],
}
