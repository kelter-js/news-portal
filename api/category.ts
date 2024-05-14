import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export const fetchPosts = async (categoryId: EntityId): Promise<Post[]> => {
  const url = `${config.baseUrl}/categories/${categoryId}`;
  const res = await fetch(url);

  const posts = (await res.json()) as Post[];

  return posts;
};
