import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import { supabase } from "./supabase";


import './style.css'

const app = createApp(App)

app.use(router)
app.use(TroisJSVuePlugin)
app.use(plugin, defaultConfig)
app.mount('#app')