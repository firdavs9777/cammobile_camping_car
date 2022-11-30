<template>
  <div class="trailer">
    <div class="main_page">
      <router-link to="myprofile" class="section_motorhome">
        <button class="motorhome_button">MY 모터홈</button>
      </router-link>
      <router-link to="myTrailer" class="section_trailer">
        <button class="motorhome_button">MY 모터홈</button>
      </router-link>
    </div>
    <div class="trailer_page">
      <img src="@assets/trailer_profile.png" class="trailer_main" />
      <h1>스터커먼 스탈렛 400UL</h1>
      <p>
        19년형 · 경기 남양주· 트레일러 길이 5,940mm· 너비2, 270mm · 높이 2,560mm
      </p>
      <div class="price_section" >
        <h1>4,990 만원</h1>
        <img src="@assets/edit_button.png" style="height:40px;width:40px;"  @click="showEditSection"/>
      </div>
    </div>
    <div v-if="isPanelBottom" class="panelBottom">
      <i class="ri-close-line" @click="showEditSection"></i>
        <button class="edit">수정하기</button>
        <hr/>
        <button class="hide">숨기하기</button>
        <hr/>
        <button class="delete">삭체하기</button>
      </div>
  </div>
</template>
<script>
export default {
  data:()=>({
    isPanelBottom: false
  }),
  methods: {
    upload_trailer() {
      this.$router.push("upload_trailer");
      // this.$router.push("/trailer_search");
    },
    edit_trailer() {
      this.$router.push("edit_trailer");
    },
    showEditSection(){
      this.isPanelBottom = !this.isPanelBottom;
    }
  },
};
</script>
<style scoped>
.panelBottom
{
  position: absolute;
  bottom: 0;
  text-align: center;
   background-color: #ffffff;
  width: 100%;
  height: 291px;
}
.panelBottom i 
{
  color: #333;
  margin: 10px;
  padding: 10px;
  float: right;
  font-size:22px;
}
.edit 
{
  cursor: pointer;
  color:#333;
  text-align: left;
  width: 100%;
  text-align: center;
}
.hide 
{
  color:#333;
  text-align: left;
  width: 100%;
  text-align: center;
}
.delete 
{
  color:#333;
  text-align: left;
  width: 100%;
  text-align: center;
}
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
section {
  text-align: left;
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
  width: 199px;
  height: 48px;
  background: #16abff;
  color: #fff;
  padding: 10px;
  border-bottom: 3px solid #3c70bf;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
}

.trailer {
  height: 100vh;
  background-color: #f0f4f7;
  cursor: pointer;
  pointer-events: visible;
  border-radius: 10px;
}

ul {
  padding-left: 10px;
  padding-top: 10px;
}

ul li {
  background-color: #a8c2e9;
  list-style: none;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-right: 5px;
}

ul li .product {
  display: flex;
}

.product_image {
  width: 50%;
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

.compare i {
  font-size: 30px;
}

.ri-edit-box-line {
  font-size: 30px;
}

.product_description {
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  justify-content: space-between;
}

.product_info {
  padding-left: 15px;
  color: #333;
}
.trailer_page {
  margin-right: 20px;
  margin-left: 20px;
  width: 378px;
  background: #ffffff;
  border-radius: 0px 0px 20px 20px;
  justify-content: left;
  text-align: left;
}
.trailer_page h1 {
  padding-left: 20px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #222222;
}
.trailer_page p {
  padding-left: 20px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -1px;
  color: #505050;
}
.trailer_main {
  width: 100%;
}
.price_section 
{
  display: flex;
  justify-content: space-between;
  margin-top:10px;
  padding: 10px;
}
</style>
