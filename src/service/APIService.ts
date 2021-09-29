import { Entry } from "@/model/Entry";
import axios, { AxiosResponse } from "axios";
import { User } from "@/model/User";
import { UserLogin } from "@/model/UserLogin";
import Vue from "vue";
import { Category } from "@/model/Category";
import { EntryWithSplitDateAndTime } from "@/model/EntryWithSplitDateAndTime";
import { NewEntry } from "@/model/NewEntry";

const BASE_URL = "http://localhost:8081";

function getConfig() {
  return {
    headers: { Authorization: Vue.$cookies.get("token") },
  };
}

export default {
  async getEntries(): Promise<Entry[]> {
    return axios
      .get(`${BASE_URL}/entries`, getConfig())
      .then((response: AxiosResponse) => response.data);
  },

  async createEntry(entry: NewEntry): Promise<Entry> {
    entry.appUser = await this.userData();
    if (typeof entry.checkIn !== "string") {
      entry.checkIn = `${entry.checkIn.date}T${entry.checkIn.time}`;
    }
    if (typeof entry.checkOut !== "string") {
      entry.checkOut = `${entry.checkOut.date}T${entry.checkOut.time}`;
    }
    return axios
      .post(`${BASE_URL}/entries`, entry, getConfig())
      .then((res) => res.data);
  },

  async deleteEntry(id: number): Promise<void> {
    await axios.delete(`${BASE_URL}/entries/${id}`, getConfig());
  },

  async updateEntry(entry: EntryWithSplitDateAndTime): Promise<Entry> {
    const updatedEntry = {
      id: entry.id,
      checkIn: `${entry.checkIn.date}T${entry.checkIn.time}`,
      checkOut: `${entry.checkOut.date}T${entry.checkOut.time}`,
      appUser: entry.appUser,
      category: entry.category,
    };
    return axios
      .put(`${BASE_URL}/entries/${entry.id}`, updatedEntry, getConfig())
      .then((res) => res.data);
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
    await axios.delete(`${BASE_URL}/categories/${id}`, getConfig());
  },

  async updateCategory(category: Category): Promise<Category> {
    return await axios
      .put(`${BASE_URL}/categories/${category.id}`, category, getConfig())
      .then((res) => res.data);
  },

  async getUsers(): Promise<User[]> {
    return await axios
      .get(`${BASE_URL}/users`, getConfig())
      .then((res) => res.data);
  },

  async deleteUser(id: number): Promise<void> {
    await axios.delete(`${BASE_URL}/users/${id}`, getConfig());
  },

  async setUserRole(id: number, user: User): Promise<User> {
    return await axios.put(`${BASE_URL}/users/${id}`, user, getConfig());
  },
};
