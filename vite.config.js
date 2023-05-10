/** @type {import('vite').UserConfig} */
import inject from '@rollup/plugin-inject';

export default {
  base: '/hex-ai-tools-proj/',
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}