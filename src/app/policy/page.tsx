"use client";
import { useState, useEffect } from "react";
// import Image from "next/image"; // Unused import, consider removing if not needed
import { useLanguage } from "@/components/language-provider";


interface Content {
  title: string;
  cards: Card[];
}

interface Card {
  title: string;
  text: string;
}

function IndustrialComponent({ content }: { content: Content }) {
  const { title, cards } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-[#355834]">{title}</h1>
        </div>

        <div className="grid gap-8 pb-5">
          {Array.isArray(cards) && cards.length > 0 ? (
            cards.map((card, index) => (
              <div key={index} className="grid gap-4 items-center">
                <div className="relative  overflow-hidden">
                  <h2 className="text-xl font-bold text-[#355834] text-center">
                    {card.title}
                  </h2>
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-gray-800 text-justify leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No cards available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Industrial() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      cards: [
        {
          title: "Collecte et Utilisation des Données",
          text: `Nous collectons des données analytiques via Vercel pour améliorer notre site Web. Ces données sont anonymes et ne sont pas utilisées pour identifier les utilisateurs individuellement. Nous ne vendons pas vos données à des tiers.`,
        },
        {
          title: "Conformité avec la Législation Belge",
          text: `Nous respectons la législation belge en matière de protection des données personnelles, y compris le Règlement Général sur la Protection des Données (RGPD).`,
        },
        {
          title: "Droits des Utilisateurs",
          text: `Vous avez le droit d'accéder à vos données personnelles, de les corriger, de demander leur suppression ou de limiter leur traitement. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : spl@solarstock.be.`,
        },
        {
          title: "Sécurité des Données",
          text: `Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.`,
        },
        {
          title: "Modifications de la Politique de Confidentialité",
          text: `Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page.`,
        },
      ]
    },
    nl: {
      title: "Privacybeleid",
      cards: [
        {
          title: "Verzameling en Gebruik van Gegevens",
          text: `We verzamelen analytische gegevens via Vercel om onze website te verbeteren. Deze gegevens zijn anoniem en worden niet gebruikt om gebruikers individueel te identificeren. We verkopen uw gegevens niet aan derden.`,
        },
        {
          title: "Naleving van de Belgische Wetgeving",
          text: `We respecteren de Belgische wetgeving inzake gegevensbescherming, inclusief de Algemene Verordening Gegevensbescherming (AVG).`,
        },
        {
          title: "Rechten van Gebruikers",
          text: `U heeft het recht om uw persoonlijke gegevens in te zien, te corrigeren, te laten verwijderen of de verwerking ervan te beperken. Om deze rechten uit te oefenen, kunt u contact met ons opnemen via het volgende e-mailadres: spl@solarstock.be.`,
        },
        {
          title: "Gegevensbeveiliging",
          text: `We nemen passende beveiligingsmaatregelen om uw persoonlijke gegevens te beschermen tegen ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging.`,
        },
        {
          title: "Wijzigingen in het Privacybeleid",
          text: `We kunnen dit privacybeleid van tijd tot tijd bijwerken. Eventuele wijzigingen worden op deze pagina gepubliceerd.`,
        },
      ]
    }
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return <IndustrialComponent content={currentContent} />;
}
