/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ali: {
          dark: "#0C0F13",
          blue: "#0F2A67",
          blueLight: "#1A6BBC",
          cream: "#EBE9E9",
          brown: "#574335",
          wood: "#A8978C",
          yellow: "#E6B657"
        }
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },
      borderRadius: {
        ali: "24px"
      },
      boxShadow: {
        ali: "0 24px 70px rgba(0,0,0,.24)"
      }
    }
  },
  plugins: []
}