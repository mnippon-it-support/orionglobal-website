"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Logo from "./Logo";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  const links = [
    { name: tNav("home"), href: "/" },
    { name: tNav("about"), href: "/about" },
    { name: tNav("services"), href: "/services" },
    { name: tNav("products"), href: "/products" },
    { name: tNav("contact"), href: "/contact" }
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-2 border-gold/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About description */}
          <div className="flex flex-col space-y-4">
            <Logo light showText />
            <p className="text-gray-300 text-base leading-relaxed pt-2">
              {t("aboutDesc")}
            </p>
            <p className="text-gold font-serif italic text-sm tracking-wider pt-2">
              "{t("tagline")}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold tracking-wide mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-gold">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold text-base transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold/60 transition-transform duration-250 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold tracking-wide mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-gold">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4 text-base text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href={`mailto:${t("email")}`} className="hover:text-gold transition-colors">
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-gold font-serif text-lg font-bold tracking-wide mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-[2px] before:bg-gold">
              {t("hours")}
            </h3>
            <div className="bg-navy-text/60 border border-white/10 p-5 rounded-md flex gap-3.5 items-start">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-white">{t("hours")}</span>
                <span className="text-sm text-gray-300 mt-1">{t("hoursDetail")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            {t("rights")}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              {t("privacyPolicy")}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
