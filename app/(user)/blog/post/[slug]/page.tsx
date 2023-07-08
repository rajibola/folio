import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/shared/rich-text-component";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
        slug
    }
    `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current== $slug][0]{
        ...,
        author->,
        categories->
    }
    `;

  const post: Post = await client.fetch(query, { slug });
  console.log(post);
  return (
    <div>
      <div>Post {slug}</div>
      <PortableText value={post.body} components={RichTextComponents} />
    </div>
  );
}

export default Post;
