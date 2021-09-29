import { Entry } from "@/model/Entry";
import axios, { AxiosResponse } from "axios";
import { User } from "@/model/User";
import { UserLogin } from "@/model/UserLogin";

const BASE_URL = "http://localhost:8081";

function getConfig() {
  return {
    headers: { Authorization: Vue.$cookies.get("token") },
  headers: {
    Authorization: JWT,
  },
  };
}

export default {
  async getEntries(): Promise<Entry> {
    return axios
      .get(`${BASE_URL}/entries`, config)
      .then((response: AxiosResponse) => response.data);
  },
  async signUp(user: UserLogin): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/users/sign-up`, user);
  },
  async signIn(user: UserLogin): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/login`, user);
  },

  async userData(): Promise<User> {
    return await axios
      .get(`${BASE_URL}/users/own`, getConfig())
      .then((res) => res.data);
  },

  async getCategories(): Promise<Category[]> {
    return await axios
      .get(`${BASE_URL}/categories`, getConfig())
      .then((res) => res.data);
  },

  async setCategory(category: Category): Promise<Category> {
    return await axios
      .post(`${BASE_URL}/categories`, category, getConfig())
      .then((res) => res.data);
  },

  async deleteCategory(id: number): Promise<void> {
    return await axios.delete(`${BASE_URL}/categories/${id}`, getConfig());
  },

  async updateCategory(category: Category): Promise<Category> {
    return await axios
      .put(`${BASE_URL}/categories/${category.id}`, category, getConfig())
      .then((res) => res.data);
  },
};
