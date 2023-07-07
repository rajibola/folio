import { client } from "@/sanity/lib/client";
import { BlogList } from "@/shared/blog-list";
import { Header } from "@/shared/header";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function Home() {
  const posts = await client.fetch(query);
  console.log(posts);
  return (
    <div>
      <Header />
      <BlogList posts={posts} />
    </div>
  );
}
