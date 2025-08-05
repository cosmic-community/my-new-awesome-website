import { cosmic } from '@/lib/cosmic'
import { SocialLink } from '@/types'

export default async function SocialLinksPage() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'social-links'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!objects || objects.length === 0) {
      return <div className="container mx-auto py-20 px-4">No social links available.</div>
    }

    const socialLinks = objects as SocialLink[]

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Connect with Me</h1>
        <div className="grid gap-4 max-w-md mx-auto">
          {socialLinks.map((link: SocialLink) => (
            <a 
              key={link.id} 
              href={link.metadata.platform_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl font-semibold">{link.metadata.platform_name}</span>
            </a>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    return <div className="container mx-auto py-20 px-4">No social links available.</div>
  }
}