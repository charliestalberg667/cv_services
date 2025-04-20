"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";
import { BrandsScroll } from "@/components/brands-scroll";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      copyright: "SolarInstall. Tous droits réservés.",
      conditions: "Conditions générales de vente",
      privacy: "Politique de confidentialité",
      contact: "Contactez-nous",
    },
    nl: {
      copyright: "SolarInstall. Alle rechten voorbehouden.",
      conditions: "Algemene Verkoopsvoorwaarden",
      privacy: "Privacybeleid",
      contact: "Contacteer ons",
    },
  };

  const { copyright, conditions, privacy, contact } = content[language];

  return (
    <>
      <BrandsScroll />
      <footer className="py-6 bg-[#ededed] text-[#14281D] p-6">
        <div className="container mx-auto text-center px-4">
          <nav className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="/conditions" className="hover:underline" aria-label="Conditions générales de vente">
              {conditions}
            </a>
            <a href="/policy" className="hover:underline" aria-label="Politique de confidentialité">
              {privacy}
            </a>
            <a href="/contact" className="hover:underline" aria-label="Contactez-nous">
              {contact}
            </a>
          </nav>
          <p className="text-sm md:text-base mt-16">
            &copy; {new Date().getFullYear()} {copyright}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;