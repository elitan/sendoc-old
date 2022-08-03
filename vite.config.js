import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default () => {
  return defineConfig({
    plugins: [
      react({
        jsxRuntime: 'classic'
      }),
      ssr({
        prerender: true
      })
    ]
  })
}
