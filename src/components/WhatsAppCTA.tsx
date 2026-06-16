"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatsAppCTA() {
  const t = useTranslations("WhatsApp");
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling down slightly or after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Automatically trigger tooltip after another small delay
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(tooltipTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="bg-white border border-border-warm text-navy-text px-4 py-3 rounded-lg shadow-xl text-xs max-w-[240px] flex flex-col relative animate-fade-in transition-all duration-350 mr-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <span className="font-bold text-[13px] text-navy mb-1">{t("chat")}</span>
          <span className="text-gray-500 leading-normal mb-2">{t("online")}</span>
          <a
            href="https://wa.me/959123456789" // Mock number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-center font-bold py-1.5 px-3 rounded text-[11px] transition-colors duration-250 cursor-pointer"
          >
            {t("openWhatsApp")}
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/959123456789" // Mock number
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 relative group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        {/* Subtle background pulsing animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:animate-none"></span>
        
        {/* Notification badge dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>

        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-350 group-hover:scale-110" fill="currentColor" />
      </a>
    </div>
  );
}
