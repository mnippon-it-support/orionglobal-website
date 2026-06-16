"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("Terms");

  const sections = [
    { title: t("sec1Title"), text: t("sec1Text") },
    { title: t("sec2Title"), text: t("sec2Text") },
    { title: t("sec3Title"), text: t("sec3Text") },
    { title: t("sec4Title"), text: t("sec4Text") },
    { title: t("sec5Title"), text: t("sec5Text") }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Centered Solid Navy Banner */}
      <section className="relative overflow-hidden border-b-4 border-gold bg-navy text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <h1 className="text-4xl lg:text-5xl font-bold font-serif uppercase tracking-wide text-white">
            {t("title")}
          </h1>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto font-sans leading-relaxed font-normal">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Terms Body Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-navy uppercase tracking-tight">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg text-navy-text/85 leading-relaxed font-sans font-normal">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
