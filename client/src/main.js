import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'
Vue.use(HighchartsVue)

import router from '/router';

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
