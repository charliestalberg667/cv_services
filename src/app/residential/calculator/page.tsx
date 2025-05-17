"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { PowerCTA, PowerCTAMobile } from "@/components/power-cta";

interface Region {
  name: string;
  averageSunHours: number;
  averageCostPerPanel: number;
  averageProductionPerPanel: number;
  roiRanges: {
    [key: number]: {
      min: number;
      max: number;
    };
  };
}

const regions: { [key: string]: Region } = {
  "bruxelles": {
    name: "Bruxelles",
    averageSunHours: 3.8,
    averageCostPerPanel: 350,
    averageProductionPerPanel: 1200,
    roiRanges: {
      3: { min: 6, max: 8 },
      6: { min: 4, max: 6 },
      9: { min: 3, max: 5 },
      12: { min: 2, max: 4 },
      16: { min: 1, max: 3 }
    }
  },
  "flandre": {
    name: "Flandre",
    averageSunHours: 3.9,
    averageCostPerPanel: 340,
    averageProductionPerPanel: 1250,
    roiRanges: {
      3: { min: 7, max: 9 },
      6: { min: 5, max: 7 },
      9: { min: 4, max: 6 },
      12: { min: 3, max: 5 },
      16: { min: 2, max: 4 }
    }
  },
  "wallonie": {
    name: "Wallonie",
    averageSunHours: 3.7,
    averageCostPerPanel: 360,
    averageProductionPerPanel: 1150,
    roiRanges: {
      3: { min: 7, max: 9 },
      6: { min: 5, max: 7 },
      9: { min: 4, max: 6 },
      12: { min: 3, max: 5 },
      16: { min: 2, max: 4 }
    }
  }
};

const content = {
  fr: {
    title: "Calculateur Solaire",
    subtitle: "Estimez le coût et les bénéfices de votre installation solaire",
    regionLabel: "Région",
    panelCountLabel: "Nombre de panneaux",
    results: {
      totalCost: "Coût total estimé",
      yearlyProduction: "Production annuelle estimée",
      yearlySavings: "Économies annuelles estimées",
      paybackPeriod: "Période de retour sur investissement",
      environmentalImpact: "Impact environnemental annuel",
      currency: "€",
      kwh: "kWh",
      years: "ans",
      co2Reduction: "réduction de CO₂",
      roiRange: "à"
    }
  },
  nl: {
    title: "Zonne-energie Calculator",
    subtitle: "Bereken de kosten en voordelen van uw zonne-installatie",
    regionLabel: "Regio",
    panelCountLabel: "Aantal panelen",
    results: {
      totalCost: "Geschatte totale kosten",
      yearlyProduction: "Geschatte jaarlijkse productie",
      yearlySavings: "Geschatte jaarlijkse besparingen",
      paybackPeriod: "Terugverdientijd",
      environmentalImpact: "Jaarlijkse milieu-impact",
      currency: "€",
      kwh: "kWh",
      years: "jaar",
      co2Reduction: "CO₂-reductie",
      roiRange: "tot"
    }
  }
};

export default function SolarCalculator() {
  const { language } = useLanguage();
  const [region, setRegion] = useState("bruxelles");
  const [panelCount, setPanelCount] = useState(9);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  const currentContent = content[language];
  const selectedRegion = regions[region];

  // Find the closest panel count in the ROI ranges
  const getClosestPanelCount = (count: number) => {
    const availableCounts = Object.keys(selectedRegion.roiRanges).map(Number);
    return availableCounts.reduce((prev, curr) => {
      return Math.abs(curr - count) < Math.abs(prev - count) ? curr : prev;
    });
  };

  const closestPanelCount = getClosestPanelCount(panelCount);
  const roiRange = selectedRegion.roiRanges[closestPanelCount];

  // Calculations based on ROI
  const totalCost = selectedRegion.averageCostPerPanel * panelCount;
  
  // Calculate yearly savings based on ROI range
  // Using the average of min and max ROI years
  const averageROIYears = (roiRange.min + roiRange.max) / 2;
  const yearlySavings = totalCost / averageROIYears;
  
  // Calculate yearly production based on savings
  // Assuming €0.25 per kWh
  const yearlyProduction = (yearlySavings / 0.25);
  
  // Calculate production per panel
  const productionPerPanel = yearlyProduction / panelCount;
  
  // Update the region's production per panel for more accurate calculations
  selectedRegion.averageProductionPerPanel = productionPerPanel;
  
  const co2Reduction = yearlyProduction * 0.3; // Assuming 0.3kg CO2 per kWh

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-[#17158A]">{currentContent.title}</h1>
          <p className="text-xl text-[#5350fa]">{currentContent.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.regionLabel}
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none cursor-pointer hover:border-blue-400 transition-colors duration-200 relative pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat"
                >
                  {Object.entries(regions).map(([key, region]) => (
                    <option key={key} value={key} className="py-2">
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentContent.panelCountLabel}
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={panelCount || ''}
                  onChange={(e) => setPanelCount(e.target.value ? Number(e.target.value) : 0)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {panelCount !== closestPanelCount && 
                    `* ${language === 'fr' ? 'Utilisation de la valeur la plus proche' : 'Gebruik van dichtstbijzijnde waarde'}: ${closestPanelCount} ${language === 'fr' ? 'panneaux' : 'panelen'}`
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-6">
              <h3 className="text-lg font-semibold text-[#17158A] mb-4">
                {currentContent.results.totalCost}
              </h3>
              <p className="text-3xl font-bold text-[#5350fa]">
                {totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {currentContent.results.currency}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-6">
              <h3 className="text-lg font-semibold text-[#17158A] mb-4">
                {currentContent.results.yearlyProduction}
              </h3>
              <p className="text-3xl font-bold text-[#5350fa]">
                {Math.round(yearlyProduction).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {currentContent.results.kwh}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-6">
              <h3 className="text-lg font-semibold text-[#17158A] mb-4">
                {currentContent.results.yearlySavings}
              </h3>
              <p className="text-3xl font-bold text-[#5350fa]">
                {Math.round(yearlySavings).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {currentContent.results.currency}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-6">
              <h3 className="text-lg font-semibold text-[#17158A] mb-4">
                {currentContent.results.paybackPeriod}
              </h3>
              <p className="text-3xl font-bold text-[#5350fa]">
                {roiRange.min} {currentContent.results.roiRange} {roiRange.max} {currentContent.results.years}
              </p>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,_0,_0,_0.08)] p-6">
              <h3 className="text-lg font-semibold text-[#17158A] mb-4">
                {currentContent.results.environmentalImpact}
              </h3>
              <p className="text-3xl font-bold text-[#5350fa]">
                {Math.round(co2Reduction).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} kg {currentContent.results.co2Reduction}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isDesktop ? <PowerCTA hideCalculator={true} /> : <PowerCTAMobile hideCalculator={true} />}
    </div>
  );
} 