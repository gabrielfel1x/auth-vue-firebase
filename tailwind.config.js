/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        xs: "0.875rem", // 12px
        xs: "0.875rem", // 14px
        sm: "1rem", // 16px
        base: "1.125rem", // 18px
        lg: "1.5rem", // 24px
        lg2: "2rem", // 32px
        xl: "2.5rem", // 40px
        "2xl": "3rem", // 48px
        "3xl": "3.25rem", // 52px
        "4xl": "3.375rem", // 54px
      },
      colors: {
        secondary: "#42b983",
        tertiary: "#535bf2",
        redColor: "#ff3333",
        whiteColor: "#f9f9f9",
        blackColor: "#1a1a1a",
        greenColor: "#07893C",
        bgColor: "#E8E8E8",
      },
    },
  },
  plugins: [],
};
