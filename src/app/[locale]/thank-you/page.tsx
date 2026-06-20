import React from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { CheckCircle, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("successTitle"),
  };
}

export default async function ThankYouPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <div className="flex-grow flex items-center justify-center py-20 bg-white min-h-[70vh]">
      <div className="max-w-lg w-full mx-auto px-6 text-center">
        <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-2xl shadow-md space-y-6 flex flex-col items-center">
          
          {/* Success Check Icon */}
          <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <CheckCircle className="w-12 h-12" />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-serif font-bold text-navy">
              {t("successTitle")}
            </h1>
            <p className="text-base lg:text-lg text-navy-text/80 leading-relaxed font-sans font-normal">
              {t("successDesc")}
            </p>
          </div>

          <div className="pt-4 w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-bold text-base py-3.5 px-8 rounded-md w-full transition-colors duration-250 cursor-pointer shadow uppercase"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
