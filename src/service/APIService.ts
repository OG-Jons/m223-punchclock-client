import { Entry } from "@/model/Entry";
import axios, { AxiosResponse } from "axios";
import { User } from "@/model/User";

const BASE_URL = "http://localhost:8081";

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
  async signUp(user: User): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/users/sign-up`, user);
  },
  async signIn(user: User): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/login`, user);
  },
};
