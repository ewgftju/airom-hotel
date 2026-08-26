import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIROM Hotel — гостиница в Атырау",
  description:
    "AIROM Hotel в Атырау: комфортные номера, трёхразовое питание, размещение команд и полный пакет документов для организаций.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
