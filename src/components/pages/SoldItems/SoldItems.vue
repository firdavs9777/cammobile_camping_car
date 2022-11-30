<template>
  <div>
    <div class="sold_products">
      <img src="@assets/profile_main.png" class="profile_image" />
      <div>
        <h1>Make Works 님</h1>
        <div class="main_buttons">
          <button class="button">정보수정</button>
          <button class="button">판매내역</button>
          <button class="button">구매내역</button>
        </div>
      </div>
    </div>
    <div class="main_page">
      <div>
        <button class="button1"><i class="ri-caravan-fill"></i></button>
        <p class="button-paragraph">내가 등록한 <br />캠핑카</p>
      </div>
      <div>
        <button class="button1"><i class="ri-heart-line"></i></button>
        <p class="button-paragraph">찜 내역</p>
      </div>
      <div>
        <button class="button1"><i class="ri-caravan-fill"></i></button>
        <p class="button-paragraph">최근 본 내역</p>
      </div>
      <div>
        <button class="button1">
          <i class="ri-customer-service-line"></i>
        </button>
        <p class="button-paragraph">문의하기</p>
      </div>
    </div>
    <section class="ai_section">
      <img src="@assets/ai_picture.png" class="ai_picture" />
      <h1>티 큐브 NT</h1>
      <p>
        21년형 · 경기 · 트레일러 <br />
        길이 4, 550mm· 너비2, 050mm · 높이 2, 550mm
      </p>
      <h2>1, 750 만원</h2>
    </section>
  </div>
</template>
<script></script>
<style scoped>
.sold_products {
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 30px;
}
.profile_image {
  height: 63px;
  width: 63px;
}
.main_buttons {
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
}
.button {
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
}
.button1 {
  width: 66px;
  height: 66px;
  background: #16abff;
  border-radius: 50%;
}
.button1 {
  font-size: 28px;
  color: #ffff;
  padding: 10px;
  margin: 10px;
}
.main_page {
  display: flex;
  margin: auto;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
}
.button-paragraph {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #222222;
}
.ai_section {
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding-bottom: 20px;
  justify-content: start;
  text-align: left;
  padding-left: 10px;
  margin-left: 10px;
}
.ai_picture {
  width: 100%;
  height: 260px;
  border-radius: 30px;
}
</style>
