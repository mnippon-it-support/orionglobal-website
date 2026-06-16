"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const t = useTranslations("Services");

  const vanningSteps = [
    { number: "01", title: t("vanningStep1"), desc: t("vanningStep1Desc") },
    { number: "02", title: t("vanningStep2"), desc: t("vanningStep2Desc") },
    { number: "03", title: t("vanningStep3"), desc: t("vanningStep3Desc") }
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

      {/* Services Listing Section (Alternating Splits with Large Typography) */}
      <section className="bg-white">
        
        {/* 1. Export Services */}
        <div id="export" className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] border-b border-border-light scroll-mt-24">
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px]">
            <Image
              src="/images/service-vehicles.png"
              alt="Automobile export shipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 bg-navy text-white p-8 lg:p-24 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="font-serif text-3xl font-bold text-gold border border-gold/30 w-12 h-12 rounded-lg flex items-center justify-center bg-gold/15 shrink-0 select-none">
                01
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif uppercase text-white tracking-tight">
                {t("exportTitle")}
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("exportDesc")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300 font-sans font-normal">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("exportPoint1")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("exportPoint2")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("exportPoint3")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("exportPoint4")}
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact?service=export"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors duration-250 shadow-md uppercase"
              >
                {t("exportCTA")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Import Services */}
        <div id="import" className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] border-b border-border-light scroll-mt-24">
          <div className="lg:col-span-6 bg-navy text-white p-8 lg:p-24 flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="font-serif text-3xl font-bold text-gold border border-gold/30 w-12 h-12 rounded-lg flex items-center justify-center bg-gold/15 shrink-0 select-none">
                02
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif uppercase text-white tracking-tight">
                {t("importTitle")}
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("importDesc")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300 font-sans font-normal">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("importPoint1")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("importPoint2")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("importPoint3")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("importPoint4")}
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact?service=import"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors duration-250 shadow-md uppercase"
              >
                {t("importCTA")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px] order-1 lg:order-2">
            <Image
              src="/images/hero-logistics.png"
              alt="Import supply logistics"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Vanning Services */}
        <div id="vanning" className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] border-b border-border-light scroll-mt-24">
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px]">
            <Image
              src="/images/service-vanning.png"
              alt="Cargo Container Packing Vanning"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 bg-navy text-white p-8 lg:p-24 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="font-serif text-3xl font-bold text-gold border border-gold/30 w-12 h-12 rounded-lg flex items-center justify-center bg-gold/15 shrink-0 select-none">
                03
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif uppercase text-white tracking-tight">
                {t("vanningTitle")}
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("vanningDesc")}
            </p>
            
            {/* Vanning Step-by-Step UI inside Navy block */}
            <div className="border border-gold/20 p-6 rounded-lg bg-white/5 space-y-4">
              <h3 className="font-serif font-bold text-gold text-base tracking-wider uppercase pb-2 border-b border-gold/10">
                {t("vanningSteps")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {vanningSteps.map((step, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <span className="text-gold font-serif text-xl font-bold">{step.number}</span>
                    <h4 className="text-base font-bold text-white leading-tight">{step.title}</h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?service=vanning"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors duration-250 shadow-md uppercase"
              >
                {t("vanningCTA")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4. Shipping Services */}
        <div id="shipping" className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] border-b border-border-light scroll-mt-24">
          <div className="lg:col-span-6 bg-navy text-white p-8 lg:p-24 flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="font-serif text-3xl font-bold text-gold border border-gold/30 w-12 h-12 rounded-lg flex items-center justify-center bg-gold/15 shrink-0 select-none">
                04
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif uppercase text-white tracking-tight">
                {t("shippingTitle")}
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("shippingDesc")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300 font-sans font-normal">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("shippingPoint1")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("shippingPoint2")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("shippingPoint3")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("shippingPoint4")}
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact?service=shipping"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors duration-250 shadow-md uppercase"
              >
                {t("shippingCTA")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px] order-1 lg:order-2">
            <Image
              src="/images/service-shipping.png"
              alt="Freight transport container ship"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 5. Customs Clearance */}
        <div id="customs" className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] border-b border-border-light scroll-mt-24">
          <div className="lg:col-span-6 relative h-[350px] lg:h-auto min-h-[400px]">
            <Image
              src="/images/service-machinery.png"
              alt="Documentation customs clearance"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 bg-navy text-white p-8 lg:p-24 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <div className="font-serif text-3xl font-bold text-gold border border-gold/30 w-12 h-12 rounded-lg flex items-center justify-center bg-gold/15 shrink-0 select-none">
                05
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif uppercase text-white tracking-tight">
                {t("customsTitle")}
              </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans font-normal">
              {t("customsDesc")}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-300 font-sans font-normal">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("customsPoint1")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("customsPoint2")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("customsPoint3")}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                {t("customsPoint4")}
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact?service=customs"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors duration-250 shadow-md uppercase"
              >
                {t("customsCTA")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
