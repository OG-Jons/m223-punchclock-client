import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        localStorage.setItem("user", user);
      } else {
        localStorage.removeItem("user");
      }
      state.user = user;
    },
    setToken(state, token) {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
      state.token = token;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
});
