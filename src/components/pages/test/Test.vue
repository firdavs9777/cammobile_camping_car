<template> 
<div>
<h1>Vuex Test</h1>
<Result/>
<AnotherResult/>
<hr>
<Counter/>
<AnotherCounter/>
<hr>
<input type="text" v-model="value">
<p>{{ value }}</p>
</div>
</template>
<script>
import Counter from './Counter.vue';
import AnotherCounter from './AnotherResult.vue';
import Result from './Result.vue';
import AnotherResult from  './AnotherResult.vue';
import * as types from '../../../store/types';
export default {
    computed:{
        value:{
            get(){
                return this.$store.getters[types.VALUE]
            },
            set(value)
            {
                this.$store.dispatch(types.UPDATE_VALUE,value);
            }
        },
    },
        methods:{
            updateValue(event){
                this.$store.dispatch(types.UPDATE_VALUE,event.target.value)
            }
        },
        components:{
            Counter,
            AnotherCounter,
            Result,
           AnotherResult,
        }
    }
</script>