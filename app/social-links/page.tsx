import { cosmic } from '@/lib/cosmic'
import { SocialLink } from '@/types'

export default async function SocialLinksPage() {
  const { objects } = await cosmic.objects.find<SocialLink>({
    type: 'social-links'
  });

  if (!objects || objects.length === 0) {
    return <div>No social links available.</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Connect with Me</h1>
      <ul>
        {objects.map(link => (
          <li key={link.id} className="mb-5">
            <a href={link.metadata.platform_url} className="text-2xl font-semibold hover:underline">
              {link.metadata.platform_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}