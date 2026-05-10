import { useEffect, useRef, useState } from "react";
import ExitPopup from "./ExitPopup";
import WhatsAppWidget from "./WhatsAppWidget";

import logoMarco from "@/assets/logo.jpg";
import marcoFoto from "@/assets/marco.jpg";
import rodillaAntes from "@/assets/rodilla-antes.jpg";
import rodillaDespues from "@/assets/rodilla-despues.jpg";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const WHATSAPP =
  "https://wa.me/528112345678?text=Hola%20Marco%2C%20quiero%20agendar%20una%20sesi%C3%B3n";

function CtaWhats({ children, full = false }: { children: React.ReactNode; full?: boolean }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta inline-flex items-center justify-center rounded-md px-7 py-4 text-lg md:text-xl ${
        full ? "w-full" : ""
      }`}
    >
      {children}
    </a>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#E8621A" strokeWidth="3">
      <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#dc2626" strokeWidth="3">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
function IconSpine() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#E8621A" strokeWidth="2.5">
      <path d="M24 4c-4 4-4 8 0 12s4 8 0 12 -4 8 0 12 4 8 0 8" strokeLinecap="round" />
      <path d="M20 10h8M18 18h12M18 26h12M20 34h8" strokeLinecap="round" />
    </svg>
  );
}
function IconHands() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#E8621A" strokeWidth="2.5">
      <path d="M14 26V12a3 3 0 116 0v10M20 22V8a3 3 0 116 0v14M26 22V10a3 3 0 116 0v16M32 16a3 3 0 116 0v16a10 10 0 01-20 0v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCal() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="#E8621A" strokeWidth="2.5">
      <rect x="8" y="10" width="32" height="30" rx="3" />
      <path d="M8 18h32M16 6v8M32 6v8" strokeLinecap="round" />
      <path d="M16 26h6v6h-6z" fill="#E8621A" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="bg-hero-grad relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(circle at 80% 20%, #E8621A 0%, transparent 40%)",
      }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-12 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-8 md:pt-16 md:pb-20 lg:min-h-screen lg:items-center">
        <div>
          <div className="anim-fade-up mb-6 flex items-center gap-3">
            <img
              src={logoMarco}
              alt="Logo Marco Santillán"
              className="h-14 w-14 rounded-full bg-white p-1.5 shadow-lg md:h-16 md:w-16"
              width={64}
              height={64}
            />
            <div className="leading-tight">
              <p className="font-display text-lg font-extrabold uppercase tracking-wide text-white md:text-xl">
                Marco Santillán
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#BFE3E0]">
                Terapeuta · Monterrey, NL
              </p>
            </div>
          </div>
          <h1 className="anim-fade-up text-[28px] leading-[1.1] md:text-[40px] lg:text-[48px]">
            Deja de vivir con el dolor que los medicamentos no te quitan.
          </h1>
          <p className="anim-fade-up delay-200 mt-6 text-base text-[#BFE3E0] md:text-xl">
            Marco Santillán identifica la causa real de tu dolor y la trabaja desde la primera
            sesión — sin cirugía, sin inyecciones, sin pastillas que solo duran unas horas.
          </p>
          <p className="anim-fade-up delay-200 mt-6 font-display text-2xl font-bold uppercase text-[#E8621A] md:text-3xl">
            Sesión desde $800 MXN
          </p>
          <div className="anim-pop delay-400 mt-6">
            <CtaWhats full>→ Agenda tu sesión por WhatsApp</CtaWhats>
          </div>
          <p className="anim-fade-up delay-600 mt-4 text-sm text-[#BFE3E0]">
            Sin compromiso. Solo dinos dónde te duele y agendamos tu evaluación.
          </p>
        </div>

        <div className="anim-fade-right relative h-[50vh] overflow-hidden rounded-2xl shadow-2xl md:h-[560px]">
          <img
            src={marcoFoto}
            alt="Marco Santillán, terapeuta quiropráctico en su consultorio en Monterrey"
            className="absolute inset-0 h-full w-full object-cover object-top"
            width={952}
            height={1064}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, rgba(15,76,76,0.85) 100%)",
            }}
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-black/50 p-4 backdrop-blur-sm">
            <img
              src={logoMarco}
              alt=""
              className="h-10 w-10 rounded-full bg-white p-1"
              width={40}
              height={40}
            />
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Marco Santillán</p>
              <p className="text-xs text-[#BFE3E0]">Terapeuta Quiropráctico · Dolorólogo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Tomaste ibuprofeno. Alivió por unas horas. Al día siguiente, igual.",
    "Fuiste al médico general. Te mandaron reposo y más medicamento. El dolor sigue.",
    'Empezaste a decirte: "Es la edad. Hay que aguantarse."',
  ];
  return (
    <section style={{ backgroundColor: "#E8F3F3" }} className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <h2 className="reveal text-3xl text-[#0F4C4C] md:text-[40px]">
          ¿Llevas semanas — o meses — con ese dolor en la espalda, el cuello o las piernas que
          simplemente no se va?
        </h2>
        <ul className="mt-8 space-y-4">
          {items.map((t, i) => (
            <li
              key={i}
              className="reveal flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <IconX />
              <p className="text-base text-[#0F4C4C] md:text-lg">{t}</p>
            </li>
          ))}
        </ul>
        <div className="reveal mt-8 rounded-xl border-l-4 border-[#E8621A] bg-white p-6">
          <p className="text-base leading-relaxed text-[#0F4C4C] md:text-lg">
            <span className="font-display text-xl font-bold uppercase">No es la edad.</span> Y no
            hay que aguantarse. El problema es que nadie ha atacado la causa real — solo han
            tapado el síntoma. Cuando dejas de tomar el medicamento, el dolor vuelve porque la
            estructura que lo genera sigue exactamente igual.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const cards = [
    { icon: <IconSpine />, title: "Identifica la causa real", body: "No adivina — localiza exactamente qué estructura genera tu dolor." },
    { icon: <IconHands />, title: "Trabaja desde la primera sesión", body: "No te vas sin haber iniciado el tratamiento." },
    { icon: <IconCal />, title: "Plan de seguimiento claro", body: "Sabes exactamente cuántas sesiones necesitas y por qué." },
  ];
  return (
    <section style={{ backgroundColor: "#0F4C4C" }} className="py-14 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="reveal text-3xl md:text-[44px]">
          Marco Santillán no trata el dolor. Trata lo que lo produce.
        </h2>
        <div className="reveal mt-6 max-w-3xl space-y-4 text-base text-[#BFE3E0] md:text-lg">
          <p>
            Con ajuste quiropráctico y terapia manual especializada, Marco localiza exactamente
            qué estructura de tu cuerpo está generando esa señal de dolor — y la trabaja
            directamente. Desde la primera sesión sabes qué tienes, por qué te duele y qué sigue.
            Sin rodeos, sin estudios de más, sin mandarte de un especialista al otro.
          </p>
          <p>
            Así han recuperado la vida cientos de pacientes en Monterrey que hoy duermen bien,
            trabajan sin molestias y vuelven a moverse con normalidad.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="reveal card-lift rounded-xl p-6"
              style={{ backgroundColor: "#1F7A7A", transitionDelay: `${i * 0.2}s` }}
            >
              {c.icon}
              <h3 className="mt-4 text-xl text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-[#BFE3E0] md:text-base">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Tuve que dejar de correr por el dolor en la rodilla. Después de unas semanas con Marco, volví a salir a entrenar como antes.", a: "Carlos R., 52 años, Monterrey" },
    { q: "Tuve que dejar de subir las escaleras de mi casa por el dolor en la rodilla. Hoy me muevo sin pensarlo dos veces.", a: "Patricia G., 44 años, San Pedro" },
    { q: "Tuve que dejar de jugar fútbol con mis hijos por el dolor en la rodilla. Marco me regresó la movilidad que creía perdida.", a: "Roberto M., 47 años, Monterrey" },
  ];
  return (
    <section style={{ backgroundColor: "#E8F3F3" }} className="py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="reveal text-3xl text-[#0F4C4C] md:text-[40px]">
          Eliminaron el dolor y recuperaron la movilidad que creían perdida
        </h2>
        <p className="reveal mt-3 text-base text-[#3F6B6B] md:text-lg">
          Resultados reales: antes y después del tratamiento.
        </p>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal card-lift min-w-[85%] snap-center overflow-hidden rounded-xl border-l-4 border-[#E8621A] bg-white shadow-sm md:min-w-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative grid grid-cols-2">
                <div className="relative">
                  <img
                    src={rodillaAntes}
                    alt={`Antes del tratamiento: ${t.a}`}
                    loading="lazy"
                    width={784}
                    height={1176}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-md bg-[#0F4C4C]/85 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white md:text-xs">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={rodillaDespues}
                    alt={`Después del tratamiento: ${t.a}`}
                    loading="lazy"
                    width={784}
                    height={1176}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-md bg-[#E8621A] px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white md:text-xs">
                    Después
                  </span>
                </div>
              </div>
              <div className="p-6">
                <blockquote className="text-base leading-relaxed text-[#0F4C4C] md:text-lg">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-[#1F7A7A]">
                  — {t.a}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <p className="reveal mt-8 text-center font-display text-lg font-bold uppercase tracking-wide text-[#0F4C4C]">
          +13,000 personas siguen a Marco en Facebook · Monterrey, NL
        </p>
      </div>
    </section>
  );
}

function Offer() {
  const items = [
    "Evaluación completa del origen real de tu dolor — no una consulta genérica",
    "Tratamiento desde el día uno — no te vas sin trabajar la causa",
    "Plan de seguimiento claro — sabes exactamente cuántas sesiones necesitas y por qué",
    "Atención directa con Marco, sin asistentes ni residentes",
    "Precio desde $800 MXN por sesión — menos de lo que llevas gastando en medicamentos al mes",
  ];
  return (
    <section style={{ backgroundColor: "#0F4C4C" }} className="py-14 text-white md:py-24">
      <div className="mx-auto max-w-[720px] px-5 md:px-8">
        <h2 className="reveal text-center text-3xl md:text-[40px]">
          En tu primera sesión con Marco recibes:
        </h2>
        <ul className="mt-10 space-y-4">
          {items.map((t, i) => (
            <li
              key={i}
              className="reveal flex items-start gap-4 rounded-xl p-4"
              style={{ backgroundColor: "#1F7A7A", transitionDelay: `${i * 0.1}s` }}
            >
              <IconCheck />
              <span className="text-base text-white md:text-lg">{t}</span>
            </li>
          ))}
        </ul>
        <p className="reveal mt-10 text-center font-display text-4xl font-bold uppercase tracking-wide text-[#E8621A] md:text-5xl">
          Desde $800 MXN por sesión
        </p>
        <div className="reveal mt-8 flex justify-center">
          <div className="w-full max-w-[480px]">
            <CtaWhats full>→ Agenda tu primera sesión — WhatsApp</CtaWhats>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="reveal overflow-hidden rounded-xl bg-white shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left min-h-[48px]"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-bold uppercase tracking-wide text-[#0F4C4C] md:text-xl">
          {q}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-6 w-6 shrink-0 text-[#E8621A] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        style={{ maxHeight: open ? ref.current?.scrollHeight ?? 500 : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <div ref={ref} className="px-5 pb-5 text-base leading-relaxed text-[#1F7A7A]">
          {a}
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const items = [
    { q: "¿Cuánto cuesta?", a: "Sesión desde $800 MXN. Sin costos ocultos, sin paquetes obligatorios. Muchos pacientes llevan meses gastando más que eso en medicamentos que no resuelven nada. Aquí pagas por resultado, no por alivio temporal." },
    { q: "¿Funciona de verdad o es algo alternativo?", a: "La quiropraxia es terapia manual certificada. No es cirugía, no son inyecciones. Marco trabaja directamente en la estructura que genera el dolor. No es magia: es anatomía aplicada. Y funciona porque ataca la causa, no el síntoma." },
    { q: "¿Cuántas sesiones voy a necesitar?", a: "Depende de tu caso. Lo que sí puedes esperar: desde la primera sesión ya sabes qué tienes y qué proceso sigue. Marco no te enganchará a sesiones infinitas — te dice la verdad desde el principio." },
    { q: "¿Es seguro?", a: "Es terapia manual especializada. Sin fármacos, sin procedimientos invasivos. Marco tiene formación y experiencia tratando cientos de casos en Monterrey. Si tu caso requiere otro tipo de atención, te lo dice sin rodeos." },
  ];
  return (
    <section style={{ backgroundColor: "#E8F3F3" }} className="py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="reveal text-3xl text-[#0F4C4C] md:text-[40px]">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-3">
          {items.map((it, i) => (
            <FaqItem key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [data, setData] = useState({ name: "", phone: "", email: "", consent: false });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (d = data) => {
    const e: Record<string, string> = {};
    if (d.name.trim().length < 2) e.name = "Ingresa tu nombre";
    if (!/^[\d\s+()-]{8,15}$/.test(d.phone.trim())) e.phone = "Teléfono inválido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "Correo inválido";
    if (!d.consent) e.consent = "Debes aceptar el aviso";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    setTouched({ name: true, phone: true, email: true, consent: true });
    if (Object.keys(e).length === 0) {
      try { sessionStorage.setItem("ms_form_converted", "1"); } catch {}
      window.location.href = "/gracias";
    }
  };

  const fieldClass = (k: string) => {
    const base =
      "h-12 w-full rounded-md border-2 bg-white px-4 text-[#0F4C4C] outline-none transition-colors focus:border-[#E8621A]";
    if (!touched[k]) return `${base} border-white/20`;
    return errs[k] ? `${base} border-red-500` : `${base} border-green-500`;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#1F7A7A" }}>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-white">Nombre completo</label>
        <input
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          onBlur={() => { setTouched((t) => ({ ...t, name: true })); setErrs(validate()); }}
          className={fieldClass("name")}
          required
        />
        {touched.name && errs.name && <p className="mt-1 text-xs text-red-300">{errs.name}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-white">Teléfono</label>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          onBlur={() => { setTouched((t) => ({ ...t, phone: true })); setErrs(validate()); }}
          className={fieldClass("phone")}
          required
        />
        {touched.phone && errs.phone && <p className="mt-1 text-xs text-red-300">{errs.phone}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-white">Correo electrónico</label>
        <input
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          onBlur={() => { setTouched((t) => ({ ...t, email: true })); setErrs(validate()); }}
          className={fieldClass("email")}
          required
        />
        {touched.email && errs.email && <p className="mt-1 text-xs text-red-300">{errs.email}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm text-[#BFE3E0]">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })}
          className="mt-1 h-5 w-5 accent-[#E8621A]"
        />
        <span>
          He leído y acepto el{" "}
          <a href="/politica-privacidad" className="underline hover:text-white">
            Aviso de Privacidad
          </a>
        </span>
      </label>
      {touched.consent && errs.consent && <p className="text-xs text-red-300">{errs.consent}</p>}
      <button
        type="submit"
        className="btn-cta h-14 w-full rounded-md text-lg"
      >
        → Quiero mi primera sesión
      </button>
    </form>
  );
}

function FormSection() {
  return (
    <section style={{ backgroundColor: "#0F4C4C" }} className="py-14 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="reveal">
          <h2 className="text-3xl md:text-5xl">¿Listo para dejar de vivir con el dolor?</h2>
          <p className="mt-6 text-base text-[#BFE3E0] md:text-lg">
            Déjanos tus datos y te contactamos hoy mismo para agendar tu primera sesión con
            Marco. O escríbenos directo por WhatsApp si prefieres respuesta inmediata.
          </p>
          <div className="mt-6">
            <CtaWhats>→ Prefiero WhatsApp</CtaWhats>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-[#BFE3E0]">
            <li className="flex items-center gap-2"><IconCheck /> Respuesta el mismo día</li>
            <li className="flex items-center gap-2"><IconCheck /> Sin compromiso</li>
            <li className="flex items-center gap-2"><IconCheck /> Atención directa con Marco</li>
          </ul>
        </div>
        <div className="reveal">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function LifeChange() {
  const items = [
    {
      q: "Llevaba 3 años sin poder cargar a mi hija sin que me doliera la espalda. Hoy juego con ella en el piso, la cargo, salimos a caminar. Recuperé mi rol de mamá.",
      a: "Andrea L., 38 años, Monterrey",
      tag: "Volvió a cargar a su hija",
    },
    {
      q: "Tuve que dejar de correr por el dolor en la rodilla. Pensé que era para siempre. Marco encontró el origen real — venía de la cadera. Hoy ya volví a entrenar maratón.",
      a: "Diego H., 41 años, San Pedro",
      tag: "Volvió a correr",
    },
    {
      q: "Estuve a punto de pedir incapacidad permanente por el dolor de cuello. Marco me devolvió mi trabajo y mi independencia. No exagero cuando digo que me cambió la vida.",
      a: "María Fernanda S., 49 años, Monterrey",
      tag: "Volvió a trabajar",
    },
  ];
  return (
    <section style={{ backgroundColor: "#082828" }} className="py-14 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="reveal mb-3 inline-block rounded-full border border-[#E8621A]/40 bg-[#E8621A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E8621A]">
          Vidas que cambiaron
        </p>
        <h2 className="reveal text-3xl md:text-[44px]">
          Eliminaron el dolor y recuperaron la movilidad que este les había quitado.
        </h2>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal card-lift min-w-[85%] snap-center overflow-hidden rounded-2xl bg-[#1F7A7A] shadow-lg md:min-w-0"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img src={rodillaAntes} alt="Antes del tratamiento" className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Antes</span>
                </div>
                <div className="relative">
                  <img src={rodillaDespues} alt="Después del tratamiento" className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-2 top-2 rounded bg-[#E8621A] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Después</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-[#E8621A] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {t.tag}
                </span>
                <blockquote className="mt-4 text-base leading-relaxed text-white md:text-lg">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-[#BFE3E0]">
                  — {t.a}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <div className="reveal mt-10 flex justify-center">
          <div className="w-full max-w-[480px]">
            <CtaWhats full>→ Quiero agendar mi cita hoy</CtaWhats>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const address = "Av. Lázaro Cárdenas 2400, Col. Valle Oriente, San Pedro Garza García, N.L.";
  const mapsQuery = encodeURIComponent(address);
  return (
    <section style={{ backgroundColor: "#E8F3F3" }} className="py-14 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="reveal">
          <p className="mb-3 inline-block rounded-full bg-[#0F4C4C] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Consultorio en Monterrey
          </p>
          <h2 className="text-3xl text-[#0F4C4C] md:text-[40px]">
            Tu sesión con Marco, en el corazón de Monterrey
          </h2>
          <div className="mt-6 space-y-3 text-base text-[#1F7A7A] md:text-lg">
            <p className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-[#E8621A]" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>{address}</span>
            </p>
            <p className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-[#E8621A]" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 7v5l3 2" />
              </svg>
              <span>Lunes a Viernes · 9:00 a 19:00 · Sábados · 9:00 a 14:00</span>
            </p>
            <p className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0 text-[#E8621A]" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5a1 1 0 011 .76l1 4a1 1 0 01-.5 1.13L7 10a12 12 0 007 7l1.1-2a1 1 0 011.13-.5l4 1a1 1 0 01.77 1V19a2 2 0 01-2 2A17 17 0 013 5z" />
              </svg>
              <a href="tel:+528112345678" className="hover:underline">+52 81 1234 5678</a>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaWhats>→ Agendar cita ahora</CtaWhats>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-[#0F4C4C] bg-white px-6 py-4 font-display text-base font-bold uppercase tracking-wide text-[#0F4C4C] transition-colors hover:bg-[#0F4C4C] hover:text-white"
            >
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="reveal overflow-hidden rounded-2xl shadow-xl">
          <iframe
            title="Ubicación del consultorio de Marco Santillán en Monterrey"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            width="100%"
            height="380"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

function MiniFooter() {
  return (
    <footer style={{ backgroundColor: "#082828" }} className="py-10 text-center text-xs text-[#BFE3E0]">
      <img src={logoMarco} alt="Logo Marco Santillán" className="mx-auto mb-3 h-14 w-14 rounded-full bg-white p-1.5" width={56} height={56} />
      <p>© {new Date().getFullYear()} Marco Santillán · Monterrey, NL</p>
      <p className="mt-2 space-x-4">
        <a href="/politica-privacidad" className="hover:text-white">Política de Privacidad</a>
        <span>·</span>
        <a href="/aviso-legal" className="hover:text-white">Aviso Legal</a>
      </p>
    </footer>
  );
}

export default function LandingPage() {
  useReveal();
  return (
    <main lang="es-MX">
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <LifeChange />
      <Offer />
      <Faq />
      <Location />
      <FormSection />
      <MiniFooter />
      <ExitPopup />
      <WhatsAppWidget />
      
    </main>
  );
}
