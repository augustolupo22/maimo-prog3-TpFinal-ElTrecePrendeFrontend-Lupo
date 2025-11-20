import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function getPrograms() {
  const res = await fetch(`programs/${API_URL}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error al obtener programas");
    return [];
  }

  return res.json();
}

export default async function ProgramasSection() {
  const programs = await getPrograms();

  return (
    <section
      id="programas"
      className="w-full bg-[#bdbdbd] py-20 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Programas
            </h2>
            <p className="text-black mt-2">
              Conocé la programación completa de ElTrece Prende.
            </p>
          </div>

          <Link
            href="#contacto"
            className="hidden md:inline-flex text-sm font-semibold text-black hover:text-white transition"
          >
            Proponer un programa →
          </Link>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program._id}
              href={`/programas/${program._id}`}
              className="group block bg-white rounded-2xl shadow-sm border border-black/5 
                         overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
            >
              <article>
                
                <div className="relative h-56">
                  <Image
                    src={program.imagen || "/images/program-placeholder.jpg"}
                    alt={program.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 left-3 flex gap-2">
                    {program.categoria && (
                      <span className="text-xs px-3 py-1 rounded-full bg-black/70 text-white">
                        {program.categoria}
                      </span>
                    )}
                    {program.horario && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/85 text-gray-900">
                        {program.horario}
                      </span>
                    )}
                  </div>
                </div>

                {/* INFO */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#F28B00] transition">
                    {program.nombre}
                  </h3>

                  {program.descripcion && (
                    <p className="text-sm text-gray-600">
                      {program.descripcion}
                    </p>
                  )}

                  {program.conductores?.length > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Con{" "}
                      {program.conductores
                        .map((c) => c.nombre)
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  )}
                </div>

              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}