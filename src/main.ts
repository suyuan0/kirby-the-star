import * as directives from './directives'

import { createApp,type Directive } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'

import App from './App.vue'
import router from './router'
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap'
import VueAMapLoca from '@vuemap/vue-amap-loca';
import VueAMapExtra from '@vuemap/vue-amap-extra';
import '@vuemap/vue-amap/dist/style.css'

initAMapApiLoader({
  key: 'cf84ae9cf2c81c63eeb1402f2f8eda07',
  securityJsCode: 'securityJsCode', // 新版key需要配合安全密钥使用
  Loca:{
   version: '2.0.0'
  } // 如果需要使用loca组件库，需要加载Loca
})



const app = createApp(App)

// 注册全局自定义指令
Object.keys(directives).forEach(key => {  //Object.keys() 返回一个数组，值是所有可遍历属性的key名
  app.directive(key, (directives as { [key: string ]:Directive })[key])  //key是自定义指令名字；后面应该是自定义指令的值，值类型是string
})

app.use(createPinia())
app.use(router)
app.use(VueAMap)
app.use(VueAMapLoca)
app.use(VueAMapExtra)

app.mount('#app')
