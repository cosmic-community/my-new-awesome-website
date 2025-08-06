import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { AboutMe } from '@/types'

export default async function AboutPage() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.findOne({
      type: 'about-me'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.object) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="max-w-2xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&auto=format,compress" 
            alt="Profile" 
            className="mb-8 rounded-full w-48 h-48 object-cover mx-auto" 
          />
          <p className="text-lg text-gray-600">
            About me content is not available yet. Add content to your About Me object in Cosmic CMS to personalize this page.
          </p>
        </div>
      </div>
    )
  }

  const aboutMe = data.object as AboutMe
  const { name, bio, profile_image } = aboutMe.metadata

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        {profile_image && (
          <img 
            src={`${profile_image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`} 
            alt={name} 
            className="mb-8 rounded-full w-48 h-48 object-cover" 
          />
        )}
        <h1 className="text-4xl font-bold mb-8">{name}</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">{bio}</p>
      </div>
    </div>
  )
}