import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { registerPlugins } from '@/plugins'
import "@/styles/main.css"

router.beforeEach((to, from, next) => {
    next();
})

import not_found from '@/components/commons/not_found.vue'


const app = createApp(App)
app.component("not_found", not_found);

registerPlugins(app)

app.mount('#app')
