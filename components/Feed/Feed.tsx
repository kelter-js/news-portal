import { FC } from "react";

import { FeedProps } from "../../shared/types";
import Section from "../Section";

const Feed: FC<FeedProps> = ({ posts, categories }) => (
  <>
    {categories.map((currentCategory) => {
      const inSection = posts.filter(
        (post) => post.category === currentCategory
      );

      return (
        <Section
          key={currentCategory}
          title={currentCategory}
          posts={inSection}
          isCompact
        />
      );
    })}
  </>
);

export default Feed;
