import { cosmic } from '@/lib/cosmic'
import { ContactForm } from '@/types'

export default async function ContactPage() {
  try {
    const { object } = await cosmic.objects.findOne({
      type: 'contact-form'
    }).props(['title', 'slug', 'metadata']).depth(1)

    if (!object) {
      return <div className="container mx-auto py-20 px-4">Contact form not available.</div>
    }

    const contactForm = object as ContactForm
    const { form_fields } = contactForm.metadata

    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold mb-10">Contact Us</h1>
        <form className="max-w-md mx-auto">
          {form_fields.fields.map((field: { label: string; type: string }, index: number) => (
            <div key={index} className="mb-5">
              <label className="block text-lg font-medium mb-2">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea className="w-full border-2 border-gray-300 p-3 rounded" rows={4} />
              ) : (
                <input type={field.type} className="w-full border-2 border-gray-300 p-3 rounded" />
              )}
            </div>
          ))}
          <button type="submit" className="w-full px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    )
  } catch (error) {
    return <div className="container mx-auto py-20 px-4">Contact form not available.</div>
  }
}