// app/blog/[slug]/page.tsx
import { cosmic } from '@/lib/cosmic'
import { BlogPost } from '@/types'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { object } = await cosmic.objects.findOne<BlogPost>({
    type: 'blog-posts',
    slug: params.slug
  });

  if (!object) {
    return <div>Post not found.</div>;
  }

  const { title, metadata } = object;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      {metadata.featured_image && (
        <img 
          src={`${metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format`} 
          alt={title} 
          className="mb-5" 
        />
      )}
      <div className="prose">
        <p>{metadata.content}</p>
      </div>
    </div>
  );
}