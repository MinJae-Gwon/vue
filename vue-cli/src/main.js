import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 위 아래 동일
// new Vue ({
  // el: '#app',
  // render: h => h(App),
// })

// render는 중급에서 알아보자
