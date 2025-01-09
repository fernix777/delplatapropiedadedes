'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import PropertyCard from '@/components/ui/PropertyCard';
import { Property } from '@/types/property';
import { 
  UserGroupIcon, 
  BuildingOfficeIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Hermoso Departamento con Vista al Mar',
    description: 'Espectacular departamento de 2 ambientes con vista directa al mar. Totalmente amoblado y equipado. Edificio con seguridad 24hs.',
    type: 'departamento',
    operation: 'venta',
    price: 150000,
    currency: 'USD',
    location: {
      address: 'Av. Colón 1234',
      city: 'Mar del Plata',
      neighborhood: 'Centro',
    },
    features: {
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      covered_area: 75,
      garage: 1,
    },
    amenities: ['Piscina', 'Gimnasio', 'Seguridad 24hs'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop',
        alt: 'Vista principal departamento',
      }
    ],
    status: 'available',
    featured: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
];

const stats = [
  { id: 1, name: 'Años de experiencia', value: 20 },
  { id: 2, name: 'Propiedades vendidas', value: 1500 },
  { id: 3, name: 'Clientes satisfechos', value: 2000 },
  { id: 4, name: 'Agentes inmobiliarios', value: 15 },
];

const testimonials = [
  {
    id: 1,
    content: 'Excelente atención y profesionalismo. Vendieron mi propiedad en tiempo récord.',
    author: 'María González',
    role: 'Vendedor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop'
  },
  {
    id: 2,
    content: 'Encontraron exactamente lo que buscábamos. El proceso fue muy simple y transparente.',
    author: 'Juan Pérez',
    role: 'Comprador',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop'
  },
  {
    id: 3,
    content: 'Su conocimiento del mercado inmobiliario es impresionante. Totalmente recomendados.',
    author: 'Ana Silva',
    role: 'Inversor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop'
  },
];

const features = [
  {
    name: 'Experiencia Comprobada',
    description: '20 años en el mercado inmobiliario nos respaldan',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Atención Personalizada',
    description: 'Te acompañamos en todo el proceso',
    icon: UserGroupIcon,
  },
  {
    name: 'Respuesta Rápida',
    description: 'Respondemos a tus consultas en menos de 24hs',
    icon: ClockIcon,
  },
  {
    name: 'Asesoramiento Financiero',
    description: 'Te ayudamos con la financiación',
    icon: CurrencyDollarIcon,
  },
];

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section con video */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="object-cover w-full h-full"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Encuentra tu lugar ideal
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 max-w-2xl">
            Las mejores propiedades en Mar del Plata
          </p>
          
          {/* Buscador */}
          <div className="w-full max-w-3xl">
            <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden p-2 shadow-lg">
              <input
                type="text"
                placeholder="Buscar propiedades..."
                className="flex-1 px-4 py-3 text-gray-800 focus:outline-none bg-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition duration-300">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Por Qué Elegirnos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Más de dos décadas de experiencia nos respaldan
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="absolute h-12 w-12 text-blue-600">
                    <feature.icon className="h-12 w-12" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section ref={statsRef} className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl font-bold text-white">
                  {statsInView && (
                    <CountUp end={stat.value} duration={2.5} />
                  )}
                  {stat.id === 2 && '+'}
                </div>
                <div className="mt-2 text-xl text-white/90">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Propiedades Destacadas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Propiedades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Interesado en alguna propiedad?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Déjanos tus datos y nos pondremos en contacto contigo
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}