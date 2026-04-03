import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Revive Japan | リサイクル・リバイブ・リユース",
  description:
    "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。ノートPC、スマートフォン、デスクトップ、サーバーに新たな命を。",
  keywords:
    "電子機器リサイクル, リファービッシュPC, 中古スマートフォン, IT資産処分, 循環型経済, 電子廃棄物",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "New Revive Japan | リサイクル・リバイブ・リユース",
    description:
      "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。",
    url: "https://newrevivejapan.com",
    siteName: "New Revive Japan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
