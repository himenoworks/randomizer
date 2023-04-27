/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{ts,tsx}"],
   theme: {
      fontFamily: {
         Barlow: ["Barlow"],
         Kanit: ["Kanit"],
      },
      extend: {
         colors: {
            lightgray: "#D3D3D3",
            "chinese-silver": "#CCCCCC",
         },
         textColor: {
            primary: "#404040",
            secondary: "#7D8590",
         },
         backgroundColor: {
            primary: "#EBEBEB",
            secondary: "#C9C9C9",
         },
         animation: {
            "zoom-in": "zoom-in 0.2s ease-in-out",
            "zoom-out": "zoom-out 0.2s ease-in-out",
            "fade-in": "fade-in 0.2s ease-out",
            "fade-out": "fade-out 0.2s ease-out",
            flip: "flip .5s ease-in-out",
         },
         keyframes: {
            "zoom-in": {
               "0%": { transform: "scale(0)" },
               "100%": { transform: "scale(1)" },
            },
            "zoom-out": {
               "0%": { transform: "scale(1)" },
               "100%": { transform: "scale(0)" },
            },
            "fade-in": {
               "0%": { opacity: "0" },
               "100%": { opacity: "1" },
            },
            "fade-out": {
               "0%": { opacity: "1" },
               "100%": { opacity: "0" },
            },
            flip: {
               "0%": { transform: "rotateY(0deg)" },
               "100%": { transform: "rotateY(-180deg)" },
            },
         },
      },
   },
   plugins: [],
};
