import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default async function ProgramasPage() {
  const res = await fetch(`${API_URL}/programs`, { cache: "no-store" });
  const programs = await res.json();

  return (
    <div className="w-full bg-[#d8d8d8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-3 text-black">Programas</h1>
        <p className="text-black mb-10">
          Conocé la programación completa de ElTrece Prende.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {programs.map((p) => (
            <Link key={p._id} href={`/programas/${p._id}`} className="group">
              <div className="flex gap-7 bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition">
                {/* IMAGEN */}
                <div className="relative w-1/3 h-48">
                  <Image
                    src={p.imagen}
                    alt={p.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXTO */}
                <div className="py-5 pr-5 w-2/3">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#F28B00] transition">
                    {p.nombre}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2">{p.descripcion}</p>

                  {p.conductores?.length > 0 && (
                    <p className="text-xs text-gray-500 mt-3">
                      Con {p.conductores.map((c) => c.nombre).join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
