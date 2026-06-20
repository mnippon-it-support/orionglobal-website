import React from "react";
import { getTranslations } from "next-intl/server";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("title"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  const tHome = await getTranslations({ locale, namespace: "Home" });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });

  const values = [
    { title: t("value1Title"), desc: t("value1Desc"), number: "01" },
    { title: t("value2Title"), desc: t("value2Desc"), number: "02" },
    { title: t("value3Title"), desc: t("value3Desc"), number: "03" },
    { title: t("value4Title"), desc: t("value4Desc"), number: "04" },
    { title: t("value5Title"), desc: t("value5Desc"), number: "05" }
  ];

  const profileItems = [
    { label: t("established"), value: t("establishedDate") },
    { label: t("ceo"), value: t("ceoName") },
    { label: t("businessType"), value: t("businessTypeDesc") },
    { label: t("location"), value: tFooter("address") },
    { label: t("phone"), value: tFooter("phone") },
    { label: t("fax"), value: t("faxNumber") },
    { label: t("email"), value: tFooter("email") },
    { label: tFooter("hours"), value: tFooter("hoursDetail") }
  ];

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

      {/* Corporate Overview & Profile Table (Perfect Aligned 2-Column Split) */}
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Description & Registry Table (Pure White) */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("companyProfile")}</span>
                <h2 className="text-4xl lg:text-5xl font-bold font-serif text-navy uppercase tracking-tight pb-4 border-b border-border-light">
                  {t("companyProfile")}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-navy-text/85 leading-relaxed font-normal font-sans">
                  {tHome("aboutDesc1")}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-navy-text/85 leading-relaxed font-normal font-sans">
                  {tHome("aboutDesc2")}
                </p>
              </div>

              {/* Profile Table */}
              <div className="border border-border-light rounded-lg overflow-hidden bg-white shadow-sm">
                <table className="min-w-full divide-y divide-border-light">
                  <tbody className="divide-y divide-border-light">
                    {profileItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 text-base lg:text-lg font-bold text-navy font-sans w-1/3 border-r border-border-light bg-white">
                          {item.label}
                        </td>
                        <td className="px-6 py-5 text-base lg:text-lg text-navy-text/90 font-sans leading-relaxed">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Visual & Concept Box (Navy & Border Accent) */}
            <div className="lg:col-span-5 space-y-10">
              {/* Image Box */}
              <div className="relative h-[320px] rounded-xl overflow-hidden shadow-md border border-border-light">
                <Image
                  src="/images/service-shipping.png"
                  alt="Ocean Carrier Vessel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Brand Concept Box */}
              <div className="border border-border-light p-8 rounded-xl bg-white space-y-4 shadow-sm border-l-4 border-l-gold">
                <span className="text-sm font-bold text-gold uppercase tracking-wider">{t("brandConceptTitle")}</span>
                <h3 className="text-3xl font-bold font-serif text-navy uppercase leading-tight tracking-tight">
                  {t("brandConceptTagline")}
                </h3>
                <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-sans font-normal">
                  {t("brandConceptDesc")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Grid Section (Full-Width White Grid) */}
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("valuesBadge")}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-navy uppercase tracking-tight">
              {t("valuesTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-navy-text/80 leading-relaxed font-sans font-normal">
              {t("valuesSubtitle")}
            </p>
          </div>

          {/* Structured Cards Grid - Spacious layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border border-border-light rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col items-center text-center space-y-4 h-full"
                >
                  <div className="font-serif text-4xl font-bold text-gold mb-2 tracking-wide">
                    {value.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-serif text-navy uppercase tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-base text-navy-text/80 leading-relaxed font-sans font-normal">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("locationBadge")}</span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-navy uppercase tracking-tight">
              {t("locationTitle")}
            </h2>
          </div>

          {/* Map Container - Placeholder with a clean design */}
          <div className="w-full h-[400px] border border-border-light rounded-xl overflow-hidden relative shadow-sm bg-gray-50 flex flex-col items-center justify-center text-center p-6">
            <div className="relative z-10 max-w-md space-y-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-navy mx-auto border border-border-light shadow-sm">
                <Briefcase className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-navy uppercase tracking-tight">{t("mapPlaceholder")}</h3>
              <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-sans">
                {t("mapPlaceholderDesc").split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < t("mapPlaceholderDesc").split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-dark text-white text-sm font-bold py-3 px-8 rounded shadow transition-colors cursor-pointer inline-block uppercase tracking-wider"
                >
                  {t("openMaps")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
