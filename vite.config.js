import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import $ from 'jquery';

// https://vite.dev/config/
export default defineConfig({
  $: 'jquery',
  jQuery: 'jquery',
  // base: "/",
  // base: "https://linsoftw.github.io/twinTecnology",
  plugins: [
    vue(),
  ],
  //  publicPath: process.env.NODE_ENV === 'production' ? '/' + process.env.CI_PROJECT_NAME + '/' : '/',
  publicPath: process.env.NODE_ENV === "production" ? "/twinTecnology/" : "/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // devServer: {
  //   proxy: {
  //     '^/users': {
  //       target: 'http://localhost/',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //   }
  // }

})
