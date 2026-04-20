import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title: "営業日数計算ツール - 日本の祝日対応 | eigyoubi",
  description:
    "営業日数を簡単に計算できる無料ツール。日本の祝日・振替休日に完全対応。期間指定・逆算の2モードでビジネスの日程計画をサポートします。",
  keywords: [
    "営業日 計算",
    "営業日数 カウント",
    "稼働日数 計算",
    "営業日 計算 ツール",
    "祝日 営業日",
    "ビジネスデー 計算",
  ],
  openGraph: {
    title: "営業日数計算ツール - 日本の祝日対応",
    description:
      "営業日数を簡単に計算。日本の祝日・振替休日に完全対応した無料ツール。",
    type: "website",
    locale: "ja_JP",
    siteName: "eigyoubi",
  },
  twitter: {
    card: "summary_large_image",
    title: "営業日数計算ツール - 日本の祝日対応",
    description:
      "営業日数を簡単に計算。日本の祝日・振替休日に完全対応した無料ツール。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://eigyoubi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "営業日数計算ツール",
              description:
                "日本の祝日に対応した営業日数計算ツール。期間指定での営業日カウントや、営業日数からの逆算が可能です。",
              url: "https://eigyoubi.vercel.app",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              inLanguage: "ja",
              browserRequirements: "Requires JavaScript",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
