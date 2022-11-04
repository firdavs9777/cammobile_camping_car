<template>
  <header>
    <div class="icon-main">
      <i class="ri-menu-line" @click="menuTogglefunc">
      </i>
      <h1 style="">
        <router-link to="/" class="heading">Cammobile</router-link>
      </h1>
      <!-- <div v-if="menu">
        <MenuBar @icon-clicked="hi" />
      </div> -->
    </div>
    <!-- <router-link to="/" class="logo">캠모빌</router-link> -->
    <div class="icons-bar" v-if="isLogin">
      <ul>
        <!-- <h1 class="title-name">
          <router-link to="/" class="logo">캠모빌</router-link>
    </h1>
       -->
        <li>
          <br>
          <router-link to="/notification">
            <i class="ri-notification-line">
            </i> <span style="color:black;">+10</span>
            <br>
            Notifications
          </router-link>
        </li>

        <li>
          <br>
          <router-link to="/myprofile">
            <i class="ri-user-line"></i>
            <br>
            My Profile
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
// import MenuBar from "../MenuBar/MenuBar.vue";
export default {
  props: {
    menuTogglefunc: Function,
  },
  data() {
    return {
      menu: false,
      isLogin: true
    };
  },

  methods: {
    hi: function () {
      this.menu = !this.menu;
      console.log("Parent element");
      console.log("helooo");
    },
  },
  // components: { MenuBar },
};
</script>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #faf7f0;
}

.icon-main {
  width: 50px;
}


.icon-main h1 a {
  text-decoration: none;
  color: #333;
}

.icon-main i {
  margin-top: 0px;
  font-size: 40px;
  margin: 10px;
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
  font-size: 16px;
  color: black;
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
  position: absolute;
  top: 1%;
  left: 12%;
  font-size: 16px;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
