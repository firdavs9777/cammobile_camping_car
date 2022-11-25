<template>
    <div class="option-details-page">
        <div>
            <img src="@components/assets/variant3.png" class="step-image" />
        </div>
        <div class="option-details" v-for="(elements, idx) in options_main" :key="idx">
            <div v-for="(option_data, detail_id) in elements.data" :key="detail_id">
                <h1 class="title">{{ option_data.title }}</h1>
                <div v-for="(select, selected, element_id) in option_data" :key="element_id">
                    <div v-if="selected == 'select_data'">
                        <div v-for="(option, option_id) in select" :key="option_id" >
                           <p class="option_name" @click="show_comment(option,option_id)">{{ option }}</p> 
                           <div v-if="comment_check && option_id === comment_id && option === option_name" >
                            <input  v-if="option_data.is_quantity" type="text" placeholder="개수를 입력해주세요. (개)" class="quantity-box" />
                            <br/>
                            <input type="text" placeholder="코멘트를 입력해주세요." class="comment-box"/>
                          </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    mounted() {
        axios.post("http://cammobile.kr/q/api/hash/?c=option").then((rep) => {
            this.options_main = rep.data;
            console.log(rep.data);
        });
    },
    data() {
        return {
            options_main: null,
            selected_data: [],
            isActive: false,
            comment_check:false,
            comment_id:null,
            comment:'',
            option_name:""
        }
    },
    methods:{
        show_comment(opt,el)
        {
            let option_name = opt;
            this.option_name = option_name;
            console.log(this.option_name);
            this.comment_check = !this.comment;
            this.comment_id = el;
            console.log(opt);
        }
    }
}
</script>
<style scoped>
.step-image {
    width: 100%;
    margin-top: 10px;
    padding: 24px 0px;
}
.option-details-page {
    height: 700px;
    overflow-x: scroll;
    overflow-y: none;
}

.option-details
{
    background-color: #F0F4F7;
    text-align: left;
    padding-left: 10px;
}
.title 
{
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 25px;
letter-spacing: -0.5px;
text-transform: capitalize;
color: #222222;
}
.option_name 
{
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
letter-spacing: -1px;
color: #505050;
}
.comment-box 
{
align-items: center;
padding: 12px 10px 10px 10px;
width: 95%;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 20px;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
letter-spacing: -1.5px;
color: #777777;
margin-top: 10px;
}
.quantity-box 
{
align-items: center;
padding: 12px 20px 12px 15px;
width: 95%;
height: 38px;
margin-top: 10px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 20px;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 19px;
letter-spacing: -1.5px;
color: #777777;
}
</style>