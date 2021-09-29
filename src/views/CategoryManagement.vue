<template>
  <div><Categories /></div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "@/components/Categories/Categories.vue";

export default Vue.extend({
  name: "CategoryManagment",
  components: {
    Categories,
  },
});
</script>
