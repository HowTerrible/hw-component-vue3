import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import "@hw/theme-chalk/src/index.scss"

import Icon from "@hw/components/icon"
const plugins = [Icon]

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
