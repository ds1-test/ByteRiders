import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
// FIX: Import 'process' to provide correct type definitions for process.cwd() and resolve TS error.
import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // to support process.env in client-side code
    define: {
      'process.env': env
    }
  };
});
