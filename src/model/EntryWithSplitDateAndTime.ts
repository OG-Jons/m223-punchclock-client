import { Category } from "@/model/Category";
import { User } from "@/model/User";

export interface EntryWithSplitDateAndTime {
  id: number;
  checkIn: {
    date: string;
    time: string;
  };
  checkOut: {
    date: string;
    time: string;
  };
  category: Category;
  appUser: User;
}
