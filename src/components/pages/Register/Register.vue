<template>
    <div class="register">
        <base-dialog :show="isLoading" title="Authenticating" fixed>
      <base-spinner></base-spinner>
      </base-dialog>
        <form @submit.prevent="submitForm">
            <h1 class="heading">cammobile</h1>
            <div class="form-control">
             <label for="username">Username</label>
             <input type="username" id="username"  />
            </div>
            <div class="form-control">
            <label for="email">Email</label>
             <input type="email" id="email" v-model.trim="email" />
             </div>
             <div class="form-control">
             <label for="password">Password</label>
             <input type="password" id="password" v-model.trim="password" />
             </div>           
            <br />
            <button type="submit" class="signup-button">회원가입</button>
            <button type="submit" class="kakao-signup">
                <i class="ri-kakao-talk-fill"></i> 카카오톡으로 회원가입
            </button>
            <button type="submit" class="google-signup">
                <i class="ri-google-fill"></i> Google으로 회원가입
            </button>
        </form>
    </div>
</template>
<script>
export default {
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
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
          this.$router.replace('/');
          alert('Sucessfully registered');    
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
.register {
    height: auto;
    margin: auto;
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
.form-control {
  margin: 0.5rem 0;
}

.signup-button {
    font-size: 16px;
    height: 35px;
    width: 100%;
    background-color: #47b5ff;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.kakao-signup {
    display: block;
    color: #333;
    height: 35px;
    width: 100%;
    background-color: #F7E317;
    border-radius: 20px;
    margin-top: 10px;
    font-size: 16px;
    margin: auto;
}

.google-signup {
    color: #333;
    height: 35px;
    width: 100%;
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
    margin-top: 5px;
    margin-bottom: 10px;
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
  