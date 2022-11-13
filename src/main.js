import { createApp } from 'vue'
import elementUi from 'element-plus'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from '/src/router/index'

let appStance=createApp(App)

appStance.use(elementUi)
appStance.use(router)
appStance.mount("#app")
