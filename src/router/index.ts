import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AuthInput from "../views/AuthInput.vue";

Vue.use(VueRouter);

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
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // Open the Login Page if not logged in
  const allowedPages = ["/auth"];
  const authRequired = !allowedPages.includes(to.path);

  if (authRequired && !localStorage.getItem("token")) {
    return next("/auth");
  }

  if (to.path === "/cat" && !store.state.categories) {
    return next("/");
  }
  next();
});

export default router;
