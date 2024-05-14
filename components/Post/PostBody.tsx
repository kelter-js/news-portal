import Image from "next/image";
import { Post } from "../../shared/types";
import { Title, Figure, Content, Meta } from "./PostBodyStyle";
import Breadcrumbs from "../Breadcrumbs";

type PostBodyProps = {
  post: Post;
};

const PostBody = ({ post }: PostBodyProps) => (
  <div>
    <Breadcrumbs post={post} />
    <Title>{post.title}</Title>

    <Figure>
      <Image
        alt={post.title}
        src={post.image}
        loading="lazy"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        width={960}
        height={340}
      />
    </Figure>

    <Content dangerouslySetInnerHTML={{ __html: post.content }} />

    <Meta>
      <span>{post.date}</span>

      <span>&middot;</span>

      <a href={`/category/${post.category}`}>{post.category}</a>

      <span>&middot;</span>

      <a href={post.source}>Source</a>
    </Meta>
  </div>
);

export default PostBody;
