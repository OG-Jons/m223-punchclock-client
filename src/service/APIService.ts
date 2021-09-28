import { Entry } from "@/model/Entry";
import axios, { AxiosResponse } from "axios";
import { User } from "@/model/User";

const BASE_URL = "http://localhost:8081";

const test =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb25hcyIsImV4cCI6MTYzMzY3NzMxOX0.Dzhl8gh5Ljpbohmw0iNSn9AieBxusVmciFZdCZnw4CwQ1gDjFpppz5xZnKk5Jq-H7Cb6nZBJMHIsKBnXDaze-g";

const config = {
  headers: {
    Authorization: test,
  },
};

export default {
  async getEntries(): Promise<Entry> {
    return axios
      .get(`${BASE_URL}/entries`, config)
      .then((response: AxiosResponse) => response.data);
  },
  async signUp(user: User): Promise<void> {
    console.log(user);
    return axios.post(`${BASE_URL}/users/sign-up`, user);
  },
  async signIn(user: User): Promise<void> {
    console.log(user);
    return axios
      .post(`${BASE_URL}/login`, user)
      .then((response: AxiosResponse) => console.log(response));
  },
};
