export type UriString = string;
export type UniqueString = string;
export type EntityId = number | UniqueString;

export type Category = "Technology" | "Business" | "Environment" | "Science";
export type DateIsoString = string;

export type Post = {
  id: EntityId;
  date: DateIsoString;
  category: Category;
  title: string;
  lead: string;
  content: string;
  image: UriString;
  source: UriString;
};

export interface FeedProps {
  posts: Post[];
  categories: Category[];
}

export type Person = string;
export type RelativeTime = string;
export type Comment = {
  id: EntityId;
  author: Person;
  content: string;
  time: RelativeTime;
  post: EntityId;
};

export type PostState = Optional<Post>;
export type Optional<TEntity> = TEntity | null;
