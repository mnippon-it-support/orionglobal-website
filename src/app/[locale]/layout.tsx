import React from "react";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  return {
    title: {
      default: "ORION GLOBAL | Export, Import, Vanning & Shipping Services",
      template: "%s | ORION GLOBAL"
    },
    description: t("heroSubtitle"),
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-32.png", type: "image/png", sizes: "32x32" }
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/icon-180.png", type: "image/png", sizes: "180x180" }
      ]
    },
    manifest: "/manifest.json",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Provide messages to client components
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`}>
      <body className="antialiased min-h-screen bg-primary-bg text-navy-text flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {/* Offset layout for the fixed glass header */}
          <main className="flex-grow pt-[74px] md:pt-[78px]">
            {children}
          </main>
          <Footer />
          <WhatsAppCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
