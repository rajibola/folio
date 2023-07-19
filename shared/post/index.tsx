import { Article } from "./article";
import { Hero } from "./hero";

export const Post = ({ post }: { post: Post }) => {
  // const { title, mainImage, _updatedAt, author, categories } = post;
  if (!post) return;

  return (
    <div className="bg-white">
      <Hero
        title={post.title}
        date={post._updatedAt}
        thumbnail={post.mainImage}
        author={post.author.name}
        categories={post.categories}
      />
      <Article body={post.body} />
    </div>
  );
};
