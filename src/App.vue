<template>
  <div id="app">
    <Navbar 
      :menuTogglefunc="menuTogglefunc"
    />
    <router-view />
    <!-- <Footer/> -->
    <MenuBar :menubarOpenBln="menubarOpenBln" :closeHandler="menuTogglefunc" />
  </div>
</template>
<script>
import Navbar from './components/pages/Navbar/Navbar.vue';
// import Footer from './components/pages/Foooter/Footer.vue';
import MenuBar from "./components/pages/MenuBar/MenuBar.vue";
export default {
  name: "App",
  components: { 
    Navbar , 
    // Footer , 
    MenuBar , 
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/');
      }
    },
  }, 
  data () {
    return {
      menubarOpenBln : false , 
    }
  }, 
  methods : {
    menuTogglefunc () {
      this.menubarOpenBln = !this.menubarOpenBln ; 
    }
  }, 

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
// $main-bg-color:blue;
#app {
  // background-color: $main-bg-color;
  font-size:12px;
  width:420px;
  height: 100vh;
  margin:0 auto;
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
}
</style>
