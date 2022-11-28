<template>
  <div class="home">
    <div class="banner_main_page">
      <img src="../../assets/home-banner.png" style="height: 100%;width: 100%;"/>
    </div>
    <div class="buttons_page">
      <input
        type="text"
        class="search-input"
        placeholder="원하는 캠핑카를 검색해보세요."
      />
    </div>
    <div class="main_buttons">
      <button class="button_section1">
        <h1 class="section1_header">나에게 맞는 캠핑카</h1>
        <br />
        <img
          src="../../assets/search-bar.png"
          class="search_bar"
        />
        <p>
          총 10개의 질문 형식으로,<br />
          나와 가장 잘 맞는 캠핑카를 <br />
          확인해 보세요!
        </p>
      </button>
      <div class="button_section2">
        <router-link to="trailer">
          <button class="motor_button1">
            <div>
              <img
                src="../../assets/motor-home-image.png"
                class="motorhome_image"
              />
            </div>
            <div>
              <h1 class="motorhome-header">모터홈</h1>
              <br />
              <p class="motorhome_search">모터홈 검색하기</p>
            </div>
          </button>
        </router-link>
        <br />
        <router-link to="motorhome">
          <button class="motor_button2">
            <div>
              <img
                src="../../assets/trailer-main.png"
                class="motorhome_image"
              />
            </div>
            <div>
              <h1 class="motorhome-header">트레일러</h1>
              <br />
              <p class="motorhome_search">트레일러 검색하기</p>
            </div>
          </button>
        </router-link>
      </div>
    </div>
    <div>
      <div class="samples">
        <h1>AI 추천 캠핑카 보기</h1>
        <section v-for="(el, el_id) in 3" :key="el_id">
          <camping_suggest></camping_suggest>
        </section>
      </div>
      <div class="brands">
        <h1 class="brand_heading">브랜드 별 검색</h1>
        <brand_page :length="length"></brand_page>
        <v-pagination v-model="page" :length="length"></v-pagination>
      </div>

      <div class="banner">
        <banner></banner>
      </div>
      <div class="plus">
        <button class="compare" @click.stop.prevent="upload_page()">
        <i class="ri-add-line"></i>
      </button>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import Footer from "../Foooter/Footer.vue";
import camping_suggest from "./camping_suggest.vue";
import brand_page from "./brand_page.vue";
import banner from "./banner.vue";
export default {
  components: {
    Footer,
    camping_suggest,
    brand_page,
    banner,
  },
  // Init events & Lifecycle
  // Lifecycle
  // beforeCreate(){
  // },
  // // Init injections & reactivity
  // created(){

  // },
  // beforeMount()
  // {

  // },
  // mounted()
  // {

  // },
  // beforeUpdate(){

  // },
  // updated(){

  // },
  // beforeDestroy(){

  // },
  // destroyed(){

  // },
  methods: {
    upload_page() {
      this.$router.push("main_form");
      // this.$router.push("/trailer_search");
    },
    reverseMessage: function () {
      this.message = this.message.split(" ").reverse().join();
    },
  },
  data() {
    return {
      length: 6,
      page: 1,
      menu: false,
      message: "Hello Vue.js!",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      todos: [
        { text: "Learn JavaScript", name: "Firdavs" },
        { text: "Learn Vue", name: "Micheal" },
        { text: "Build something awesome", name: "Tomson" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
// Sass Tree Design
.home {
  height: calc(100% - 200px);
  background-color: #f0f4f7;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
.banner {
  width: 100%;
  text-align: left;
}
.banner_main_page
{
  width: 100%;
  background-color:#16abff;
}

h1 {
  display: inline-flex;
}

.search-input {
  height: 37px;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: #333;
  margin-bottom: 20px;
  padding: 15px 10px 15px 15px;
  background-color: #ffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.search-input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
  color: #333;
}

.main_buttons {
  display: flex;
  padding-top: 10px;
  border-bottom-right-radius: 12%;
}

.buttons_page {
  background-color: #16abff;
}

.button_section1 {
  width: 206px;
  min-height: 205px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: #333;
  font-size: 14px;
  background-color: #ffff;
}

.section1_header {
  color: #16abff;
  margin-bottom: 10px;
  font-style: normal;
  font-family: "Noto Sans KR";
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
}

p {
  font-size: 14px;
  padding-bottom: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  color: #505050;
}

i {
  font-size: 22px;
  margin-top: 20px;
}

.button_section2 {
  width: 45%;
  padding-right: 10px;
  min-height: 190px;
}

.motor_button1 {
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 91px;
  background-color: #ffff;
  min-height: 55px;
  font-size: 16px;
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
}

.motorhome-header {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;
  text-align: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #16abff;
}

.motorhome_search {
  text-decoration: none;
  padding-left: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  color: #505050;
}

i {
  padding-top: 20px;
  font-size: 32px;
}

.motor_button2 {
  display: flex;
  text-decoration: none;
  width: 100%;
  height: 89px;
  background-color: #ffff;
  min-height: 55px;
  font-size: 16px;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 10px;
}

i {
  padding-top: 20px;
  font-size: 32px;
}

.samples {
  text-align: left;
  margin-bottom: 10px;
  padding: 20px;
}
.samples h1 {
  padding-bottom: 20px;
}

.sample_image {
  width: 100%;
}

button {
  height: 35px;
  background-color: #308d46;
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
}

i {
  font-size: 30px;
}

.motorhome_image {
  height: 40px;
  width: 46px;
}

a {
  text-decoration: none;
}
.brand_heading {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -2px;
  color: #222222;
}
.brands {
  display: flexbox;
  text-align: left;
}
.search_bar 
{
  height: 90px; width: 100%;
} 
.plus 
{
  position: relative;
  width: 100%;
  text-align: left;
  justify-content: right;
  text-align: right;
  height: 50px;
  margin-left: 20px;
  margin-right: 10px;
  padding-right: 20px;
  margin-bottom: 20px;
}
.compare 
{
  text-align: center;
  height: 45px;
  width:60px;
  border-radius: 50px;
}
</style>
