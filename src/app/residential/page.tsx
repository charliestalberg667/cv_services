"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { PowerCTA, PowerCTAMobile } from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
  shortDescription: string;
  youtube?: string;
  image?: string;
  video?: string;
  gif?: string;
}

function ResidentialDesktop({ content }: { content: Content }) {
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

const ResidentialMobile = ({ content }: { content: Content }) => {
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
                      </>
                    )}
                  </div>
                  <div className="flex flex-col h-full justify-between ">
                    <h2 className="text-xl m-4 font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                    <p className="text-gray-800 mx-4 text-center leading-relaxed">
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
};

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
      subtitle: "Transformez  votre maison en source d'énergie propre et économique",
      cards: [
        {
          title: "Expertise en Installation Solaire",
          description: "Notre équipe certifiée optimise l'installation de vos panneaux solaires en effectuant une analyse approfondie de votre toiture. Nous prenons en compte l'orientation, l'inclinaison et la structure de votre toit pour maximiser la production d'énergie. Chaque installation est réalisée en respectant l'esthétique de votre maison, avec une attention particulière à la qualité et à la durabilité. Grâce à nos technologies de pointe et à notre expertise, nous garantissons une performance énergétique optimale et une intégration harmonieuse des panneaux solaires.",
          shortDescription: "Notre équipe certifiée optimise l'installation de vos panneaux solaires pour maximiser la production d'énergie tout en respectant l'esthétique de votre maison.",
          image: "/images/examplerooftop.png"
        },
        {
          title: "Monitoring Intelligent",
          description: "Grâce à notre système de monitoring intelligent de dernière génération, vous avez un contrôle total sur votre installation. Notre application mobile vous permet de suivre en temps réel la production d'énergie de vos panneaux solaires, votre consommation d'électricité, ainsi que les économies réalisées. Vous pouvez aussi consulter des rapports détaillés sur les performances de votre système et ajuster votre consommation selon vos besoins. De plus, grâce à l'intelligence artificielle, l'application vous envoie des notifications personnalisées et vous aide à optimiser votre autoconsommation pour maximiser vos économies.",
          shortDescription: "Suivez en temps réel votre production d'énergie, votre consommation et vos économies, avec des notifications personnalisées pour optimiser votre autoconsommation.",
          video: "/images/videoonduleur.mp4"
        },
        {
          title: "Solution de Stockage Avancée",
          description: "Maximisez votre indépendance énergétique avec nos solutions de stockage de dernière génération. Nos batteries intelligentes stockent l'excédent d'énergie solaire que vous produisez pendant la journée et le redistribuent quand vous en avez le plus besoin, notamment en soirée ou pendant les jours nuageux. En combinant notre technologie de stockage avec des algorithmes avancés, votre système anticipe vos besoins énergétiques en fonction de vos habitudes de consommation et ajuste automatiquement l'utilisation de l'énergie stockée. Cela vous permet d'augmenter votre autonomie énergétique tout en réduisant vos factures d'électricité.",
          shortDescription: "Nos batteries intelligentes stockent l'énergie excédentaire pour l'utiliser plus tard, optimisant l'autonomie et les économies selon vos besoins.",
          gif: "/images/battery-animation.gif"
        },
        {
          title: "Mobilité Électrique Intelligente",
          description: "Passez à la mobilité durable avec notre solution de recharge intelligente pour véhicules électriques. Notre borne de recharge connectée s'ajuste automatiquement à la production d'énergie de vos panneaux solaires, vous permettant de recharger votre véhicule aux moments les plus avantageux en termes d'énergie disponible. Vous avez la possibilité de programmer vos sessions de recharge pour éviter les pics de consommation et optimiser les coûts. Notre solution est compatible avec tous les véhicules électriques et offre une recharge rapide et sécurisée, tout en vous permettant de suivre votre consommation énergétique et d'optimiser les coûts grâce à une interface utilisateur intuitive.",
          shortDescription: "Notre borne de recharge connectée s'ajuste à votre production solaire pour une recharge rapide, économique et compatible avec tous les véhicules électriques.",
          image: "/images/charger.jpg"
        }
      ],
      cta: {
        title: "Prêt pour l'énergie solaire?",
        description: "Demandez un devis gratuit et personnalisé dès maintenant. Notre équipe se tient à votre disposition pour vous fournir des conseils adaptés à vos besoins spécifiques et vous aider à faire le meilleur choix pour votre installation solaire.",
        button: "Demander un Devis"
      }
    },
    nl: {
      title: "Residentiële Zonne-installatie", 
      subtitle: "Transformeer uw huis in een bron van schone en betaalbare energie",
      cards: [
        {
          title: "Expertise in Zonne-installaties",
          description: "Ons gecertificeerd team analyseert zorgvuldig uw dak om de ideale zonnepaneelinstallatie te garanderen. We houden rekening met de oriëntatie, hellingshoek en structuur van uw dak om de energieproductie te maximaliseren. Tijdens de installatie wordt niet alleen de technische efficiëntie geoptimaliseerd, maar ook de esthetische integratie van de panelen in uw woning. We gebruiken geavanceerde technologieën en onze expertise om ervoor te zorgen dat de zonnepanelen op een duurzame en esthetisch verantwoorde manier worden geïnstalleerd, waardoor ze perfect in de architectuur van uw huis passen.",
          shortDescription: "Ons gecertificeerd team optimaliseert de zonnepaneelinstallatie om de energieproductie te maximaliseren, met respect voor de architectuur van uw huis.",
          image: "/images/examplerooftop.png"
        },
        {
          title: "Intelligente Monitoring",
          description: "Met ons geavanceerde monitoring systeem heeft u volledige controle over uw zonne-installatie. Via onze app kunt u in real-time de zonne-energieproductie, het elektriciteitsverbruik en de gerealiseerde besparingen volgen. De app biedt gedetailleerde rapporten over de prestaties van uw systeem en helpt u bij het optimaliseren van uw verbruik door middel van kunstmatige intelligentie. U ontvangt gepersonaliseerde meldingen en kunt uw eigen verbruik instellen om maximale besparingen te realiseren, waardoor u zowel uw energieverbruik als de impact op het milieu kunt verbeteren.",
          shortDescription: "Volg in real-time uw energieproductie, verbruik en besparingen, en optimaliseer uw verbruik dankzij gepersonaliseerde meldingen en AI-algoritmes.",
          video: "/images/videoonduleur.mp4"
        },
        {
          title: "Geavanceerde Opslagoplossing",
          description: "Verhoog uw energieonafhankelijkheid met onze geavanceerde opslagoplossingen. Onze slimme batterijen slaan overtollige zonne-energie op die overdag wordt geproduceerd, zodat u deze later kunt gebruiken wanneer de zon niet schijnt. Het systeem past zich aan uw energiebehoeften aan en zorgt ervoor dat uw opgeslagen energie op de meest efficiënte manier wordt ingezet. Dit geeft u maximale autonomie en verlaagt tegelijkertijd uw energiekosten. Onze technologie zorgt ervoor dat uw systeem volledig geoptimaliseerd wordt voor uw specifieke verbruiksbehoeften, waardoor u kunt profiteren van aanzienlijke besparingen.",
          shortDescription: "Onze slimme batterijen slaan overtollige zonne-energie op en optimaliseren het gebruik ervan voor maximale autonomie en besparingen.",
          gif: "/images/battery-animation.gif"
        },
        {
          title: "Slimme Elektrische Mobiliteit",
          description: "Stap over op duurzame mobiliteit met onze slimme laadoplossingen voor elektrische voertuigen. Onze laadstations passen zich automatisch aan uw zonne-energieproductie aan, zodat u uw voertuig oplaadt wanneer er voldoende energie beschikbaar is. Dit maakt het mogelijk om uw voertuig op een kostenbesparende en energie-efficiënte manier op te laden. Onze oplossingen zijn compatibel met alle elektrische voertuigen en bieden een intuïtieve interface waarmee u oplaadbeurten kunt plannen en uw verbruik kunt volgen, zodat u altijd kunt profiteren van de meest voordelige oplaadtijden.",
          shortDescription: "Onze slimme laadoplossing past zich automatisch aan uw zonne-energieproductie aan voor een snelle en kostenefficiënte oplading van uw elektrische voertuig.",
          image: "/images/charger.jpg"
        }
      ],
      cta: {
        title: "Klaar voor zonne-energie?",
        description: "Vraag nu een gratis en persoonlijke offerte aan. Onze experts staan voor u klaar om u te helpen met het kiezen van de beste zonne-installatie voor uw situatie.",
        button: "Contacteer ons"
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
