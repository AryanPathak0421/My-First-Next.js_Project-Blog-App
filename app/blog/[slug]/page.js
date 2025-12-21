import posts from "@/data/posts";

export default function SingleBlog({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <p>Post not found</p>;

  return (
    <article className="blog-detail">
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p className="meta">
        {post.date} • {post.author}
      </p>
      <p>{post.content}</p>
    </article>
  );
}
