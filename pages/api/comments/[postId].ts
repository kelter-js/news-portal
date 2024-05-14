import path from "path";
import { writeFile } from "fs/promises";

import type { NextApiRequest, NextApiResponse } from "next";
import type { Comment, EntityId } from "../../../shared/types";
import commentsSource from "../../../server/comments.json";

const comments = commentsSource as Comment[];

const commentsForPost = (postId: EntityId) =>
  comments.filter(({ post }) => post === postId);

export default function commentsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = Number(req.query.id);
  const requestBody = req.body;

  switch (req.method) {
    case "GET": {
      return res.status(200).json(commentsForPost(postId));
    }

    case "POST": {
      comments.push({
        id: comments.length + 1,
        author: requestBody.name,
        content: requestBody.comment,
        post: postId,
        time: "Less than a minute ago",
      });

      writeFile(
        path.resolve(process.cwd(), "server/comments.json"),
        JSON.stringify(comments)
      );

      return res.json(commentsForPost(postId));
    }

    default:
      return res.status(404);
  }
}
