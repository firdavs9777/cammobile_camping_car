<template>
  <div class="login">
    <base-dialog :show="isLoading" title="Authenticating" fixed>
      <base-spinner></base-spinner>
      </base-dialog>
    <form @submit.prevent="submitForm">
      <h1 class="heading">cammobile</h1>
      <div class="form-control">
            <label for="email">Email</label>
             <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
        </div>  
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 characters
          long)
        </p>
      <button type="submit" class="login-button">로그인</button>
      
      <button type="submit" class="kakao-login">
        <i class="ri-kakao-talk-fill"></i> 카카오톡 간편 로그인
      </button>
      <button type="submit" class="google-login">
        <i class="ri-google-fill"></i> Google 간편 로그인
      </button>

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
  </div>
</template>

<script>
export default {
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
   console.log(this.$store.getters.isAuthenticated);
  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){
  },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
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
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      // Send http request
      try {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          this.$router.replace('/');   
      } catch (err) {
        this.error = err.message || 'Failed to authenticate ';
      }
      this.isLoading = false;
      this.$router.go();
    }, 
  },
};
</script>



<style scoped>
.login {
  height: auto;
  background-color: #F5F5F5;
  justify-content: center;
  align-items: center;
  text-align: center;
}
form {
  padding: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.email {
  height: 40px;
  width:100%;
  border: 1px solid #ccc;
  margin: 15px;
  padding-left: 10px;
  border-radius: 10px;
}

.login-button {
  font-size: 16px;
  height: 40px;
  width: 100%;
  background-color: #47b5ff;
  border-radius: 20px;
  margin-top: 15px;
}

.kakao-login {
  color: #333;
  height: 35px;
  width: 200px;
  background-color: #F7E317;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 16px;
}

.google-login {
  color: #333;
  height: 35px;
  width: 200px;
  background-color: #81C6E8;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 17px;
  padding-left: 5px;
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

ul {
  justify-content: space-between;
  margin-top: 10px;
}

li {
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
