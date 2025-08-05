import { cosmic } from '@/lib/cosmic'
import { LandingPage } from '@/types'

export default async function Page() {
  const { object } = await cosmic.objects.findOne<LandingPage>({
    type: 'landing-page'
  });

  if (!object) {
    return <div>Landing page content not available.</div>;
  }

  const { title, hero_image, description, call_to_action } = object.metadata;

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      {hero_image && (
        <img 
          src={`${hero_image.imgix_url}?w=1200&h=300&fit=crop&auto=format`} 
          alt={title} 
          className="my-5 w-full object-cover" 
        />
      )}
      {description && <p className="text-lg my-5">{description}</p>}
      {call_to_action && <button className="mt-5 px-5 py-2 bg-primary text-primary-foreground rounded">{call_to_action}</button>}
    </div>
  );
}