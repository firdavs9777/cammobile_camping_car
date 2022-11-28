<template>
  <header>
    <div class="icon-main">
      <i class="ri-menu-line" @click="menuTogglefunc"> </i>
      <h1 style="">
        <router-link to="/" class="heading">
          <img alt="alt message" class="your-logo-css-class"
          src="@assets/logo_white.svg">  
        </router-link>
      </h1>
    </div>
    <div class="icons-bar" v-if="isLogin">
      <ul>
        <li>
          <br />
          <router-link to="/myprofile">
            <i class="ri-user-line"></i>
            <br />
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    menuTogglefunc: Function,
  },
  data() {
    return {
      menu: false,
      isLogin: true,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    hi: function () {
      this.menu = !this.menu;
      console.log("Parent element");
      console.log("helooo");
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #16abff;
}

.icon-main {
  justify-content: left;

}
.icon-main h1 a {
  text-decoration: none;
  color: #333;
}
.icon-main i {
  font-size: 40px;
  margin: 10px;
  color: #ffffff;
}
ul {
  display: flex;
  width: 100%;
}
li {
  display: inline;
}
.title-name {
  padding: 5px;
  font-size: 18px;
  color: #333;
}
.banner {
  margin-top: 10px;
  padding-top: 10px;
  text-align: left;
}

.banner h1 {
  padding-left: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}

.search-input {
  height: 30px;
  border: 1px solid black;
}

.icons-bar a {
  font-size: 14px;
  text-decoration: none;
  color: #000000;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border: 1px solid transparent;
}

.icons-bar i {
  padding-right: 20px;
  font-size: 22px;
  color: #ffffff;
}
.icons-bar a:active,
.icons-bar a:hover,
.icons-bar a.router-link-active {
  color: red;
  font-size: 14px;
  cursor: pointer;
}

h1 {
  display: inline;
  font-size: 16px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.heading {
    margin-left: 20px;
}

.logo:hover,
.logo:active {
  background-color: transparent;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: rgb(159, 179, 51);
  }
}
</style>
