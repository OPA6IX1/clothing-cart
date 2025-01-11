import withMT from "@material-tailwind/react/utils/withMT";
// const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your content paths here
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts}",
    // flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1565C0',
      }, 
      
      fontfamily: {
        mukta: ['Mukta', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    // flowbite.plugin(),
  ],
});
