import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { Pricing } from '@/types'

export default async function PricingPage() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.find({
      type: 'pricing'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.objects || data.objects.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Pricing</h1>
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-8">No pricing information available yet.</p>
          <p className="text-gray-500">Add pricing items to your Cosmic CMS to display them here.</p>
        </div>
      </div>
    )
  }

  const pricingItems = data.objects as Pricing[]

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center">Pricing</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {pricingItems.map((item: Pricing) => (
          <div key={item.id} className="border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{item.metadata.service_name}</h2>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              ${typeof item.metadata.price === 'number' ? item.metadata.price.toLocaleString() : item.metadata.price}
            </div>
            {item.metadata.description && (
              <p className="text-gray-600 leading-relaxed">{item.metadata.description}</p>
            )}
            <button className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}