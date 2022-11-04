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
  } , 
  data () {
    return {
      menubarOpenBln : false , 
    }
  } , 
  methods : {
    menuTogglefunc () {
      this.menubarOpenBln = !this.menubarOpenBln ; 
    }
  } , 

}
</script>
<style>
#app {
  font-size:12px;
  width:420px;
  height: 100vh;
  margin:0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  overflow: hidden;
  position: relative;
}
</style>
