<template>
  <div class="main">
    <div class="footer">
      <div class="header">
        <h1>Cammobile 2022</h1>

        <p class="email">Email: cammobile@gmail.com</p>
      </div>
      <ul>
        <li>문의: 02567456735</li>
        <li>주소: 경기도 blabla</li>
        <br />
        <li>사업자등록번호: 639-87-01337</li>
        <br />
        <li>통신판매업신고: 2020-용일기흥-0058</li>
      </ul>
      <ul>
        <li><router-link to="/introduction">회사 소개</router-link></li>
        <li><router-link to="/login">이용약원</router-link></li>
        <li><router-link to="/home">제휴약관</router-link></li>
        <li><router-link to="/home">사업자정보확인</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.main {
  padding-left: 20px;
  display:flex;
  position: relative;
  justify-content: start;
  text-decoration: none;
  color: #fff;
  background-color: #474747;
}
.main h1 {
  font-size: 18px;
}
.footer {
  margin-top: 10px;
  margin-bottom: 20px;
}
ul {
  padding-top: 10px;
  text-decoration: none;
  list-style: none;
  width: 100%;
}
ul li {
  display: inline;
  font-size: 14px;
  margin: 10px;
}
a {
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  color: #fdf388;
  font-size: 16px;
  cursor: pointer;
}
.header {
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
}
 h1 {
  display: inline;
  font-size: 15px;
}
.email {
  font-size: 15px;
  padding-left: 10px;
}
</style>
