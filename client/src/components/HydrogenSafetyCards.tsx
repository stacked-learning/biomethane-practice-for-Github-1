import { useState } from "react";

interface SafetyCard {
  id: string;
  title: string;
  description: string;
}

const safetyCards: SafetyCard[] = [
  {
    id: "highly-flammable",
    title: "Highly Flammable",
    description: "Methane forms flammable mixtures with air over a relatively wide concentration range, meaning even small leaks can present an ignition risk if an ignition source is present."
  },
  {
    id: "lighter-than-air",
    title: "Lighter Than Air",
    description: "Because methane is lighter than air, it tends to rise and accumulate in enclosed or poorly ventilated spaces such as overhead structures."
  },
  {
    id: "colourless",
    title: "Colourless Gas",
    description: "Methane cannot be always detected visually, which means leaks may go unnoticed without dedicated gas detection systems in place."
  },
  {
    id: "naturally-odourless",
    title: "Naturally Odourless",
    description: "In its natural state methane has no smell, requiring the addition of odorants and the use of gas monitors to ensure leaks can be detected by personnel."
  },
  {
    id: "visible-flame",
    title: "Visible Flame",
    description: "Biomethane flames are visible, but their pale, low-luminosity nature means they can be difficult to see in well-lit or outdoor environments."
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
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900" data-testid="text-safety-cards-title">
        Biomethane Safety Considerations
      </h1>

      <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 text-center" data-testid="text-safety-description">
        Biomethane possesses key dangers which must be considered due to its physical and chemical properties. Because these properties closely align with those of natural gas (if not identical), existing industry knowledge, standards, and practices remain largely applicable. Understanding these properties is important for ensuring safe handling, storage, and use across industrial applications, including gas turbines and heating systems.
      </p>

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
