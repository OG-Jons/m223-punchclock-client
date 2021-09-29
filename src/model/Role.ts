import { User } from "@/model/User";

export interface Role {
  id: number;
  name: string;
  appUsers: User[];
}
