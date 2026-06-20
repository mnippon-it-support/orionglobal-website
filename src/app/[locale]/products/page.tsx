import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight, Compass, ShieldAlert } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products" });
  return {
    title: t("title"),
  };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Products" });

  const products = [
    {
      id: "vehicles",
      title: t("vehiclesTitle"),
      desc: t("vehiclesDesc"),
      image: "/images/product-vehicles.png"
    },
    {
      id: "trucks",
      title: t("trucksTitle"),
      desc: t("trucksDesc"),
      image: "/images/product-trucks.png"
    },
    {
      id: "bikes",
      title: t("bikesTitle"),
      desc: t("bikesDesc"),
      image: "/images/product-bikes.png"
    },
    {
      id: "machinery",
      title: t("machineryTitle"),
      desc: t("machineryDesc"),
      image: "/images/product-machinery.png"
    },
    {
      id: "heavy",
      title: t("heavyTitle"),
      desc: t("heavyDesc"),
      image: "/images/product-heavy.png"
    },
    {
      id: "vanning-shipping",
      title: t("vanningShippingTitle"),
      desc: t("vanningShippingDesc"),
      image: "/images/product-vanning-shipping.png"
    }
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

      {/* Catalog Split Layout */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left side: Product Cards Grid (Pure White, 8 cols) */}
          <div className="lg:col-span-8 bg-white p-8 lg:p-16 border-r border-border-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-[240px] w-full bg-white p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-bold font-serif text-navy uppercase tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-normal font-sans">
                        {product.desc}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="inline-flex items-center justify-between w-full bg-white hover:bg-gold hover:text-white border border-border-light text-navy-text font-bold text-base py-3.5 px-6 rounded tracking-wide transition-all duration-250 group cursor-pointer uppercase"
                      >
                        <span>{t("inquireProduct")}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Deep Navy Guidelines (4 cols) */}
          <div className="lg:col-span-4 bg-navy text-white p-8 lg:p-16 flex flex-col justify-start space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <Image
                src="/images/service-shipping.png"
                alt="Container ship cargo"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center text-gold border border-gold/30 shadow-sm">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold font-serif text-white uppercase tracking-tight">
                {t("solutionsTitle")}
              </h3>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed font-sans font-normal">
                {t("solutionsDesc")}
              </p>
              
              <div className="border border-gold/20 p-6 rounded-lg bg-white/5 space-y-4">
                <div className="flex gap-2.5 text-gold items-center">
                  <ShieldAlert className="w-5 h-5" />
                  <span className="text-xs font-bold font-serif uppercase tracking-wider">{t("complianceTitle")}</span>
                </div>
                <p className="text-sm text-gray-400 font-sans leading-relaxed font-normal">
                  {t("complianceDesc")}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?product=other"
                  className="bg-gold hover:bg-gold-dark text-white font-bold text-base py-4 px-10 rounded tracking-wider transition-colors inline-block text-center w-full shadow-md uppercase"
                >
                  {t("customInquiry")}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
