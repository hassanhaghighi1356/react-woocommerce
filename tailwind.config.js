import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.813rem',
      },
      colors: {
        current: 'currentColor',
        'white': '#ffffff',
        'border': '#F2F6FF',
        'gray-dark': '#717186',
        'primary': '#0075FF',
        'success': '#09A65C',
        'text': '#38394B',
        'yellow': '#FFCA32',
      },
     
     
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
};
