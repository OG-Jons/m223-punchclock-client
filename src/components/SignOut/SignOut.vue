<template>
  <button v-if="isLoggedIn" class="btn btn-danger" @click="signOut">
    Abmelden
  </button>
</template>
<script lang="ts" src="./SignOut.ts"></script>
