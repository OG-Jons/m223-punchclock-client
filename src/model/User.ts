import { Entry } from "@/model/Entry";
import { Role } from "@/model/Role";

export interface User {
  username: string;
  role: Role;
  entries: Entry[];
  password: string;
}
