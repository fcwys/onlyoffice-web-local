import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return {
      base: './',
      server: {
        port: parseInt(env.VITE_PORT) || 3000,
        host: '0.0.0.0',
      },
      build: {
        outDir: 'dist',
      },
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
        vue(),
        vueJsx(),
        vueDevTools(),
        viteCompression({
          filter: /\.(js|css|json|txt|ico|svg|wasm)(\?.*)?$/i, // 需要压缩的文件
          threshold: 1024, // 文件容量大于这个值进行压缩
          algorithm: 'gzip', // 压缩方式
          ext: 'gz', // 后缀名
          deleteOriginFile: false, // 压缩后是否删除压缩源文件
        }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    }
})

