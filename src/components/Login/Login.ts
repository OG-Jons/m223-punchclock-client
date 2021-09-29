import Vue from "vue";
import APIService from "@/service/APIService";
import { User } from "@/model/User";

export default Vue.extend({
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      showErrorAlert: {
        show: false,
        value: "",
      },
    };
  },
  methods: {
    async signIn() {
      await APIService.signIn({
        username: this.username,
        password: this.password,
      })
        .then(async (res) => {
          await this.$store.commit("setUser", res.data);
          await this.$store.commit("setToken", res.headers.authorization);
          const user: User = await APIService.userData();
          await this.$store.commit(
            "setAdmin",
            user.role ? user.role.name === "Admin" : false
          );
          await this.$router.push("/");
          await this.$router.go(0);
        })
        .catch((err) => {
          if (err.response.status === 403) {
            this.showErrorAlert = {
              show: true,
              value:
                "Falscher Benutzername oder Passwort. \n Bitte erneut versuchen.",
            };
          }
        });
    },
  },
});
