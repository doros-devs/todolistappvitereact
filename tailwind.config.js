/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // eslint-disable-next-line no-unused-vars
      backgroundImage: () => ({
        'custom-background' : "url('./src/assets/pexels-mo-eid-1268975-13248384.jpg')"
      })
    },
  },
  plugins: [],
}

