/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        moveRtoL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        moveLtoR: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideBg: {
          "0%": { backgroundPosition: "0" },
          "100%": { backgroundPosition: "40vw" },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms ease-out",
        fadeOut: "fadeOut 300ms ease-in",
        moveRtoL: "moveRtoL 300ms ease-in",
        moveLtoR: "moveLtoR 300ms ease-out",
        slideBg: "slideBg 2s linear alternate infinite;",
      },
    },
  },
  plugins: [],
};
