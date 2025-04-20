"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { FaSun, FaUsers, FaAward, FaLeaf } from "react-icons/fa"; // Import icons from react-icons

interface Content {
  cta: string;
  title: string;
  cards: Card[];
  values: string;
  intro: string;
  valuesItem: ValueItem[]; // Corrected to match the data structure
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
  const { cards, cta, title, values, valuesItem, intro } = content;
  return (
    <div id="content-section" className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <div className=" grid gap-20 mx-7 bg-white p-4 rounded-lg shadow-[0_0px_25px_rgba(0,_0,_0,_0.1)]">
          {/* First Image with Filter and Text */}
          <div className="relative h-[800px] rounded-lg overflow-hidden">
            <Image
              src={"/images/fond.jpg"}
              alt={"fond"}
              fill
              className="object-cover"
              priority
              loading="eager"
            />
            {/* Overlay Filter */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* Text on Top */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h1 className="text-8xl mb-4">{title}</h1>
              <h3 className="text-2xl">{intro}</h3>
            </div>
          </div>

          {/* Values Section */}
          <h2 className="text-4xl font-semibold text-center">{values}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {valuesItem.map((item, index) => (
    <div
      key={index}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-[0_0px_25px_rgba(0,_0,_0,_0.1)] text-center transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500 hover:shadow-[0_0px_35px_rgba(0,_0,_0,_0.1)]"
    >
      <item.icon className="w-12 h-12 mx-auto mb-4 text-[#47864b] hover:text-blue-500" /> {/* Render the icon */}
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))}
</div>

          {/* Cards Section */}
        </div>
        <div className="grid gap-20 mx-7 bg-white p-4 rounded-lg shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] my-8">
         {cards.map((card, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-4 items-center ${
                index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <Link href={card.link}>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
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
                  <div className="flex flex-col h-full justify-between md:px-4 py-8">
                    <h2 className="text-3xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {card.description}
                    </p>
                    <Link href={card.link}>
                      <button
                        type="submit"
                        className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
                      >
                        {cta}
                        <svg
                          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col h-full justify-between md:px-4 py-8">
                    <h2 className="text-3xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {card.description}
                    </p>
                    <Link href={card.link}>
                      <button
                        type="submit"
                        className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
                      >
                        {cta}
                        <svg
                          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            className="fill-gray-800 group-hover:fill-gray-800"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                  <Link href={card.link}>
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeMobile({ content }: { content: Content }) {
  const { cards, cta, title, values, valuesItem } = content;

  return (
    <div id="content-section" className="container mx-auto px-4">
      <div className="grid gap-8 pb-5">
        {/* First Image with Filter and Text */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
        <Image
  src="/images/fond.jpg"
  alt="fond"
  fill
  className="object-cover"
  priority
  loading="eager"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          {/* Overlay Filter */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          {/* Text on Top */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h1 className="text-4xl mb-4">{title}</h1>
          </div>
        </div>

        {/* Values Section */}
        <h2 className="text-3xl font-semibold text-center">{values}</h2>
        <div className="grid grid-cols-2 gap-4"> {/* Grille 2x2 */}
          {valuesItem.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-[0_0px_25px_rgba(0,_0,_0,_0.1)] text-center transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500 hover:shadow-[0_0px_35px_rgba(0,_0,_0,_0.1)]"
            >
              <item.icon className="w-10 h-10 mx-auto mb-2 text-[#47864b] hover:text-blue-500" /> {/* Taille réduite des icônes */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p> {/* Texte plus petit */}
            </div>
          ))}
        </div>

        {/* Cards Section */}
        {cards.map((card, index) => (
          <div key={index} className="grid gap-4 items-center">
            <Link href={card.link}>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
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
            <div className="flex flex-col h-full gap-8 justify-between md:px-4 py-4">
              <h2 className="text-3xl font-bold text-center text-[#355834]">
                {card.title}
              </h2>
              <p className="text-gray-700 text-center leading-relaxed">
                {card.shortDescription}
              </p>
              <Link href={card.link}>
                <button
                  type="submit"
                  className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
                >
                  {cta}
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
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
      intro: "Chez SolarInstall, nous rendons l’énergie solaire accessible à tous",
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
      title: "Ontketen de kracht van de zon met SolarInstall",
      intro: "Bij SolarInstall maken we zonne-energie toegankelijk voor iedereen",
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