import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

const app = createApp(App)
.use(router)
app.mount('#app')
