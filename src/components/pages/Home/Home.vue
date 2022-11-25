<template>
  <div class="home">
    <div class="banner">
      <img src="../../assets/home-banner.png" />
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
<img src="../../assets/search-bar.png" style="height:80px; width:100%;">
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
<h1>AI 추천 캠핑카 보기 </h1>
      </div>
      <button class="compare" @click.stop.prevent="upload_page()">
        <i class="ri-add-line"></i>
      </button>
      <Footer />
    </div>
    <footer></footer>
  </div>
</template>
<script>
import Footer from "../Foooter/Footer.vue";
export default {
  components: {
    Footer,
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
  overflow: scroll;
  scroll-behavior: smooth;
  height: calc(100% - 200px);
  background-color: transparent;
  overflow: hidden;
  .banner {
    height: 150px;
    padding-top: 10px;
    text-align: left;
    background-color: #16abff;
    border-bottom: 0px;
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
    padding: 12px 20px 12px 15px;
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
    justify-content: space-between;
    background-color: #16abff;
    padding-top: 10px;
    border-bottom-right-radius: 10%;
  }
  .buttons_page {
    background-color: #16abff;
  }
  .button_section1 {
    width: 206px;
    min-height: 195px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 10px;
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
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    text-align: left;
    padding: 10px;
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
</style>
