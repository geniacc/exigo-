import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This tells Vite your site lives inside the sub-folder /exigo-/
  base: '/exigo-/',
  plugins: [react()],
});