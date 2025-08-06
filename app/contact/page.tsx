import { cosmic, safeCosmicQuery } from '@/lib/cosmic'
import { ContactForm } from '@/types'

export default async function ContactPage() {
  const data = await safeCosmicQuery(async () => {
    return await cosmic.objects.findOne({
      type: 'contact-form'
    }).props(['title', 'slug', 'metadata']).depth(1)
  });

  if (!data?.object) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Message</label>
              <textarea 
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none" 
                rows={4} 
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Configure your contact form fields in Cosmic CMS to customize this form.
          </p>
        </div>
      </div>
    )
  }

  const contactForm = data.object as ContactForm
  const { form_fields } = contactForm.metadata

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-16 text-center">Contact Us</h1>
      <form className="max-w-md mx-auto space-y-6">
        {form_fields.fields.map((field: { label: string; type: string }, index: number) => (
          <div key={index}>
            <label className="block text-lg font-medium mb-2">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea 
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none" 
                rows={4} 
              />
            ) : (
              <input 
                type={field.type} 
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none" 
              />
            )}
          </div>
        ))}
        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}