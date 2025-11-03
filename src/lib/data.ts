import type { Category, Product, Testimonial } from './types';

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    imageId: 'category-skincare',
  },
  {
    id: 'haircare',
    name: 'Haircare',
    imageId: 'category-haircare',
  },
  {
    id: 'fragrance',
    name: 'Fragrance',
    imageId: 'category-fragrance',
  },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'lumina-glow-serum',
    name: 'Lumina Glow Serum',
    description:
      'Unleash your inner radiance with our Lumina Glow Serum. This potent blend of Vitamin C and Hyaluronic Acid brightens, hydrates, and revitalizes your skin, leaving it with a luminous, youthful glow.',
    price: 68.0,
    discount: 15,
    imageIds: ['product-lumina-serum-1', 'product-lumina-serum-2'],
    rating: 4.8,
    reviews: 124,
    category: 'Skincare',
    stock: 35,
  },
  {
    id: '2',
    slug: 'silk-feather-shampoo',
    name: 'Silk-Feather Shampoo',
    description:
      'Experience hair that feels as light as a feather and as smooth as silk. Our sulfate-free formula gently cleanses while infusing your strands with Argan oil and keratin for unparalleled softness and shine.',
    price: 32.0,
    imageIds: ['product-silk-shampoo-1', 'product-silk-shampoo-2'],
    rating: 4.6,
    reviews: 98,
    category: 'Haircare',
    stock: 50,
  },
  {
    id: '3',
    slug: 'ethereal-mist-perfume',
    name: 'Ethereal Mist',
    description:
      'A scent that transcends the ordinary. Ethereal Mist is a delicate dance of jasmine, bergamot, and sandalwood, creating a light, airy fragrance that is both captivating and unforgettable.',
    price: 120.0,
    imageIds: ['product-ethereal-mist-1', 'product-ethereal-mist-2'],
    rating: 4.9,
    reviews: 210,
    category: 'Fragrance',
    stock: 20,
  },
  {
    id: '4',
    slug: 'revive-clay-mask',
    name: 'Revive Clay Mask',
    description:
      'Hit reset on your skin with our Revive Clay Mask. Formulated with French pink clay and rosehip oil, this mask detoxifies pores, reduces inflammation, and restores balance for a clear, refreshed complexion.',
    price: 45.0,
    discount: 10,
    imageIds: ['product-revive-mask-1', 'product-revive-mask-2'],
    rating: 4.7,
    reviews: 85,
    category: 'Skincare',
    stock: 40,
  },
  {
    id: '5',
    slug: 'velvet-touch-conditioner',
    name: 'Velvet-Touch Conditioner',
    description:
      'Complement your cleansing routine with the perfect touch of hydration. This rich conditioner detangles, smooths, and protects, leaving your hair with a velvety finish and a healthy, vibrant look.',
    price: 34.0,
    imageIds: ['product-velvet-conditioner-1', 'product-velvet-conditioner-2'],
    rating: 4.5,
    reviews: 77,
    category: 'Haircare',
    stock: 60,
  },
  {
    id: '6',
    slug: 'celestial-hair-oil',
    name: 'Celestial Hair Oil',
    description:
      'A divine, lightweight oil that tames frizz, adds brilliant shine, and protects from heat damage. Infused with a blend of 5 precious oils, it nourishes every strand without weighing it down.',
    price: 52.0,
    imageIds: ['product-celestial-oil-1', 'product-celestial-oil-2'],
    rating: 4.8,
    reviews: 150,
    category: 'Haircare',
    stock: 25,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    title: 'Verified Customer',
    quote:
      "Charmony isn't just a brand; it's a ritual. The Lumina Glow Serum has completely transformed my skin. I've never felt more confident.",
    avatarId: 'avatar-1',
  },
  {
    id: '2',
    name: 'James Carter',
    title: 'Beauty Blogger',
    quote:
      'The attention to detail in both the products and the packaging is exquisite. Ethereal Mist is my new signature scent. It\'s subtle yet so enchanting.',
    avatarId: 'avatar-2',
  },
  {
    id: '3',
    name: 'Sophia Chen',
    title: 'Verified Customer',
    quote:
      'I was skeptical about the Silk-Feather Shampoo, but it truly lives up to its name. My hair has never been so soft and manageable. I\'m a customer for life!',
    avatarId: 'avatar-3',
  },
];
