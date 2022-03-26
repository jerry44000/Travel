module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      // backgroundImage: theme =>( { 
      //   "pricing-bg": 'url("./components/assets/pbg.jpg")',
      //   "info-bg": 'url("./src/components/assets/info.jpg")',
      //   "viet-bg": 'url("./src/components/assets/vietnam.jpg")',
      //   "burma-bg": 'url("./src/components/assets/burma.jpg")',
      //   "thai-bg": 'url("./src/components/assets/thailand.jpg")',
      //   "cambodia-bg": 'url("./src/components/assets/cambodia.jpg")',
      // }), 
        
      
    },
    zIndex: {
      "z-10000": "z-10000",
    },
  },
  plugins: [],
};
