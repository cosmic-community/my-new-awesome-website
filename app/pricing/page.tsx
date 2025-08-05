import { cosmic } from '@/lib/cosmic'
import { Pricing } from '@/types'

export default async function PricingPage() {
  try {
    const { objects } = await cosmic.objects.find({
      type: 'pricing'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!objects || objects.length === 0) {
      return <div className="container mx-auto py-20 px-4">No pricing information available.</div>
    }

    const pricingItems = objects as Pricing[]

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Pricing</h1>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {pricingItems.map((item: Pricing) => (
            <div key={item.id} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">{item.metadata.service_name}</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4">${item.metadata.price}</p>
              {item.metadata.description && (
                <p className="text-gray-600">{item.metadata.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    return <div className="container mx-auto py-20 px-4">No pricing information available.</div>
  }
}