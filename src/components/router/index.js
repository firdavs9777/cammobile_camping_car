import Vue from "vue";
import Router from "vue-router";
import Home from "@pages/Home/Home.vue";
import Login from "@pages/Login/Login.vue";
import FindPassword from "@pages/Password/FindPassword.vue";
import Register from "@pages/Register/Register.vue";
import Introduction from "@pages/Introduction/Introduction.vue";
import Notification from "@pages/Notification/Notification.vue";
import MyProfile from "@pages/MyProfile/my_profile_main.vue";
import SoldItems from "@pages/SoldItems/SoldItems.vue";
import PurchasedProducts from "@pages/PurchasedProducts/PurchasedProducts.vue";
import WishList from "@pages/WishList/WishList.vue";
import RecentViews from "@pages/RecentViews/RecentViews.vue";
import CustomerService from "@pages/CustomerService/CustomerService.vue";
import Trailer from "@pages/Trailer/TrailerMain.vue";
import TrailerSearch from "@pages/Trailer/TrailerSearchList.vue";
import MotorHome from "@pages/MotorHome/MotorHome.vue";
import MotorHomeSearch from "@pages/MotorHome/Mr_Home_Search.vue";
import NotFound from '@pages/NotFound.vue';
import Test from "@pages/test/Test.vue";
import Trailer_Thumbnail from "@pages/Trailer/TrailerThumbList.vue";
import myTrailer from "@pages/MyProfile/my_trailer.vue";
import Upload_Motor from "@pages/MyProfile/upload_motor.vue";
import upload_page from "@pages/MyProfile/upload_page.vue";
import store from '@/store/store.js';


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
      meta: { requiresAuth: true }
    },
    {
      path: "/myprofile",
      name: "myprofile",
      component: MyProfile,
      meta: { requiresAuth: true }
    },
    {
      path: "/solditems",
      name: "solditems",
      component: SoldItems,
      meta: { requiresAuth: true }
    },
    {
      path: "/purchasedproducts",
      name: "purchasedproducts",
      component: PurchasedProducts,
      meta: { requiresAuth: true }
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: WishList,
      meta: { requiresAuth: true }
    },
    {
      path: "/recentviews",
      name: "recentviews",
      component: RecentViews,
      meta: { requiresAuth: true }
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
      meta: { requiresAuth: true }
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
      meta: { requiresAuth: true }
    },
    {
      path: "/upload_page",
      name: "upload_page",
      component: upload_page,
      meta: { requiresAuth: true }
    },
    {
      path: "/upload_page/:id",
      name: "upload_page",
      component: upload_page,
      meta: { requiresAuth: true }
    },
  
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});
export default router;
