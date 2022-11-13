import { createApp } from 'vue'
import elementUi from 'element-plus'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from '/src/router/index'
import * as elIcon from '@element-plus/icons-vue'

let appStance=createApp(App)

for(const name in elIcon){
    appStance.component(name,elIcon[name])
}


appStance.use(elementUi)
appStance.use(router)
appStance.mount("#app")
