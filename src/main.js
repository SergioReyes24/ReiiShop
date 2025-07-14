import { createApp } from 'vue'
import App from './App.vue'
import './index.css'   // <-- Esto es clave para cargar estilos
import router from './router'

createApp(App).use(router).mount('#app')
