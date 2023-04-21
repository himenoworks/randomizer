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
      },
   },
   plugins: [],
};
