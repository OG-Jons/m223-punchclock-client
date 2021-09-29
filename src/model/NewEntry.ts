import { Category } from "@/model/Category";
import { User } from "@/model/User";

export interface NewEntry {
  appUser: string | User;
  checkIn: { date: string; time: string } | string;
  checkOut: { date: string; time: string } | string;
  category: null;
}
