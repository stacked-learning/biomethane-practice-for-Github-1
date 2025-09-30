import { useState } from "react";
import { AlertTriangle } from "lucide-react";

interface ProductionMethod {
  title: string;
  risks: string[];
}

const productionMethods: ProductionMethod[] = [
  {
    title: "Fossil Fuel Processes",
    risks: [
      "Steam Methane Reforming runs at high temperatures and pressures with three main flammable and explosive gases: CH4, CO, and H2.",
      "Toxic substances produced from various processes, including desulfurization and steam conversion."
    ]
  },
  {
    title: "Thermochemical",
    risks: [
      "Requires high temperatures.",
      "Corrosive chemicals and toxic byproducts can be produced.",
      "Hydrogen produced as end-product."
    ]
  },
  {
    title: "Electrolyser",
    risks: [
      "Flammable mixtures – During startup, shutdown, or ageing, hydrogen and oxygen can mix in dangerous concentrations, risking explosions if carried downstream.",
      "Residual charge – After shutdown, electrolysis cells can retain electrical charge for hours due to trapped gases, creating hazards for service personnel.",
      "Ventilation & ignition control – Because units sit in non-classified areas, strong ventilation and non-sparking auxiliary equipment are needed to manage leaks safely.",
      "Outdoor installation risks – Systems must be weather-protected, with hydrogen and oxygen vents carefully separated from each other and from air intakes to prevent accumulation."
    ]
  },
  {
    title: "Photolytic",
    risks: [
      "The operating conditions aren't as harsh as other methods. Most risk comes from hydrogen being produced, and the materials of construction.",
      "Generation of oxygen and hydrogen occurs in the same area, which can produce oxyhydrogen - referring to when hydrogen and oxygen is produced stoichiometrically - can lead to explosive conditions."
    ]
  },
  {
    title: "Biomass",
    risks: [
      "Many common hydrogen issues affect the biomass gasification process for producing hydrogen. This includes hydrogen embrittlement and permeation.",
      "Gasification product can autoignite at higher temperatures, if some air is added to it. Additionally, ignition sources can arise from equipment within the gasification setup, static electricity, or hot work procedures."
    ]
  }
];

export default function ProductionMethodSafetyCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (title: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <p className="text-center mb-8 text-gray-600 text-lg max-w-3xl mx-auto" data-testid="text-description">
        Comprehensive safety risks and considerations for different hydrogen production methods. Each process presents unique challenges and safety requirements.
      </p>
      
      <div className="flex flex-col gap-6">
        {productionMethods.map((method) => (
          <div
            key={method.title}
            className="cursor-pointer"
            onClick={() => toggleCard(method.title)}
            data-testid={`card-production-safety-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div
              className="relative w-full transition-transform duration-600"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s',
                transform: flippedCards.has(method.title) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                minHeight: flippedCards.has(method.title) ? `${180 + method.risks.length * 60}px` : '80px'
              }}
            >
              {/* Front */}
              <div
                className="absolute w-full bg-red-50 border border-red-200 rounded-lg p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-800" />
                  <h3 className="text-xl font-semibold text-red-900">
                    {method.title}
                  </h3>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full bg-red-50 border border-red-200 rounded-lg p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-800 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-red-900">
                    {method.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-3">
                  {method.risks.map((risk, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 flex-shrink-0" />
                      <p className="text-base leading-relaxed text-red-900">
                        {risk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center mt-6 text-sm text-gray-500" data-testid="text-instruction">
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}
