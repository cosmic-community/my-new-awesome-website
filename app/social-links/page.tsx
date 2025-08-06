import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { SocialLink } from '@/types'

export default async function SocialLinksPage() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.find({
      type: 'social-links'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.objects || data.objects.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Connect with Me</h1>
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-8">No social links available yet.</p>
          <p className="text-gray-500">Add social links to your Cosmic CMS to display them here.</p>
        </div>
      </div>
    )
  }

  const socialLinks = data.objects as SocialLink[]

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center">Connect with Me</h1>
      <div className="grid gap-6 max-w-md mx-auto">
        {socialLinks.map((link: SocialLink) => (
          <a 
            key={link.id} 
            href={link.metadata.platform_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border-2 rounded-lg text-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
          >
            <span className="text-xl font-semibold text-blue-700">{link.metadata.platform_name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}