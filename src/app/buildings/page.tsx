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
}

interface CTA {
  title: string;
  description: string;
  button: string;
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
            className={`grid md:grid-cols-2 items-center shadow-[0_5px_12px_rgba(0,_0,_0,_0.05)] bg-white  rounded-lg ${
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
                    {card.subtitle && (
                      <h3 className="text-xl text-center text-[#43964c]">
                        {card.subtitle}
                      </h3>
                    )}
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
                    {card.subtitle && (
                      <h3 className="text-xl text-center text-[#43964c]">
                        {card.subtitle}
                      </h3>
                    )}
                  </div>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
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
  const { title, subtitle, cards } = content;

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
                    <h2 className="text-xl font-bold text-[#355834] text-center">
                      {card.title}
                    </h2>
                  </>
                )}
              </div>
              <div className="flex flex-col h-full justify-between ">
              <h2 className="text-xl my-4 font-bold text-[#355834] text-center">
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

export default function Buildings() {
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
      title: "Immeubles ou Entreprises",
      subtitle: "Expertise en installation pour immeubles/buisness",
      cards: [
        {
          title: "Expertise en installation pour immeubles/business",
          subtitle: "De appartement à appartement ou copropriété avec partage d'énergie",
          description: "Nous offrons des solutions sur mesure pour l'installation de panneaux solaires dans les immeubles et entreprises. Que ce soit pour des installations individuelles par appartement ou des systèmes partagés en copropriété, notre expertise garantit une intégration optimale et une production d'énergie maximale. Profitez d'une transition énergétique efficace et économique grâce à nos technologies avancées et à notre accompagnement personnalisé.",
          shortDescription: "Nous offrons des solutions sur mesure pour l'installation de panneaux solaires dans les immeubles et entreprises. Que ce soit pour des installations individuelles par appartement ou des systèmes partagés en copropriété, notre expertise garantit une intégration optimale et une production d'énergie maximale.",
          image: "/images/installation_immeuble.jpg",
        },
        {
          title: "Tous types de toitures",
          subtitle: "Appartement par appartement ou copropriété avec partage d'énergie",
          description:
            "Nos experts installent des panneaux solaires sur tous types de toits, qu'ils soient plats, inclinés ou de forme complexe. Grâce à des technologies adaptées, nous garantissons une intégration optimale sans compromettre l'intégrité de votre toiture. De l'étude de faisabilité à la mise en service, nous vous offrons une solution clé en main, assurant performance et durabilité",
          shortDescription: "Nos experts installent des panneaux solaires sur tous types de toits, qu'ils soient plats, inclinés ou de forme complexe. Grâce à des technologies adaptées, nous garantissons une intégration optimale sans compromettre l'intégrité de votre toiture.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Partage d'énergie Brugel",
          subtitle: "Partage d'énergie pour une meilleure efficacité",
          description:
            "Découvrez comment le partage d'énergie peut améliorer l'efficacité énergétique de votre immeuble ou entreprise. Grâce à notre expertise, nous vous aidons à maximiser l'utilisation de l'énergie solaire produite sur place, réduisant ainsi vos coûts énergétiques et votre empreinte carbone.",
          shortDescription: "Découvrez comment le partage d'énergie peut améliorer l'efficacité énergétique de votre immeuble ou entreprise. Grâce à notre expertise, nous vous aidons à maximiser l'utilisation de l'énergie solaire produite sur place.",
          youtube: "izsnxKWk61M",
        },
        {
          title: "Nex Chargeur Voiture",
          subtitle: "Chargez votre véhicule électrique en toute simplicité",
          description:
            "Le Nex Chargeur Voiture est une borne de recharge intelligente et universelle, compatible avec tous les véhicules électriques et hybrides rechargeables. Doté d'un système de gestion dynamique de la charge, il optimise la distribution de l'énergie tout en réduisant les coûts. Grâce à son intégration avec la plateforme NEBULA CMS, il permet une surveillance en temps réel, une gestion des utilisateurs via carte RFID et un contrôle avancé des tarifs. Son compteur MID certifié garantit une facturation fiable, sans frais cachés. Facile à installer et évolutif, il s’intègre parfaitement aux infrastructures domestiques et semi-publiques, offrant une recharge rapide, sécurisée et efficace.",
          shortDescription:
            "Borne de recharge intelligente avec gestion dynamique de la charge, suivi en temps réel, contrôle des tarifs et compatibilité universelle pour véhicules électriques et hybrides. Facturation fiable avec compteur MID certifié.",
          image: "/images/chargeur_voiture_2.jpg",
        },
      ],
      cta: {
        title: "Plus d'informations",
        description:
          "Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet d'installation solaire. Ensemble, construisons un avenir plus vert et plus économique.",
        button: "Contact",
      },
    },
    nl: {
      title: "Immeubles of Bedrijven",
      subtitle: "Expertise in installatie voor gebouwen/bedrijven",
      cards: [
        {
          title: "Expertise in installatie voor gebouwen/bedrijven",
          subtitle: "Van appartement tot appartement of mede-eigendom met energiedeling",
          description: "Wij bieden op maat gemaakte oplossingen voor de installatie van zonnepanelen in gebouwen en bedrijven. Of het nu gaat om individuele installaties per appartement of gedeelde systemen binnen een mede-eigendom, onze expertise garandeert een optimale integratie en maximale energieopbrengst. Profiteer van een efficiënte en kosteneffectieve energietransitie dankzij onze geavanceerde technologieën en persoonlijke begeleiding.",
          shortDescription: "Wij bieden op maat gemaakte oplossingen voor de installatie van zonnepanelen in gebouwen en bedrijven. Of het nu gaat om individuele installaties per appartement of gedeelde systemen binnen een mede-eigendom, onze expertise garandeert een optimale integratie en maximale energieopbrengst.",
          image: "/images/installation_immeuble.jpg",
        },
        {
          title: "Alle soorten daken",
          subtitle: "Appartement per appartement of mede-eigendom met energiedeling",
          description:
            "Onze experts installeren zonnepanelen op elk type dak. Of u nu een plat, schuin of complex dak heeft, wij hebben de oplossing die bij uw situatie past. Wij maken gebruik van geavanceerde technologieën om een perfecte en esthetische integratie te garanderen, terwijl we de energieproductie maximaliseren. Ons gekwalificeerde team zorgt voor een snelle en efficiënte installatie, met minimale verstoring voor de bewoners van het gebouw. Vertrouw op onze expertise voor een duurzame en rendabele energieoplossing.",
          shortDescription: "Onze experts installeren zonnepanelen op elk type dak. Of u nu een plat, schuin of complex dak heeft, wij hebben de oplossing die bij uw situatie past. Wij maken gebruik van geavanceerde technologieën om een perfecte en esthetische integratie te garanderen.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Energiedeling Brugel",
          subtitle: "Energiedeling voor een betere efficiëntie",
          description:
            "Ontdek hoe energiedeling de energie-efficiëntie van uw gebouw of bedrijf kan verbeteren. Dankzij onze expertise helpen wij u de op locatie geproduceerde zonne-energie optimaal te benutten, waardoor uw energiekosten en ecologische voetafdruk worden verminderd.",
          shortDescription: "Ontdek hoe energiedeling de energie-efficiëntie van uw gebouw of bedrijf kan verbeteren. Dankzij onze expertise helpen wij u de op locatie geproduceerde zonne-energie optimaal te benutten.",
          youtube: "aJZjv6BL06A",
        },
        {
          title: "Nex Autolader",
          subtitle: "Laad uw elektrische voertuig eenvoudig op",
          description:
            "De Nex Autolader is een intelligente en universele laadoplossing, compatibel met alle elektrische en plug-in hybride voertuigen. Dankzij dynamisch laadbeheer optimaliseert hij de energiedistributie en verlaagt hij de kosten. Met integratie in het NEBULA CMS-platform biedt hij realtime monitoring, gebruikersbeheer via RFID-kaarten en geavanceerde tariefcontrole. De MID-gecertificeerde meter garandeert een betrouwbare en transparante facturatie zonder verborgen kosten. Eenvoudig te installeren en schaalbaar, past hij perfect in zowel particuliere als semi-publieke infrastructuren en biedt hij een snelle, veilige en efficiënte laadervaring.",
          shortDescription:
            "Slimme laadpaal met dynamisch laadbeheer, realtime monitoring, tariefcontrole en universele compatibiliteit voor elektrische en hybride voertuigen. Betrouwbare facturatie met MID-gecertificeerde meter.",
          image: "/images/chargeur_voiture_2.jpg",
        },
      ],
      cta: {
        title: "Meer informatie",
        description:
          "Neem contact met ons op voor een gratis en persoonlijke offerte. Ons team van experts staat klaar om al uw vragen te beantwoorden en u te begeleiden bij uw zonne-installatieproject. Samen bouwen we aan een groenere en economischere toekomst.",
        button: "Contact",
      },
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