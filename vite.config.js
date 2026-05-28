import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Swapped to the correct modern plugin

export default defineConfig({
  plugins: [react()],
  build: {
    logLevel: 'info',
    minify: 'esbuild',
  },
});