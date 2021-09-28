import Vue from "vue";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      const loginResponse = await APIService.signIn({
        username: this.username,
        password: this.password,
      });
      this.$store.commit("setUser", loginResponse.data);
      this.$store.commit("setToken", loginResponse.headers.authorization);
      await this.$router.push("/");
    },
  },
});
