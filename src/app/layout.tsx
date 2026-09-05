import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "TFM-2 Service & Parts | Профессиональное обслуживание и запчасти ТФМ в Казахстане",
  description: "Официальное обслуживание и ремонт упаковочного оборудования серии ТФМ-2, ТФМ-18 и ТФО на территории Казахстана. Продажа оригинальных запасных частей и комплектующих с гарантией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
