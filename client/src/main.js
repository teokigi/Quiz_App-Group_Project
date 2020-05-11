import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import Auth from '@okta/okta-vue'

const keys = require('../keys.js');


Vue.use(Auth, {
  issuer: keys.okta.issuer,
  clientId: keys.okta.clientId,
  redirectUri: 'http://localhost:8080',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Auth.handleCallback()}
  ]
})

Vue.use(HighchartsVue)

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
