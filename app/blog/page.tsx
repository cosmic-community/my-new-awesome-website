import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import Link from 'next/link'

export default async function BlogPage() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.find({
      type: 'blog-posts'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.objects || data.objects.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10">Blog</h1>
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-8">No blog posts available yet.</p>
          <p className="text-gray-500">Add blog posts to your Cosmic CMS to see them here.</p>
        </div>
      </div>
    )
  }

  const posts = data.objects as BlogPost[]

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-8 max-w-3xl mx-auto">
        {posts.map((post: BlogPost) => (
          <article key={post.id} className="border-b pb-8 mb-8 last:border-b-0">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80">
              {post.metadata.featured_image && (
                <img 
                  src={`${post.metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-3 hover:underline">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {post.metadata.content.slice(0, 200)}...
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}