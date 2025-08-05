import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LegislationItem {
  name: string;
}

interface StateSection {
  name: string;
  legislation: LegislationItem[];
}

const australianLegislation: LegislationItem[] = [
  { name: "National Hydrogen Strategy Act (2024)" },
  { name: "Hydrogen Production and Storage Regulations (2023)" },
  { name: "Clean Energy Legislation Amendment (Hydrogen) Act (2022)" },
  { name: "Australian Renewable Energy Agency (Hydrogen Technologies) Regulations (2022)" },
  { name: "Environment Protection and Biodiversity Conservation (Hydrogen Projects) Amendment (2023)" },
  { name: "National Hydrogen Strategy 2024" }
];

const stateLegislation: StateSection[] = [
  {
    name: "New South Wales",
    legislation: [
      { name: "Hydrogen Industry Development Act (NSW) (2023)" },
      { name: "Energy and Utilities Administration (Hydrogen) Regulation (2023)" }
    ]
  },
  {
    name: "Victoria",
    legislation: [
      { name: "Victorian Hydrogen Implementation Strategy Act (2023)" },
      { name: "Gas Safety (Hydrogen Blending) Regulations (2023)" }
    ]
  },
  {
    name: "Queensland",
    legislation: [
      { name: "Queensland Hydrogen Industry Strategy Act (2023)" },
      { name: "Petroleum and Gas (Hydrogen) Amendment Regulation (2023)" }
    ]
  },
  {
    name: "Western Australia",
    legislation: [
      { name: "WA Renewable Hydrogen and Ammonia Act (2023)" },
      { name: "Dangerous Goods Safety (Hydrogen Storage) Regulations (2023)" }
    ]
  },
  {
    name: "Other States & Territories",
    legislation: [
      { name: "Additional state and territory legislation available" }
    ]
  }
];

export default function HydrogenLegislation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown();
    }
    if (event.key === 'Escape' && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Title and Description */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-hydrogen-600 mb-4 tracking-tight">
          Australian Legislation Concerning Hydrogen Storage
        </h2>
        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
          Comprehensive overview of hydrogen legislation across Australia, including both Commonwealth and State-level regulatory frameworks governing hydrogen production, storage, transportation, and safety standards.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
        {/* Header Button */}
        <button
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          className="w-full bg-gray-400 hover:bg-gray-500 transition-colors duration-200 p-4 lg:p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          aria-expanded={isExpanded}
          aria-controls="legislation-content"
        >
          <h2 className="text-lg lg:text-xl font-medium text-gray-700 m-0">
            Legislation
          </h2>
          <ChevronDown 
            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Content */}
        <div
          id="legislation-content"
          className={`
            bg-gray-500 text-white transition-all duration-300 overflow-hidden
            ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
          aria-hidden={!isExpanded}
        >
          <div className="p-4 lg:p-6">
            {/* Australian (Commonwealth) Section */}
            <div className="mb-6">
              <h3 className="text-base lg:text-lg font-medium text-white mb-3">
                Australian
              </h3>
              <div className="ml-4">
                {australianLegislation.map((item, index) => (
                  <div key={index} className="flex items-start mb-2">
                    <span className="text-white mr-2 flex-shrink-0">-</span>
                    <span className="text-sm lg:text-base text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* State Section */}
            <div>
              <h3 className="text-base lg:text-lg font-medium text-white mb-3">
                State
              </h3>
              <div className="ml-4">
                {stateLegislation.map((state, stateIndex) => (
                  <div key={stateIndex} className="mb-3">
                    <div className="text-sm lg:text-base font-medium text-gray-200 mb-1">
                      {state.name}
                    </div>
                    <div className="ml-3">
                      {state.legislation.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start mb-1">
                          <span className="text-white mr-2 flex-shrink-0">-</span>
                          <span className="text-xs lg:text-sm text-white">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}