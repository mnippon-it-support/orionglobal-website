"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation";

export default function HomePage() {
  const t = useTranslations("Home");
  const tServ = useTranslations("Services");
  const tProd = useTranslations("Products");
  const tStr = useTranslations("Strengths");

  // Service list
  const services = [
    {
      title: tServ("exportTitle"),
      desc: tServ("exportDesc"),
      image: "/images/service-vehicles.png",
      link: "/services#export"
    },
    {
      title: tServ("importTitle"),
      desc: tServ("importDesc"),
      image: "/images/hero-logistics.png",
      link: "/services#import"
    },
    {
      title: tServ("vanningTitle"),
      desc: tServ("vanningDesc"),
      image: "/images/service-vanning.png",
      link: "/services#vanning"
    },
    {
      title: tServ("shippingTitle"),
      desc: tServ("shippingDesc"),
      image: "/images/service-shipping.png",
      link: "/services#shipping"
    },
    {
      title: tServ("customsTitle"),
      desc: tServ("customsDesc"),
      image: "/images/service-machinery.png",
      link: "/services#customs"
    }
  ];

  // Handled cargo display
  const cargoCategories = [
    { title: tProd("vehiclesTitle"), desc: tProd("vehiclesDesc"), image: "/images/product-vehicles.png" },
    { title: tProd("trucksTitle"), desc: tProd("trucksDesc"), image: "/images/product-trucks.png" },
    { title: tProd("bikesTitle"), desc: tProd("bikesDesc"), image: "/images/product-bikes.png" },
    { title: tProd("machineryTitle"), desc: tProd("machineryDesc"), image: "/images/product-machinery.png" }
  ];

  // Strengths list
  const strengths = [
    { number: "01", title: tStr("item1Title"), desc: tStr("item1Desc") },
    { number: "02", title: tStr("item2Title"), desc: tStr("item2Desc") },
    { number: "03", title: tStr("item3Title"), desc: tStr("item3Desc") },
    { number: "04", title: tStr("item4Title"), desc: tStr("item4Desc") },
    { number: "05", title: tStr("item5Title"), desc: tStr("item5Desc") }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section (50/50 Split - Perfectly Aligned) */}
      <section className="relative overflow-hidden border-b border-border-light">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Left Column (50%): Clean Pure White & Large Bold Typography */}
          <div className="lg:col-span-6 bg-white px-8 py-24 lg:p-28 flex flex-col justify-center relative z-20">
            <HeroAnimation>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-gold" />
                {t("badge")}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif uppercase leading-[1.1] tracking-tight text-navy">
                {t("heroTitle")}
                <br />
                <span className="text-gold">{t("heroTitleAccent")}</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-navy-text/85 leading-relaxed font-normal font-sans">
                {t("heroSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded-md tracking-wider transition-colors duration-300 shadow-md text-center cursor-pointer uppercase"
                >
                  {t("getQuote")}
                </Link>
                <Link
                  href="/services"
                  className="bg-white hover:bg-gray-100 text-navy-text font-bold text-base py-4 px-10 rounded-md tracking-wider border border-border-light transition-colors duration-300 text-center flex items-center justify-center gap-1.5 cursor-pointer uppercase"
                >
                  {t("exploreServices")}
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </HeroAnimation>
          </div>

          {/* Right Column (50%): Full-Bleed High-Quality Visual */}
          <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/hero-logistics.png"
              alt="International Cargo Ship & Excavator"
              fill
              className="object-cover"
              priority
            />
            {/* Visual overlay gradient */}
            <div className="absolute inset-0 bg-navy/5" />
          </div>

        </div>
      </section>

      {/* 2. Overview Section (Aligned 50/50 Columns) */}
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column (50%): Premium Graphic Image */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[520px] rounded-xl overflow-hidden shadow-md border border-border-light">
              <Image
                src="/images/service-vanning.png"
                alt="Container Loading & Lashing Operations"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column (50%): Spacious Structured Information */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("aboutSubtitle")}</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-navy uppercase tracking-tight leading-none pb-4 border-b border-border-light">
                  {t("aboutTitle")}
                </h2>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-navy-text/85 leading-relaxed font-normal font-sans">
                {t("aboutDesc1")}
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl text-navy-text/85 leading-relaxed font-normal font-sans">
                {t("aboutDesc2")}
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-extrabold tracking-wider transition-colors group cursor-pointer uppercase text-base"
                >
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Services Section (Aligned 3-Column Card Grid) */}
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Aligned Heading Block */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("servicesBadge")}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-navy uppercase tracking-tight">
              {t("servicesTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-navy-text/80 leading-relaxed font-sans font-normal">
              {t("servicesSubtitle")}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="border border-border-light rounded-xl p-8 hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between group bg-white h-full"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/30 shadow-sm relative shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-bold font-serif text-navy uppercase tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-sans font-normal">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-8">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:text-navy uppercase group tracking-wider"
                    >
                      {t("readMore")}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Products / Handled Items Section (Spacious Card Catalog Grid) */}
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Aligned Heading Block */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("productsBadge")}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-navy uppercase tracking-tight">
              {t("productsTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-navy-text/80 leading-relaxed font-sans font-normal">
              {t("productsSubtitle")}
            </p>
          </div>

          {/* Cards Grid (Highly Professional Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cargoCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-border-light shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Top: Image container */}
                <div className="relative h-[240px] w-full bg-white p-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                {/* Bottom: Text body on pure white background */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif text-navy uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-sans font-normal">
                      {category.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gold hover:text-navy transition-colors uppercase tracking-wider"
                    >
                      {tProd("inquireProduct")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Values / Strengths Section (Full-Width Navy Layout - Spacious Grid) */}
      <section className="py-24 bg-navy text-white border-t border-b border-gold/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-bold uppercase tracking-wider text-sm">{t("strengthsBadge")}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white uppercase tracking-tight">
              {t("strengthsTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("strengthsSubtitle")}
            </p>
          </div>

          {/* Aligned Spacious Grid (Cols 1, Md 2, Lg 3 for balance) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 h-full"
                >
                  <div className="font-serif text-4xl font-bold text-gold mb-6 tracking-wide">
                    {strength.number}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mb-3 uppercase tracking-tight leading-snug">
                    {strength.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed font-sans font-normal">
                    {strength.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Ultimate Call-to-action Section */}
      <section className="bg-navy py-24 text-center border-t-2 border-gold relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gold uppercase tracking-wider">
            {t("ctaTitle")}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed font-normal">
            {t("ctaText")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md tracking-wider transition-colors duration-300 shadow-md w-full sm:w-auto text-center uppercase text-base"
            >
              {t("getQuote")}
            </Link>
            <a
              href="https://wa.me/959123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-navy-text font-bold py-4 px-10 rounded-md tracking-wider transition-colors duration-300 w-full sm:w-auto text-center uppercase text-base"
            >
              {t("whatsappUs")}
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
