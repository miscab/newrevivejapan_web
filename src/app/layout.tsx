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
  metadataBase: new URL("https://newrevivejapan.com"),
  title: {
    default: "New Revive Japan | 中古電子機器のリサイクル・リファービッシュ・リマーケティング",
    template: "%s | New Revive Japan",
  },
  description:
    "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。ノートPC、スマートフォン、デスクトップ、サーバーに新たな命を吹き込みます。10以上の地域から調達し、5カ国で事業展開。",
  keywords: [
    "電子機器リサイクル",
    "リファービッシュPC",
    "リファービッシュノートパソコン",
    "中古スマートフォン",
    "リファービッシュデスクトップ",
    "リファービッシュサーバー",
    "IT資産処分",
    "ITAD",
    "循環型経済",
    "電子廃棄物リサイクル",
    "中古電子機器",
    "再生デバイス",
    "サステナブルテクノロジー",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://newrevivejapan.com",
    languages: {
      "ja": "https://newrevivejapan.com",
      "en": "https://newrevive.com",
    },
  },
  openGraph: {
    title: "New Revive Japan | 中古電子機器のリサイクル・リファービッシュ・リマーケティング",
    description:
      "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。5カ国で事業展開。",
    url: "https://newrevivejapan.com",
    siteName: "New Revive Japan",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Revive Japan | 中古電子機器のリサイクル・リファービッシュ・リマーケティング",
    description:
      "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。5カ国で事業展開。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "New Revive Japan",
              url: "https://newrevivejapan.com",
              logo: "https://newrevivejapan.com/logo-icon.png",
              description:
                "中古電子機器のリサイクル、リファービッシュ、リマーケティングのグローバルリーダー。",
              parentOrganization: {
                "@type": "Organization",
                name: "New Revive",
                url: "https://newrevive.com",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@newrevive.com",
                contactType: "customer service",
                availableLanguage: "Japanese",
              },
              areaServed: "Japan",
              knowsAbout: [
                "電子機器リサイクル",
                "IT資産処分",
                "デバイスリファービッシュ",
                "循環型経済",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
