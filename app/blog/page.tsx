import { cosmic } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import Link from 'next/link'

export default async function BlogPage() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'blog-posts'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!objects || objects.length === 0) {
      return <div className="container mx-auto py-20 px-4">No blog posts available.</div>
    }

    const posts = objects as BlogPost[]

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="grid gap-6">
          {posts.map((post: BlogPost) => (
            <article key={post.id} className="border-b pb-6 mb-6">
              <Link href={`/blog/${post.slug}`} className="block hover:opacity-80">
                <h2 className="text-2xl font-semibold mb-2 hover:underline">{post.title}</h2>
                <p className="text-gray-600">{post.metadata.content.slice(0, 200)}...</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    return <div className="container mx-auto py-20 px-4">No blog posts available.</div>
  }
}