// import { defineConfig } from 'vite'
// import { resolve } from 'path'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// export default defineConfig({
//   plugins: [
//     viteStaticCopy({
//       targets: [
//         {
//           src: 'assets/**/*',
//           dest: 'assets'
//         }
//       ]
//     })
//   ],
//   root: './', // Indica la cartella root del progetto
//   build: {
//     target: 'esnext',
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//       },
//     },
//   },
//   esbuild: {
//     target: 'esnext',
//     supported: {
//       'top-level-await': true
//     },
//   },
//   optimizeDeps: {
//     include: ['pixi.js'],
//     esbuildOptions: {
//       target: 'esnext'
//     }
//   },
//   base: './', 
// })


import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: 'esnext', // Usa "esnext" per abilitare tutte le nuove funzionalità, inclusi i top-level await
  },
  build: {
    //target: 'esnext', // Assicurati che anche qui sia configurato correttamente
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'], // Versioni che supportano top-level await
  },
});
