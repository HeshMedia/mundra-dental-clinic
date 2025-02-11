import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access
    cors: true, // Enables CORS for external hosts
    hmr: {
      host: 'jgh1btvm5fgt.share.zrok.io',
    },
    allowedHosts: ['jgh1btvm5fgt.share.zrok.io'], // Add the domain to allowed hosts
  },
})
