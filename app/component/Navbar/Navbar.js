"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo-EltrecePrende.png"
            alt="El Trece Prende"
            width={160}
            height={20}
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="#programas" className="hover:text-[var(--color-red)]">
            Programas
          </Link>
          <Link href="#envivo" className="hover:text-[var(--color-red)]">
            En Vivo
          </Link>
          <Link href="#equipo" className="hover:text-[var(--color-red)]">
            Equipo
          </Link>
          <Link href="#contacto" className="hover:text-[var(--color-red)]">
            Contacto
          </Link>
          <Link
            href="https://www.youtube.com/@eltrece/podcasts"
            target="_blank"
            className="bg-[var(--color-red)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Ver en Vivo
          </Link>
        </div>

        {/* MENU ICONO MOBILE */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center py-4 space-y-4">
          <Link href="#programas" onClick={() => setOpen(false)}>
            Programas
          </Link>
          <Link href="#envivo" onClick={() => setOpen(false)}>
            En Vivo
          </Link>
          <Link href="#equipo" onClick={() => setOpen(false)}>
            Equipo
          </Link>
          <Link href="#contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>
          <Link
            href="https://www.youtube.com/@eltrece/podcasts"
            target="_blank"
            onClick={() => setOpen(false)}
            className="bg-[var(--color-red)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Ver en Vivo
          </Link>
        </div>
      )}
    </nav>
  );
}
