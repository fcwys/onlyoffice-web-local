import type { App } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/main.css'
export default (app: App) => {
  app.use(ArcoVue)
}
