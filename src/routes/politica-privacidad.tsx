import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | Marco Santillán" },
      { name: "description", content: "Política de Privacidad conforme a la LFPDPPP." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PoliticaPrivacidad,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-extrabold uppercase text-[#0F4C4C]">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-[1.8] text-[#0F4C4C]">{children}</div>
    </section>
  );
}

function PoliticaPrivacidad() {
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
          Política de Privacidad
        </h1>
        <p className="mt-4 text-sm text-[#1F7A7A]">Última actualización: 2025</p>

        <Section title="1. Responsable del tratamiento">
          <p>
            Marco Santillán, Terapeuta Quiropráctico y Dolorólogo, con domicilio profesional en
            Monterrey, Nuevo León, México, es el responsable del uso y protección de sus datos
            personales.
          </p>
          <p>Correo de contacto: [PENDIENTE]</p>
        </Section>

        <Section title="2. Datos personales que recabamos">
          <p>
            A través del formulario de contacto recabamos: nombre completo, número de teléfono y
            correo electrónico.
          </p>
        </Section>

        <Section title="3. Finalidad del tratamiento">
          <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Agendar y confirmar sesiones de terapia.</li>
            <li>Enviar información sobre servicios, siempre que el titular lo autorice.</li>
            <li>Mejorar la comunicación con pacientes y dar seguimiento clínico.</li>
          </ul>
        </Section>

        <Section title="4. Fundamento legal">
          <p>
            El tratamiento de sus datos se realiza con su consentimiento expreso, conforme a la
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares
            (LFPDPPP) y su Reglamento.
          </p>
        </Section>

        <Section title="5. Destinatarios de los datos">
          <p>
            Sus datos personales no se venden, alquilan ni comparten con terceros. Únicamente son
            tratados por Marco Santillán para los fines descritos en esta política.
          </p>
        </Section>

        <Section title="6. Derechos ARCO">
          <p>
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al
            tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, envíe
            un correo a [PENDIENTE]. Su solicitud será atendida en un plazo máximo de 20 días
            hábiles.
          </p>
        </Section>

        <Section title="7. Cambios al aviso de privacidad">
          <p>
            Cualquier cambio o actualización a la presente política será notificado por los mismos
            canales de contacto utilizados para comunicarnos con usted.
          </p>
        </Section>

        <p className="mt-12 rounded-md border-l-4 border-[#E8621A] bg-[#E8F3F3] p-4 text-sm italic text-[#1F7A7A]">
          Esta política es un punto de partida basado en los requisitos de la LFPDPPP. Se
          recomienda revisarla con un asesor legal antes de publicarla.
        </p>
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
