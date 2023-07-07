interface Props {
  posts: Post[];
}

export const BlogList = ({ posts }: Props) => {
  console.log(posts.length);
  return <div>Bloglist</div>;
};
