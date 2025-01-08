'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRuler, FaCar } from 'react-icons/fa';
import { Property } from '@/types/property';
import { motion } from 'framer-motion';

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number, currency: 'USD' | 'ARS') => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link href={`/propiedades/${property.id}`}>
        <div className="relative h-48 sm:h-64">
          <Image
            src={property.images[0].url}
            alt={property.images[0].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.operation === 'venta' ? 'Venta' : 'Alquiler'}
          </div>
          {property.featured && (
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Destacado
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
              {property.title}
            </h3>
            <span className="text-lg font-bold text-blue-600">
              {formatPrice(property.price, property.currency)}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          <div className="flex items-center text-gray-500 text-sm gap-4">
            {property.features.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <FaBed className="w-4 h-4" />
                <span>{property.features.bedrooms}</span>
              </div>
            )}
            {property.features.bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <FaBath className="w-4 h-4" />
                <span>{property.features.bathrooms}</span>
              </div>
            )}
            {property.features.area > 0 && (
              <div className="flex items-center gap-1">
                <FaRuler className="w-4 h-4" />
                <span>{property.features.area}m²</span>
              </div>
            )}
            {property.features.garage && property.features.garage > 0 && (
              <div className="flex items-center gap-1">
                <FaCar className="w-4 h-4" />
                <span>{property.features.garage}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center text-sm">
            <FaRuler className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-gray-600">{property.location.neighborhood}, {property.location.city}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;