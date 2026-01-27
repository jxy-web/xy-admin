import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import './element';
import i18n from './language'
import echarts from './util/echarts';
import './style/element.reset.scss'
import './style/index.scss'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
