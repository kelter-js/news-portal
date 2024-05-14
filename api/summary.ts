import fetch from "node-fetch";

import { Post, Category } from "../shared/types";
import { config } from "./config";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${config.baseUrl}/posts`);
  
  const posts = (await res.json()) as Post[];

  return posts;
};

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${config.baseUrl}/categories`);

  const categories = (await res.json()) as Category[];

  return categories;
};
