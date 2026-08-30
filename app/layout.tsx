import type { Metadata } from "next";
import "@fontsource-variable/noto-sans/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIROM Hotel — гостиница в Атырау",
  description:
    "AIROM Hotel в Атырау: номера от 24 000 ₸, меню игровых дней, трёхразовое питание, размещение команд и документы для организаций.",
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
