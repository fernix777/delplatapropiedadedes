import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Del Plata Propiedades | Inmobiliaria en Mar del Plata",
  description: "Las mejores propiedades en venta y alquiler en Mar del Plata. Casas, departamentos, locales comerciales y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={geist.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}