import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZ Cadetería | Servicio de Mensajería y Entregas",
  description: "Servicio profesional de cadetería y mensajería. Entregas rápidas, seguras y confiables. Tu paquete llega a destino.",
  keywords: "cadetería, mensajería, entregas, delivery, paquetes, envíos",
  openGraph: {
    title: "AZ Cadetería | Servicio de Mensajería",
    description: "Entregas rápidas, seguras y confiables",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
