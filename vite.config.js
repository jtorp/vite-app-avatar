import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      //testing apis stuff
      "/api/v1": "http://localhost:5000/",
    }
  }
  
})
