import { FC } from "react";

import { Comment as CommentType, EntityId } from "../../shared/types";
import { Container, List, Item } from "./CommentsStyle";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm";

type CommentsProps = {
  post: EntityId;
  comments: CommentType[];
};

const Comments: FC<CommentsProps> = ({ post, comments }) => (
  <Container id="comments">
    <h3>Comments</h3>

    <List>
      {comments.map((comment) => (
        <Item key={comment.id}>
          <Comment comment={comment} />
        </Item>
      ))}
    </List>

    <CommentForm post={post} />
  </Container>
);

export default Comments;
