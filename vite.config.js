import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite 8 uses Rolldown/Oxc automatically—dropping explicit esbuild options clears the crash
});