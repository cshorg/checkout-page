/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: "#828282",
      lightGray: "#F2F2F2",
      orange: "#F2994A",
      white: "#ffffff",
      medGray: "#e0e0e0"
    },
    fontFamily: {
      display: ["Montserrat"]
    }
  },
  plugins: []
}
