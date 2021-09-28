<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Dashboard from "@/components/Dashboard/Dashboard.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    Dashboard,
  },
});
</script>
