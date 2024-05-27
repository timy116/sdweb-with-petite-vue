import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        indicator: resolve(__dirname, 'indicator.html'),
        inquireAdvance: resolve(__dirname, 'inquire_advance.html')
      },
    },
  }
})
