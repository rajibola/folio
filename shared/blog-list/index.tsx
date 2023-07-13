import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { ClientSideRoute } from "../client-side-route";
import { Hero } from "./hero";

interface Props {
  posts: Post[];
}

export const BlogList = ({ posts }: Props) => {
  return (
    <section>
      <Hero />
      <div>Bloglist</div>
      {posts.map((post) => {
        return (
          <ClientSideRoute route={`/blog/${post.slug.current}`} key={post._id}>
            <div>
              <Image
                className=" object-cover object-left lg:object-center"
                src={urlForImage(post.mainImage as any).url()}
                alt={post.author.name}
                width={400}
                height={300}
              />
              <div>{post.title}</div>
            </div>
          </ClientSideRoute>
        );
      })}
    </section>
  );
};
