import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerStore } from './pinia_store'

import { createPersistedState } from 'pinia-plugin-persistedstate'
import { parse, stringify } from 'zipson'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()
pinia.use(
  createPersistedState({
    serializer: {
      deserialize: parse,
      serialize: stringify,
    },
  })
)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(pinia)
app.use(ElementPlus)
app.use(registerStore)

app.mount('#app')

// console.log(import.meta.env)

import 'bootstrap/dist/js/bootstrap.js'
