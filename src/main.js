import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount('#app')
