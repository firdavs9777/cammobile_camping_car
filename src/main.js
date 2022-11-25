import Vue from 'vue'
import App from './App.vue'
import vuetify from '../src/components/plugins/vuetify'
import router from '../src/components/router/index';
import store  from './store/store'
import BaseSpinner from '../src/components/ui/BaseSpinner.vue';
import BaseDialog from '../src/components/ui/BaseDialog.vue';
import vSelect from 'vue-select'
Vue.config.productionTip = false
Vue.component('base-spinner',BaseSpinner);
Vue.component('base-dialog',BaseDialog);
Vue.component('v-select', vSelect)
new Vue({
  render: h => h(App),
  parent:this,
  store: store,
  router,
  vuetify,
}).$mount('#app')
// Vue.use(store);
