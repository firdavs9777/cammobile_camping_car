import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication/index';
import upload_data from './modules/upload_data/index';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
     authentication: authentication,
     upload_data: upload_data
    }
});
export default store;