"use client";

import { useLanguage } from "@/components/language-provider";
import { Sun, Users, Award, Leaf } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "À Propos de SolarInstall",
      description: "Votre partenaire de confiance pour l'énergie solaire",
      mission: "Notre mission",
      missionText:
        "Chez SolarInstall, notre mission est de rendre l'énergie solaire accessible à tous. Nous nous engageons à fournir des solutions d'énergie solaire de haute qualité et durables pour les particuliers et les entreprises.",
      experience: "Notre expérience",
      experienceText:
        "Avec plus de 10 ans d'expérience dans le domaine de l'énergie solaire, notre équipe d'experts qualifiés a installé avec succès des milliers de systèmes solaires à travers le pays.",
      commitment: "Notre engagement",
      commitmentText:
        "Nous nous engageons à utiliser les meilleures pratiques de l'industrie et les technologies les plus récentes pour garantir que chaque installation est optimisée pour une efficacité et une durabilité maximales.",
      values: "Nos valeurs",
      valuesItems: [
        {
          title: "Innovation",
          description:
            "Nous restons à la pointe de la technologie solaire pour offrir les meilleures solutions à nos clients.",
          icon: Sun,
        },
        {
          title: "Expertise",
          description:
            "Notre équipe hautement qualifiée garantit une installation et un service de qualité supérieure.",
          icon: Users,
        },
        {
          title: "Qualité",
          description:
            "Nous n'utilisons que des composants et des matériaux de la plus haute qualité pour nos installations.",
          icon: Award,
        },
        {
          title: "Durabilité",
          description:
            "Notre engagement envers l'environnement guide chacune de nos actions et décisions.",
          icon: Leaf,
        },
      ],
      stats: {
        title: "SolarInstall en chiffres",
        items: [
          { value: "10k+", label: "Installations réalisées" },
          { value: "50MW+", label: "Capacité totale installée" },
          { value: "100%", label: "Taux de satisfaction client" },
          {
            value: "30%",
            label: "Économies moyennes sur les factures d'électricité",
          },
        ],
      },
      teamCaption: "Notre équipe dévouée",
    },
    nl: {
      title: "Over SolarInstall",
      description: "Uw betrouwbare partner voor zonne-energie",
      mission: "Onze missie",
      missionText:
        "Bij SolarInstall is onze missie om zonne-energie toegankelijk te maken voor iedereen. We zetten ons in om hoogwaardige en duurzame zonne-energieoplossingen te leveren voor particulieren en bedrijven.",
      experience: "Onze ervaring",
      experienceText:
        "Met meer dan 10 jaar ervaring in de zonne-energiesector heeft ons team van gekwalificeerde experts met succes duizenden zonne-energiesystemen door het hele land geïnstalleerd.",
      commitment: "Onze toewijding",
      commitmentText:
        "We zetten ons in om de beste praktijken in de industrie en de nieuwste technologieën te gebruiken om ervoor te zorgen dat elke installatie is geoptimaliseerd voor maximale efficiëntie en duurzaamheid.",
      values: "Onze waarden",
      valuesItems: [
        {
          title: "Innovatie",
          description:
            "We blijven voorop lopen in zonne-technologie om de beste oplossingen aan onze klanten te bieden.",
          icon: Sun,
        },
        {
          title: "Expertise",
          description:
            "Ons hoogopgeleide team zorgt voor installatie en service van topkwaliteit.",
          icon: Users,
        },
        {
          title: "Kwaliteit",
          description:
            "We gebruiken alleen componenten en materialen van de hoogste kwaliteit voor onze installaties.",
          icon: Award,
        },
        {
          title: "Duurzaamheid",
          description:
            "Onze toewijding aan het milieu stuurt al onze acties en beslissingen.",
          icon: Leaf,
        },
      ],
      stats: {
        title: "SolarInstall in cijfers",
        items: [
          { value: "10k+", label: "Voltooide installaties" },
          { value: "50MW+", label: "Totale geïnstalleerde capaciteit" },
          { value: "99%", label: "Klanttevredenheid" },
          {
            value: "30%",
            label: "Gemiddelde besparingen op elektriciteitsrekeningen",
          },
        ],
      },
      teamCaption: "Ons toegewijde team",
    },
  };

  const {
    title,
    description,
    mission,
    missionText,
    experience,
    experienceText,
    commitment,
    commitmentText,
    values,
    valuesItems,
    stats,
    teamCaption,
  } = content[language];

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-6 text-center text-primary">
          {title}
        </h1>
        <p className="text-xl mb-16 text-center max-w-3xl mx-auto text-muted-foreground">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Sun className="w-6 h-6 mr-2 text-yellow-500" />
              <h3 className="text-xl font-semibold">{mission}</h3>
            </div>
            <p>{missionText}</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 mr-2 text-yellow-500" />
              <h3 className="text-xl font-semibold">{experience}</h3>
            </div>
            <p>{experienceText}</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              <h3 className="text-xl font-semibold">{commitment}</h3>
            </div>
            <p>{commitmentText}</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-8 text-center">{values}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valuesItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-16">
          <h3 className="text-center text-xl font-semibold mb-4">
            {stats.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.items.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-yellow-500">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/solar-team.jpg"
            alt="SolarInstall Team"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl font-semibold">{teamCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
