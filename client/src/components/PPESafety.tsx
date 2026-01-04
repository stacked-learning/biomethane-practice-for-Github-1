import { useState } from "react";
import { MapPin, Thermometer, Shield, Skull, Volume2 } from "lucide-react";
import ppePersonImage from "@assets/image_1767223091933.png";
import safetyShoeOverlay from "@assets/image_1767223144570.png";
import helmetOverlay from "@assets/image_1767223287870.png";
import glovesOverlay from "@assets/image_1767223335565.png";
import catchingSystemOverlay from "@assets/image_1767563056846.png";
import hearingProtectionOverlay from "@assets/image_1767223414501.png";
import filterMaskOverlay from "@assets/image_1767223465478.png";
import protectiveClothingOverlay from "@assets/image_1767242407358.png";
import safetyGlassesOverlay from "@assets/image_1767223775378.png";

interface EnvironmentalCondition {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  requiredPPE: string[];
}

interface PPEItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  detailedInfo: string;
  overlayImage: string | null;
}

const environmentalConditions: EnvironmentalCondition[] = [
  {
    id: 'low-oxygen',
    name: 'Low/Oxygen-Enriched Environment',
    icon: MapPin,
    requiredPPE: ['gas-detector']
  },
  {
    id: 'extreme-temps',
    name: 'Extreme Temperatures (High/Low)',
    icon: Thermometer,
    requiredPPE: ['head-face', 'protective-clothing', 'hand-protection']
  },
  {
    id: 'physical-impact',
    name: 'Risk of Physical Impact/Injury',
    icon: Shield,
    requiredPPE: ['head-face', 'foot-protection', 'eye-protection']
  },
  {
    id: 'toxic-chemicals',
    name: 'Toxic Chemicals or Gases',
    icon: Skull,
    requiredPPE: ['eye-protection', 'head-face', 'protective-clothing', 'hand-protection']
  },
  {
    id: 'noisy-environment',
    name: 'Noisy Environment',
    icon: Volume2,
    requiredPPE: ['hearing-protection']
  }
];

const ppeItems: PPEItem[] = [
  {
    id: 'gloves',
    name: 'Gloves',
    icon: Shield,
    description: 'Safeguards against heat, cold, chemicals, and cuts.',
    detailedInfo: 'Chemical-resistant gloves and thermal protection prevent burns, cuts, and chemical exposure.',
    overlayImage: glovesOverlay
  },
  {
    id: 'protective-clothing',
    name: 'Protective Clothing',
    icon: Shield,
    description: 'Must be flame- and chemical-resistant, as well as highly visible.',
    detailedInfo: 'Chemical suits, thermal protection, and coveralls shield the body from hazardous substances.',
    overlayImage: protectiveClothingOverlay
  },
  {
    id: 'hearing-protection',
    name: 'Hearing Protection',
    icon: Volume2,
    description: 'Includes various options such as earplugs and earmuffs to reduce noise exposure.',
    detailedInfo: 'Earplugs and noise-canceling headphones protect against hearing damage in high-noise environments.',
    overlayImage: hearingProtectionOverlay
  },
  {
    id: 'safety-helmet',
    name: 'Safety Helmet',
    icon: Shield,
    description: 'Protects the head from impacts caused by falling objects or collisions.',
    detailedInfo: 'Hard hats provide impact resistance and protection in construction and industrial environments.',
    overlayImage: helmetOverlay
  },
  {
    id: 'safety-glasses',
    name: 'Safety Glasses',
    icon: Shield,
    description: 'Shields the eyes from flying particles, debris, and intense lighting.',
    detailedInfo: 'Safety glasses protect against flying debris, chemical splashes, and harmful vapors.',
    overlayImage: safetyGlassesOverlay
  },
  {
    id: 'filter-mask',
    name: 'Filter Mask',
    icon: Shield,
    description: 'Provides respiratory protection against airborne particles and gases.',
    detailedInfo: 'Filter masks protect against inhalation of harmful particles, fumes, and gases.',
    overlayImage: filterMaskOverlay
  },
  {
    id: 'catching-system',
    name: 'Catching System',
    icon: Shield,
    description: 'Fall protection equipment for working at heights.',
    detailedInfo: 'Safety harnesses and fall arrest systems prevent injuries when working at elevated positions.',
    overlayImage: catchingSystemOverlay
  },
  {
    id: 'safety-shoes',
    name: 'Safety Shoes',
    icon: Shield,
    description: 'Protects against falling objects, punctures, and electrical hazards.',
    detailedInfo: 'Steel-toed boots protect against falling objects, punctures, and crushing injuries.',
    overlayImage: safetyShoeOverlay
  }
];

