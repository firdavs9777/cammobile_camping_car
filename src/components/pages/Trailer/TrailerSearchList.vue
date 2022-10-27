<template>
  <div class="search_trailer">
    <h1>Trailer Search Result Component</h1>
    <section>
      <ul>
        <li>
            <div class="product">
           <div class="product_image">
            <img src="../../assets/trailer.jpg" class="trailer" @click="imageClicked()"/>
        </div>
        <div class="product_details">
            <h1>Product title</h1>
          <p>Product description</p>
          <p>Product price</p>
          <p class="company_name">Company name</p>
        </div>
        <br>
        <div>
        </div>
    </div>
    <hr class="divider">
        <h1>캠핑 카 ㅋㅋㅋ</h1>
        <p>Product Price | km  | 22.354.354 원</p>
    
        </li>
        <li>
            <div class="product">
           <div class="product_image">
            <img src="../../assets/trailer.jpg" class="trailer"/>
        </div>
        <div class="product_details">
            <h1>Product title</h1>
          <p>Product description</p>
          <p>Product price</p>
          <p class="company_name">fdgkjdfsh</p>
        </div>
        <br>
        <div>
        </div>
    </div>
    <hr class="divider">
        <h1>Product title</h1>
        <p>Product Price</p>
    
        </li>
        <li>
            <div class="product">
           <div class="product_image">
            <img src="../../assets/trailer.jpg" class="trailer" />
        </div>
        <div class="product_details">
            <h1>Product title</h1>
          <p>Product description</p>
          <p>Product price</p>
          <p class="company_name">fdgkjdfsh</p>
        </div>
        <br>
        <div>
        </div>
    </div>
    <hr class="divider">
        <h1>Product title</h1>
        <p>Product Price</p>
    
        </li>
        <li>
            <div class="product">
           <div class="product_image">
            <img src="../../assets/trailer.jpg" class="trailer" />
        </div>
        <div class="product_details">
            <h1>Product title</h1>
          <p>Product description</p>
          <p>Product price</p>
          <p class="company_name">fdgkjdfsh</p>
        </div>
        <br>
        <div>
        </div>
    </div>
    <hr class="divider">
        <h1>Product title</h1>
        <p>Product Price</p>
    
        </li>
        <li>
            <div class="product">
           <div class="product_image">
            <img src="../../assets/trailer.jpg" class="trailer" />
        </div>
        <div class="product_details">
            <h1>Product title</h1>
          <p>Product description</p>
          <p>Product price</p>
          <p class="company_name">fdgkjdfsh</p>
        </div>
        <br>
        <div>
        </div>
    </div>
    <hr class="divider">
        <h1>Product title</h1>
        <p>Product Price</p>
    
        </li>


      </ul>
      <button class="compare" @click="Compare()">비교</button>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    Compare() {
      alert("Compare button Clicked");
    },
    imageClicked(){
        this.$router.push("/trailer_thumbnail");
    }
  },
};
</script>
<style scoped>
.search_trailer {
  overflow: scroll;
  scroll-behavior: smooth;
  max-height: 720px;
  width: 100%;
}
section {
  justify-content: right;
  text-align: left;
}
.trailer {
    cursor: pointer;
  pointer-events: visible;
  height: 105px;
  border-radius: 10px;
}
.compare {
  width: 60px;
  height: 60px;
  background: #2d9aff;
  position: absolute;
  bottom: 150px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #ffff;
}
ul
{
    padding-left: 10px;
    padding-top: 10px;
}
ul li 
{
    background-color: #A8C2E9;
    list-style: none;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-right: 5px;
}
ul li .product
{
   display: flex;

}
.product_image
{
    width: 50%;
}
.product_details 
{
    width: 50%;
    margin-top: 20px;

}
.company_name
{
    justify-content: center;
    margin-top:20px;
} 
.divider 
{
    width: 100%;
    height: 2px;
    color:#333;
    margin-bottom: 10px;
}
</style>
