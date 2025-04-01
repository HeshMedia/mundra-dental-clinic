import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    cors: true, 
    hmr: true  
  },
  proxy: {
    '/api': 'http://localhost:3001',
  }
})
