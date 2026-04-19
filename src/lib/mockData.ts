import propertiesData from '@/data/properties.json';

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  lat: number;
  lng: number;
  beds: number;
  baths: number;
  sqm: number;
  type: string;
  status: string;
  imageUrl: string;
  images: string[];
  description: string;
  amenities: string[];
}

// Convert JSON array explicitly to conform to Property[] typing
export const FEATURED_PROPERTIES: Property[] = propertiesData;
