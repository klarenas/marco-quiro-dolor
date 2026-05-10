import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal | Marco Santillán" },
      { name: "description", content: "Aviso legal del sitio de Marco Santillán." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: AvisoLegal,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-extrabold uppercase text-[#0F4C4C]">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-[1.8] text-[#0F4C4C]">{children}</div>
    </section>
  );
}

function AvisoLegal() {
  return (
    <main lang="es-MX" className="min-h-screen bg-white">
      <header style={{ backgroundColor: "#0F4C4C" }} className="px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-[720px] items-center justify-between gap-4">
          <span className="font-display text-[22px] font-bold uppercase text-white">
            Marco Santillán
          </span>
          <a
            href="/"
            className="text-sm font-semibold text-[#E8621A] hover:underline"
          >
            ← Volver a la landing
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-[720px] px-5 py-12 md:px-8">
        <h1 className="font-display text-3xl font-extrabold uppercase text-[#0F4C4C] md:text-4xl">
          Aviso Legal
        </h1>

        <Section title="1. Titular del sitio">
          <p>
            Marco Santillán, Terapeuta Quiropráctico y Dolorólogo, con domicilio profesional en
            Monterrey, Nuevo León, México.
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/markosantillan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8621A] hover:underline"
            >
              @markosantillan1
            </a>
          </p>
        </Section>

        <Section title="2. Condiciones de uso">
          <p>
            El contenido de este sitio tiene fines exclusivamente informativos y no sustituye en
            ningún caso la evaluación clínica personalizada por parte de un profesional de la
            salud.
          </p>
        </Section>

        <Section title="3. Propiedad intelectual">
          <p>
            Todos los textos, imágenes, gráficos y materiales presentes en este sitio son
            propiedad de Marco Santillán o han sido utilizados con la debida autorización. Queda
            prohibida su reproducción total o parcial sin consentimiento previo por escrito.
          </p>
        </Section>

        <Section title="4. Limitación de responsabilidad">
          <p>
            Marco Santillán no se hace responsable por el uso indebido de la información publicada
            en este sitio, ni por interrupciones técnicas, fallas o errores ajenos a su control
            que pudieran afectar la disponibilidad del contenido.
          </p>
        </Section>

        <Section title="5. Legislación aplicable">
          <p>
            Las presentes condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para
            cualquier controversia derivada del uso de este sitio, las partes se someten a la
            jurisdicción de los tribunales competentes de Monterrey, Nuevo León.
          </p>
        </Section>
      </article>

      <footer style={{ backgroundColor: "#E8F3F3" }} className="px-5 py-8 text-center text-sm text-[#1F7A7A]">
        <div className="space-x-4">
          <a href="/politica-privacidad" className="hover:underline">Política de Privacidad</a>
          <span>·</span>
          <a href="/aviso-legal" className="hover:underline">Aviso Legal</a>
        </div>
        <p className="mt-2">© 2025 Marco Santillán · Monterrey, NL</p>
      </footer>
    </main>
  );
}
