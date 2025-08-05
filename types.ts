// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, any>;
}

// Blog Post interface
interface BlogPost extends CosmicObject {
  metadata: {
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// About Me interface
interface AboutMe extends CosmicObject {
  metadata: {
    name: string;
    bio: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Social Link interface
interface SocialLink extends CosmicObject {
  metadata: {
    platform_name: string;
    platform_url: string;
  };
}

// Pricing interface
interface Pricing extends CosmicObject {
  metadata: {
    service_name: string;
    price: number;
    description?: string;
  };
}

// Contact Form interface
interface ContactForm extends CosmicObject {
  metadata: {
    form_fields: {
      fields: Array<{ label: string; type: string }>;
    };
  };
}

// Landing Page interface
interface LandingPage extends CosmicObject {
  metadata: {
    title: string;
    hero_image: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    call_to_action?: string;
  };
}