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
    <div class="slideshow">
      <!-- carousel control buttons -->
      <button class="slide-btn slide-btn-1"></button>
      <button class="slide-btn slide-btn-2"></button>
      <button class="slide-btn slide-btn-3"></button>
      <button class="slide-btn slide-btn-4"></button>
      <!-- carousel wrapper which contains all images -->
      <div class="slideshow-wrapper">
        <div class="slide">
          <img class="slide-img" src="../../assets/motor-home.png" />
        </div>
        <div class="slide">
          <img class="slide-img" src="../../assets/trailer.jpg" />
        </div>
        <div class="slide">
          <img class="slide-img" src="../../assets/motor-home.png" />
        </div>
        <div class="slide">
          <img class="slide-img" src="../../assets/trailer.jpg" />
        </div>
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
      </div>
      <div class="samples">
        <img src="../../assets/motor-home.png" class="sample_image" />
        <h1>Adria Babab</h1>
        <p>20년12월(20년식) / 22.000km / 경기</p>
        <h2>회망가격: 23.100.000 원</h2>
        <button>자세하기 보기</button>
      </div>
      <p>{{ message }}</p>

    </div>
  </div>
</template>
<script>
export default {
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
  methods: {
    reverseMessage: function () {
      this.message = this.message.split(" ").reverse().join();
    },
  },
};
</script>
<style scoped>
.home 
{
  overflow: scroll;
  scroll-behavior:smooth;
  height: calc(100% - 200px);
}
header {
 
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #faf7f0;
}
.icon-main {
  width: 160px;
  height: 60px;
}
.icon-main h1 {
  display: inline-flex;
}
.icon-main i {
  padding-top: 20px;
  font-size: 32px;
}

ul {
  display: flex;
  width: 100%;
}
li {
  display: inline;
  padding: 10px;
}
.title-name {
  padding: 10px;
  font-size: 30px;
  color: #333;
}
.banner {
  height: 150px;
  padding-top: 10px;
  text-align: left;
  background-color: #faf7f0;
}
.banner h1 {
  padding-left: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}
.banner i {
  margin-top: 12px;
  font-size: 30px;
}
.banner_image {
  width: 100%;
  padding-top: 10px;
}
.search-input {
  height: 40px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: #333;
  padding: 15px;
  margin-left: 20px;
  margin-top: 10px;
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
}
.button_section1 {
  margin-top: 10px;
  width: 70%;
  min-height: 55px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  background-color: #387fba;
}
.button_section1 h1 {
  padding-bottom: 10px;
  font-size: 18px;
}
.button_section1 p {
  font-size: 15px;
  padding-bottom: 10px;
}
.button_section1 i {
  font-size: 22px;
  margin-top: 20px;
}
.motor_button1 {
  width: 100%;
  height: 55px;
  background-color: #387fba;
  color: #fff;
  min-height: 55px;
  /* clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 37%, 75% 0); */
  font-size: 16px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
}
.motor_button2 {
  margin-top: 10px;
  width: 100%;
  height: 55px;
  background-color: #387fba;
  color: #fff;
  min-height: 55px;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 16px;
  padding: 10px;
}
.motorhome {
  height: 150px;
  width: 120px;
  border-radius: 30px;
  margin-top: 20px;
  padding: 10px;
  background-color: transparent;
}
.button_section2 {
  width: 40%;
  padding-left: 10px;
}
.inspire {
  padding-top: 10px;
  height: 58vh;
}
.carousel-content {
  position: absolute;
  /*to center the content horizontally and vertically*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 50;
}
.carousel-heading {
  font-size: 3rem;
  color: #308d46;
  margin-bottom: 1rem;
}
/*----- end of carousel content stylings ----- */

/* ----- slideshow stylings ----- */
.slideshow {
  padding-top: 10px;
  height: 100%;
  overflow: hidden; /* to hide slides in x-direction */
  position: relative;
}
/* wrapper which wraps all the slideshow images stylings */
.slideshow-wrapper {
  display: flex;
  /* We give it width as 400% because we are making a 
               4 image carousel. If you want to make for example, 
               5 images carousel, then give width as 500%. */
  width: 400%;
  height: 100%;
  position: relative;
  /* you can change the animation settings from below */
  animation: slideshow 20s infinite;
}
/* define width and height for images*/
.slide {
  width: 100%;
  height: 100%;
}
.slide-img {
  width: 100%;
  height: 100%;
}
/* @keyframes are used to provide animations
           We make these settings for 4 image carousel.
           Make modification according to your needs. */
@keyframes slideshow {
  0% {
    left: 0;
  }
  10% {
    left: 0;
  }
  15% {
    left: -100%;
  }
  25% {
    left: -100%;
  }
  30% {
    left: -200%;
  }
  40% {
    left: -200%;
  }
  45% {
    left: -300%;
  }
  55% {
    left: -300%;
  }
  60% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -100%;
  }
  85% {
    left: -100%;
  }
  90% {
    left: 0%;
  }
}
/* ----- end of slideshow stylings ----- */

/* ----- carousel control buttons stylings ----- */
.slide-btn {
  background-color: #bbb;
  border-radius: 50%;
  border: 0.2rem solid #d38800;
  width: 1.2rem;
  height: 1.2rem;
  outline: none;
  cursor: pointer;
  /* stylings for positioning the buttons at
               the bottom of the carousel */
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
}
/* As we provide position as absolute, 
        the buttons places one over the other. 
        So, we have to place them individually
        at their correct positions. */
.slide-btn-1 {
  left: 45%;
}
.slide-btn-2 {
  left: 50%;
}
.slide-btn-3 {
  left: 55%;
}
.slide-btn-4 {
  left: 60%;
}
/* When we focus on the particular button, 
        the animation stops to that particular image 
        to which the button is associated. */
.slide-btn-1:focus ~ .slideshow-wrapper {
  animation: none;
  left: 0;
}
.slide-btn-2:focus ~ .slideshow-wrapper {
  animation: none;
  left: -100%;
}
.slide-btn-3:focus ~ .slideshow-wrapper {
  animation: none;
  left: -200%;
}
.slide-btn-4:focus ~ .slideshow-wrapper {
  animation: none;
  left: -300%;
}
/* when we focus on the button, the background color changes */
.slide-btn:focus {
  background-color: #308d46;
}
.samples {
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  text-align: left;
  padding: 10px;
}
.samples button {
  height: 35px;
  background-color: #308d46;
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
}
.sample_image {
  width: 100%;
}
</style>
