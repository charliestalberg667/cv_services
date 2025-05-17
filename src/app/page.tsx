"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { FaSun, FaUsers, FaAward, FaLeaf, FaMapMarkerAlt } from "react-icons/fa"; // Import icons from react-icons

interface Content {
  cta: string;
  title: string;
  cards: Card[];
  values: string;
  intro: string;
  valuesItem: ValueItem[]; // Corrected to match the data structure
  city: string; // Add city to the interface
}

interface ValueItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>; // Icon is a React component
}

interface Card {
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  video?: string;
  gif?: string;
  link: string;
}

function HomeDesktop({ content }: { content: Content }) {
  const { cards, cta, title, values, valuesItem, intro, city } = content;
  return (
    <div id="content-section" className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Content */}
      <div className="relative z-10">
        <div className="grid gap-20 mx-7 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-[0_0px_25px_rgba(0,_0,_0,_0.05)]">
          {/* First Image with Filter and Text */}
          <div className="relative h-[800px] rounded-2xl overflow-hidden group">
            <Image
              src={"/images/fond.jpg"}
              alt={"fond"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              loading="eager"
            />
            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            {/* Text on Top */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-8xl mb-6 font-bold tracking-tight animate-fade-in">{title}</h1>
              <h3 className="text-2xl max-w-2xl opacity-90 animate-fade-in-delay">{intro}</h3>
            </div>
            {/* City Name */}
            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
              <FaMapMarkerAlt className="text-white w-5 h-5" />
              <p className="text-white text-lg font-medium">{city}</p>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#17158A] to-[#2a28b3] bg-clip-text text-transparent">{values}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valuesItem.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-[0_0px_25px_rgba(0,_0,_0,_0.05)] text-center transition-all duration-300 hover:shadow-[0_0px_55px_rgba(0,_0,_100,_0.1)] hover:-translate-y-1"
                >
                  <div className="bg-[#17158A]/5 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-[#17158A]/10 transition-colors duration-300">
                    <item.icon className="w-8 h-8 mx-auto text-[#17158A]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid gap-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <Link href={card.link} className="group">
                      <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        {card.image && (
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        )}
                      </div>
                    </Link>
                    <div className="flex flex-col h-full justify-between md:px-8 py-8">
                      <h2 className="text-4xl font-bold text-[#17158A] mb-6">
                        {card.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        {card.description}
                      </p>
                      <Link href={card.link}>
                        <button
                          type="submit"
                          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out bg-[#17158A] rounded-xl hover:bg-[#2a28b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17158A]"
                        >
                          <span className="mr-2">{cta}</span>
                          <svg
                            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col h-full justify-between md:px-8 py-8">
                      <h2 className="text-4xl font-bold text-[#17158A] mb-6">
                        {card.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        {card.description}
                      </p>
                      <Link href={card.link}>
                        <button
                          type="submit"
                          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out bg-[#17158A] rounded-xl hover:bg-[#2a28b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17158A]"
                        >
                          <span className="mr-2">{cta}</span>
                          <svg
                            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                    <Link href={card.link} className="group">
                      <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        {card.image && (
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        )}
                      </div>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeMobile({ content }: { content: Content }) {
  const { cards, cta, title, values, valuesItem, intro, city } = content;

  return (
    <div id="content-section" className="container mx-auto px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="grid gap-16 pb-5">
        {/* First Image with Filter and Text */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/images/fond.jpg"
            alt="fond"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          {/* Text on Top */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">{title}</h1>
            <p className="text-lg opacity-90">{intro}</p>
          </div>
          {/* City Name */}
          <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
            <FaMapMarkerAlt className="text-white w-4 h-4" />
            <p className="text-white text-base font-medium">{city}</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#17158A] to-[#2a28b3] bg-clip-text text-transparent">{values}</h2>
          <div className="grid grid-cols-2 gap-4">
            {valuesItem.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-[0_0px_25px_rgba(0,_0,_0,_0.05)] text-center"
              >
                <div className="bg-[#17158A]/5 p-3 rounded-full w-12 h-12 mx-auto mb-4">
                  <item.icon className="w-6 h-6 mx-auto text-[#17158A]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        {cards.map((card, index) => (
          <div key={index} className="grid gap-6 items-center mb-16">
            <Link href={card.link}>
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                )}
              </div>
            </Link>
            <div className="flex flex-col h-full gap-6 justify-between px-4 py-4">
              <h2 className="text-3xl font-bold text-[#17158A]">
                {card.title}
              </h2>
              <p className="text-gray-700 text-lg">
                {card.shortDescription}
              </p>
              <Link href={card.link}>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 ease-out bg-[#17158A] rounded-xl hover:bg-[#2a28b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17158A] w-full"
                >
                  <span className="mr-2">{cta}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
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
      title: "Libérez la puissance du soleil",
      intro: "avec cv services, nous rendons l'énergie solaire accessible à tous",
      city: "Halle",
      cards: [
        {
          title: "Solutions solaires pour votre domicile",
          description:
            "Transformez votre maison avec nos solutions solaires personnalisées. Nos experts installent des panneaux solaires adaptés à tous les types de toits et intègrent des onduleurs hybrides avec des fonctionnalités de gestion intelligente. Suivez votre consommation énergétique via une application intuitive. Nous installons également des bornes de recharge et assurons le nettoyage et l'entretien de vos équipements. Réduisez vos factures tout en adoptant une énergie durable.",
          shortDescription:
            "Transformez votre maison avec nos solutions solaires et réduisez vos factures.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
      ],
      values: "Avenire solaire",
      valuesItem: [
        {
          title: "Innovation",
          description:
            "Nous restons à la pointe de la technologie solaire pour offrir les meilleures solutions à nos clients.",
          icon: FaSun, // Use the imported icon component
        },
        {
          title: "Expertise",
          description:
            "Notre équipe hautement qualifiée garantit une installation et un service de qualité supérieure.",
          icon: FaUsers, // Use the imported icon component
        },
        {
          title: "Qualité",
          description:
            "Nous n'utilisons que des composants et des matériaux de la plus haute qualité pour nos installations.",
          icon: FaAward, // Use the imported icon component
        },
        {
          title: "Durabilité",
          description:
            "Notre engagement envers l'environnement guide chacune de nos actions et décisions.",
          icon: FaLeaf, // Use the imported icon component
        },
      ],
      cta: "En savoir plus",
    },
    nl: {
      title: "Ontketen de kracht van de zon met cv services",
      intro: "met cv services maken we zonne-energie toegankelijk voor iedereen",
      city: "Halle",
      cards: [
        {
          title: "Zonne-oplossingen voor thuis",
          description:
            "Haal meer uit uw woning met onze op maat gemaakte zonne-oplossingen. Onze specialisten installeren zonnepanelen op elk type dak en voegen hybride omvormers met slimme functies toe. Uw energieverbruik is eenvoudig te monitoren via een gebruiksvriendelijke app. We installeren laadpalen en verzorgen het onderhoud en de reiniging van uw installatie. Kies voor duurzame energie en lagere energiekosten.",
          shortDescription:
            "Haal meer uit uw woning met onze zonne-oplossingen en lagere energiekosten.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
      ],
      values: "Zonnige toekomst",
      valuesItem: [
        {
          title: "Innovatie",
          description:
            "We blijven voorop lopen in zonne-technologie om de beste oplossingen aan onze klanten te bieden.",
          icon: FaSun, // Use the imported icon component
        },
        {
          title: "Expertise",
          description:
            "Ons hoogopgeleide team zorgt voor installatie en service van topkwaliteit.",
          icon: FaUsers, // Use the imported icon component
        },
        {
          title: "Kwaliteit",
          description:
            "We gebruiken alleen componenten en materialen van de hoogste kwaliteit voor onze installaties.",
          icon: FaAward, // Use the imported icon component
        },
        {
          title: "Duurzaamheid",
          description:
            "Onze toewijding aan het milieu stuurt al onze acties en beslissingen.",
          icon: FaLeaf, // Use the imported icon component
        },
        
      ],
      cta: "Meer weten",
    },
  };

  if (!mounted) return null;

  const currentContent = content[language] || content.fr; // Fallback to French
  return isDesktop ? (
    <HomeDesktop content={currentContent} />
  ) : (
    <HomeMobile content={currentContent} />
  );
}