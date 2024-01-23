import { FC } from "react";

import PostCard from "../Post";
import { Grid, Title } from "./SectionStyle";

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = ({ title }) => (
  <section>
    <Title>{title}</Title>
    <Grid>
      <PostCard />
      <PostCard />
      <PostCard />
    </Grid>
  </section>
);

export default Section;
