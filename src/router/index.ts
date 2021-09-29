import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AuthInput from "../views/AuthInput.vue";
import VueCookies from "vue-cookies";
import CategoryManagement from "../views/CategoryManagement.vue";
import store from "../store";
import UserManagement from "@/views/UserManagement.vue";

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthInput,
  },
  {
    path: "/cat",
    name: "Categories",
    component: CategoryManagement,
  },
  {
    path: "/user",
    name: "Users",
    component: UserManagement,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // Open the Login Page if not logged in
  const allowedPages = ["/auth"];
  const authRequired = !allowedPages.includes(to.path);

  if (authRequired && !Vue.$cookies.get("token")) {
    return next("/auth");
  }

  if (allowedPages.includes(to.path) && Vue.$cookies.get("token")) {
    return next("/");
  }

  if (to.path === "/cat" && !store.state.categories) {
    return next("/");
  }

  next();
});

export default router;
