'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Del Plata Propiedades</h3>
            <p className="text-gray-400 mb-4">
              Más de 20 años de experiencia en el mercado inmobiliario, brindando el mejor servicio y asesoramiento a nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/delplatapropiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/delplatapropiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/TUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/propiedades" className="text-gray-400 hover:text-white transition-colors">
                  Propiedades en Venta
                </Link>
              </li>
              <li>
                <Link href="/alquileres" className="text-gray-400 hover:text-white transition-colors">
                  Alquileres
                </Link>
              </li>
              <li>
                <Link href="/tasaciones" className="text-gray-400 hover:text-white transition-colors">
                  Tasaciones
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-500" />
                <span>Av. Principal 1234, Mar del Plata</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-blue-500" />
                <a href="tel:+TUNUMERO" className="hover:text-white transition-colors">
                  +54 9 11 1234-5678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-500" />
                <a href="mailto:info@delplatapropiedades.com" className="hover:text-white transition-colors">
                  info@delplatapropiedades.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Del Plata Propiedades. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;