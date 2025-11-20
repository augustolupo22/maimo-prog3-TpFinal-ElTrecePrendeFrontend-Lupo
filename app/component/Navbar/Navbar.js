"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-black/10 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-4 px-5 py-2 rounded-full border border-black/20">
            <FaInstagram className="text-black text-[20px] hover:text-red-600 transition" />
            <FaXTwitter className="text-black text-[20px] hover:text-red-600 transition" />
            <FaYoutube className="text-black text-[20px] hover:text-red-600 transition" />
            <FaTiktok className="text-black text-[20px] hover:text-red-600 transition" />
          </div>
        </div>

        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo-EltrecePrende.png"
            alt="El Trece Prende"
            width={170}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Mobile icon */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div className="hidden md:flex justify-center space-x-12 py-3 bg-white/95 border-t border-black/10 text-black font-semibold tracking-wide">
        <Link href="/" className="hover:text-red-600 transition">Inicio</Link>
        <Link href="/programas" className="hover:text-red-600 transition">Programas</Link>
        <Link href="#equipo" className="hover:text-red-600 transition">Equipo</Link>
        <Link href="#contacto" className="hover:text-red-600 transition">Contacto</Link>
      </div>

      {/* --- MOBILE MENU --- */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/10 text-black flex flex-col items-center py-6 space-y-5">

          <Link href="/" onClick={() => setOpen(false)} className="text-lg">
            Inicio
          </Link>
          <Link href="#programas" onClick={() => setOpen(false)} className="text-lg">
            Programas
          </Link>
          <Link href="#equipo" onClick={() => setOpen(false)} className="text-lg">
            Equipo
          </Link>
          <Link href="#contacto" onClick={() => setOpen(false)} className="text-lg">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
