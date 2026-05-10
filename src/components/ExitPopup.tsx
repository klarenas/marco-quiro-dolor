import { useEffect, useRef, useState } from "react";

const KEY_SHOWN = "ms_popup_shown";
const KEY_CONVERTED = "ms_popup_converted";

export default function ExitPopup() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const armed = useRef(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname === "/gracias") return;
    if (sessionStorage.getItem(KEY_SHOWN) || sessionStorage.getItem(KEY_CONVERTED)) return;
    if (sessionStorage.getItem("ms_form_converted")) return;

    const armTimer = window.setTimeout(() => {
      armed.current = true;
    }, 5000);

    const trigger = () => {
      if (!armed.current) return;
      if (sessionStorage.getItem(KEY_SHOWN)) return;
      sessionStorage.setItem(KEY_SHOWN, "1");
      setOpen(true);
      cleanup();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrolled >= 0.6) trigger();
    };

    if (isMobile) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseout", onMouseOut);
    }

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    }

    return () => {
      window.clearTimeout(armTimer);
      cleanup();
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[\d\s+()-]{8,15}$/.test(phone.trim())) {
      setErr("Ingresa un número válido");
      return;
    }
    setErr(null);
    setSent(true);
    sessionStorage.setItem(KEY_CONVERTED, "1");
    closeTimer.current = window.setTimeout(() => setOpen(false), 2500);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "popupFade 0.25s ease-out",
      }}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <style>{`
        @keyframes popupFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popupZoom {
          from { opacity: 0; transform: scale(0.85) }
          to { opacity: 1; transform: scale(1) }
        }
        @keyframes popupCheck {
          0% { stroke-dashoffset: 60 }
          100% { stroke-dashoffset: 0 }
        }
        @keyframes popupCheckCircle {
          0% { transform: scale(0) }
          60% { transform: scale(1.1) }
          100% { transform: scale(1) }
        }
      `}</style>
      <div
        className="relative w-full max-w-[480px] rounded-2xl p-6 md:p-8"
        style={{
          backgroundColor: "#0D0D1A",
          border: "2px solid #E8621A",
          boxShadow: "0 25px 60px -10px rgba(0,0,0,0.7), 0 0 40px rgba(232,98,26,0.25)",
          animation: "popupZoom 0.35s ease-out",
        }}
      >
        <button
          aria-label="Cerrar"
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {!sent ? (
          <>
            <h2
              className="font-display font-extrabold uppercase text-white"
              style={{ fontSize: "28px", lineHeight: 1.05, letterSpacing: "0.01em" }}
            >
              Espera — antes de irte
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "#CBD5E1" }}>
              Llevas tiempo con ese dolor. No lo dejes para mañana. Déjanos tu teléfono y
              Marco te llama hoy.
            </p>

            <form onSubmit={onSubmit} className="mt-5 space-y-3">
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Tu número de WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[52px] w-full rounded-md border-2 px-4 text-white placeholder:text-white/50 outline-none transition-colors focus:border-[#E8621A]"
                style={{
                  backgroundColor: "#1A3A6B",
                  borderColor: err ? "#dc2626" : "transparent",
                }}
                required
              />
              {err && <p className="text-xs text-red-300">{err}</p>}
              <button
                type="submit"
                className="btn-cta h-[52px] w-full rounded-md font-display text-base font-bold uppercase tracking-wide"
                style={{ backgroundColor: "#E8621A", color: "white" }}
              >
                → Marco me llama hoy
              </button>
            </form>

            <p className="mt-4 text-center text-xs" style={{ color: "#CBD5E1" }}>
              Tu número no se comparte con nadie. Solo te contacta Marco.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 block w-full text-center text-[13px] underline-offset-2 hover:underline"
              style={{ color: "#CBD5E1" }}
            >
              No gracias, prefiero seguir con el dolor
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full"
              style={{
                backgroundColor: "#16a34a",
                animation: "popupCheckCircle 0.45s cubic-bezier(0.18, 1.25, 0.4, 1) both",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="white" strokeWidth="3">
                <path
                  d="M5 12l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="60"
                  style={{ animation: "popupCheck 0.5s 0.25s ease-out both" }}
                />
              </svg>
            </div>
            <p className="mt-5 font-display text-xl font-bold uppercase text-white">
              ¡Listo!
            </p>
            <p className="mt-2 text-base" style={{ color: "#CBD5E1" }}>
              Marco te contactará pronto.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
