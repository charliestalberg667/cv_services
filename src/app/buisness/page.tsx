"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

interface Content {
  heroTitle: string;
  title: string;
  subtitle: string;
  cards: Card[];
  cta: string;
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
  const { title, subtitle, cards, cta } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-8xl font-bold mb-2 text-[#355834]">{title}</h1>
          <p className=" text-[#337A3B] text-xl">{subtitle}</p>
        </div>

        <div className="grid gap-8 pb-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`grid  md:grid-cols-2 gap-4 items-center ${
                index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    {card.video ? (
                      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                        <source src={card.video} type="video/mp4" />
                      </video>
                    ) : card.gif ? (
                      <Image
                        src={card.gif}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                      />
                    ) : (
                      <Image
                        src={card.image||"/public/favicon.png"}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    )}
                  </div>
                  <div className="flex flex-col h-full justify-between md:px-4 py-8 ">
                    <h2 className="text-3xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                    <p className=" text-gray-700 leading-relaxed text-justify">
                      {card.description}
                    </p>
                    <div className="flex mt-4 justify-center ">
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
                </>
              ) : (
                <>
                  <div className="flex flex-col h-full justify-between md:px-4 py-8 ">
                    <h2 className="text-3xl font-bold text-center text-[#355834] ">
                      {card.title}
                    </h2>
                      <p className="text-gray-700 text-justify leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex mt-4 justify-center">
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
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    {card.video ? (
                      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                        <source src={card.video} type="video/mp4" />
                      </video>
                    ) : card.gif ? (
                      <Image
                        src={card.gif}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                      />
                    ) : ( 
                      <Image
                        src={card.image||"/public/favicon.png  "}
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    )}
                  </div>
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
  const { title, subtitle, cards, cta } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-4xl font-bold text-[#355834] ">{title}</h1>
          <p className="text-lg text-[#337A3B]">{subtitle}</p>
        </div>

        <div className="grid gap-8 pb-5">
          {cards.map((card, index) => (
            <div key={index} className="grid gap-4 items-center">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Link href={card.link}>
                {card.video ? (
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : card.gif ? (
                  <>
                    <Image
                      src={card.gif}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
                      <h2 className="text-xl font-bold text-white text-center text-white">
                        {card.title}
                      </h2>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={card.image||"/public/favicon.png"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
                      <h2 className="text-xl font-bold text-white text-center text-white">
                        {card.title}
                      </h2>
                    </div>
                  </>
                )}
                </Link>
              </div>
              <div className="flex flex-col h-full justify-between md:px-4 py-4">
                <p className="text-gray-700 text-center leading-relaxed">
                  {card.shortDescription}
                </p>
                <div className="flex mt-4 justify-center">
                  <Link href={card.link}>
                    <button
                      type="submit"
                      className="border-2 border-[#355834] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#355834] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
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
            </div>
          ))}
        </div>
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
      heroTitle: "Libérez le potentiel du soleil avec SolarInstall",
      title: "SolarInstall",
      subtitle: "Votre expert en énergie solaire",
      cards: [
        {
          title: "Systèmes solaires pour immeubles/entreprises",
          description:
            "Optimisez la gestion énergétique de votre immeuble avec nos solutions sur mesure. Nos experts conçoivent et installent des systèmes solaires adaptés à tous les types de toits. Grâce à nos onduleurs intelligents, vous pouvez suivre vos données en temps réel via une application pratique. En plus de l'installation de bornes de recharge, nous offrons des services de maintenance et de nettoyage pour garantir des performances optimales. Favorisez une énergie verte pour tous les résidents.",
          shortDescription:
            "Optimisez la gestion énergétique de votre immeuble avec nos solutions sur mesure.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Systèmes solaires pour l'industrie",
          description:
            "Boostez la productivité énergétique de votre installation industrielle grâce à nos solutions sur mesure. Nous concevons des systèmes adaptés à vos besoins spécifiques, intégrant des onduleurs intelligents pour une surveillance en temps réel via une application. En complément, nous installons des bornes de recharge et assurons l'entretien de vos panneaux solaires. Ensemble, nous bâtissons un avenir énergétique durable pour votre industrie.",
          shortDescription:
            "Boostez la productivité énergétique de votre installation industrielle.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "En savoir plus",
    },
    nl: {
      heroTitle: "Ontketen de kracht van de zon met SolarInstall",
      title: "SolarInstall",
      subtitle: "Uw specialist in zonne-energie",
      cards: [
        {
          title: "Zonnepanelen voor flatgebouwen en bedrijven",
          description:
            "Verbeter het energiebeheer van uw flatgebouw met onze op maat gemaakte oplossingen. Wij ontwerpen en installeren zonne-installaties op elk type dak. Onze slimme omvormers maken realtime monitoring mogelijk via een handige app. Bovendien installeren we laadpalen en bieden we onderhouds- en reinigingsservices om de prestaties te garanderen. Samen creëren we een duurzame toekomst voor alle bewoners.",
          shortDescription:
            "Verbeter het energiebeheer van uw flatgebouw met onze zonne-oplossingen.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Zonne-installaties voor industrie",
          description:
            "Verhoog de efficiëntie van uw industriële energiebeheer met onze oplossingen op maat. Wij ontwerpen systemen volgens uw behoeften en integreren slimme omvormers voor realtime monitoring via een app. Onze diensten omvatten ook de installatie van laadpalen en het onderhoud van zonnepanelen. Samen werken we aan een duurzame energievoorziening voor uw industrie.",
          shortDescription:
            "Verhoog de efficiëntie van uw industriële energiebeheer met onze oplossingen.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "Meer weten",
    },
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <HomeDesktop content={currentContent} />
  ) : (
    <HomeMobile content={currentContent} />
  );
}
