<template>
  <div><Users /></div>
</template>

<script lang="ts">
import Vue from "vue";
import Users from "@/components/Users/Users.vue";

export default Vue.extend({
  name: "UserManagement",
  components: {
    Users,
  },
});
</script>
