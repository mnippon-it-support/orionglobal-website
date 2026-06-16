"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Logo from "./Logo";
import { Menu, X, Globe, MessageSquare } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("products"), href: "/products" },
    { name: t("contact"), href: "/contact" }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header shadow-md py-3"
          : "bg-white/95 border-b border-border-light py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-gold border-b-2 border-gold pb-1"
                      : "text-navy-text hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Language Switcher & CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-gray-100/80 px-3.5 py-2 rounded-full border border-gray-200 text-sm text-navy font-semibold">
              <Globe className="w-3.5 h-3.5 text-gold" />
              <button
                onClick={() => handleLanguageChange("en")}
                className={`transition-colors duration-200 cursor-pointer ${
                  locale === "en" ? "text-gold font-bold" : "text-navy-text hover:text-gold"
                }`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => handleLanguageChange("ja")}
                className={`transition-colors duration-200 cursor-pointer ${
                  locale === "ja" ? "text-gold font-bold" : "text-navy-text hover:text-gold"
                }`}
              >
                JP
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-white font-bold text-sm py-2.5 px-5 rounded-md tracking-wider transition-colors duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer uppercase"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {t("getQuote")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            {/* Quick language switch for mobile */}
            <button
              onClick={() => handleLanguageChange(locale === "en" ? "ja" : "en")}
              className="text-navy-text hover:text-gold bg-gray-100/80 p-2.5 rounded-full border border-gray-200 flex items-center gap-1 text-sm font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-gold" />
              {locale === "en" ? "日本語" : "EN"}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-text hover:text-gold transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } border-t border-border-light`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold tracking-wide py-2 border-b border-border-light/50 ${
                    isActive ? "text-gold" : "text-navy-text"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-gold hover:bg-gold-dark text-white font-semibold text-center py-3 rounded-md tracking-wider transition-colors duration-350 shadow-sm flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            {t("getQuote")}
          </Link>
        </div>
      </div>
    </header>
  );
}
