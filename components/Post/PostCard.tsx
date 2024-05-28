import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card, Figure, Title, Excerpt } from "./PostCardStyle";
import { Post } from "../../shared/types";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <Figure>
        <Image
          alt={post.title}
          src={post.image}
          loading="lazy"
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={320}
          height={180}
          sizes="(min-width: 1000px) 320px, 100vw"
        />
      </Figure>

      <Title>{post.title}</Title>
      
      <Excerpt>{post.lead}</Excerpt>
    </Card>
  );
};

export default PostCard;
