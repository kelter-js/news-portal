import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { CommentsState, UPDATE_COMMENTS_ACTION } from "../../store/comments";
import { PostState, UPDATE_POST_ACTION } from "../../store/post";
import { fetchPost, fetchComments } from "../../pages/api";
import { State, wrapper } from "../../store";
import Loader from "../Loader";
import PostBody from "./PostBody";
import Comments from "../Comments";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      if (typeof params.id !== "string") throw new Error("Unexpected id");

      const comments = await fetchComments(params.id);
      const post = await fetchPost(params.id);

      store.dispatch({ type: UPDATE_POST_ACTION, post });
      store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments });

      return null;
    }
);

const Post: NextPage = () => {
  const post = useSelector<State, PostState>(({ post }) => post);
  const comments = useSelector<State, CommentsState>(
    ({ comments }) => comments
  );

  if (!post) return <Loader />;

  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  );
};

export default Post;
