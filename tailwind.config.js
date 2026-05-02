/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT:"#F39EB6",
          light:"#FFE4EF",
        },
        secondary: {
          DEFAULT:"#F7F6D3"
        },
        accent: {
          DEFAULT:"#B8DB80"
        },
      },
      borderRadius:{
        25:"25px",
      },
      minHeight:{
        "vh-custom": "calc(100vh - 76.03px)",
      },
    },
    fontFamily: {
      sans:["Roboto", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
}

