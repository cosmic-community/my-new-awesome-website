// app/blog/[slug]/page.tsx
import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { BlogPost } from '@/types'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.findOne({
      type: 'blog-posts',
      slug: slug
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.object) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
        <p className="text-lg text-gray-600">The blog post you're looking for doesn't exist.</p>
      </div>
    )
  }

  const post = data.object as BlogPost
  const { title, metadata } = post

  return (
    <div className="container mx-auto py-20 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        {metadata.featured_image && (
          <img 
            src={`${metadata.featured_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`} 
            alt={title} 
            className="mb-8 w-full object-cover rounded-lg" 
          />
        )}
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed text-gray-700">
            {metadata.content}
          </div>
        </div>
      </article>
    </div>
  )
}