export default function PPESafety() {
  const [selectedPPE, setSelectedPPE] = useState<Set<string>>(new Set());
  const [flippedSafetyCards, setFlippedSafetyCards] = useState<Set<string>>(new Set());

  const togglePPE = (ppeId: string) => {
    setSelectedPPE(prev => {
      const newSet = new Set(prev);
      if (newSet.has(ppeId)) {
        newSet.delete(ppeId);
      } else {
        newSet.add(ppeId);
      }
      return newSet;
    });
  };

  const leftButtons = ppeItems.slice(0, 4);
  const rightButtons = ppeItems.slice(4, 8);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
          <Shield className="w-10 h-10 text-orange-500" />
          PPE Safety Selection Tool
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
          It is essential to wear appropriate personal protective equipment (PPE) when working with biomethane to minimise the risks associated with its flammability and potential for explosive reactions. PPE such as flame-resistant clothing, face shields, and safety gloves helps protect against potential hazards in environments where biomethane is present.
        </p>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
          Common PPE for working with biomethane/biogas set ups includes:
        </p>
      </div>

      {/* PPE Selection Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left Buttons */}
        <div className="flex flex-col gap-4 md:w-1/4">
          {leftButtons.map((ppe) => {
            const isSelected = selectedPPE.has(ppe.id);
            return (
              <button
                key={ppe.id}
                onClick={() => togglePPE(ppe.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 shadow-lg' 
                    : 'border-gray-300 bg-white hover:border-orange-500 hover:shadow-lg'
                }`}
                data-testid={`button-ppe-${ppe.id}`}
              >
                <span className={`font-medium ${isSelected ? 'text-orange-700' : 'text-gray-800'}`}>{ppe.name}</span>
              </button>
            );
          })}
        </div>

        {/* Center Image with Overlays */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center max-h-[500px]">
            <img 
              src={ppePersonImage} 
              alt="Person wearing PPE" 
              className="max-h-[500px] object-contain"
            />
            {ppeItems.map((ppe) => (
              ppe.overlayImage && selectedPPE.has(ppe.id) && (
                <img
                  key={ppe.id}
                  src={ppe.overlayImage}
                  alt={`${ppe.name} overlay`}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />
              )
            ))}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-4 md:w-1/4">
          {rightButtons.map((ppe) => {
            const isSelected = selectedPPE.has(ppe.id);
            return (
              <button
                key={ppe.id}
                onClick={() => togglePPE(ppe.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? 'border-orange-500 bg-orange-50 shadow-lg' 
                    : 'border-gray-300 bg-white hover:border-orange-500 hover:shadow-lg'
                }`}
                data-testid={`button-ppe-${ppe.id}`}
              >
                <span className={`font-medium ${isSelected ? 'text-orange-700' : 'text-gray-800'}`}>{ppe.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Safety Flip Cards Section */}
      <div className="mt-12">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Storage Safety
          </h3>
          <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 italic">Click to flip cards</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              id: "safety-precautions",
              title: "Safety Precautions",
              points: [
                { label: "Ignition Sources", text: "Isolate or eliminate potential ignition sources (anything producing sparks)." },
                { label: "Surroundings", text: "Ensure wind is not blowing gas towards you. If possible, approach from downhill, as natural gas is lighter than air." },
                { label: "Enclosed Spaces", text: "Avoid enclosed spaces where oxygen may be displaced easier. Additionally, if outdoors, do not park over storm-water drains or manholes." },
                { label: "Gas Monitoring", text: "Gas monitoring is crucial for keeping workers safe. If outdoors, monitoring can provide key information for establishing an evacuation area." },
                { label: "Safety Equipment", text: "Adequate equipment is required. If possible, utilize a full Self-Contained Breathing Apparatus (SCBA). Utilize PPE as required." }
              ]
            },
            {
              id: "indoor-leaks",
              title: "Key Considerations for Indoor Leaks",
              points: [
                { label: "", text: "Ensure a ventilation system is in place to avoid fatal displacement (which can be fatal). Certain environments will allow for natural ventilation (for example in buildings). For other environments, active ventilation systems should be designed for natural gas - with any electrical equipment being adequately designed for such applications." },
                { label: "", text: "Only intrinsically safe equipment should be employed (eg: appropriate radios, flashlights, etc)." },
                { label: "", text: "Isolate gas supply as required. Many facilities will have a gas isolation valve to perform this." },
                { label: "", text: "Avoid PPE/clothing which can create buildups of static electricity. Additionally, avoid certain objects, such as door mats in buildings, which are known to cause sparks." }
              ]
            }
          ].map((card) => (
            <div
              key={card.id}
              className="w-full h-96 cursor-pointer"
              onClick={() => {
                setFlippedSafetyCards(prev => {
                  const newSet = new Set(prev);
                  if (newSet.has(card.id)) {
                    newSet.delete(card.id);
                  } else {
                    newSet.add(card.id);
                  }
                  return newSet;
                });
              }}
              data-testid={`card-safety-${card.id}`}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: flippedSafetyCards.has(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
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
                <div
                  className="absolute w-full h-full rounded-xl shadow-lg p-5 flex flex-col items-start justify-start text-left overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(to bottom right, #f97316, #c2410c)',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h4 className="text-base font-bold mb-3 text-white">
                    {card.title}
                  </h4>
                  <ul className="text-white text-sm space-y-2">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-white mt-0.5">•</span>
                        <span>
                          {point.label && <strong>{point.label}:</strong>} {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}