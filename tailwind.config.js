/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{ts,tsx}"],
   theme: {
      fontFamily: {
         Barlow: ["Barlow"],
         Kanit: ["Kanit"],
      },
      extend: {
         fontFamily: {},
         textColor: {
            primary: "#FFFFFF",
            secondary: "#7D8590",
         },
         backgroundColor: {
            primary: "#0D1117",
            secondary: "#161B22",
         },
      },
   },
   plugins: [],
};
