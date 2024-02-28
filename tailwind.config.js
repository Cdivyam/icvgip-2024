/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'iiitb-cover-1' :  "url('/assets/2022.jpg')",
        'iiitb-cover-2' :  "url('/assets/iiitb_cover2.jpg')",
      },
      spacing: {
        '72rem': '72rem',
      },
      colors: {
        'white': '#fff',
        'navigationPurple': {
          '50': '#eff4fe',
          '100': '#e2eafd',
          '200': '#cbd8fa',
          '300': '#acbcf5',
          '400': '#8a9aef',
          '500': '#6e78e6',
          '600': '#5354d8',
          '700': '#4442be',
          '800': '#39399a',
          '900': '#35377a',
          '950': '#1f1f47',
        },
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
    
  },
  plugins: [],
}