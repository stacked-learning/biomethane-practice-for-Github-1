import { useState } from "react";
import { AlertTriangle } from "lucide-react";

interface TransportationDanger {
  title: string;
  risks: string[];
}

const transportationDangers: TransportationDanger[] = [
  {
    title: "Pipeline Dangers",
    risks: [
      "There is a risk of damage to pipeline infrastructure during excavation/maintenance works. Reputable contractors should be employed for such undertakings.",
      "Pipeline ruptures can be caused by mechanical impacts, including those from natural events such as earthquakes. To prevent this:",
      "Ensure pipeline is designed to the correct standards (AS 2885), ensuring full-bore ruptures cannot occur.",
      "Proper monitoring procedures are implemented.",
      "Emergency response procedures exist.",
    ],
  },
  {
    title: "Road Transportation Dangers",
    risks: [
      "Trucks face risks from road accidents. For gas transportation vehicles, minor collisions may have significant consequences.",
      "In the case of an LNG transportation vehicle accident, the extremely cold LNG will initially sink to the ground. Any people and ignition sources should be kept away from this, as the gas vaporizes as it heats up.",
      "For CNG vehicle accidents, the gas will naturally rise. However, in enclosed spaces, there could be an increased risk of ignition. A \"rotten-egg\" smell from the odorant may be noticed, and all individuals should be kept away from this area.",
      "Sparks and static electricity from friction between vehicle components and tanks must be controlled with proper grounding.",
      "Human error remains a major factor; thorough training and strict adherence to safety procedures are essential.",
    ],
  },
  {
    title: "Tanker Dangers",
    risks: [
      "In enclosed spaces like ships, hydrogen leaks can cause asphyxiation by displacing oxygen; odorants help but cannot be fully relied upon.",
      "Sensor choice and placement are critical, with options including pellistors, electrochemical, thermal conductivity, and molecular property spectrometer sensors; hydrogen tends to accumulate near ceilings.",
      "Stored hydrogen is often cryogenic; contact with liquid hydrogen can cause severe frostbite.",
      "Portable gas detectors are essential for fast, localised leak detection.",
    ],
  },
];

export default function TransportationSafetyCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (title: string) => {
    setFlippedCards((prev) => {
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
      <p
        className="text-center mb-8 text-gray-600 text-lg max-w-3xl mx-auto"
        data-testid="text-transport-description"
      >
        Each mode of transport presents unique challenges and requires specific
        safety protocols, which includes:
      </p>

      <div className="flex flex-col gap-6">
        {transportationDangers.map((danger) => (
          <div
            key={danger.title}
            className="cursor-pointer perspective-1000"
            onClick={() => toggleCard(danger.title)}
            data-testid={`card-transport-safety-${danger.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className="relative w-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.6s",
                transform: flippedCards.has(danger.title)
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="w-full bg-red-50 border border-red-200 rounded-lg p-6"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  opacity: flippedCards.has(danger.title) ? 0 : 1,
                  position: flippedCards.has(danger.title)
                    ? "absolute"
                    : "relative",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-800" />
                  <h3 className="text-xl font-semibold text-red-900">
                    {danger.title}
                  </h3>
                </div>
              </div>

              {/* Back */}
              <div
                className="w-full bg-red-50 border border-red-200 rounded-lg p-6"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  opacity: flippedCards.has(danger.title) ? 1 : 0,
                  position: flippedCards.has(danger.title)
                    ? "relative"
                    : "absolute",
                  top: flippedCards.has(danger.title) ? "auto" : 0,
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-800 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-red-900">
                    {danger.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {danger.risks.map((risk, index) => (
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

      <p
        className="text-center mt-6 text-sm text-gray-500"
        data-testid="text-transport-instruction"
      >
        Click any card to reveal detailed safety information
      </p>
    </div>
  );
}
