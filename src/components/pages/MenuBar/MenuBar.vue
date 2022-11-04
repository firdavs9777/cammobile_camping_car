<template>
  <div class="sidebar" :class="active">
    <div class="sidebar-panel">
      <div class="profile_main">
        <div class="profile">
          <span class="divider"></span>
          <button @click="closeHandler">
            <i class="ri-close-line"></i>
          </button>
        </div>

        <div class="account_registered" v-if="isLogin">
          <img src="../../assets/avatar.png" alt="Avatar" class="avatar" />
          <span class="user_name"><h1>Mister Johnson</h1></span>
          <button class="logout">Logout</button>
        </div>

        <div v-else>
          <img src="../../assets/avatar.png" alt="Avatar" class="avatar" />

          <p class="login_first">Please login first</p>
          <br />
          <button class="login" @click="closeHandler">
            <router-link to="/login"> Login </router-link>
          </button>
          <button class="register" @click="closeHandler">
            <router-link to="/register"> Register </router-link>
          </button>
        </div>
      </div>
      <slot>
        <ul>
          <li @click="closeHandler">
            <router-link to="/myprofile"> 마이 페이지 </router-link>
          </li>
          <hr class="line" />
          <li @click="closeHandler">
            <router-link to="/solditems"> 판매 내역 </router-link>
          </li>
          <hr class="line" />

          <li @click="closeHandler">
            <router-link to="/purchasedproducts"> 구매 내역 </router-link>
          </li>

          <hr class="line" />
          <li @click="closeHandler">
            <router-link to="/wishlist"> 찜 내역 </router-link>
          </li>
          <hr class="line" />
          <li @click="closeHandler">
            <router-link to="/recentviews"> 최근 본 내역 </router-link>
          </li>
          <hr class="line" />
          <li @click="closeHandler">
            <router-link to="/customerservice"> 고객 센터 </router-link>
          </li>
          <hr class="line" />
        </ul>
      </slot>
      <!-- {{ String( menubarOpenBln ) }} -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menubarOpenBln: Boolean,
    closeHandler: Function,
  },
  data: () => ({
    isPanelOpen: true,
    active: null,
    isLogin: false,
  }),
  watch: {
    menubarOpenBln() {
      console.log("//////", this.menubarOpenBln);
      this.active = this.menubarOpenBln ? "active" : null;
    },
  },
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false;
    },
  },
  mounted: () => {
    // document.querySelector(".sidebar").setAttribute("class", "sidebar show");
  },
};
</script>
<style scoped>
.avatar {
  vertical-align: middle;
  width: 120px;
  height: 70px;
  border-radius: 50%;
}
.sidebar {
  background: rgba(0, 0, 0, 0.3);
  width: 420px;
  z-index: 1000;
  overflow-x: hidden;
  transition: all 0.2s ease 0.1s;
  left: -100%;
  top: 0;
  height: 100%;
  position: absolute;
}
.sidebar.active {
  left: 0%;
}
.sidebar::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #f8f8fd80;
}
.sidebar.show {
  opacity: 1;
}

.sidebar.show .sidebar-panel {
  transform: translateX(0%);
}

.sidebar-panel {
  overflow-y: auto;
  /* background-color: #aaa7c9; */
  /* position: fixed; */
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 80%;
  transition: all 0.2s ease 0.1s;
  background: #ddf4fa;
  color: #333;
  justify-content: flex;
  flex-direction: row;
  /* width: calc( var( --width ) - 10% ); */
}
.profile_main {
  background-color: #ddf4fa;
  height: auto;
  display: flex-box;
  flex-direction: row;
}
.profile {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.user_name h1 {
  display: inline;
  padding-left: 10px;
  font-size: 18px;
}
.profile_main button {
  justify-content: flex-end;
}
.buttons {
  justify-content: flex-end;
}
.register {
  padding-left: 30px;
  margin: 10px;
  justify-self: end;
  font-size: 20px;
}
.login_first
{
  font-size: 16px;
  padding: 10px;
  margin: auto;
  color: rgb(224, 45, 45);
}
.login {
  padding-left: 30px;
  margin: 10px;
  justify-self: end;
  font-size: 20px;
}
.register {
  padding-left: 30px;
  margin: 10px;
  justify-self: end;
  font-size: 20px;
}
.account_registered {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.logout {
  border: 1px solid #333;
  font-size: 18px;
  border-radius: 10px;
  background-color: #a0a30a;
  color: #fff;
  height: 50px;
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
}
ul {
  height: 100%;
  background-color: #ffff;
}
ul li {
  height: 60px;
  padding-top: 10px;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
  font-size: 20px;
  list-style: none;
  text-decoration: none;
}
a {
  color: #333;
  list-style: none;
  text-decoration: none;
}
a:active,
a:hover,
a.router-link-active {
  border-bottom: 1px solid yellow;
  color: #a0a30a;
  font-size: 20px;
  cursor: pointer;
}
.line {
  width: 90%;
  padding-left: 10px;
  margin-top: 10px;
}
.ri-close-line {
  font-size: 24px;
  text-align: end;
}
</style>
