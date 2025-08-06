import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { LandingPage } from '@/types'

export default async function Page() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.findOne({
      type: 'landing-page'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.object) {
    // Fallback content when no landing page object exists
    return (
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Awesome Website</h1>
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68e2c6b1e6?w=2400&h=600&fit=crop&auto=format,compress" 
          alt="Hero Image" 
          className="my-8 w-full max-w-4xl mx-auto object-cover rounded-lg h-96" 
        />
        <p className="text-lg my-6 max-w-2xl mx-auto">
          This is a beautiful landing page built with Next.js and Cosmic CMS. 
          Add content to your Landing Page object in Cosmic to customize this page.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    )
  }

  const landingPage = data.object as LandingPage
  const { title, hero_image, description, call_to_action } = landingPage.metadata

  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">{title || 'Welcome'}</h1>
      {hero_image && (
        <img 
          src={`${hero_image.imgix_url}?w=2400&h=600&fit=crop&auto=format,compress`} 
          alt={title || 'Hero Image'} 
          className="my-8 w-full max-w-4xl mx-auto object-cover rounded-lg h-96" 
        />
      )}
      {description && <p className="text-lg my-6 max-w-2xl mx-auto">{description}</p>}
      {call_to_action && (
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          {call_to_action}
        </button>
      )}
    </div>
  )
}