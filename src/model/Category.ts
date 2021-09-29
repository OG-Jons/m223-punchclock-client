import { Entry } from "@/model/Entry";

export interface Category {
  id: number;
  name: string;
  entries?: Entry[];
}
