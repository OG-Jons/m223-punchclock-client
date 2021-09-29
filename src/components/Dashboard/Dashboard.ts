import Vue from "vue";
import APIService from "@/service/APIService";
import SignOut from "@/components/SignOut/SignOut.vue";
import { EntryWithSplitDateAndTime } from "@/model/EntryWithSplitDateAndTime";
import { Entry } from "@/model/Entry";
import { Category } from "@/model/Category";

export default Vue.extend({
  name: "Dashboard",
  components: {
    SignOut,
  },
  data() {
    return {
      user: this.$store.state.user,
      entries: [] as EntryWithSplitDateAndTime[],
      admin: false,
      fields: [
        "checkIn",
        "checkOut",
        { key: "category", label: "Kategorie" },
        { key: "appUser.username", label: "Benutzer" },
        { key: "id", label: "Speichern/Löschen" },
      ],
      categories: [{}],
      newEntry: {
        checkIn: {
          date: "",
          time: "",
        },
        checkOut: {
          date: "",
          time: "",
        },
        category: null,
        appUser: "",
      },
    };
  },
  methods: {
    splitDateAndTime(entry: Entry): EntryWithSplitDateAndTime {
      // Split up date and time, to use the datefields
      const checkInDates = entry.checkIn.split("T");
      const checkOutDates = entry.checkOut.split("T");
      return {
        id: entry.id,
        checkIn: {
          date: checkInDates[0],
          time: checkInDates[1],
        },
        checkOut: {
          date: checkOutDates[0],
          time: checkOutDates[1],
        },
        category: entry.category,
        appUser: entry.appUser,
      };
    },
    async setNewEntry(): Promise<void> {
      const newEntry = this.splitDateAndTime(
        await APIService.createEntry(this.newEntry)
      );
      this.entries.push(newEntry);
      this.onReset();
    },
    async displayEntries(): Promise<void> {
      const entries = await APIService.getEntries();
      const categories = this.$store.state.categories;
      this.categories = categories.map((category: Category) => ({
        value: category,
        text: category.name,
      }));
      this.entries = entries.map((entry) => this.splitDateAndTime(entry));
    },
    async updateEntry(id: number): Promise<void> {
      // First get Index of the entry, then make PUT-Call to update in database and update entry in array
      const index = this.entries.findIndex((entry) => entry.id === id);
      const updatedEntry = await APIService.updateEntry(this.entries[index]);
      this.entries[index] = this.splitDateAndTime(updatedEntry);
    },
    async deleteEntry(id: number): Promise<void> {
      // DELETE call with ID and then filter out the deleted Entry
      await APIService.deleteEntry(id);
      this.entries = this.entries.filter((entry) => entry.id !== id);
    },
    onReset() {
      this.newEntry = {
        checkIn: {
          date: "",
          time: "",
        },
        checkOut: {
          date: "",
          time: "",
        },
        category: null,
        appUser: "",
      };
    },
  },
  async created() {
    this.admin = await this.$store.getters.isAdmin;
    await this.$store.commit("setCategories", await APIService.getCategories());
    await this.displayEntries();
  },
});
