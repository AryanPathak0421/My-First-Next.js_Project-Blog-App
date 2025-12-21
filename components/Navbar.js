import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">NextBlog</Link>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
