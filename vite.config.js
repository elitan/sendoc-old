import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react({
        jsxRuntime: 'classic'
      })
    ],
    define: {
      'process.env.NODE_ENV': `"${mode}"`
    }
  })
}
