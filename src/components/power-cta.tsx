"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

interface PowerCTAContent {
  makeAppointment: string;
  exploreShowroom: string;
  inverterText: string;
  batteryText: string;
  moreCapacityText: string;
  exampleButton: string;
  industryButton: string;
  transformText: {
    part1: string;
    part2: string;
  };
}

const content: Record<string, PowerCTAContent> = {
  nl: {
    makeAppointment: "Maak een afspraak",
    exploreShowroom: "Ontdek de showroom",
    inverterText: "omvormers tot 200 kW",
    batteryText: "batterijen tot 250 kWh",
    moreCapacityText:
      "Als u meer vermogen nodig heeft, schakelt u over naar de industriële modus.",
    exampleButton: "Voorbeeld installatie",
    industryButton: "Industrie",
    transformText: {
      part1: "Bekijk hoe onze zonne-installaties",
      part2: "woningen transformeren!",
    },
  },
  fr: {
    makeAppointment: "Prendre rendez-vous",
    exploreShowroom: "Explorez le showroom",
    inverterText: "onduleurs jusqu'à 200 kW",
    batteryText: "batteries jusqu'à 250 kWh",
    moreCapacityText:
      "Si vous avez besoin de plus de puissance, passez en mode industriel.",
    exampleButton: "Installation exemple",
    industryButton: "Industrie",
    transformText: {
      part1: "Découvrez comment nos installations solaires",
      part2: "transforment les maisons!",
    },
  },
};

export function PowerCTAMobile() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className=" max-h-196 items-center justify-center mt-8 mb-8 space-y-4">
      <div>
        <Link href="/appointment">
          <button
            type="submit"
            className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
          >
            {t.makeAppointment}
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
      <div className="mt-4">
        <Link href="https://www.google.be/maps/place/SolarStock/@50.780509,4.2721875,46m/data=!3m1!1e3!4m6!3m5!1s0x47c3c723c65cb223:0x53cd5c047a55f3a6!8m2!3d50.7806139!4d4.2723163!16s%2Fg%2F11kjjtdc83?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D">
          <button
            type="submit"
            className="border-2 border-[#d36135] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#d36135] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
          >
            {t.exploreShowroom}
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
      <div className="flex flex-col items-center gap-4 justify-center">
        <p className="text-xl text-center font-medium">
          {t.transformText.part1}{" "}
          <span className="text-[#d36135]">{t.transformText.part2}</span>
        </p>
        <Link href="https://www.facebook.com/61566318248064">
          <button
            type="submit"
            className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
          >
            {t.exampleButton}
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
  );
}

export function PowerCTA() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="flex max-h-96 items-center justify-center mt-8 mb-8 ">
      <div className="grid grid-cols-2 gap-8 max-w-4xl text-center">
        <div className="flex flex-col items-center gap-4 justify-center">
        <a href="https://www.google.be/maps/place/SolarStock/@50.780509,4.2721875,46m/data=!3m1!1e3!4m6!3m5!1s0x47c3c723c65cb223:0x53cd5c047a55f3a6!8m2!3d50.7806139!4d4.2723163!16s%2Fg%2F11kjjtdc83?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" className="flex items-center" target="_blank" rel="noopener noreferrer">
          <button
            type="submit"
            className="hidden md:flex border-2 border-[#3c7740] p-4 justify-center gap-2 items-center text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
          >
            {t.exploreShowroom}
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
          </a>


          <Link href="/appointment">
            <button
              type="submit"
              className="border-2 border-[#d36135] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#d36135] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
            >
              {t.makeAppointment}
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

        <div className="flex flex-col items-center gap-4 justify-center">
          <p className="text-xl font-medium">
            {t.transformText.part1}{" "}
            <span className="text-[#d36135]">{t.transformText.part2}</span>
          </p>
          <Link href="https://www.facebook.com/61566318248064">
            <button
              type="submit"
              className="border-2 border-[#3c7740] p-4 flex justify-center gap-2 items-center mx-auto text-lg bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3c7740] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-spacing-1 rounded-xl group"
            >
              {t.exampleButton}
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
  );
}
