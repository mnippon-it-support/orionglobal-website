"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import { Upload } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const tProd = useTranslations("Products");
  const tServ = useTranslations("Services");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    company: "",
    phone: "",
    product: "",
    service: "",
    message: ""
  });

  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill fields based on query parameters
  useEffect(() => {
    const queryProduct = searchParams.get("product");
    const queryService = searchParams.get("service");

    const mappedProduct = ["vehicles", "trucks", "bikes", "machinery", "heavy", "vanning-shipping"].includes(queryProduct || "")
      ? queryProduct || ""
      : "";

    const mappedService = ["export", "import", "vanning", "shipping", "customs"].includes(queryService || "")
      ? queryService || ""
      : "";

    setFormData((prev) => ({
      ...prev,
      product: mappedProduct,
      service: mappedService
    }));
  }, [searchParams]);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = t("requiredField");
    if (!formData.email.trim()) {
      tempErrors.email = t("requiredField");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t("invalidEmail");
    }
    if (!formData.country.trim()) tempErrors.country = t("requiredField");
    if (!formData.message.trim()) tempErrors.message = t("requiredField");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: t("errFileSize") }));
      } else {
        setFile(selectedFile);
        setErrors((prev) => ({ ...prev, file: "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      if (file) {
        formPayload.append("attachment", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formPayload
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        setErrors((prev) => ({ ...prev, submit: errorData.message || t("errSomethingWrong") }));
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, submit: t("errNetwork") }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-14">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-navy mb-8 pb-3 border-b border-border-light">
        {t("formTitle")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("name")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("placeholderName")}
              className={`border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
                errors.name ? "border-red-500 bg-red-50/10" : "border-gray-300"
              }`}
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("email")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("placeholderEmail")}
              className={`border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
                errors.email ? "border-red-500 bg-red-50/10" : "border-gray-300"
              }`}
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
          </div>
        </div>

        {/* Country and Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="country" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("country")} *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder={t("placeholderCountry")}
              className={`border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
                errors.country ? "border-red-500 bg-red-50/10" : "border-gray-300"
              }`}
            />
            {errors.country && <span className="text-xs text-red-500">{errors.country}</span>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="company" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("company")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder={t("placeholderCompany")}
              className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
            />
          </div>
        </div>

        {/* Phone / WhatsApp and Product Select */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="phone" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("phone")}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t("placeholderPhone")}
              className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="product" className="text-xs font-bold text-navy uppercase tracking-wide">
              {t("product")}
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold bg-white"
            >
              <option value="">{t("optionSelectCategory")}</option>
              <option value="vehicles">{tProd("vehiclesTitle")}</option>
              <option value="trucks">{tProd("trucksTitle")}</option>
              <option value="bikes">{tProd("bikesTitle")}</option>
              <option value="machinery">{tProd("machineryTitle")}</option>
              <option value="heavy">{tProd("heavyTitle")}</option>
              <option value="vanning-shipping">{tProd("vanningShippingTitle")}</option>
              <option value="other">{t("optionOther")}</option>
            </select>
          </div>
        </div>

        {/* Required Service Dropdown */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="service" className="text-xs font-bold text-navy uppercase tracking-wide">
            {t("service")}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold bg-white w-full"
          >
            <option value="">{t("optionSelectService")}</option>
            <option value="export">{tServ("exportTitle")}</option>
            <option value="import">{tServ("importTitle")}</option>
            <option value="vanning">{tServ("vanningTitle")}</option>
            <option value="shipping">{tServ("shippingTitle")}</option>
            <option value="customs">{tServ("customsTitle")}</option>
            <option value="other">{t("optionOtherService")}</option>
          </select>
        </div>

        {/* Message Input */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="message" className="text-xs font-bold text-navy uppercase tracking-wide">
            {t("message")} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("placeholderMessage")}
            className={`border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold resize-y ${
              errors.message ? "border-red-500 bg-red-50/10" : "border-gray-300"
            }`}
          />
          {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
        </div>

        {/* File attachment upload input */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-bold text-navy uppercase tracking-wide">
            {t("attachment")}
          </label>
          <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors relative">
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
            />
            <Upload className="w-8 h-8 text-gold mb-2" />
            <span className="text-base font-semibold text-navy">
              {file ? file.name : t("dragDropText")}
            </span>
            <span className="text-xs text-gray-500 mt-1">{t("attachmentDesc")}</span>
          </div>
          {errors.file && <span className="text-xs text-red-500">{errors.file}</span>}
        </div>

        {/* Submit button */}
        <div className="pt-2">
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-xs mb-4">
              {errors.submit}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 px-10 rounded-md tracking-wider transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-md text-base uppercase"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center leading-relaxed">
          {t("feedbackNotice")}
        </p>
      </form>
    </div>
  );
}
