import { useEffect, useState } from "react";

const PHONE = "528112345678"; // PENDIENTE — número real de Marco
const MSG = "Hola Marco, me interesa agendar una sesión para mi dolor de [espalda/cuello/pierna]";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`;
const KEY_BUBBLE = "ms_wa_bubble_shown";

function WhatsAppIcon({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="white" aria-hidden="true">
      <path d="M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.59-1.71a12.78 12.78 0 006.21 1.59h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0016.001 3.2zm0 23.34h-.01a10.62 10.62 0 01-5.41-1.48l-.39-.23-3.91 1.02 1.04-3.81-.25-.4a10.6 10.6 0 01-1.63-5.66c0-5.87 4.78-10.65 10.66-10.65a10.6 10.6 0 017.53 3.13 10.58 10.58 0 013.12 7.53c-.01 5.88-4.79 10.55-10.75 10.55zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01s-.56.08-.85.4c-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname === "/gracias") return;
    if (sessionStorage.getItem(KEY_BUBBLE)) return;
    if (sessionStorage.getItem("ms_form_converted")) return;
    const t = window.setTimeout(() => {
      setBubble(true);
      sessionStorage.setItem(KEY_BUBBLE, "1");
    }, 8000);
    return () => window.clearTimeout(t);
  }, []);

  const closeBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBubble(false);
  };

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 0.6 }
          100% { transform: scale(1.8); opacity: 0 }
        }
        @keyframes waBubbleIn {
          from { opacity: 0; transform: translateY(8px) scale(0.96) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
        .wa-tooltip { opacity: 0; pointer-events: none; transform: translateX(8px); transition: opacity .2s ease, transform .2s ease; }
        @media (hover:hover) {
          .wa-fab:hover .wa-tooltip { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {bubble && (
        <div
          className="fixed z-[9998] animate-[waBubbleIn_.3s_ease-out]"
          style={{
            right: "16px",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 88px)",
            width: "240px",
          }}
        >
          <div className="relative rounded-xl bg-white p-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]">
            <button
              aria-label="Cerrar mensaje"
              onClick={closeBubble}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0F4C4C] shadow-md hover:bg-gray-100"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                style={{ backgroundColor: "#0F4C4C" }}
              >
                MS
              </div>
              <p className="font-display text-[14px] font-bold leading-tight text-[#0F4C4C]">
                Marco Santillán
              </p>
            </div>
            <p className="mt-2 text-[13px] leading-snug text-[#0F4C4C]">
              Hola 👋 ¿Tienes dolor de espalda, cuello o ciático? Escríbeme y agendamos hoy.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setBubble(false)}
              className="mt-3 flex h-9 w-full items-center justify-center rounded-md font-display text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              Responder
            </a>
          </div>
        </div>
      )}

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="wa-fab fixed flex items-center justify-center rounded-full"
        style={{
          right: "16px",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
          width: "var(--wa-size, 60px)",
          height: "var(--wa-size, 60px)",
          backgroundColor: "#25D366",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
          zIndex: 9999,
        }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: "#25D366",
            animation: "waPulse 3s ease-out infinite",
          }}
        />
        <span className="relative">
          <WhatsAppIcon size={32} />
        </span>
        <span
          className="wa-tooltip absolute right-full mr-3 hidden whitespace-nowrap rounded-lg px-3 py-2 text-sm text-white shadow-lg md:block"
          style={{ backgroundColor: "#0F4C4C" }}
        >
          ¿Tienes dudas? Escríbenos ahora
        </span>
      </a>

      <style>{`
        @media (max-width: 767px) { .wa-fab { --wa-size: 56px; } }
      `}</style>
    </>
  );
}
