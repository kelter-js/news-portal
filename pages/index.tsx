import { FC } from "react";
import Head from "next/head";

import { fetchPosts, fetchCategories } from "../api";
import { FeedProps } from "../shared/types";
import Feed from "../components/Feed";

export async function getServerSideProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();

  return { props: { posts, categories } };
}

const Front: FC<FeedProps> = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title>Front page of the Internet</title>
        <title>Front page of the Internet</title>
      </Head>

      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
};

export default Front;
