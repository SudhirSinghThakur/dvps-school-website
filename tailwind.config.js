export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#174e2b",
        accent: "#b48a2e",
        light: "#fdfcf8"
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
}