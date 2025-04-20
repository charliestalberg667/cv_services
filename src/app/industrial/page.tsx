"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import {PowerCTA, PowerCTAMobile} from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  video?: string;
  gif?: string;
  youtube?: string; // Add youtube property
}

function BuildingsDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-[#355834]">{title}</h1>
        <p className="text-xl text-[#43964c]">{subtitle}</p>
      </div>

      <div className="grid gap-8 pb-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center shadow-[0_5px_12px_rgba(0,_0,_0,_0.05)] bg-white rounded-lg ${
              index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative h-[400px] m-4 rounded-lg overflow-hidden">
                  {card.youtube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${card.youtube}`}
                      title={card.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : card.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                    >
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
                      src={card.image || "/public/favicon.png"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
                <div className="flex flex-col h-full justify-between md:px-8 py-8 ">
                  <div>
                    <h2 className="text-2xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col h-full justify-between md:px-8 py-8">
                  <div>
                    <h2 className="text-2xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
                <div className="relative h-[400px] w-[1000] m-4 rounded-lg overflow-hidden">
                  {card.youtube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${card.youtube}`}
                      title={card.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : card.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                    >
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
                      src={card.image || "/public/favicon.png"}
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
        <PowerCTA />
      </div>
    </div>
  );
}

function BuildingsMobile({ content }: { content: Content }) {
  const { title, subtitle, cards} = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-[#355834]">{title}</h1>
          <p className="text-sm text-[#43964c]">{subtitle}</p>
        </div>

        <div className="grid gap-8 pb-5">
          {cards.map((card, index) => (
            <div key={index} className="grid gap-4 items-center shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg">
              <div className="relative h-[220px] rounded-lg overflow-hidden">
                {card.youtube ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${card.youtube}`}
                    title={card.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : card.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : card.gif ? (
                  <>
                    <Image
                      src={card.gif}
                      alt={card.title}
                      layout="fill"
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                    <h2 className="text-xl font-bold text-[#355834] text-center">
                      {card.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <Image
                      src={card.image || "/public/favicon.png"}
                      alt={card.title}
                      layout="fill"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col h-full justify-between ">
                <h2 className="text-xl m-4 font-bold text-center text-[#355834]">
                  {card.title}
                </h2>
                <p className="text-gray-800 mx-4 text-justify leading-relaxed">
                  {card.shortDescription}
                </p>
                <div className="flex mt-4 justify-center">
                  {/* Additional content could go here */}
                </div>
              </div>
            </div>
          ))}
          <PowerCTAMobile />
        </div>
      </div>
    </div>
  );
}

export default function Industrial() {
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
      title: "Installation Industrielle Solaire",
      subtitle: "Des solutions sur mesure pour votre industrie",
      cards: [
        {
          title: "Énergie Solaire Industrielle",
          description: "L’énergie solaire industrielle constitue une alternative fiable, économique et respectueuse de l’environnement aux énergies fossiles. Nos solutions sur mesure s’adaptent aux besoins spécifiques de chaque industrie, garantissant une efficacité optimale. Elles permettent de réduire considérablement les coûts énergétiques tout en assurant une alimentation stable et durable.",
          shortDescription: "Une solution verte et rentable pour répondre aux besoins énergétiques industriels. Nos systèmes garantissent une production efficace tout en réduisant les coûts.",
          image: "/images/industrial-roof.jpg",
        },
        {
          title: "Schémas de Branchement",
          description: "Nos schémas de raccordement assurent une conversion optimale de l’énergie solaire en électricité utilisable. Grâce à des onduleurs haute performance et une intégration intelligente, nous maximisons l’efficacité énergétique. Nos systèmes permettent une connexion fluide au réseau électrique et assurent une gestion efficace des flux d’énergie, optimisant ainsi la distribution et la consommation.",
          shortDescription: "Conception avancée pour des installations photovoltaïques performantes. Optimisation de la conversion et de l’intégration au réseau électrique.",
          image: "/images/shema-solaire.png",
        },
        {
          title: "ESS (Load Balancing)",
          description: "Ons geavanceerde energiebeheersysteem slaat overtollige zonne-energie op en verdeelt deze efficiënt wanneer nodig. Dankzij slimme algoritmen wordt de energiestroom automatisch aangepast aan de vraag, waardoor piekbelastingen beter beheerd worden. Dit systeem vermindert de afhankelijkheid van het net en maximaliseert het eigen verbruik, wat leidt tot lagere energiekosten en een stabielere stroomvoorziening.",
          shortDescription: "Een slimme oplossing die overtollige zonne-energie opslaat en op het juiste moment verdeelt, waardoor piekbelastingen beter beheerd worden en het energieverbruik wordt geoptimaliseerd.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESS (Unload Balancing)",
          description: "Ons systeem voor surplusbeheer herverdeelt opgeslagen zonne-energie tijdens perioden van lage productie. Dankzij geïntegreerde beveiliging voorkomt het energieverliezen en stabiliseert het de stroomvoorziening. Dit zorgt voor een continue, betrouwbare energievoorziening, zelfs bij wisselende zonneproductie en hoge vraag, terwijl de druk op het elektriciteitsnet wordt verminderd.",
          shortDescription: "Een efficiënte oplossing voor surplusbeheer die opgeslagen energie herverdeelt bij lage productie, zodat een stabiele en continue energievoorziening gewaarborgd blijft.",
          image: "/images/EPES233inside.webp",
        },
        {
        title: "EPPS 209",
        description: "L'EPPS 209 est un superchargeur innovant doté d'une batterie haute capacité de 209 kWh. Conçu pour les environnements industriels, il offre une gestion avancée de l’énergie avec une puissance d’entrée de 30 kW et une sortie allant jusqu’à 230 kW. Son couplage AC sans arc DC garantit un fonctionnement sûr et efficace, tandis que son système de refroidissement liquide actif optimise la durabilité et réduit les besoins en maintenance. Idéal pour assurer une alimentation rapide et fiable dans les infrastructures exigeantes.",
        shortDescription: "Superchargeur avec batterie 209 kWh, entrée 30 kW, sortie 230 kW, couplage AC sécurisé et refroidissement liquide pour une performance optimale.",
        image: "/images/epps-209.jpg",
        },
        {
          title: "H143/197",
          description: "Le H143/197 est un onduleur hybride puissant de 60 kW, combiné à une batterie haute capacité de 100 kWh. Conçu pour répondre aux besoins énergétiques les plus exigeants, il assure une alimentation stable et continue, même dans des environnements difficiles. Grâce à une technologie avancée et un système de refroidissement actif, il maintient des performances optimales, réduit les risques de surchauffe et prolonge la durée de vie des équipements. Idéal pour les applications industrielles nécessitant une gestion intelligente de l’énergie et une fiabilité maximale.",
          shortDescription: "Onduleur hybride 60 kW avec batterie 100 kWh, offrant une alimentation stable et une gestion énergétique optimisée, même en conditions extrêmes.",
          image: "/images/EPHS143-197.webp",
        },
        {
          title: "EPPS93-AIO",
          description: "L’EPPS93-AIO est une solution de stockage et de charge d’énergie tout-en-un, offrant six fonctionnalités dans un seul appareil. Il intègre un onduleur solaire, un onduleur de batterie, un système de stockage d’énergie, un chargeur rapide, un chargeur EV et un système de refroidissement liquide. Il permet jusqu’à 60 kW de charge DC et jusqu’à 30 kW de sortie AC, idéal pour des applications hors réseau. Son design robuste avec protection étanche assure une performance fiable dans des conditions difficiles.",
          shortDescription: "L’EPPS93-AIO combine stockage d’énergie, charge rapide et chargeur EV, offrant jusqu’à 60 kW de charge DC et 30 kW de sortie AC. Son design robuste et étanche garantit des performances fiables en environnement difficile.",
          image: "/images/EPPS93-AIO.png",
        },

      ],
    },
    nl: {
      title: "Industriële Zonne-installatie",
      subtitle: "Oplossingen op maat voor uw Industrie",
      cards: [
        {
          title: "Industriële Zonne-energie",
          description: "Industriële zonne-energie biedt een betrouwbaar, kostenefficiënt en milieuvriendelijk alternatief voor traditionele energiebronnen. Onze op maat gemaakte oplossingen zorgen voor maximale efficiëntie en naadloze integratie met bestaande infrastructuur. Door slim energiebeheer helpen we bedrijven hun energiekosten te verlagen en een duurzamere toekomst op te bouwen.",
          shortDescription: "Een groene en voordelige energieoplossing. Onze systemen zorgen voor optimale prestaties en lagere energiekosten.",
          image: "/images/industrial-roof.jpg",
        },
        {
          title: "Aansluitschema's",
          description: "Onze aansluitingsschema’s zijn ontworpen om een optimale omzetting van zonne-energie te garanderen. Door het gebruik van hoogwaardige omvormers en intelligente netintegratie verbeteren we de efficiëntie van grootschalige PV-installaties. Dit resulteert in een stabiele en duurzame energievoorziening met minimale verliezen.",
          shortDescription: "Efficiënte omzetting en integratie in het elektriciteitsnet voor maximale prestaties.",
          image: "/images/shema-solaire.png",
        },
        {
          title: "ESS (Load Balancing)",
          description: "Ons geavanceerde energiebeheersysteem slaat overtollige zonne-energie op en verdeelt deze efficiënt wanneer nodig. Dankzij slimme algoritmen wordt de energiestroom automatisch aangepast aan de vraag, waardoor piekbelastingen beter beheerd worden. Dit systeem vermindert de afhankelijkheid van het net en maximaliseert het eigen verbruik, wat leidt tot lagere energiekosten en een stabielere stroomvoorziening.",
          shortDescription: "Een slimme oplossing die overtollige zonne-energie opslaat en op het juiste moment verdeelt, waardoor piekbelastingen beter beheerd worden en het energieverbruik wordt geoptimaliseerd.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESS (Unload Balancing)",
          description: "Ons systeem voor surplusbeheer herverdeelt opgeslagen zonne-energie tijdens perioden van lage productie. Dankzij geïntegreerde beveiliging voorkomt het energieverliezen en stabiliseert het de stroomvoorziening. Dit zorgt voor een continue, betrouwbare energievoorziening, zelfs bij wisselende zonneproductie en hoge vraag, terwijl de druk op het elektriciteitsnet wordt verminderd.",
          shortDescription: "Een efficiënte oplossing voor surplusbeheer die opgeslagen energie herverdeelt bij lage productie, zodat een stabiele en continue energievoorziening gewaarborgd blijft.",
          image: "/images/EPES233inside.webp",
        },
        {
          title: "EPPS 209",
          description: "De EPPS 209 is een geavanceerde supercharger met een batterijcapaciteit van 209 kWh. Ontworpen voor industriële toepassingen, biedt het een efficiënte energieopslag met een invoer van 30 kW en een uitvoer tot 230 kW. Dankzij de AC-koppeling zonder DC-boog blijft het systeem veilig en betrouwbaar, terwijl de actieve vloeistofkoeling de prestaties optimaliseert en onderhoudskosten minimaliseert. Ideaal voor snelle en stabiele energievoorziening in veeleisende omgevingen.",
          shortDescription: "Supercharger met 209 kWh batterij, 30 kW invoer, 230 kW uitvoer, veilige AC-koppeling en vloeistofkoeling voor maximale prestaties.",
          image: "/images/epps-209.jpg",
        },
        {
          title: "H143/197",
          description: "De H143/197 is een krachtige hybride omvormer van 60 kW, gecombineerd met een batterij van 100 kWh met hoge capaciteit. Ontworpen voor veeleisende industriële toepassingen, biedt het een stabiele en continue energievoorziening, zelfs in zware omstandigheden. Dankzij geavanceerde technologie en een actief koelsysteem behoudt het optimale prestaties, voorkomt het oververhitting en verlengt het de levensduur van de apparatuur. Ideaal voor bedrijven die een intelligente energiebeheeroplossing en maximale betrouwbaarheid nodig hebben.",
          shortDescription: "Hybride omvormer van 60 kW met 100 kWh batterij voor een stabiele stroomvoorziening en geoptimaliseerd energiebeheer, zelfs onder extreme omstandigheden.",
          image: "/images/EPHS143-197.webp",
        },
        {
          title: "EPPS93-AIO",
          description: "De EPPS93-AIO is een alles-in-één energieopslag- en oplaadoplossing die zes functionaliteiten in één apparaat biedt. Het integreert een zonne-omvormer, een batterijomvormer, een energieopslagsysteem, een snellader, een EV-oplader en een vloeistofkoelsysteem. Het ondersteunt tot 60 kW DC-oplaadvermogen en tot 30 kW AC-uitgang, ideaal voor off-grid toepassingen. Het robuuste ontwerp met waterdichte bescherming zorgt voor betrouwbare prestaties onder moeilijke omstandigheden.",
          shortDescription: "De EPPS93-AIO combineert energieopslag, snelladen en EV-oplading, met tot 60 kW DC-oplaadvermogen en 30 kW AC-uitgang. Het robuuste en waterdichte ontwerp garandeert betrouwbare prestaties in moeilijke omgevingen.",
          image: "/images/EPPS93-AIO.png"
        }
      ],
    },
  };
  
  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <BuildingsDesktop content={currentContent} />
  ) : (
    <BuildingsMobile content={currentContent} />
  );
}