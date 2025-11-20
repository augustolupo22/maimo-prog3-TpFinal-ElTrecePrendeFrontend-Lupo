import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default async function EquipoPage() {
  const res = await fetch(`${API_URL}/staff`, { cache: "no-store" });
  const staff = await res.json();

  return (
    <div className="w-full bg-[#f1f1f1] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Equipo</h1>
        <p className="text-gray-700 mb-12 text-lg">
          Conocé al equipo que hace posible ElTrece Prende.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {staff.map((persona) => (
            <div
              key={persona._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden 
              hover:shadow-2xl transition duration-300"
            >
              {/* IMAGEN CUADRADA */}
              <div className="relative w-full aspect-square">
                <Image
                  src={persona.imagen}
                  alt={persona.nombre}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}
              <div className="p-6">

                <h2 className="text-xl font-bold text-gray-900">
                  {persona.nombre}
                </h2>

                <p className="text-[#F28B00] font-semibold mt-1 uppercase text-xs tracking-wider">
                  {persona.rol}
                </p>

                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {persona.descripcion}
                </p>

                {/* REDES */}
                {persona.redes?.instagram && (
                  <a
                    href={persona.redes.instagram}
                    target="_blank"
                    className="flex items-center gap-2 mt-5 font-medium text-[#F28B00] 
                               hover:text-black transition text-sm"
                  >
                    <FaInstagram /> Instagram
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}