import { Specialty, MenuItem, GalleryItem, Testimonial } from './types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'spec-1',
    title: 'Customized Floral Cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636',
    tagline: 'Artisanal blooms sculpted in delicate buttercream.'
  },
  {
    id: 'spec-2',
    title: 'Decadant Fudgy Brownies',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e',
    tagline: 'Intensely rich, fudgy squares made with premium cocoa.'
  },
  {
    id: 'spec-3',
    title: 'Elegant Cupcakes',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d',
    tagline: 'Light, dainty, and piped with perfect whipped frosting.'
  },
  {
    id: 'spec-4',
    title: 'Gourmet Layered Jar Cakes',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Perfect cake layers and moist syrups stacked in glass jars.'
  }
  
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'menu-1',
    name: 'Signature Truffle Cake',
    category: 'cake',
    price: 500,
    unit: 'Slice',
    description: 'Deep dark chocolate ganache with a melt-in-your-mouth sponge.',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-2',
    name: 'Velvet Cloud Cupcakes',
    category: 'cupcakes',
    price: 450,
    unit: '9pcs',
    description: 'Classic red velvet with our signature whipped cream cheese icing.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800'
  },
  {
    id: 'menu-3',
    name: 'Brownies',
    category: 'brownies',
    price: 300,
    unit: 'Box of 4',
    description: 'The perfect balance of sweet and salty in every dense, fudgy bite.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Mother’s Day Bloom',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    description: 'A delicate strawberry buttercream cake detailed with elegant fresh macarons and gold pearls.',
    story: 'Designed to express absolute love. A light-as-air vanilla sponge layered with house-made fresh raspberry reduction, frosted in dusty rose buttercream. Garnished with golden chocolate pearls and strawberry halves.'
  },
  {
    id: 'gal-2',
    title: 'Midnight Gold Symphony',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic black velvet and dark Belgian chocolate cake framed with high-luster gold sails.',
    story: 'Our ultimate statement cake. This masterpiece blends raw charcoal cocoa and 70% dark Belgian chocolate. Piped to sleek perfection, featuring gold-painted bubble sails, textured dark chocolate shards, and brilliant sugar orbs.'
  },
  {
    id: 'gal-3',
    title: 'Violet Dreamscape',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
    description: 'Ethereal lavender textured cake capped with magical silver confectionery spears.',
    story: 'Created for a whimsical baby shower. A lavender-infused cake matched with lemon curd filling. Coated in textured pastel lavender frosting, styled with silver candy bubbles, spherical cake treats, and magical accents.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Manya Verma',
    role: 'Bride',
    rating: 5,
    text: '"The wedding cake Aparna made for us wasn’t just beautiful, it was the best cake I’ve ever tasted. Our guests are still talking about it!"'
  },
  {
    id: 'test-2',
    name: 'Gaurav Gupta',
    role: 'Corporate Host',
    rating: 5,
    text: '"Perfect brownies! They were fudgy, rich, and delivered right on time for our office party. Highly recommend the sea salt variant."'
  },
  {
    id: 'test-3',
    name: 'Kamini Vishnoi',
    role: 'Mother',
    rating: 5,
    text: '"The jar cakes are such a brilliant gift idea. My daughter loved the party macaron stack. Everything was so aesthetically pleasing."'
  }
];
