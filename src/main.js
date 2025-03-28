import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css' // Import CSS của Ant Design Vue
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(Antd) // Kích hoạt Ant Design Vue
app.use(router)
app.mount('#app')
