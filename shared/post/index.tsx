import { Article } from "./article";
import { Hero } from "./hero";

export const Post = ({ post }: { post: Post }) => {
  const { title, mainImage, _updatedAt, author, categories } = post;

  return (
    <div className="bg-white">
      <Hero
        title={title}
        date={_updatedAt}
        thumbnail={mainImage}
        author={author.name}
        categories={categories}
      />
      <Article body={post.body} />
    </div>
  );
};
