export interface Specialty {
  id: string;
  title: string;
  image: string;
  tagline: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'cake' | 'cupcakes' | 'brownies' | 'jars' | 'macarons' | 'tarts';
  price: number;
  unit: string;
  description: string;
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  story: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface InquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  orderType: string;
  theme?: string;
  tiers?: string;
  dietary?: string;
  message: string;
}
