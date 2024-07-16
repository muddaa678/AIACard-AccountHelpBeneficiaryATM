/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: "#181819",
        white: "#fff",
        goldenrod: "#efb900",
        darkgray: "#a8a8a8",
        darkgoldenrod: {
          "100": "#bd8500",
          "200": "rgba(189, 133, 0, 0.09)",
        },
        orangered: "#e4250b",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      xs: "0.75rem",
      base: "1rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      "3xs": "0.625rem",
      "2xs": "0.688rem",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
