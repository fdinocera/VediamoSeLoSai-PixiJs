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
