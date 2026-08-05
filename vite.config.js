import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Импортируем плагин v4
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Добавляем в массив плагинов
  ],
})
