<template>
  <div class="login">
    <base-dialog :show="isLoading" title="Authenticating" fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <h1 class="heading">LOG <span class="in">IN</span></h1>
      <div class="form-control">
        <input
          type="email"
          id="email"
          class="email"
          v-model.trim="email"
          placeholder="ID or EMAIL"
        />
      </div>
      <div class="form-control">
        <input
          type="password"
          id="password"
          class="password"
          v-model.trim="password"
          placeholder="PASSWORD"
        />
      </div>
      <div class="checkbox">
        <input type="checkbox" class="checkbox-input" />
        <label for="b">로그인 상태 유지 </label>
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and password (must be at least 6 characters
        long)
      </p>
      <button type="submit" class="login-button">로그인</button>

      <!-- <button type="submit" class="kakao-login">
        <i class="ri-kakao-talk-fill"></i> 카카오톡 간편 로그인
      </button>
      <button type="submit" class="google-login">
        <i class="ri-google-fill"></i> Google 간편 로그인
      </button> -->
      <ul>
        <li>
          <router-link to="/find_password"> 아이디 찾기</router-link>
        </li>
        <span class="divider">|</span>
        <li>
          <router-link to="/find_password">비밀번호 찾기</router-link>
        </li>
        <span class="divider">|</span>
        <li>
          <router-link to="/register">회원가입</router-link>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  beforeCreate() {},
  // Init injections & reactivity
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.$store.getters.isAuthenticated);
  },
  beforeUpdate() {},
  updated() {
    console.log(this.$store.getters.isAuthenticated);
  },
  beforeDestroy() {},
  destroyed() {},
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 3
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      // Send http request
      try {
        await this.$store.dispatch("login", {
          id: this.email,
          pass: this.password,
        });
        this.$router.replace("/");
      } catch (err) {
        this.error = err.message || "Failed to authenticate ";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-color: #f0f4f7;
  justify-content: center;
  align-items: center;
  text-align: center;
}
form {
  height: 10rem;
  position: relative;
  margin: 0;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 20px;
  text-align: center;
  margin: auto;
  justify-content: center;
}
.heading {
  font-size: 32px;
  line-height: 46px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #000000;
  font-weight: 700px;
  margin-bottom: 20px;
}
.email {
  height: 43px;
  width: 252px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 10px;
}
.password {
  height: 43px;
  width: 252px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  align-items: center;
  padding: 12px 10px;
  margin-bottom: 10px;
}
/* input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
} */

.login-button {
  font-size: 16px;
  height: 40px;
  width: 252px;
  background-color: #16abff;
  border-radius: 50px;
  margin-top: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  margin-top: 30px;
}
ul {
  width: 100%;
  display: inline-block;
  margin-top: 10px;
}
li {
  display: inline;
}
a {
  font-size: 14px;
  text-decoration: none;
  display: inline;
  padding-bottom: 5px;
  border: 1px solid transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #505050;
  padding: 5px;
}

a:active,
a:hover,
a.router-link-active {
  font-size: 14px;
  cursor: pointer;
}
.in {
  font-size: 32px;
  line-height: 46px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #16abff;
}
.checkbox {
  border-radius: 2px;
  display: flex;
  padding-left: 10px;
}
.checkbox-input {
  border: 1px solid #888888;
  border-radius: 2px;
}
label {
  padding-left: 10px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #505050;
}
.divider {
  width: 12px;
  height: 0px;
  transform: rotate(90deg);
  color: #d9d9d9;
}
</style>
