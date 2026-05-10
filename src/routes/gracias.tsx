import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "¡Gracias! Marco te contactará pronto — Marco Santillán" },
      { name: "description", content: "Tu solicitud llegó a Marco. Te contactará en menos de 2 horas para coordinar tu primera evaluación en Monterrey." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: GraciasPage,
});

const PHONE = "528112345678";
const WA_MSG = "Hola Marco, acabo de llenar el formulario y quiero confirmar mi primera sesión.";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WA_MSG)}`;

function GraciasPage() {
  useEffect(() => {
    // Meta Pixel: Lead event
    const w = window as unknown as { fbq?: (...args: unknown[]) => void; gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
    try { w.fbq?.("track", "Lead"); } catch { /* noop */ }
    try {
      w.gtag?.("event", "form_conversion", { event_category: "lead", event_label: "gracias" });
      w.gtag?.("event", "page_view", { page_path: "/gracias" });
    } catch { /* noop */ }
    try {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "form_conversion", page: "/gracias" });
    } catch { /* noop */ }
  }, []);

  return (
    <>
      {/* CONVERSIÓN PRINCIPAL — disparar pixel Meta aquí */}
      <main lang="es-MX" className="min-h-screen bg-white font-body">
        {/* SECCIÓN 1 — Confirmación emocional */}
        <section className="bg-[#0F4C4C] text-white px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-full bg-[#E8621A] flex items-center justify-center mb-8"
              style={{ animation: "gracias-bounce 0.8s ease-out 0.6s both" }}
            >
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path
                  d="M10 22 L19 31 L34 14"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 50,
                    strokeDashoffset: 50,
                    animation: "gracias-draw 0.6s ease-out forwards",
                  }}
                />
              </svg>
            </div>
            <h1
              className="font-display font-extrabold uppercase leading-[1.05] text-3xl sm:text-4xl md:text-[44px]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ¡Listo! Tu solicitud llegó a Marco.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#BFE3E0] max-w-xl">
              En menos de 2 horas Marco o su equipo te contactarán para coordinar tu primera evaluación. Revisa tu WhatsApp y tu teléfono.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 — Qué pasa ahora */}
        <section className="bg-[#E8F3F3] px-6 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-display font-extrabold uppercase text-center text-[#0F4C4C] text-2xl sm:text-3xl md:text-4xl mb-10 md:mb-14"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Qué pasa ahora
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "1",
                  t: "Recibimos tu solicitud",
                  d: "Marco o su equipo ya tienen tu solicitud. La revisamos en cuanto llega — sin dejar pasar horas.",
                },
                {
                  n: "2",
                  t: "Marco te contactará en menos de 2 horas",
                  d: "Te llamamos o escribimos al número que dejaste para coordinar el horario de tu primera sesión. Ten el teléfono cerca.",
                },
                {
                  n: "3",
                  t: "Prepárate para tu primera sesión",
                  d: "En tu primera cita Marco evalúa el origen real de tu dolor y empieza el tratamiento. Desde el día uno ya estás trabajando en la causa — no en el síntoma.",
                },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-xl p-6 md:p-7 shadow-sm border border-[#CDE3E1]">
                  <div
                    className="text-[#E8621A] font-extrabold leading-none mb-3"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "48px" }}
                  >
                    {s.n}
                  </div>
                  <h3
                    className="font-display font-bold uppercase text-[#0F4C4C] text-xl mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.t}
                  </h3>
                  <p className="text-[#3F6B6B] text-sm leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 — CTA WhatsApp */}
        <section className="bg-[#0F4C4C] text-white px-6 py-16 md:py-20 text-center">
          <div className="max-w-xl mx-auto">
            <h2
              className="font-display font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ¿Quieres confirmar más rápido?
            </h2>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] transition-colors text-white font-bold uppercase rounded-lg px-6 py-4 w-full sm:w-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "20px", letterSpacing: "0.02em" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribir a Marco por WhatsApp
            </a>
            <p className="mt-6 text-sm text-[#BFE3E0]">
              Marco atiende en Monterrey, NL · Sesión desde $800 MXN
            </p>
          </div>
        </section>

        <div className="bg-[#0F4C4C] text-center pb-6">
          <p className="text-xs text-[#5A8585]">
            © Marco Santillán · <a href="/politica-privacidad" className="hover:text-white">Política de privacidad</a> · <a href="/aviso-legal" className="hover:text-white">Aviso legal</a>
          </p>
        </div>
      </main>

      <style>{`
        @keyframes gracias-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes gracias-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
