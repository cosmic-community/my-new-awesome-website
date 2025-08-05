import { cosmic } from '@/lib/cosmic'
import { Pricing } from '@/types'

export default async function PricingPage() {
  const { objects } = await cosmic.objects.find<Pricing>({
    type: 'pricing'
  });

  if (!objects || objects.length === 0) {
    return <div>No pricing information available.</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>
      <ul>
        {objects.map(item => (
          <li key={item.id} className="mb-5">
            <h2 className="text-2xl font-semibold">{item.metadata.service_name}</h2>
            <p className="text-lg">${item.metadata.price}</p>
            {item.metadata.description && <p>{item.metadata.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}