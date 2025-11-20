import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default async function ProgramasPage() {
  const res = await fetch(`${API_URL}/programs`, { cache: "no-store" });
  const programs = await res.json();

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Programas
        </h1>
        <p className="text-gray-600 text-lg mb-14">
          Conocé la programación completa de ElTrece Prende.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {programs.map((p) => (
            <Link
              key={p._id}
              href={`/programas/${p._id}`}
              className="group"
            >
              <div
                className="flex gap-7 bg-white rounded-3xl shadow-xl overflow-hidden 
                hover:-translate-y-2 hover:shadow-2xl transition p-6 border border-black/5 group-hover:border-[#F28B00]"
              >

                <div className="relative w-[45%] min-h-[250px] rounded-2xl overflow-hidden">
                  <Image
                    src={p.imagen}
                    fill
                    alt={p.nombre}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="w-[55%] flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#F28B00] transition">
                    {p.nombre}
                  </h2>

                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {p.descripcion}
                  </p>

                  <div className="mt-4">
                    <span className="text-xs bg-[#F28B00] px-4 py-1 rounded-full text-black font-semibold">
                      {p.horario}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
