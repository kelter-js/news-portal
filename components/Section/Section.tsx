import { FC } from "react";

import { Grid, Title, MoreLink } from "./SectionStyle";
import { Post } from "../../shared/types";
import PostCard from "../Post";

interface SectionProps {
  title: string;
  posts: Post[];
  isCompact?: boolean;
}

const Section: FC<SectionProps> = ({ title, posts, isCompact = false }) => (
  <section>
    <Title>{title}</Title>
    
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Grid>

    {isCompact && (
      <MoreLink href={`/category/${title}`}>More in {title}</MoreLink>
    )}
  </section>
);

export default Section;
