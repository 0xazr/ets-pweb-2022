import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router";

import 'flowbite';

import './index.css'

const pinia = createPinia()
const app = createApp(App)

// createApp(App).mount('#app')
app.use(pinia)
app.use(router)
app.mount('#app')
