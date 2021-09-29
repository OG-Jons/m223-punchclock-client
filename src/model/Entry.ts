import { Category } from "@/model/Category";
import { User } from "@/model/User";

export interface Entry {
  id: number;
  checkIn: string;
  checkOut: string;
  category: Category;
  appUser: User;
}
