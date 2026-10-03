import type { Metadata } from "next";
import "@fontsource-variable/noto-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airom-hotel.vercel.app"),
  title: "AIROM Hotel — гостиница в Атырау",
  description:
    "AIROM Hotel в Атырау: номера от 20 000 ₸, меню игровых дней, трёхразовое питание, размещение команд и документы для организаций.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AIROM Hotel",
    locale: "ru_KZ",
    title: "AIROM Hotel — гостиница в Атырау",
    description: "Номера от 20 000 ₸ в сутки. Проживание, питание и документы для команд и организаций.",
    images: [{ url: "/airom/hero-room.jpeg", width: 1280, height: 960, alt: "Номер AIROM Hotel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIROM Hotel — гостиница в Атырау",
    description: "Номера от 20 000 ₸ в сутки. Проживание и питание для гостей и команд.",
    images: ["/airom/hero-room.jpeg"],
  },
  icons: {
    icon: "/airom-favicon-white.png",
    shortcut: "/airom-favicon-white.png",
    apple: "/airom-favicon-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
