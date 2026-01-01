import { useState } from "react";
import { MapPin, Thermometer, Shield, Skull, Volume2 } from "lucide-react";
import ppePersonImage from "@assets/image_1767223091933.png";
import safetyShoeOverlay from "@assets/image_1767223144570.png";
import helmetOverlay from "@assets/image_1767223287870.png";
import glovesOverlay from "@assets/image_1767223335565.png";
import catchingSystemOverlay from "@assets/image_1767242140266.png";
import hearingProtectionOverlay from "@assets/image_1767223414501.png";
import filterMaskOverlay from "@assets/image_1767223465478.png";
import protectiveClothingOverlay from "@assets/image_1767223547939.png";
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
    </div>
  );
}