"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const res = await fetch("https://formsubmit.co/ajax/augustolupo030422@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      form.reset();

      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <div className="w-full bg-[#f1f1f1] py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Contacto</h1>
        <p className="text-gray-700 mb-10">
          ¿Tenés una idea para un programa? ¿Querés sumarte al equipo? Mandanos tu mensaje.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl space-y-7"
        >
          <div>
            <label className="block font-semibold mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#F28B00] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#F28B00] outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#F28B00] outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F28B00] text-white font-semibold px-6 py-3 rounded-xl w-full 
                       hover:bg-[#d97a00] transition shadow-md disabled:bg-gray-400"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        {sent && (
          <div className="fixed bottom-6 right-6 bg-white shadow-2xl border-l-4 border-green-500 
                          px-6 py-4 rounded-xl animate-fadeIn z-50">
            <p className="text-green-700 font-semibold">¡Mensaje enviado con éxito!</p>
          </div>
        )}

      </div>
    </div>
  );
}
