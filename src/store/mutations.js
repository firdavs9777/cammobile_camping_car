import * as types from './types';
export default {
    [types.MUTATE_UPDATE_VALUE] :(state,payload) =>{
        state.value = payload;
    },
    [types.MUTATE_UPDATE_BOOLEAN]: (state,payload) =>{
        state.btn = payload;
        console.log(state.btn);
    }
}