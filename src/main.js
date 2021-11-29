import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
// import cc from './directtives/customColor';
import {plugin} from './directtives/customColor';

import store from './store/index';
//createXXXXX

const app = createApp(App)

app.use(plugin, {
    useFocus: false,
    useColor: true,
    API_KEY: 234567890
})
app.use(store)
app.use(router) //<-----------
.mount('#app')
