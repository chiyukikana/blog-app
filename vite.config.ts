import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src'),
          },
        ],
      }),
    ],
  }
})
