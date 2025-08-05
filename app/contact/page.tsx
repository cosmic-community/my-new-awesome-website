import { cosmic } from '@/lib/cosmic'
import { ContactForm } from '@/types'

export default function ContactPage() {
  const { object } = cosmic.objects.findOne<ContactForm>({
    type: 'contact-form'
  });

  if (!object) {
    return <div>Contact form not available.</div>;
  }

  const { form_fields } = object.metadata;

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Contact Us</h1>
      <form>
        {form_fields.fields.map((field, index) => (
          <div key={index} className="mb-5">
            <label className="block text-lg font-medium mb-2">{field.label}</label>
            <input type={field.type} className="w-full border-2 border-gray-300 p-3 rounded" />
          </div>
        ))}
        <button type="submit" className="px-5 py-2 bg-primary text-primary-foreground rounded">Submit</button>
      </form>
    </div>
  );
}