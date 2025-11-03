export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageIds: string[];
  rating: number;
  reviews: number;
  category: string;
  stock: number;
};

export type Category = {
  id: string;
  name: string;
  imageId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarId: string;
};
