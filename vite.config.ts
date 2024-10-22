import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MoviesApp/', // Update this to match your GitHub repository name
  plugins: [react()],
});
