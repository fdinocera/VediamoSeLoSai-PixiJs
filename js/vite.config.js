// export default defineConfig({
//   esbuild: {
//     supported: {
//       'top-level-await': true
//     },
//   },
//   optimizeDeps: {
//     include: ['pixi.js'],
//   },
//   base: './', // Imposta il percorso base per tutte le risorse 
//               //altre configurazioni

// });



import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/**/*',
          dest: 'assets'
        }
      ]
    })
  ],
  root: './', // Indica la cartella root del progetto
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  optimizeDeps: {
    include: ['pixi.js'],
  },
  base: './',
})
