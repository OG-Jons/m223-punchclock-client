import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import { User } from "@/model/User";
import APIService from "@/service/APIService";

Vue.use(Vuex);

Vue.use(VueCookies);

export default new Vuex.Store({
  state: {
    user: Vue.$cookies.get("user"),
    token: Vue.$cookies.get("token"),
    admin: Vue.$cookies.get("admin"),
    categories: null,
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        Vue.$cookies.set("user", user);
      } else {
        Vue.$cookies.remove("user");
      }
      state.user = user;
    },
    setToken(state, token) {
      if (token) {
        Vue.$cookies.set("token", token);
      } else {
        Vue.$cookies.remove("token");
      }
      state.token = token;
    },
    setAdmin(state, admin) {
      if (admin) {
        Vue.$cookies.set("admin", admin);
      } else {
        Vue.$cookies.remove("admin");
      }
      state.admin = admin;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    async isAdmin(state) {
      const admin = async (): Promise<boolean> => {
        const user: User = await APIService.userData();
        return user.role ? user.role.name === "Admin" : false;
      };
      if (admin) {
        Vue.$cookies.set("admin", admin);
      } else {
        Vue.$cookies.remove("admin");
      }
      state.admin = admin;
      return admin();
    },
  },
});
