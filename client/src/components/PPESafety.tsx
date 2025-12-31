import { useState } from "react";
import { MapPin, Thermometer, Shield, Skull, Volume2 } from "lucide-react";

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
    id: 'gas-detector',
    name: 'Personal Gas Detector',
    icon: MapPin,
    description: 'Essential for preventing asphyxiation in low-oxygen or oxygen-enriched atmospheres.',
    detailedInfo: 'Monitors air quality and detects hazardous gases in oxygen-deficient or enriched environments. Essential for confined spaces and chemical handling areas. Provides real-time readings and audible alarms.'
  },
  {
    id: 'eye-protection',
    name: 'Eye Protection',
    icon: Shield,
    description: 'Shields the eyes from flying particles, debris, caustic liquids, gases, vapours, and intense lighting.',
    detailedInfo: 'Safety glasses and goggles protect against flying debris, chemical splashes, and harmful vapors. Essential when working with toxic substances or impact hazards. Available in various lens types for different applications.'
  },
  {
    id: 'foot-protection',
    name: 'Foot Protection',
    icon: Shield,
    description: 'A range of options are available to protect against falling objects, tools, equipment, electrical hazards, and chemical exposure.',
    detailedInfo: 'Steel-toed boots and safety shoes protect against falling objects, punctures, and crushing injuries. Required in environments with physical impact risks. Features slip-resistant soles and electrical hazard protection.'
  },
  {
    id: 'head-face',
    name: 'Head & Face Protection',
    icon: Shield,
    description: 'Hard Hats: Protect the head from impacts caused by falling objects or collisions. Thermal Face Liner: Used in hydrogen environments where cold working conditions are present.',
    detailedInfo: 'Comprehensive protection including hard hats for impact resistance, thermal linings for extreme temperatures, welding helmets for arc flash protection, and face shields for chemical splash protection. Critical for construction and industrial environments.'
  },
  {
    id: 'hand-protection',
    name: 'Hand Protection',
    icon: Shield,
    description: 'Safeguards against heat, cold, chemicals, and cuts.',
    detailedInfo: 'Chemical-resistant gloves and thermal protection prevent burns, cuts, and chemical exposure. Essential for handling hazardous materials and extreme temperatures. Available in various materials for specific hazard protection.'
  },
  {
    id: 'hearing-protection',
    name: 'Hearing Protection',
    icon: Volume2,
    description: 'Includes various options such as earplugs and earmuffs to reduce noise exposure.',
    detailedInfo: 'Earplugs and noise-canceling headphones protect against hearing damage in high-noise environments exceeding 85 decibels. Available in disposable and reusable options with various noise reduction ratings.'
  },
  {
    id: 'protective-clothing',
    name: 'Protective Clothing',
    icon: Shield,
    description: 'Must be flame- and chemical-resistant, as well as highly visible.',
    detailedInfo: 'Chemical suits, thermal protection, and coveralls shield the body from hazardous substances, extreme temperatures, and contamination. Features flame-resistant materials and high-visibility designs for safety compliance.'
  }
];

export default function PPESafety() {
  const [activeConditions, setActiveConditions] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCondition = (conditionId: string) => {
    setActiveConditions(prev => 
      prev.includes(conditionId)
        ? prev.filter(id => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  const getRequiredPPE = (): string[] => {
    const requiredPPE = new Set<string>();
    
    activeConditions.forEach(conditionId => {
      const condition = environmentalConditions.find(c => c.id === conditionId);
      if (condition) {
        condition.requiredPPE.forEach(ppeId => requiredPPE.add(ppeId));
      }
    });
    
    return Array.from(requiredPPE);
  };

  const flipCard = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const requiredPPE = getRequiredPPE();

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
      </div>

      {/* PPE Selection Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left Buttons */}
        <div className="flex flex-col gap-4 md:w-1/4">
          {leftButtons.map((ppe) => {
            const IconComponent = ppe.icon;
            return (
              <button
                key={ppe.id}
                className="p-4 rounded-xl border-2 border-gray-300 bg-white hover:border-orange-500 hover:shadow-lg transition-all duration-300 text-left"
                data-testid={`button-ppe-${ppe.id}`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                  <span className="font-medium text-gray-800">{ppe.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Center Image */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full aspect-square bg-gray-100 rounded-xl border-2 border-gray-200 flex items-center justify-center max-h-[400px]">
            <span className="text-gray-400 text-lg">Image</span>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-4 md:w-1/4">
          {rightButtons.map((ppe) => {
            const IconComponent = ppe.icon;
            return (
              <button
                key={ppe.id}
                className="p-4 rounded-xl border-2 border-gray-300 bg-white hover:border-orange-500 hover:shadow-lg transition-all duration-300 text-left"
                data-testid={`button-ppe-${ppe.id}`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                  <span className="font-medium text-gray-800">{ppe.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}