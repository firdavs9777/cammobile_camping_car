import * as types from '../types';
const state = {
    open: false
};
const getters = {
    [types.CHANGE_TO_TRUE]: state =>{
        return state.open;
    },
}
const mutations = {
    [types.MUTATE_BOOLEAN] : (state) => {
        state.open  = !state.open
     
    }
}
const actions = {
    [types.COUNTER_BOOLEAN]:({commit},payload) => {
        commit(types.MUTATE_BOOLEAN,payload);
        console.log(payload);
    }
}
export default {
    state,actions,mutations,getters
}