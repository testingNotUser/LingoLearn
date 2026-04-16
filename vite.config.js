import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LingoLearn/',
  plugins: [react()],
  server: {
    host: true, // Allow external access for ngrok
    port: 5173
  }
})
