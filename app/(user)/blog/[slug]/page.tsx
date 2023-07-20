import { client } from "@/sanity/lib/client";
import { Post as PostPage } from "@/shared/post";
import { groq } from "next-sanity";

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
        categories[]->,
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <div>
      <PostPage post={post} />
    </div>
  );
}

export default Post;
