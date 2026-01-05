import { useState } from "react";

interface SafetyCard {
  id: string;
  title: string;
  description: string;
}

const safetyCards: SafetyCard[] = [
  {
    id: "biological-agents",
    title: "Biological Agents",
    description: "Intake of biological agents through the respiratory tract (including moulds, bacteria, and endotoxins), hand-to-mouth contact, skin/mucous membrane contact, cuts."
  },
  {
    id: "hazardous-substances",
    title: "Hazardous Substances",
    description: "May include biogas, processing aids, oils, slurries, and any silage effluent."
  },
  {
    id: "electrical-hazards",
    title: "Electrical Hazards",
    description: "Any electrical components used in the biogas/biomethane set up that can cause electric shocks, magnetic/electric fields - especially dangerous to people with pacemakers."
  },
  {
    id: "mechanical-hazards",
    title: "Mechanical Hazards",
    description: "Any dangers involving falling, impact, crushing, and cutting. Several locations, such as silos can involve working at heights, or in the vicinity of rotating parts or moving vehicles."
  },
  {
    id: "gas-hazards",
    title: "Gas Hazards",
    description: "Biogas contains different gases to varying degrees. There are general exposure limits to various gases published for expected working periods (generally 8 hours a day, 5 days a week, for a working lifetime). Here the limit is specified in units such as mg/m³ and ppm."
  },
  {
    id: "explosion-fire-hazards",
    title: "Explosion and Fire Hazards",
    description: "Flammable substances may be present in the form of gases, vapours, mists or dusts. Explosions can only occur if there is a flammable substance (in required distribution and concentration), oxygen, and a source of ignition."
  }
];

export default function BiogasPlantSafetyCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900" data-testid="text-biogas-plant-safety-title">
        Biogas/Biomethane Plant Safety
      </h2>

      <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center" data-testid="text-biogas-plant-safety-description">
        Biogas and biomethane plants present various hazards that must be carefully managed to ensure the safety of workers and the surrounding environment. Understanding these risks is essential for implementing appropriate safety measures.
      </p>

      <div className="flex flex-col gap-8">
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {safetyCards.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-xs mx-auto h-56 cursor-pointer perspective-1000"
              onClick={() => toggleCard(card.id)}
              data-testid={`card-biogas-${card.id}`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                  flippedCards.has(card.id) ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flippedCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg p-6 flex items-center justify-center text-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(to bottom right, #fb923c, #ea580c)'
                  }}
                >
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col items-start justify-start text-left"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(to bottom right, #f97316, #c2410c)',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h4 className="text-base font-bold mb-3 text-orange-200">
                    {card.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-white opacity-95">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {safetyCards.slice(3, 6).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-xs mx-auto h-56 cursor-pointer perspective-1000"
              onClick={() => toggleCard(card.id)}
              data-testid={`card-biogas-${card.id}`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
                  flippedCards.has(card.id) ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flippedCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg p-6 flex items-center justify-center text-center hover:shadow-2xl transition-shadow"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(to bottom right, #fb923c, #ea580c)'
                  }}
                >
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg p-6 flex flex-col items-start justify-start text-left"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(to bottom right, #f97316, #c2410c)',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h4 className="text-base font-bold mb-3 text-orange-200">
                    {card.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-white opacity-95">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-500" data-testid="text-biogas-instruction">
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}
