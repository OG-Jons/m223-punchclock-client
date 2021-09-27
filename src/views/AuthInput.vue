<template>
  <div>
    <Login />
    <SignUp />
  </div>
</template>

<script>
import Login from "@/components/Login/Login";
import SignUp from "@/components/SignUp/SignUp";
export default {
  name: "AuthInput",
  components: {
    Login,
    SignUp,
  },
};
</script>

<style scoped></style>
