import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '_styles', replacement: '/src/_styles' },
      { find: '_components', replacement: '/src/_components' },
      { find: '_apollo', replacement: '../src/_apollo' },
      { find: '_mui', replacement: '/src/_mui' },
      { find: '_routes', replacement: '/src/_routes' },
      { find: '_shared', replacement: '/src/_shared' },
      { find: '_shared/_components', replacement: '/src/_shared/_components' },
      { find: '_componentslib', replacement: '/src/_componentslib' },
      { find: '_muitheming', replacement: '/src/_muitheming' },
      { find: '_utilslib', replacement: '/src/_utilslib' },
      { find: '_serviceslib', replacement: '/src/_serviceslib' },
      { find: '_typeslib', replacement: '/src/_typeslib' },
      { find: '_context', replacement: '/src/_context' },
      { find: 'ROUTES', replacement: '/src/ROUTES' },
      { find: 'CONSTS', replacement: '/src/CONSTS' },
      { find: 'API_ENDPOINTS', replacement: '/src/API_ENDPOINTS' },
      { find: '_zIndexMap', replacement: '/src/_zIndexMap' },
      { find: "@test-utils",  replacement: "/test-utils" }
    ],
  },
});
