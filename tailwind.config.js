/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        blur: "blur(3px)",
      },
    },
  },
  variants: {
    backdropFilter: ["responsive"],
  },
  plugins: [],
};
