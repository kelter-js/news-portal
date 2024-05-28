import { FC } from "react";

import { Container, Author, Body, Meta } from "./CommentStyle";
import { Comment as CommentType } from "../../shared/types";

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => (
  <Container>
    <Author>{comment.author}</Author>
    <Body>{comment.content}</Body>
    <Meta>{comment.time}</Meta>
  </Container>
);

export default Comment;
