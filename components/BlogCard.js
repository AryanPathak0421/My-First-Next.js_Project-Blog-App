import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}
