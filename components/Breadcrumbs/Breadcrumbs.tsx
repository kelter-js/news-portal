import { FC } from "react";
import Link from "next/link";

import { Container } from "./BreadcrumbsStyle";
import { Post } from "../../shared/types";

type BreadcrumbsProps = {
  post: Post;
};

const Breacrumbs: FC<BreadcrumbsProps> = ({ post }) => (
  <Container>
    <a href="/">Front</a>

    <span>▸</span>

    <a href={`/category/${post.category}`}>{post.category}</a>
  </Container>
);

export default Breacrumbs;
