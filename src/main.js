import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'


//createXXXXX

createApp(App)
.use(router) //<-----------
.mount('#app')
