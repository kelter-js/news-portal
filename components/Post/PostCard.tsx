import { FC } from "react";

import { Card, Figure, Title, Excerpt } from "./PostCardStyle";

const PostCard: FC = () => (
  <Card href="/post/example">
    <Figure>
      <img alt="Post photo" src="/image1.jpg" />
    </Figure>

    <Title>Post title!</Title>

    <Excerpt>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Excerpt>
  </Card>
);

export default PostCard;
