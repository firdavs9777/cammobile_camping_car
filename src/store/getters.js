import * as types from './types';
export default {
    [types.VALUE]: state =>{
        return state.value
    },
    [types.BOOLEAN_VALUE]: state => {
        return state.btn
    }
}