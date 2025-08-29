import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// مهم: عدّل base ليطابق اسم المستودع في GitHub
export default defineConfig({
  plugins: [react()],
  base: '/madrasah/'
})
