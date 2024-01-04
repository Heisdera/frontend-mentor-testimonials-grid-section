/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Barlow Semi Condensed, sans-serif",
    },

    extend: {
      fontSize: {
        custom: "13px",
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        "moderate-violet": "#7541c8",
        "very-dark-grayish-blue": "#48556a",
        "very-dark-blackish-blue": "#19212e",
        "light-gray": "#cfcfcf",
        "light-grayish-blue": "#ecf2f8",
      },
    },
  },
  plugins: [],
};
