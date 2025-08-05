import { cosmic } from '@/lib/cosmic'
import { AboutMe } from '@/types'

export default async function AboutPage() {
  try {
    const { object } = await cosmic.objects.findOne({
      type: 'about-me'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!object) {
      return <div>About me content not available.</div>
    }

    const aboutMe = object as AboutMe
    const { name, bio, profile_image } = aboutMe.metadata

    return (
      <div className="flex flex-col items-center py-20">
        {profile_image && (
          <img 
            src={`${profile_image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`} 
            alt={name} 
            className="mb-5 rounded-full w-48 h-48 object-cover" 
          />
        )}
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg mt-5 max-w-2xl text-center">{bio}</p>
      </div>
    )
  } catch (error) {
    return <div>About me content not available.</div>
  }
}