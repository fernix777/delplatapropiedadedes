export type PropertyType = 'casa' | 'departamento' | 'local' | 'terreno' | 'oficina' | 'garage';
export type OperationType = 'venta' | 'alquiler' | 'alquiler_temporario';

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  operation: OperationType;
  price: number;
  currency: 'USD' | 'ARS';
  location: {
    address: string;
    city: string;
    neighborhood: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number;
    covered_area?: number;
    garage?: number;
    year_built?: number;
  };
  amenities: string[];
  images: {
    url: string;
    alt: string;
  }[];
  status: 'available' | 'reserved' | 'sold' | 'rented';
  featured?: boolean;
  created_at: string;
  updated_at: string;
}