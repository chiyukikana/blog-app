import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    base: env.VITE_BASE_URL,
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_NAME,
          },
        },
        minify: false,
      }),
    ],
  }
})
