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

export const revalidate = 30;

export default async function Home() {
  const posts = await client.fetch(query);
  return (
    <div>
      <Header />
      <BlogList posts={posts} />
    </div>
  );
}
