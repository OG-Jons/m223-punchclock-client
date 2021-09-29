import { Entry } from "@/model/Entry";
import { Role } from "@/model/Role";

export interface User {
  id: number;
  username: string;
  role?: Role | null;
  entries?: Entry[];
  password: string;
}
