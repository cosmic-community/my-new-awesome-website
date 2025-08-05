import { cosmic } from '@/lib/cosmic'
import { LandingPage } from '@/types'

export default async function Page() {
  try {
    const { object } = await cosmic.objects.findOne({
      type: 'landing-page'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!object) {
      return <div className="text-center py-20">Landing page content not available.</div>
    }

    const landingPage = object as LandingPage
    const { title, hero_image, description, call_to_action } = landingPage.metadata

    return (
      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        {hero_image && (
          <img 
            src={`${hero_image.imgix_url}?w=2400&h=600&fit=crop&auto=format,compress`} 
            alt={title} 
            className="my-8 w-full max-w-4xl mx-auto object-cover rounded-lg" 
          />
        )}
        {description && <p className="text-lg my-6 max-w-2xl mx-auto">{description}</p>}
        {call_to_action && (
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {call_to_action}
          </button>
        )}
      </div>
    )
  } catch (error) {
    return <div className="text-center py-20">Landing page content not available.</div>
  }
}