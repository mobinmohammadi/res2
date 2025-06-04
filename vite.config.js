import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  theme: {
    extend: {
      boxShadowColor: {
        "demi" : 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      screens : {
        "xs" : "528px",
        "x": "370px"
      },
      fontSize : {
        "x" : "10px"
      },
      boxShadow : {
        'shadow-normal' : '0px 1px 10px rgba(0,0,0,0.05)'
      },
      borderRadius : {
        '4xl' : '2rem'
      },
      border:{
        border: "1px solid green"
      },
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" :"DanaMedium",
        "DanaDemiBold" : "DanaDemiBold",
        "MorabbaLight" : "MorabbaLight",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaBold" : "MorabbaBold"
      },
    },
  },
})
