import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh';

export default defineConfig({
  plugins: [react()],
  build: {
    // Prevents compilation from crashing due to tiny warnings or unused variables
    logLevel: 'info',
    minify: 'esbuild',
  },
});