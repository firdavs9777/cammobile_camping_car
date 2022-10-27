<template>
  <div class="login">
    <form>
      <h1 class="heading">cammobile</h1>
      <label for="email">이메일</label>
      <br />
      <input type="email" class="email" placeholder="Email" />
      <br />
      <label for="password">비밀번호</label>
      <br />
      <input type="password" class="password" placeholder="Password" />
      <br />
      <button type="submit" class="login-button">로그인</button>
      <button type="submit" class="kakao-login">
        <i class="ri-kakao-talk-fill"></i> 카카오톡 간편 로그인</button>

      <ul>
            <li>
                <router-link to="/find_password">비밀번호 찾기</router-link>
            </li>
            <li class="divider">
                |
            </li>
            <li>
                <router-link to="/register">회원가입</router-link>
            </li>
        </ul>
    </form>
    <div class="register">
       
    </div>
  </div>
</template>
<script></script>
<style scoped>
.login {
  height: auto;
    background-color: #F5F5F5;
  justify-content: center;
  align-items: center;
  text-align: center;
}
form {
  height: 500px;
width:100%;
  padding: 1rem;
}
.heading {
  font-size: 50px;
  color: #47b5ff;
  padding: 10px;
  margin: 20px;
}
label {
  font-size: 20px;
}
.email {
  height: 40px;
  width: 200px;
  border: 1px solid #ccc;
  margin: 15px;
  padding-left: 10px;
  border-radius: 10px;
}
.login-button {
  font-size: 16px;
  height: 40px;
  width: 200px;
  background-color: #47b5ff;
  border-radius: 20px;
  margin-top: 15px;
}
.kakao-login 
{
  color: #333;
  height: 35px;
  width: 200px;
  background-color: #F7E317;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 16px;
}

.password {
  width: 200px;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  height: 40px;
  margin: 15px;
  padding-left: 10px;
  border-radius: 10px;
}
ul 
{
    justify-content: space-between;
    margin-top: 10px;
}
li 
{
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
a {
  font-size: 14px;
  text-decoration: none;
  color: #000000;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border: 1px solid transparent;
}
a:active,
a:hover,
a.router-link-active {
  font-size: 14px;
  cursor: pointer;
}

</style>
