import { MakeStore, createWrapper } from "next-redux-wrapper";
import { Store, createStore, combineReducers } from "redux";

import { comments, CommentsState } from "./comments";
import { post, PostState } from "./post";

export type State = {
  post: PostState;
  comments: CommentsState;
};

const combinedReducer = combineReducers({ post, comments });
const makeStore: MakeStore<Store<State>> = () => createStore(combinedReducer);

export const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: true,
});
