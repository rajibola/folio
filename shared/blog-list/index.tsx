import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { ClientSideRoute } from "../client-side-route";
import { Hero } from "./hero";
import { PostCard } from "./post-card";

interface Props {
  posts: Post[];
}

export const BlogList = ({ posts }: Props) => {
  return (
    <section>
      <Hero />
      <div className="flex w-[calc(100%-3rem)] max-w-[90ch] mx-auto justify-center gap-10">
        {posts.map((post) => {
          const { author, mainImage, title, slug } = post;
          return (
            <PostCard
              author={post.author}
              imageUrl={post.mainImage}
              title={title}
              link={slug.current}
              key={post._id}
            />
          );
        })}
      </div>
    </section>
  );
};
