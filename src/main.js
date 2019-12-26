import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index'
import service from '@/services/app.service'

console.log(Vue.prototype.service)
Vue.prototype.service = service
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router(),
  mode: 'history' // 默认 hash 模式
}).$mount('#app')
