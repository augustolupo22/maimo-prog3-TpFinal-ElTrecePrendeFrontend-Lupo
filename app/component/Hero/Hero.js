"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full">

      <div className="relative w-full h-[92vh] flex items-center justify-center overflow-hidden">
        
        <Image
          src="/images/Fondo estudio.jpg"
          alt="El Trece Prende"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight">
            ELTRECE PRENDE.<br /> VOS TAMBIÉN.
          </h1>

          <Link
            href="https://www.youtube.com/@eltrece/podcasts"
            className="inline-flex items-center mt-6 bg-red-600 hover:bg-red-700 
                       text-white px-6 py-3 rounded-full font-semibold transition"
          >
            <FaYoutube className="w-5 h-5 mr-2" />
            IR A YOUTUBE
          </Link>
        </div>
      </div>

      <div className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="w-16 h-1 bg-[#F28B00] mx-auto mb-6 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Un nuevo espacio.<br />Una nueva forma de conectar.
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            ElTrece Prende une la energía del streaming con la identidad de un clásico de la televisión. 
            Contenido real, cercano y en vivo. Todos los días.
          </p>

        </div>
      </div>

    </section>
  );
}

