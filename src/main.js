import Vue from 'vue'
import App from './App.vue'
import vuetify from '../src/components/plugins/vuetify'
import router from '../src/components/router/index';
import { store } from './store/store'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,

}).$mount('#app')
// Vue.use(store);
