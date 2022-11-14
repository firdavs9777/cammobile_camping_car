<template>
  <div class="my-profile">
    <button>
      <router-link to=""> MY 모터홈 </router-link>
    </button>
    <button>
      <router-link to="myTrailer"> MY 트레일러 </router-link>
    </button>
    <section>
      <ul>
        <li>
          <div class="product">
            <div class="product_image">
              <img src="../../assets/trailer.jpg" class="trailer" @click="imageClicked()" />
            </div>
            <div class="product_details">
              <h1>Product title</h1>
              <p>Product description</p>
              <p>Product price</p>
              <p class="company_name">Company name</p>
            </div>
            <br />
          </div>
      
          <div class="product_description">
            <h1>캠핑 카 ㅋㅋㅋ</h1>
            <button @click.stop.prevent="edit_page()">
              <i class="ri-edit-box-line"></i>
            </button>
          </div>

          <p class="product_info">Product Price | km | 22.354.354 원</p>
        </li>
        <button class="compare" @click.stop.prevent="upload_page()">
          <i class="ri-add-line"></i>
        </button>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  // Init events & Lifecycle 
  // Lifecycle 
  beforeCreate(){
    
  },
  // Init injections & reactivity 
  created(){

  },
  beforeMount()
  {

  },
  mounted()
  {

  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){

  },
  methods: {
    upload_page() {
      this.$router.push("upload_page");
      // this.$router.push("/trailer_search");
    },
    edit_page() {
      this.$router.push("edit_motor/id");
    },
  },
};
</script>
<style scoped lang="scss">
.my-profile 
{
  button {
  margin-bottom: 10px;padding: 10px;
  }
  a {
  color: #333;padding: 20px;text-decoration: none;
  }
  a:active,
  a:hover,
  a.router-link-active {
  font-weight: 700;border-bottom: 1px solid black;cursor: pointer;
  }
  .product {
  display: flex;
   }
  .product_image {
  width: 50%;
   }
   .trailer {
  cursor: pointer;pointer-events: visible;height: 105px;border-radius: 10px;
  }
  ul {  
    padding-left: 10px;padding-top: 10px;
  }
  li {
  background-color: #a8c2e9;list-style: none;padding-top: 10px;padding-left: 10px;padding-bottom: 10px;margin-bottom: 10px;border-radius: 10px;margin-right: 5px;
  }
  .product_details {
    width: 50%;margin-top: 20px;
  }
  .company_name {
    justify-content: center;margin-top: 20px;
  }
   .divider {
    width: 100%;height: 2px;color: #333;margin-bottom: 10px;
  }
  .compare {
   @include upload_button;
   height: 60px;
   width:60px;
   position: absolute;
  bottom: 150px;
  right: 20px;
  border-radius: 50%;
  }
  i {
  font-size: 30px;
  }
  .product_description {
  display: flex;padding-right: 15px;padding-left: 15px;justify-content: space-between;
  }
  .product_info {
  padding-left: 15px;color: #333;
  }
}
</style>
