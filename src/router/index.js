import Vue from "vue";
import Router from "vue-router";
import Home from "../../src/components/pages/Home/Home.vue";
import Login from "../../src/components/pages/Login/Login.vue";
import FindPassword from "../../src/components/pages/Password/FindPassword.vue";
import Register from "../../src/components/pages/Register/Register.vue";
import Introduction from "../components/pages/Introduction/Introduction.vue";
import Notification from "../components/pages/Notification/Notification.vue";
import MyProfile from "../components/pages/MyProfile/my_profile_main.vue";
import SoldItems from "../components/pages/SoldItems/SoldItems.vue";
import PurchasedProducts from "../components/pages/PurchasedProducts/PurchasedProducts.vue";
import WishList from "../components/pages/WishList/WishList.vue";
import RecentViews from "../components/pages/RecentViews/RecentViews.vue";
import CustomerService from "../components/pages/CustomerService/CustomerService.vue";
import Trailer from "../components/pages/Trailer/TrailerMain.vue";
import TrailerSearch from "../components/pages/Trailer/TrailerSearchList.vue";
import MotorHome from "../components/pages/MotorHome/MotorHome.vue";
import MotorHomeSearch from "../components/pages/MotorHome/Mr_Home_Search.vue";

import Test from "../components/pages/test/Test.vue";
import Trailer_Thumbnail from "../components/pages/Trailer/TrailerThumbList.vue";
import myTrailer from "../components/pages/MyProfile/my_trailer.vue";
import Upload_Motor from "../components/pages/MyProfile/upload_motor.vue";
import upload_trailer from "../components/pages/MyProfile/upload_trailer.vue"
import edit_motor from '../components/pages/MyProfile/edit_motor.vue';
import edit_trailer from '../components/pages/MyProfile/edit_trailer.vue';
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/find_password",
      name: "find_password",
      component: FindPassword,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/introduction",
      name: "introduction",
      component: Introduction,
    },
    {
      path: "/notification",
      name: "notification",
      component: Notification,
    },
    {
      path: "/myprofile",
      name: "myprofile",
      component: MyProfile,
    },
    {
      path: "/solditems",
      name: "solditems",
      component: SoldItems,
    },
    {
      path: "/purchasedproducts",
      name: "purchasedproducts",
      component: PurchasedProducts,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishList,
    },
    {
      path: "/recentviews",
      name: "recentviews",
      component: RecentViews,
    },
    {
      path: "/customerservice",
      name: "customerservice",
      component: CustomerService,
    },
    {
      path: "/trailer",
      name: "trailer",
      component: Trailer,
    },
    {
      path: "/trailer_search",
      name: "trailer_search",
      component: TrailerSearch,
    },
    {
      path: "/trailer_thumbnail",
      name: "trailer_thumbnail",
      component: Trailer_Thumbnail,
    },
    {
      path: "/myTrailer",
      name: "myTrailer",
      component: myTrailer,
    },
    {
      path: "/motorhome",
      name: "motorhome",
      component: MotorHome,
    },
    {
      path: "/motorhomesearch",
      name: "motorhomesearch",
      component: MotorHomeSearch,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
    {
      path: "/upload_motor",
      name: "upload_motor",
      component: Upload_Motor,
    },
    {
      path: "/upload_trailer",
      name: "upload_trailer",
      component: upload_trailer,
    },
    {
      path:"/edit_motor",
      name:"edit_motor",
      component:edit_motor
    }, 
    {
        path:"/edit_trailer",
        name:"edit_trailer",
        component: edit_trailer
    }
  ],
});
export default router;
