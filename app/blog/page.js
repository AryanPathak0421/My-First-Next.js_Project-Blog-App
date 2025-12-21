import BlogCard from "@/components/BlogCard";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section>
      <h2 className="page-title">Latest Articles</h2>
      <div className="grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
