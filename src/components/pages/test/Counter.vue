<template> 
<div>
    <button class="button" @click="increment(100)">Increment 100</button>
    <button class="button" @click="decrement(50)">Decrement 50</button>
    <button class="button" @click="counterBoolean(false)"> hello</button>
    <p>{{ value }}</p>
</div>
</template>
<script>
import { mapActions } from 'vuex';
import * as types from '../../../store/types';
export default {
    computed:{
        value:{
            get(){
                return this.$store.getters[types.BOOLEAN_VALUE]
            },
            set()
            {
                this.$store.dispatch(types.MUTATE_UPDATE_BOOLEAN);
            }
        },
    },
    methods:{
        ...mapActions({
            increment: types.COUNTER_INCREMENT,
            decrement: types.COUNTER_DECREMENT,
            counterBoolean: types.COUNTER_BOOLEAN
        })
    },
}
</script>
<style scoped>
.button 
{
    height:30px;
    width:250px;
    color:#333;
    background-color: aqua;
    padding: 10px;
    margin:10px;
}
</style>