export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#9333ea",
          dark: "#a855f7"
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a"
        },
        text: {
          light: "#1e293b",
          dark: "#e2e8f0"
        }
      }
    },
  },
  plugins: [],
}