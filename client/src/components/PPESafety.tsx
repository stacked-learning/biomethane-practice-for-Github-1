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

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4">
          <Shield className="w-10 h-10 text-orange-500" />
          PPE Safety Selection Tool
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
          It is essential to wear appropriate personal protective equipment (PPE) when working with hydrogen to minimise the risks associated with its flammability and potential for explosive reactions. PPE such as flame-resistant clothing, face shields, and safety gloves helps protect against potential hazards in environments where hydrogen is present.
        </p>
      </div>

      {/* PPE Equipment Section */}
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 text-center mb-6">
          Required Personal Protective Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ppeItems.map((ppe) => {
            const IconComponent = ppe.icon;
            const isRequired = requiredPPE.includes(ppe.id);
            const isFlipped = flippedCards.has(ppe.id);
            
            return (
              <div
                key={ppe.id}
                onClick={() => flipCard(ppe.id)}
                className={`
                  relative h-72 cursor-pointer transition-all duration-300 hover:-translate-y-1
                  ${isRequired 
                    ? 'border-orange-500 shadow-lg ring-2 ring-orange-200' 
                    : 'border-gray-300 shadow-md'
                  }
                `}
                style={{ perspective: '1000px' }}
              >
                <div 
                  className={`
                    relative w-full h-full transition-transform duration-700 
                    ${isFlipped ? 'rotate-y-180' : ''}
                  `}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <div 
                    className={`
                      absolute inset-0 rounded-xl border-2 p-6 flex flex-col items-center justify-center text-center
                      ${isRequired 
                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white border-orange-600' 
                        : 'bg-gray-100 text-gray-600 border-gray-300'
                      }
                    `}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <IconComponent className="w-12 h-12 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{ppe.name}</h3>
                    <p className="text-sm opacity-80">Click to learn more</p>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-red-500 text-white rounded-xl border-2 border-red-600 p-6 flex flex-col items-center justify-center text-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <Shield className="w-12 h-12 mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{ppe.name}</h3>
                    <p className="text-sm leading-relaxed">{ppe.detailedInfo}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Section */}
      <div className="text-center">
        <div className="inline-flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <Shield className="w-4 h-4 text-orange-500 mr-2" />
          <span className="text-sm text-gray-600">
            Click condition buttons to select, click PPE cards to flip and view details
          </span>
        </div>
      </div>
    </div>
  );
}