"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ProgramDetail({ id }) {
  const [program, setProgram] = useState(null);

  useEffect(() => {
    async function fetchProgram() {
      const res = await fetch(`${API_URL}/programs/${id}`);
      const data = await res.json();
      setProgram(data);
    }
    fetchProgram();
  }, [id]);

  if (!program) {
    return (
      <div className="py-40 text-center text-gray-500">
        Cargando programa…
      </div>
    );
  }

  return (
    <div className="w-full">
      
      <div className="relative w-full h-[60vh]">
        <Image
          src={program.imagen}
          alt={program.nombre}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10 text-white max-w-xl">

          <div className="flex gap-3 mb-3">
            {program.categoria && (
              <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm">
                {program.categoria}
              </span>
            )}
            {program.horario && (
              <span className="px-4 py-1 bg-[#F28B00] text-black font-semibold rounded-full text-sm">
                {program.horario}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">{program.nombre}</h1>

          <div className="flex gap-4 mt-5">
            {program.redes?.instagram && (
              <Link href={program.redes.instagram} target="_blank">
                <FaInstagram className="text-white text-2xl hover:text-[#F28B00] transition" />
              </Link>
            )}
            {program.redes?.youtube && (
              <Link href={program.redes.youtube} target="_blank">
                <FaYoutube className="text-white text-2xl hover:text-[#F28B00] transition" />
              </Link>
            )}
            {program.redes?.tiktok && (
              <Link href={program.redes.tiktok} target="_blank">
                <FaTiktok className="text-white text-2xl hover:text-[#F28B00] transition" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Sobre el programa
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {program.descripcion}
          </p>
        </div>

        {program.conductores?.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Conductores
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {program.conductores.map((persona, i) => (
                <div
                  key={i}
                  className="p-5 border border-black/10 rounded-2xl shadow-sm
                             hover:shadow-md transition bg-white"
                >
                  <h4 className="font-semibold text-gray-900">
                    {persona.nombre}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {persona.rol}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
