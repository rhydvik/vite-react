import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
        { find: '@', replacement: path.resolve(__dirname, '/src') },
        { find: 'components', replacement: path.resolve(__dirname, './src/components/') },
        { find: 'routes', replacement: path.resolve(__dirname, './src/routes/') },
        { find: 'reduxModules', replacement: path.resolve(__dirname, './src/reduxModules/') },
        { find: 'theme', replacement: path.resolve(__dirname, './src/theme/') },
        { find: 'views', replacement: path.resolve(__dirname, './src/views/') },
        { find: 'layouts', replacement: path.resolve(__dirname, './src/layouts/') },
        { find: 'assets', replacement: path.resolve(__dirname, './src/assets/') },
        { find: 'constants', replacement: path.resolve(__dirname, './src/constants/') },
        { find: 'types', replacement: path.resolve(__dirname, './src/types/') },
        { find: 'utilities', replacement: path.resolve(__dirname, './src/utilities/') },
        { find: 'apis', replacement: path.resolve(__dirname, './src/apis/') },

    ],
  },
  plugins: [react(), eslint()],
})
