// Vercel cache clear - Fri Apr 24 20:03:13 +08 2026
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TutorFloatingChat from "@/components/TutorFloatingChat";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ai-fundamentals.micheletornello.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fondamenti di AI - Corso di Formazione AI",
    template: "%s | Fondamenti di AI",
  },
  description:
    "Corso completo sui Fondamenti di AI: dal machine learning alle reti neurali, dai modelli linguistici alle applicazioni pratiche.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fondamenti di AI - Corso di Formazione AI",
    description:
      "Corso completo sui Fondamenti di AI: dal machine learning alle reti neurali, dai modelli linguistici alle applicazioni pratiche.",
    url: siteUrl,
    siteName: "Fondamenti di AI",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/media/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Fondamenti di AI - Showcase corso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondamenti di AI - Corso di Formazione AI",
    description:
      "Corso completo sui Fondamenti di AI: dal machine learning alle reti neurali, dai modelli linguistici alle applicazioni pratiche.",
    images: ["/media/og-cover.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegister />
        {children}
        <TutorFloatingChat />
      </body>
    </html>
  );
}
