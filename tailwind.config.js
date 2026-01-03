/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          light: "#60A5FA",
        },
        cyan: {
          DEFAULT: "#22D3EE",
        },
        navy: {
          900: "#0B0F17",
          800: "#151E32",
          700: "#1E293B",
        },
        "background-light": "#f6f6f8",
        "background-dark": "#0B0F17",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "sans-serif"],
        body: ["var(--font-noto-sans)", "Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
