import { cosmic } from '@/lib/cosmic'
import { AboutMe } from '@/types'

export default async function AboutPage() {
  const { object } = await cosmic.objects.findOne<AboutMe>({
    type: 'about-me'
  });

  if (!object) {
    return <div>About me content not available.</div>;
  }

  const { name, bio, profile_image } = object.metadata;

  return (
    <div className="flex flex-col items-center py-20">
      {profile_image && (
        <img 
          src={`${profile_image.imgix_url}?w=200&h=200&fit=crop&auto=format`} 
          alt={name} 
          className="mb-5 rounded-full" 
        />
      )}
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-lg mt-5">{bio}</p>
    </div>
  );
}