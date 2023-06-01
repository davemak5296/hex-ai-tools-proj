/** @type {import('vite').UserConfig} */
import inject from '@rollup/plugin-inject';
import { resolve } from 'path';

export default {
  base: '/hex-ai-tools-proj/',
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pricing/index.html')
      }
    }
  }
}