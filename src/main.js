import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import ElementUI from 'element-ui';
import echarts from 'echarts';
require('echarts-wordcloud');
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.css'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
