import Vue from "vue";
import { User } from "@/model/User";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Users",
  data() {
    return {
      users: [] as User[],
      fields: [
        { key: "username", label: "Benutzer" },
        { key: "role", label: "Administrator" },
        { key: "id", label: "Speichern/Löschen" },
      ],
    };
  },
  methods: {
    async loadUsers() {
      this.users = await APIService.getUsers();
    },
    async deleteUser(id: number) {
      await APIService.deleteUser(id);
      const deletedUser = this.users.filter((user) => user.id === id)[0];
      if (deletedUser.id === id) {
        await this.signOut();
      }
      this.users = this.users.filter((user) => user.id !== id);
    },
    async makeUserAdmin(id: number, user: User) {
      const index = this.users.findIndex((user) => user.id === id);
      this.users[index] = await APIService.setUserRole(id, user);
    },
    async signOut() {
      await this.$store.commit("setUser", null);
      await this.$store.commit("setToken", null);
      await this.$store.commit("setAdmin", null);
      await this.$router.push("/auth");
    },
  },
  async created() {
    await this.loadUsers();
  },
});
