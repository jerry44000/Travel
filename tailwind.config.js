module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },

  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "travel-bg": 'url("./components/assets/travel-cover.jpg")',
        "pricing-bg": 'url("./components/assets/pbg.jpg")',
        "info-bg": 'url("./components/assets/info.jpg")',
        thailand: 'url("./components/assets/thai.jpg")',
        burma: 'url("./components/assets/burma.jpg")',
        vietnam: 'url("./components/assets/vietnam.jpg")',
        cambodia: 'url("./components/assets/cambodia.jpg")',
        "private-bg": 'url("./components/assets/indonesia.jpg")',
      },
      zIndex: {
        10000: "10000",
      },
    },
  },
  plugins: [require("tailwindcss-children")],
};
