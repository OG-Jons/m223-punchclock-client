import Vue from "vue";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      showErrorAlert: {
        show: false,
        value: "",
      },
      disabled: true,
    };
  },
  computed: {
    arePasswordsSame(): boolean {
      return !!this.password && !!this.confirmPassword
        ? this.password !== this.confirmPassword
        : false;
    },
  },
  methods: {
    async signUp() {
      await APIService.signUp({
        username: this.username,
        password: this.password,
      })
        .then(() => this.signIn())
        .catch((err) => {
          if (err.response.status === 409) {
            this.showErrorAlert = {
              show: true,
              value:
                "Es existiert bereits einen Benutzer mit diesem Benutzernamen",
            };
          }
        });
    },
    async signIn() {
      const loginResponse = await APIService.signIn({
        username: this.username,
        password: this.password,
      });
      const user = await APIService.userData();
      this.$store.commit("setUser", loginResponse.data);
      this.$store.commit("setToken", loginResponse.headers.authorization);
      this.$store.commit("setAdmin", user.roles.name === "Admin");
      await this.$router.push("/");
    },
    validInput(): void {
      this.disabled = !!this.username && this.arePasswordsSame;
    },
  },
});
