import { App } from 'vue'
import { Pinia } from 'pinia'
import { Router } from 'vue-router'
import UsePlugins from './use-plugins'
export interface ModuleProp {
  app: App
  //   store: Pinia
  router: Router
}

export default ({ app, router }: ModuleProp) => {
  UsePlugins(app)
}
