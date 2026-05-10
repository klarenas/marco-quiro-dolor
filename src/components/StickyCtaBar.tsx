import { useEffect, useState } from "react";

const PHONE_TEL = "+528112345678";
const WHATSAPP =
  "https://wa.me/528112345678?text=Hola%20Marco%2C%20quiero%20agendar%20una%20sesi%C3%B3n";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section.bg-hero-grad");
    const form = document.querySelector("form");
    if (!hero) return;

    let heroOut = false;
    let formIn = false;
    const update = () => setVisible(heroOut && !formIn);

    const ioHero = new IntersectionObserver(
      ([e]) => {
        heroOut = !e.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    ioHero.observe(hero);

    let ioForm: IntersectionObserver | null = null;
    if (form) {
      ioForm = new IntersectionObserver(
        ([e]) => {
          formIn = e.isIntersecting;
          update();
        },
        { threshold: 0.2 },
      );
      ioForm.observe(form);
    }
    return () => {
      ioHero.disconnect();
      ioForm?.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          body { padding-bottom: 64px; }
        }
        @keyframes ms-slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 8888,
          backgroundColor: "#E8621A",
          display: visible ? "flex" : "none",
          animation: visible ? "ms-slide-up 0.3s ease-out" : undefined,
          boxShadow: "0 -4px 16px rgba(0,0,0,0.2)",
        }}
      >
        <a
          href={PHONE_TEL}
          className="flex flex-1 items-center justify-center gap-2 font-display text-base font-bold uppercase tracking-wide text-white"
          style={{ minHeight: 48 }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5a1 1 0 011 .76l1 4a1 1 0 01-.5 1.13L7 10a12 12 0 007 7l1.1-2a1 1 0 011.13-.5l4 1a1 1 0 01.77 1V19a2 2 0 01-2 2A17 17 0 013 5z" />
          </svg>
          Llamar
        </a>
        <span style={{ width: 1, backgroundColor: "rgba(255,255,255,0.5)", margin: "10px 0" }} />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 font-display text-base font-bold uppercase tracking-wide text-white"
          style={{ minHeight: 48 }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.5zM12 22a10 10 0 01-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1122 12c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6c.1-.1.3-.4.4-.5l.3-.5c.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 00-.7.3c-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  );
}
