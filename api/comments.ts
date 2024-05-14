import fetch from "node-fetch";
import { Comment, EntityId, Person } from "../shared/types";
import { config } from "./config";

export const fetchComments = async (postId: EntityId): Promise<Comment[]> => {
  const url = `${config.baseUrl}/comments/${postId}`;
  const res = await fetch(url);

  const comments = (await res.json()) as Comment[];

  return comments;
};

export const submitComment = async (
  postId: EntityId,
  name: Person,
  comment: string
) => {
  const url = `${config.baseUrl}/posts/${postId}/comments`;

  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ name, comment }),
  });
};
