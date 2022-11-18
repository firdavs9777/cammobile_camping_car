<template>
  <div class="home">
    <div class="banner">
      <h1>Camping car services</h1>
      <input
        type="text"
        class="search-input"
        placeholder="차량을 검색해주세요"
      />
    </div>
    <div class="main_buttons">
      <button class="button_section1">
        <h1>My 캠핑카 찾기</h1>
        <p>나와 맞는 중고차 잦기</p>
        <i class="ri-user-line"></i>
      </button>
    

      <div class="button_section2">
        <router-link to="trailer">
          <button class="motor_button1" >
          트레일러 찾기
          <i class="ri-arrow-right-line"></i>
          <i class="ri-arrow-right-line"></i>
        </button>
       
        </router-link>
        <br />
        <router-link to="motorhome">
          <button class="motor_button2">
          모터홈
          <i class="ri-arrow-right-line"></i>
          <i class="ri-arrow-right-line"></i>
        </button>
        </router-link>
      </div>
    </div>
   
    <div>
      <div class="samples">
        <img src="../../assets/motor-home.png" class="sample_image" />
        <h1>Adria Babab</h1>
        <p>20년12월(20년식) / 22.000km / 경기</p>
        <h2>회망가격: 23.100.000 원</h2>
        <button>자세하기 보기</button>
      </div>
      <!-- <div class="samples">
        <img src="../../assets/motor-home.png" class="sample_image" />
        <h1>Adria Babab</h1>
        <p>20년12월(20년식) / 22.000km / 경기</p>
        <h2>회망가격: 23.100.000 원</h2>
        <button>자세하기 보기</button>
      </div>
      <div class="samples">
        <img src="../../assets/motor-home.png" class="sample_image" />
        <h1>Adria Babab</h1>
        <p>20년12월(20년식) / 22.000km / 경기</p>
        <h2>회망가격: 23.100.000 원</h2>
        <button>자세하기 보기</button>
      </div>
      <div class="samples">
        <img src="../../assets/motor-home.png" class="sample_image" />
        <h1>Adria Babab</h1>
        <p>20년12월(20년식) / 22.000km / 경기</p>
        <h2>회망가격: 23.100.000 원</h2>
        <button>자세하기 보기</button>
      </div> -->
      <p>{{ message }}</p>
      <button class="compare" @click.stop.prevent="upload_page()">
          <i class="ri-add-line"></i>
        </button>
<Footer/>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import Footer from '../Foooter/Footer.vue';
export default {
  components: { 
   
    Footer , 
  },
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
      this.$router.push("upload_form");
      // this.$router.push("/trailer_search");
    },
    reverseMessage: function () {
      this.message = this.message.split(" ").reverse().join();
    },
  },
  data() {
    return {
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
<style scoped  lang="scss">
// Sass Tree Design
.home { overflow: scroll;scroll-behavior:smooth;height: calc(100% - 200px);background-color: transparent;
  .banner{height: 150px;padding-top: 10px;text-align: left;background-color: #faf7f0;}
  h1 {display: inline-flex;}
  .search-input {height: 40px;width: 90%;border: 1px solid #ccc;border-radius: 20px;color: #333;padding: 15px;margin-left: 20px;margin-top: 10px;}
  .search-input:focus {border-color: #3d008d;background-color: #faf6ff;outline: none;color: #333;}
  .main_buttons {display: flex;justify-content: space-between;}
  .button_section1 {margin-top: 10px;width: 70%;min-height: 55px;padding: 10px;border-radius: 20px;margin-top: 10px;color: #fff;font-size: 14px;background-color: #387fba;}
  h1 {padding-bottom: 10px;font-size: 18px;}
  p {font-size: 15px;padding-bottom: 10px;}
  i { font-size: 22px;margin-top: 20px;}
  .button_section2 {width: 40%;padding-left: 10px;}
  .motor_button1 {width: 100%;height: 55px;background-color: #387fba;color: #fff;min-height: 55px; font-size: 16px; padding: 10px; border-radius: 20px;margin-top: 10px;}
  i {padding-top: 20px;font-size: 32px;}
  .motor_button2 {margin-top: 10px;width: 100%;height: 55px;background-color: #387fba;color: #fff;min-height: 55px;padding: 10px;border-radius: 20px;margin-top: 10px;font-size: 16px;padding: 10px;}
   i {padding-top: 20px;font-size: 32px;}
  .samples {margin-bottom: 10px;border-bottom: 1px solid black;text-align: left;padding: 10px;}
  .sample_image {width: 100%;}
  h1 {font-size: 18px;}
  button { height: 35px;background-color: #308d46;color: #fff;padding: 10px;border-radius: 20px;margin-top: 10px;}
}
.compare {
  
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

</style>
