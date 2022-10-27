<template>
    <v-app id="inspire">

        <div>
            <v-carousel cycle height="250" v-model="model" hide-delimiters>
                <v-carousel-item v-for="img in imgs" :key="img" :src="'https://picsum.photos/200/300/?image=' + img"
                    alt="no Image" class="card-img-top ">
                </v-carousel-item>
            </v-carousel>
        </div>
<div class="item_title">         
       <h1>Brand Name / Carrribean Name </h1>
       <p>난식 / km / 지역</p>

</div>

    </v-app>
</template>
<script>
export default
    {
        data() {
            return {
                model: 0,
                colors: [
                    '../../assets/trailer.jpg',
                    '../../assets',
                    '../../assets/trailer.jpg',
                    '../../assets/trailer.jpg',

                ],
                imgs: [1, 5, 4, 8, 9, 7, 6, 9]
            }
        }
    }
</script>
<style scoped>
.thumbnail {}

ul li {
    list-style-type: none;
    text-decoration: none;
}
.item_title
{
    text-align: left;
    color:black;
}
.item_title h1 
{
    font-size: 16px;
    margin: 10px;
}
.item_title p 
{
    font-size: 14px;
    margin: 10px;
}

</style>