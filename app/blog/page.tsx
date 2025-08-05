import { cosmic } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import Link from 'next/link';

export default async function BlogPage() {
  const { objects } = await cosmic.objects.find<BlogPost>({
    type: 'blog-posts'
  });

  if (!objects || objects.length === 0) {
    return <div>No blog posts available.</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <ul>
        {objects.map(post => (
          <li key={post.id} className="mb-5">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-2xl font-semibold hover:underline">{post.title}</a>
            </Link>
            <p>{post.metadata.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}