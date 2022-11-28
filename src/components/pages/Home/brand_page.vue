<template>
    <div class="brand_section">
        <div class="brand_page">
            <img src="@assets/company_logo.png" class="brand_image"/>
            <h1 class="brand_name">ADRIA</h1>
        </div>
        <div class="brand_page">
            <img src="@assets/bailey.png" class="brand_image"/>
            <h1 class="brand_name">Bailey</h1>
        </div>
        <div class="brand_page">
            <img src="@assets/hymer.png" class="hymer"/>
            <h1 class="brand_name">Bailey</h1>
        </div>
            
        <br/>
        <div class="brand_page">
            <img src="@assets/dethleffs.png" class="hymer"/>
            <h1 class="brand_name">Bailey</h1>
        </div>
    </div>
</template>
<script>
export default {
    props:['length'],
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.brand_section 
{
    display:flex;
}
.brand_page 
{
justify-content: center;
align-items: center;
padding: 0px;
gap: 5px;
width: 89px;
min-height: 92px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 10px;
margin: 10px;
}
.brand_image
{
    width: 100%;
}
.hymer
{
    width: 100%;
    margin-top: 10px;
}
.brand_name 
{
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 13px;
letter-spacing: -0.5px;
text-transform: capitalize;
color: #505050;
}
</style>