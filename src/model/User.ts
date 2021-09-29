import { Entry } from "@/model/Entry";
import { Role } from "@/model/Role";

export interface User {
  username: string;
  roles: Role;
  entries: Entry[];
  password: string;
}
