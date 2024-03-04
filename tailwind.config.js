import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        abrilfalface:["Abril Fatface", 'serif'],
        monserratalter:["Montserrat Alternates", 'sans-serif'],
        poppins:["Poppins", 'sans-serif']
      },
      backgroundImage: (theme) => ({
        'tendencia-image': "url('/fondo.png')",
      }),
      
      colors:{
        azul:{
          100:'#DEE4EE',
          200:'#A2C2F4',
          300:'#7592C1',
          500:'#56719E',
          800:'#233D65',
          900:'#0E1D35'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
