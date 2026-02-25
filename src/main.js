import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/scss/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
