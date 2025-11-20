import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default async function ProgramDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`${API_URL}/programs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-10 text-center text-black">
        <h1 className="text-3xl font-bold">Programa no encontrado</h1>
      </div>
    );
  }

  const program = await res.json();

  return (
    <div className="w-full bg-white">
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

          <h1 className="text-4xl md:text-6xl font-bold">
            {program.nombre}
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#E8EDF3] py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sobre el programa
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {program.descripcion}
            </p>
          </div>

          {program.conductores?.length > 0 && (
            <section className="w-full bg-[#E8EDF3]">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
                Conductores
                <span className="block w-20 h-1 bg-[#F28B00] mt-2 rounded-full"></span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {program.conductores.map((persona, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl 
                               transition duration-300"
                  >
                    <div className="relative w-full h-72 mb-5">
                      <Image
                        src={persona.foto}
                        alt={persona.nombre}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900">
                      {persona.nombre}
                    </h4>

                    <p className="text-gray-600 mt-1 text-sm">
                      {persona.rol}
                    </p>

                  </div>
                ))}

              </div>
            </section>
          )}

        </div>
      </div>

    </div>
  );
}
