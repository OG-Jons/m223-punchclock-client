<template>
  <div id="app">
    <div id="nav">
      <div v-if="isLoggedIn">
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/cat">Kategorien</router-link> |
      </div>
      <router-link v-if="!isLoggedIn" to="/auth">Login / SignUp</router-link>
      <br />
      <button v-if="isLoggedIn" class="btn btn-danger" @click="signOut">
        Abmelden
      </button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    signOut() {
      this.$store.commit("setUser", null);
      this.$store.commit("setToken", null);
      this.$router.push("/auth");
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
