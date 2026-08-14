import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // or vue, depending on your setup

export default defineConfig({
  base: '/birth-day-surprise/',
  plugins: [react()],
})
