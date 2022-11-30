<template>
  <div class="my-profile">
    <div class="main_page">
      <router-link to="" class="section_motorhome">
        <button class="motorhome_button">MY 모터홈</button>
      </router-link>
      <router-link to="myTrailer" class="section_trailer">
        <button class="motorhome_button">MY 모터홈</button>
      </router-link>
    </div>
    <section class="product_info">
      <h1 class="heading">등록된 차량이 없습니다.</h1>
      <p class="paragraph">내 차 판매하기 버튼을 눌러 차량을 판매해 보세요.</p>
    </section>
    <button class="sell_button" @click="upload_page">내 차 판매하기</button>
  </div>
</template>
<script>
export default {
  // Init events & Lifecycle
  // Lifecycle
  beforeCreate() { },
  // Init injections & reactivity
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy(){
    
  },
  destroyed() { },
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
.main_page 
{
  display: flex; 
 
}
.section_motorhome 
{
  margin-top: 10px; width: 50%;
}
.section_trailer
{
  margin-top: 10px; width: 50%;
}
.my-profile {
   height: 100vh;
  background-color: #F0F4F7;

  .user_info {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 121px;
    background-color: #fff;
    color: #333;
  }

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 33px;
    letter-spacing: -0.04em;
    color: #222222;
  }

  .profile_image {
    width: 63px;
    height: 63px;
    margin-right: 10px;
  }

  button {
    margin-bottom: 10px;
    padding: 10px;
  }

  a {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #333;
    padding: 10px;
    text-decoration: none;
  }

  a:active,
  a.router-link-active {
    font-weight: 700;
    margin-top: 10px;
    width: 189px;
    max-height: 48px;
    background: #16abff;
    color: #fff;
    padding: 10px;
    border-bottom: 3px solid #3c70bf;
    border-radius: 15px 15px 0px 0px;
    cursor: pointer;
  }

  .product {
    display: flex;
  }

  .product_image {
    width: 50%;
  }

  .trailer {
    cursor: pointer;
    pointer-events: visible;
    height: 105px;
    border-radius: 10px;
  }

  ul {
    padding-left: 10px;
    padding-top: 10px;
  }

  li {
    background-color: #a8c2e9;
    list-style: none;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-right: 5px;
  }

  .product_details {
    width: 50%;
    margin-top: 20px;
  }

  .company_name {
    justify-content: center;
    margin-top: 20px;
  }

  .divider {
    width: 100%;
    height: 2px;
    color: #333;
    margin-bottom: 10px;
  }

  .compare {
    @include upload_button;
    height: 60px;
    width: 60px;
    position: absolute;
    bottom: 150px;
    right: 20px;
    border-radius: 50%;
  }

  i {
    font-size: 30px;
  }

  .product_description {
    display: flex;
    padding-right: 15px;
    padding-left: 15px;
    justify-content: space-between;
  }

  .product_info {
    justify-content: center;
    margin: auto;
    height: 200px;
    width: 100%;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .heading {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    text-transform: uppercase;
    color: #16abff;
  }

  .paragraph {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #505050;
  }

  .sell_button {
    padding: 5px 0px;
    width: 196px;
    height: 45px;
    text-align: center;
    background: #16ABFF;
    border-radius: 50px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 350;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
}
</style>
