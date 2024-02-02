import React from "react";
import Head from "next/head";

import Feed from "../components/Feed";

const Front = (): JSX.Element => (
  <>
    <Head>
      <title>Front page of the Internet</title>
    </Head>

    <main>
      <Feed />
    </main>
  </>
);

export default Front;
