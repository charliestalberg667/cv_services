"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { PowerCTA, PowerCTAMobile } from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
  cta: CTA;
}

interface Card {
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  image?: string;
  video?: string;
  gif?: string;
  youtube?: string;
  features?: Feature[];
}

interface CTA {
  title: string;
  description: string;
  button: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

function ResidentialDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-[#17158A]">{title}</h1>
        <p className="text-xl text-[#5350fa]">{subtitle}</p>
      </div>

      <div className="grid gap-16 pb-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] overflow-hidden"
          >
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5 relative h-[400px] md:h-[600px] overflow-hidden">
                {card.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={card.image || "/public/favicon.png"}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
              <div className="md:col-span-7 flex flex-col justify-between p-8 md:p-10">
                <div>
                  <h2 className="text-3xl font-bold text-[#17158A] mb-6">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-justify mb-8">
                    {card.description}
                  </p>
                  {card.features && (
                    <div className="grid grid-cols-2 gap-6">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl shadow-sm">
                          <span className="text-3xl">{feature.icon}</span>
                          <div>
                            <h3 className="font-semibold text-[#17158A] mb-1">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <PowerCTA />
      </div>
    </div>
  );
}

function ResidentialMobile({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-[#17158A]">{title}</h1>
          <p className="text-sm text-[#5350fa]">{subtitle}</p>
        </div>

        <div className="grid gap-6 pb-5">
          {cards.map((card, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                {card.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={card.image || "/public/favicon.png"}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#17158A] text-center mb-3">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-700 text-justify leading-relaxed mb-4">
                  {card.shortDescription}
                </p>
                {card.features && (
                  <div className="grid grid-cols-1 gap-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-white p-3 rounded-xl shadow-sm">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h3 className="font-semibold text-sm text-[#17158A] mb-0.5">{feature.title}</h3>
                          <p className="text-xs text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <PowerCTAMobile />
        </div>
      </div>
    </div>
  );
}

export default function Residential() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = {
    fr: {
      title: "Installation Solaire Résidentielle",
      subtitle: "Produisez votre propre énergie verte et réduisez vos factures d'électricité",
      cards: [
        {
          title: "Installation Professionnelle",
          description: "Notre équipe d'experts certifiés réalise une étude complète de votre toiture pour déterminer le meilleur emplacement de vos panneaux solaires. Nous analysons l'orientation, l'inclinaison, les zones d'ombre potentielles et la structure de votre toit pour maximiser votre production d'énergie. L'installation est réalisée dans le respect des normes de sécurité et d'esthétique, avec des panneaux de haute qualité garantissant une performance optimale pendant plus de 25 ans.",
          shortDescription: "Une installation professionnelle par des experts certifiés, avec une étude complète de votre toiture pour maximiser votre production d'énergie.",
          image: "/images/solarinstal.jpg",
          features: [
            {
              icon: "🏠",
              title: "Étude de Toiture",
              description: "Analyse complète de votre toit pour optimiser l'installation"
            },
            {
              icon: "📊",
              title: "Simulation de Production",
              description: "Calcul précis de votre production énergétique annuelle"
            },
            {
              icon: "🔧",
              title: "Installation Certifiée",
              description: "Installation par des experts certifiés et qualifiés"
            },
            {
              icon: "📝",
              title: "Administratif Simplifié",
              description: "Gestion complète des démarches administratives"
            }
          ]
        },
        {
          title: "Recharge de Véhicule Électrique",
          description: "Associez votre installation solaire à une borne de recharge pour véhicule électrique. Notre système intelligent synchronise la recharge de votre véhicule avec votre production solaire, vous permettant de rouler à l'énergie solaire. Programmez vos recharges aux heures les plus ensoleillées et optimisez votre autoconsommation. Compatible avec tous les véhicules électriques, notre solution vous offre une mobilité 100% verte et économique.",
          shortDescription: "Rechargez votre véhicule électrique avec votre énergie solaire grâce à notre borne de recharge intelligente et programmable.",
          image: "/images/ev-charging.jpg",
          features: [
            {
              icon: "⚡",
              title: "Recharge Intelligente",
              description: "Synchronisation automatique avec votre production solaire"
            },
            {
              icon: "📱",
              title: "Contrôle Mobile",
              description: "Gérez vos recharges depuis votre smartphone"
            },
            {
              icon: "🚗",
              title: "Universalité",
              description: "Compatible avec tous les véhicules électriques"
            },
            {
              icon: "💰",
              title: "Économies Garanties",
              description: "Optimisation des coûts de recharge"
            }
          ]
        }
      ],
      cta: {
        title: "Prêt à passer au solaire ?",
        description: "Demandez une étude gratuite et personnalisée de votre projet. Nos experts vous accompagnent dans toutes les étapes, de l'étude initiale à la mise en service de votre installation.",
        button: "Demander une Étude"
      }
    },
    nl: {
      title: "Residentiële Zonne-energie",
      subtitle: "Wees onafhankelijk van het energienet en bespaar op uw elektriciteitsrekening",
      cards: [
        {
          title: "Professionele Installatie",
          description: "Ons gecertificeerd team voert een grondige analyse van uw dak uit om de optimale plaatsing van zonnepanelen te bepalen. We onderzoeken de oriëntatie, hellingshoek, mogelijke schaduwzones en dakstructuur om uw energieproductie te maximaliseren. De installatie gebeurt volgens de hoogste veiligheids- en esthetische normen, met hoogwaardige panelen die meer dan 25 jaar optimaal presteren.",
          shortDescription: "Een professionele installatie door gecertificeerde experts, met een grondige dakanalyse voor maximale energieproductie.",
          image: "/images/solarinstal.jpg",
          features: [
            {
              icon: "🏠",
              title: "Dakanalyse",
              description: "Uitgebreide analyse van uw dak voor optimale installatie"
            },
            {
              icon: "📊",
              title: "Productiesimulatie",
              description: "Nauwkeurige berekening van uw jaarlijkse energieproductie"
            },
            {
              icon: "🔧",
              title: "Gecertificeerde Installatie",
              description: "Installatie door gecertificeerde en gekwalificeerde experts"
            },
            {
              icon: "📝",
              title: "Vereenvoudigde Administratie",
              description: "Volledige afhandeling van administratieve procedures"
            }
          ]
        },
        {
          title: "Elektrische Voertuig Oplading",
          description: "Combineer uw zonne-installatie met een laadpaal voor elektrische voertuigen. Ons slimme systeem synchroniseert het opladen van uw voertuig met uw zonneproductie, zodat u kunt rijden op zonne-energie. Plan uw oplaadbeurten tijdens de zonnigste uren en optimaliseer uw zelfverbruik. Compatibel met alle elektrische voertuigen, biedt onze oplossing u 100% groene en voordelige mobiliteit.",
          shortDescription: "Laad uw elektrische voertuig op met uw zonne-energie via onze slimme en programmeerbare laadpaal.",
          image: "/images/ev-charging.jpg",
            features: [
            {
              icon: "⚡",
              title: "Slim Opladen",
              description: "Automatische synchronisatie met uw zonneproductie"
            },
            {
              icon: "📱",
              title: "Mobiele Bediening",
              description: "Beheer uw oplaadsessies via uw smartphone"
            },
            {
              icon: "🚗",
              title: "Universaliteit",
              description: "Compatibel met alle elektrische voertuigen"
            },
            {
              icon: "💰",
              title: "Gegarandeerde Besparingen",
              description: "Optimalisatie van oplaadkosten"
            }
          ]
        }
      ],
      cta: {
        title: "Klaar voor zonne-energie?",
        description: "Vraag een gratis en persoonlijke studie van uw project aan. Onze experts begeleiden u door alle stappen, van de initiële studie tot de ingebruikname van uw installatie.",
        button: "Vraag een Studie"
      }
    }    
  };    
  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <ResidentialDesktop content={currentContent} />
  ) : (
    <ResidentialMobile content={currentContent} />
  );
}
