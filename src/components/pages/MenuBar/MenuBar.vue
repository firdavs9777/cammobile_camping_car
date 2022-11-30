<template>
  <div class="sidebar" :class="active">
    <div class="sidebar-panel">
      <div class="profile_main">
        <div class="profile_header">
          <i class="ri-close-line" @click="closeHandler"></i>
          <div>
            <h1>안녕하세요</h1>
            <p    v-if="isLoggedIn">Make Works 님</p>
            <img
              v-if="isLoggedIn"
              src="../../assets/avatar.png"
              alt="Avatar"
              class="avatar"
            />
            <p v-if="!isLoggedIn" @click="closeHandler">
            <router-link to="/login">
              <h1>로그인 해주세요.</h1>
            </router-link>
            </p>
          </div>
        </div>
        <div class="user_info">
          <div class="user_info_section">
            <h1 class="user_info_header">등록한캠핑카</h1>
            <p class="user_info_paragraph">2 개</p>
          </div>
          <div class="user_info_section">
            <h1 class="user_info_header">찜한목록</h1>
            <p class="user_info_paragraph">6 개</p>
          </div>
          <div class="user_info_section">
            <h1 class="user_info_header">최근본캠핑카</h1>
            <p class="user_info_paragraph">6 개</p>
          </div>
        </div>
        <ul>
          <li @click="closeHandler">
            <i class="ri-user-line"></i>
            <router-link to="/myprofile"> 마이 페이지 </router-link>
          </li>
          <li @click="closeHandler">
            <i class="ri-caravan-fill"></i>
            <router-link to="/solditems"> 내가 등록한 캠핑카 </router-link>
          </li>
          <li @click="closeHandler">
            <i class="ri-heart-line"></i>
            <router-link to="/wishlist"> 찜 내역 </router-link>
          </li>
          <li @click="closeHandler">
            <i class="ri-caravan-fill"></i>
            <router-link to="/recentviews"> 최근 본 내역 </router-link>
          </li>
          <li @click="closeHandler">
            <i class="ri-customer-service-line"></i>
            <router-link to="/customerservice"> 고객 센터 </router-link>
          </li>
        </ul>
      </div>
      <div v-if="isLoggedIn" class="logout">
        <i class="ri-logout-box-r-line"></i>
        <button @click="logout">로그아웃</button>
      </div>
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
    isLogout: false,
  }),
  watch: {
    menubarOpenBln() {
      this.active = this.menubarOpenBln ? "active" : null;
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.go();
      this.closeHandler();
      this.$router.replace("/login");
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
  justify-content: left;
  overflow-y: auto;
  /* background-color: #aaa7c9; */
  /* position: fixed; */
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 85%;
  transition: all 0.2s ease 0.1s;
  background: #fff;
  color: #333;
  justify-content: flex;
  flex-direction: row;
  /* width: calc( var( --width ) - 10% ); */
}
.profile_main {
  height: auto;
  justify-content: left;
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
.login_first {
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
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  padding: 30px;
  margin: 20px;
  font-size: 18px;
  color: #333;
  height: 50px;
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
  text-align: center;
}
.logout i {
  padding: 10px;
  margin: 10px;
}
ul {
  width: 100%;
  height: 100%;
  background-color: #ffff;
}
ul li {
  margin-left: 30px;
  margin-right: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
  text-align: left;
  justify-content: left;
  color: #333;
  font-size: 20px;
  list-style: none;
  text-decoration: none;
}
ul li i 
{
  padding-left: 20px;
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
  text-decoration: underline;  
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
.user_info {
  display: flex;
}
.user_info_section {
  margin: 10px;
  padding: 10px;
}
.user_info_header {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 15px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #222222;
  flex: none;
}
.user_info_paragraph {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #3c70bf;
}
.profile_header {
  display: flex;
  justify-content: space-between;
  padding: 33px 20px;
  width: 358px;
  background: #16abff;
  border-radius: 0px 20px 0px 0px;
}
.profile_header i 
{
  color: #fff;
  font-size: 22px;
}
</style>
