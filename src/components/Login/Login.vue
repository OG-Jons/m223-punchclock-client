<template>
  <div>
    <h1>Login</h1>
    <button class="btn btn-primary" @click="signUp">Registrieren</button>
    <button class="btn btn-primary" @click="signIn">Anmelden</button>
  </div>
</template>

<script lang="ts">
import APIService from "@/service/APIService";
export default {
  name: "Login",
  methods: {
    signUp(): void {
      APIService.signUp({
        username: "jonas",
        password: "password",
      });
    },
    signIn(): void {
      APIService.signIn({
        username: "jonas",
        password: "password",
      });
    },
  },
};
</script>

<style scoped></style>
