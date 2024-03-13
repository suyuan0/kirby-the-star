import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/attachment': {
        target: 'http://192.168.18.6:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/attachment/, '/attachment')
      }
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: `@import './src/assets/less/style.less';`,
        javascriptEnabled: true
      },
      sass: {}
    }
  }
})
