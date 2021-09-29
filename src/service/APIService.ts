import { Entry } from "@/model/Entry";
import axios, { AxiosResponse } from "axios";
import { User } from "@/model/User";
import { UserLogin } from "@/model/UserLogin";

const BASE_URL = "http://localhost:8081";

// TODO: Update JWT when logged in
const JWT = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: JWT,
  },
};

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
    return await axios.get(`${BASE_URL}/users/own`).then((res) => res.data);
  },
};
