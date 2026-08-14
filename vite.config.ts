import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev
export default defineConfig({
  base: '/birth-day-surprise/',
  plugins: [react(), tailwindcss()],
})
