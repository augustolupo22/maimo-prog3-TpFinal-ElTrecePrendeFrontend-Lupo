"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Logo-EltrecePrende.png"
            width={180}
            height={40}
            alt="El Trece Prende"
          />
        </div>

        {/* Redes */}
        <div className="flex items-center space-x-6">
          <FaInstagram className="text-black text-2xl hover:text-[#F28B00] transition" />
          <FaXTwitter className="text-black text-2xl hover:text-[#F28B00] transition" />
          <FaYoutube className="text-black text-2xl hover:text-[#F28B00] transition" />
          <FaTiktok className="text-black text-2xl hover:text-[#F28B00] transition" />
        </div>
      </div>

      {/* --- SECCION PRINCIPAL --- */}
      <div className="border-t border-black/10 bg-white py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">

          {/* Columna 1: Navegación */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-3 text-gray-800 font-medium">
              <li><Link href="/" className="hover:text-[#F28B00]">Inicio</Link></li>
              <li><Link href="#programas" className="hover:text-[#F28B00]">Programas</Link></li>
              <li><Link href="#equipo" className="hover:text-[#F28B00]">Equipo</Link></li>
              <li><Link href="#contacto" className="hover:text-[#F28B00]">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 2: Información */}
          <div>
            <h3 className="font-bold text-lg mb-4">Información</h3>
            <ul className="space-y-3 text-gray-800 font-medium">
              <li><Link href="#" className="hover:text-[#F28B00]">Ayuda</Link></li>
              <li><Link href="#" className="hover:text-[#F28B00]">Preguntas frecuentes</Link></li>
              <li><Link href="#" className="hover:text-[#F28B00]">Política de privacidad</Link></li>
              <li><Link href="#" className="hover:text-[#F28B00]">Términos y condiciones</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>

            <p className="text-gray-700 mb-4">
              Recibí novedades y contenidos exclusivos de El Trece Prende.
            </p>

            <div className="flex border border-black/20 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Ingresá tu email"
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="px-4 bg-[#F28B00] text-white font-semibold hover:bg-[#d97900] transition">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} El Trece Prende – Todos los derechos reservados.
      </div>
    </footer>
  );
}
