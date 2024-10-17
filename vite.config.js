import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://not.webyourvyavsay.com', 
    },
  },
  plugins: [react()],
})
