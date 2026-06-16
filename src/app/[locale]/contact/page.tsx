"use client";

import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const tFooter = useTranslations("Footer");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header (Centered Solid Navy Banner) */}
      <section className="relative overflow-hidden border-b-4 border-gold bg-navy text-white py-20 lg:py-28 text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/hero-logistics.png"
            alt="ORION GLOBAL Logo Backdrop"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif uppercase tracking-wide text-white">
            {t("title")}
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto font-sans leading-relaxed font-normal">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content (Split Layout) */}
      <section className="bg-white border-b border-border-light">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Deep Navy contact registry + WhatsApp promo (5 cols) */}
          <div className="lg:col-span-5 bg-navy text-white p-8 lg:p-20 flex flex-col justify-start space-y-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                src="/images/service-shipping.png"
                alt="Logistics bg"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-serif font-bold text-gold border-b border-gold/25 pb-4">
                {t("infoTitle")}
              </h3>
              
              <ul className="space-y-8 text-base text-gray-300">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/20 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif text-lg">{t("addressTitle")}</h4>
                    <p className="text-sm sm:text-base text-gray-400 mt-1.5 font-sans leading-relaxed">{tFooter("address")}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/20 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif text-lg">{t("phoneTitle")}</h4>
                    <p className="text-sm sm:text-base text-gray-400 mt-1.5 font-sans leading-relaxed">{tFooter("phone")}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/20 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif text-lg">{t("emailTitle")}</h4>
                    <p className="text-sm sm:text-base text-gray-400 mt-1.5 font-sans leading-relaxed">{tFooter("email")}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 border border-gold/20 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif text-lg">{tFooter("hours")}</h4>
                    <p className="text-sm sm:text-base text-gray-400 mt-1.5 font-sans leading-relaxed">{tFooter("hoursDetail")}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp Quick Chat Card */}
            <div className="relative z-10 border border-gold/30 rounded-xl bg-navy/95 p-8 space-y-5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" fill="currentColor" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white uppercase tracking-tight">{t("whatsappTitle")}</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {t("whatsappDesc")}
              </p>
              <a
                href="https://wa.me/959123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-center font-bold text-xs py-3.5 px-6 rounded tracking-wide transition-colors cursor-pointer inline-flex items-center gap-2 shadow uppercase"
              >
                {t("whatsappCTA")}
              </a>
            </div>
          </div>

          {/* Right Column: Pure White contact form (7 cols) */}
          <div className="lg:col-span-7 bg-white border-l border-border-light">
            <Suspense fallback={<div className="p-16 text-center rounded-xl bg-white">{t("loadingForm")}</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </section>
    </div>
  );
}
