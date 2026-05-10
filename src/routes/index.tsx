import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiropráctico en Monterrey | Marco Santillán" },
      {
        name: "description",
        content:
          "Alivia tu dolor de espalda, cuello o ciático desde la primera sesión. Terapeuta quiropráctico especializado en Monterrey. Agenda hoy.",
      },
      { property: "og:title", content: "Quiropráctico en Monterrey | Marco Santillán" },
      {
        property: "og:description",
        content:
          "Alivia tu dolor desde la primera sesión. Quiropráctico en Monterrey. Sesión desde $800 MXN.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});
