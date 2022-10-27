<template>
  <div class="find_password">
    <h1 class="heading">cammobile</h1>
    <form class="find_password_form">
        <label for="email">이메일</label>
      <br />
      <input type="email" class="email" placeholder="Email" v-model="email"  />
      <br />
      <button type="submit" class="login-button" @click=call>이메일 인증 </button>
    </form>
  </div>
</template>
<script>
export default 
{
    data(){
      return {
        email:'',
      }
    },
    methods:{
    call:function()
    {
        if(this.email != '')
        {
            alert("Please check your email, the link has been sent");
        }
        else 
        {
            alert("Emty email ")
        }

    }
  }
}
</script>
<style scoped>
.find_password 
{
    padding-top: 20px;
    width: 100%;
    justify-content: center;
    height:550px;
    margin: auto;
}
.heading {
  font-size: 50px;
  color: #47b5ff;
  padding: 10px;
  margin: 30px;
}

label {
  font-size: 20px;
}
.email {
  height: 40px;
  width: 30%;
  border: 1px solid #ccc;
  margin: 15px;
  padding-left: 10px;
  border-radius: 10px;
}
.login-button {
  height: 40px;
  width: 30%;
  background-color: #47b5ff;
  border-radius: 20px;
  margin-top: 15px;
}
</style>
