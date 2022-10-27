<template>
<div>
    <button class="button" @click="asyncIncrement({by: 50, duration: 500})">Increment Asyc</button>
    <button class="button" @click="asyncDecrement({by: 50, duration: 500})">Decrement Async</button>
</div>
</template>
<script>
import { mapActions } from 'vuex';
import * as types from '../../../store/types';
export default 
{
    methods:{
        ...mapActions({
            asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
            asyncDecrement: types.COUNTER_DECREMENT_ASYNC,
        })
    }
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
}
</style>