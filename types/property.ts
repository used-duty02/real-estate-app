export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  type: 'For Sale' | 'For Rent';
  category: 'Residential' | 'Commercial' | 'Luxury' | 'Land';
  bedrooms: number;
  bathrooms: number;
  size: number; // in square feet
  location: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  images: string[];
  amenities: string[];
  isFeatured: boolean;
  isFavorite: boolean;
  agent: {
    id: number;
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  createdAt: string;
}

export interface PropertyFilter {
  type?: 'For Sale' | 'For Rent';
  category?: 'Residential' | 'Commercial' | 'Luxury' | 'Land';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSize?: number;
  maxSize?: number;
  city?: string;
  state?: string;
  amenities?: string[];
}