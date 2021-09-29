import Vue from "vue";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Dashboard",
  data() {
    return {
      land: "This is dashboard",
      user: this.$store.state.user,
      admin: this.$store.state.admin,
    };
  },
  methods: {
    async printEntries(): Promise<void> {
      console.log(await APIService.getEntries());
    },
  },
});
