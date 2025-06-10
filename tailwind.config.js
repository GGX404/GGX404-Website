/* eslint-disable no-undef */
import "tailwindcss";
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./public/index.html"],
  layers: {
    theme: {},
    base: {},
    components: {},
    utilities: {},
  },
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-extended-shadows")],
};
