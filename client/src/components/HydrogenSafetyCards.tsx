import { useState } from "react";

interface SafetyCard {
  id: string;
  title: string;
  description: string;
}

const safetyCards: SafetyCard[] = [
  {
    id: "molecular-size",
    title: "Molecular Size",
    description: "Hydrogen molecules are extremely small and light, making them prone to leaks."
  },
  {
    id: "flammable",
    title: "Flammable",
    description: "Hydrogen is highly flammable, with a wide explosive range (4-75% in air). It ignites easily with a low Minimum Ignition Energy (MIE) of just 0.02 millijoules, making it highly susceptible to sparks, heat, or even static electricity."
  },
  {
    id: "buoyant",
    title: "Buoyant",
    description: "As the lightest gas, hydrogen rises rapidly, meaning it can accumulate in high spaces or confined areas, creating an explosion risk if not properly ventilated."
  },
  {
    id: "embrittlement",
    title: "Hydrogen Embrittlement",
    description: "Hydrogen can cause metal embrittlement, making materials like steel more brittle and prone to cracking or failure - that can result in catastrophic leaks."
  },
  {
    id: "flame-visibility",
    title: "Flame Visibility",
    description: "Hydrogen flames are invisible in daylight, making it extremely difficult for personnel to detect a hydrogen fire or ignition. This, combined with low IR radiation, increases the risk of undetected fires or explosions."
  }
];

export default function HydrogenSafetyCards() {
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
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-900" data-testid="text-safety-cards-title">
        Hydrogen Safety Considerations
      </h1>

      <div className="flex flex-col gap-8">
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          {safetyCards.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-xs mx-auto h-48 cursor-pointer perspective-1000"
              onClick={() => toggleCard(card.id)}
              data-testid={`card-safety-${card.id}`}
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

        {/* Bottom Row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
          {safetyCards.slice(3, 5).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-xs mx-auto h-48 cursor-pointer perspective-1000"
              onClick={() => toggleCard(card.id)}
              data-testid={`card-safety-${card.id}`}
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

      <p className="text-center mt-8 text-sm text-gray-500" data-testid="text-instruction">
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}
