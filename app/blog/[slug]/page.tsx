// app/blog/[slug]/page.tsx
import { cosmic } from '@/lib/cosmic'
import { BlogPost } from '@/types'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const { object } = await cosmic.objects.findOne({
      type: 'blog-posts',
      slug: slug
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!object) {
      return <div>Post not found.</div>
    }

    const post = object as BlogPost
    const { title, metadata } = post

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-5">{title}</h1>
        {metadata.featured_image && (
          <img 
            src={`${metadata.featured_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`} 
            alt={title} 
            className="mb-5 w-full object-cover rounded-lg" 
          />
        )}
        <div className="prose max-w-none">
          <p>{metadata.content}</p>
        </div>
      </div>
    )
  } catch (error) {
    return <div>Post not found.</div>
  }
}