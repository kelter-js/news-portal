import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export const fetchPost = async (id: EntityId): Promise<Post> => {
  const res = await fetch(`${config.baseUrl}/posts/${id}`);

  const post = (await res.json()) as Post;

  return post;
};
