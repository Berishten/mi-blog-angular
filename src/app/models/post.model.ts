import { Category } from "./category.model";

export interface Post {
  id: number;
  title: string;
  content: string;
  category: number;
  author?: string;
  date?: string;
  imageUrl?: string;
}
