import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './modules/authentication/index';
import options from './modules/options/index';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
     authentication: authentication,
     options:options
    }
});
export default store;