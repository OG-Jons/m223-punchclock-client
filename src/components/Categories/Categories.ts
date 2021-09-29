import Vue from "vue";
import { Category } from "@/model/Category";
import APIService from "@/service/APIService";

export default Vue.extend({
  name: "Categories",
  data() {
    return {
      categories: [] as Category[],
      newCategory: {} as Category,
      fields: ["name", { key: "id", label: "Speichern/Löschen" }],
    };
  },
  methods: {
    async loadCategories() {
      this.categories = this.$store.state.categories;
    },
    async deleteCategory(id: number) {
      await APIService.deleteCategory(id);
      this.categories = this.categories.filter((cat) => cat.id !== id);
    },
    async setCategory() {
      const newCategory = await APIService.setCategory(this.newCategory);
      this.categories.push(newCategory);
      this.onReset();
    },
    async updateCategory(id: number) {
      // First get Index of the category, then make PUT-Call to update in database and update category in array
      const index = this.categories.findIndex((cat) => cat.id === id);
      this.categories[index] = await APIService.updateCategory(
        this.categories[index]
      );
    },
    onReset() {
      this.newCategory = {} as Category;
    },
  },
  async created() {
    await this.loadCategories();
  },
});
