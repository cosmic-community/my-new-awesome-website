# My New Awesome Website

![App Preview](https://images.unsplash.com/photo-1573497019121-1d3e09a3ba4a?w=1200&h=300&fit=crop&auto=format)

Welcome to your personal business showcase website! This Next.js application provides everything you need to present your services to Grand Rapids locals effectively. Utilize this platform to blog, share your professional story, list your service pricing, and display your contact and social media links.

## Features

- **Dynamic Landing Page:** Captivate visitors with visually engaging design elements.
- **Comprehensive Blog:** Post updates and share professional insights seamlessly.
- **About Me Section:** Professional biography and profile for boosting personal branding.
- **Contact Form:** A simple way for clients or employers to get in touch with you.
- **Pricing Page:** Display your services and costs clearly.
- **Social Media Integration:** Connect and share your profiles with ease.

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6892626154b8038efaf57989&clone_repository=6892638b54b8038efaf57994)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to build my website to show my business off to all the locals in Grand Rapids looking for a software sales guy. I need my website to have an eye-catching landing page, a blog, an about me section, a contact form, a pricing page, and links to all of my socials."

### Code Generation Prompt

> "Build an application that leverages my existing Cosmic CMS content structure, including object types for blog posts, social links, about me, pricing, contact form, and a landing page."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js** for a modern web application framework.
- **React** as the component library.
- **Tailwind CSS** for styling.
- **TypeScript** for static typing.
- **Cosmic** CMS for content management.

## Getting Started

### Prerequisites
- Node.js and Bun.js installed on your machine.
- Access to your Cosmic bucket API keys.

### Installation
Clone the repository and navigate into the project directory:

```bash
git clone [repository-url]
cd my-new-awesome-website
```

Install dependencies:

```bash
bun install
```

Set up environment variables by creating a `.env.local` file from the template provided.

Start the development server:

```bash
bun dev
```

## Cosmic SDK Examples

Here are some examples of using the Cosmic SDK to fetch content:

```typescript
// Fetch all blog posts
const posts = await cosmic.objects.find({ type: 'blog-posts' });

// Fetch the about me section
const aboutMe = await cosmic.objects.findOne({ type: 'about-me' });
```

## Cosmic CMS Integration

This website deeply integrates with your Cosmic CMS to ensure all your content is managed from one place. The dynamic fetching capabilities offer flexibility to manage and display your content seamlessly.

## Deployment Options

You can deploy this project to platforms like Vercel or Netlify for seamless CI/CD integration. Ensure to configure the environment variables on your hosting platform for production.

<!-- README_END -->