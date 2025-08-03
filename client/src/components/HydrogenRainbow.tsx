import { useState, useEffect } from "react";

interface HydrogenType {
  id: string;
  name: string;
  color: string;
  description: string;
  method: string;
  impact: string;
}

const hydrogenTypes: HydrogenType[] = [
  {
    id: "green",
    name: "GREEN HYDROGEN",
    color: "#22C55E",
    description: "Produced using renewable energy sources like wind, solar, or hydro power through electrolysis of water. This is the cleanest form of hydrogen production with zero carbon emissions during the production process.",
    method: "Renewable energy electrolysis",
    impact: "Zero carbon emissions"
  },
  {
    id: "blue",
    name: "BLUE HYDROGEN",
    color: "#3B82F6",
    description: "Produced from natural gas through steam methane reforming, but with carbon capture and storage (CCS) technology to reduce CO2 emissions. It's a transitional solution towards cleaner hydrogen production.",
    method: "Natural gas with carbon capture",
    impact: "Low carbon emissions"
  },
  {
    id: "grey",
    name: "GREY HYDROGEN",
    color: "#6B7280",
    description: "Currently the most common form of hydrogen production, made from natural gas through steam methane reforming without carbon capture. It produces significant CO2 emissions as a byproduct.",
    method: "Steam methane reforming",
    impact: "High carbon emissions"
  },
  {
    id: "yellow",
    name: "YELLOW HYDROGEN",
    color: "#FDE047",
    description: "Produced using solar power through electrolysis. It represents a specific subset of green hydrogen that emphasizes solar energy as the renewable source for the electrolysis process.",
    method: "Solar-powered electrolysis",
    impact: "Zero carbon emissions"
  },
  {
    id: "pink",
    name: "PINK HYDROGEN",
    color: "#EC4899",
    description: "Generated using nuclear energy through electrolysis. Nuclear power provides a consistent, carbon-free electricity source for hydrogen production, making it a clean alternative.",
    method: "Nuclear-powered electrolysis",
    impact: "Zero carbon emissions"
  },
  {
    id: "turquoise",
    name: "TURQUOISE HYDROGEN",
    color: "#06B6D4",
    description: "Produced through methane pyrolysis, which splits methane into hydrogen and solid carbon. This process avoids CO2 emissions by producing solid carbon instead of gaseous carbon dioxide.",
    method: "Methane pyrolysis",
    impact: "Low carbon emissions"
  },
  {
    id: "white",
    name: "WHITE HYDROGEN",
    color: "#F8FAFC",
    description: "Naturally occurring hydrogen found in underground deposits. It can be extracted through geological processes and represents a potentially abundant natural resource for clean energy.",
    method: "Natural geological extraction",
    impact: "Minimal environmental impact"
  },
  {
    id: "brown",
    name: "BROWN HYDROGEN",
    color: "#A3743A",
    description: "Produced from brown coal (lignite) through gasification. This is one of the most carbon-intensive methods of hydrogen production and is being phased out in favor of cleaner alternatives.",
    method: "Brown coal gasification",
    impact: "Very high carbon emissions"
  },
  {
    id: "red",
    name: "RED HYDROGEN",
    color: "#EF4444",
    description: "Produced using nuclear energy through high-temperature electrolysis or thermochemical water splitting. It leverages nuclear heat and electricity for efficient hydrogen production.",
    method: "Nuclear thermal splitting",
    impact: "Zero carbon emissions"
  },
  {
    id: "orange",
    name: "ORANGE HYDROGEN",
    color: "#F97316",
    description: "Produced from biomass or waste materials through gasification or fermentation processes. It provides a way to convert organic waste into useful hydrogen fuel while reducing waste disposal issues.",
    method: "Biomass gasification",
    impact: "Carbon neutral to negative"
  },
  {
    id: "black",
    name: "BLACK HYDROGEN",
    color: "#1F2937",
    description: "Produced from black coal through gasification processes. This method has extremely high carbon emissions and represents one of the most environmentally harmful ways to produce hydrogen.",
    method: "Black coal gasification",
    impact: "Very high carbon emissions"
  },
  {
    id: "violet",
    name: "VIOLET HYDROGEN",
    color: "#8B5CF6",
    description: "Produced using nuclear energy combined with advanced electrolysis technologies. This emerging method aims to maximize efficiency while maintaining zero carbon emissions during production.",
    method: "Advanced nuclear electrolysis",
    impact: "Zero carbon emissions"
  }
];

function adjustBrightness(color: string, factor: number): string {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const adjust = (value: number) => Math.max(0, Math.min(255, value + (value * factor)));
  
  return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
}

export default function HydrogenRainbow() {
  const [selectedHydrogen, setSelectedHydrogen] = useState<string | null>(null);

  const handleHydrogenSelect = (id: string) => {
    if (selectedHydrogen === id) {
      setSelectedHydrogen(null);
    } else {
      setSelectedHydrogen(id);
    }
  };

  const selectedData = selectedHydrogen ? hydrogenTypes.find(type => type.id === selectedHydrogen) : null;
  
  const getDescriptionBoxStyle = () => {
    if (selectedData) {
      const darkColor = adjustBrightness(selectedData.color, -0.2);
      return {
        background: `linear-gradient(135deg, ${selectedData.color}, ${darkColor})`,
        color: selectedData.id === 'white' ? '#000000' : '#FFFFFF'
      };
    }
    return {
      background: 'linear-gradient(135deg, #009688, #00796B)',
      color: '#FFFFFF'
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-hydrogen-600 mb-2 italic">
          Hydrogen Rainbow
        </h1>
        <p className="text-lg text-gray-600">
          Discover the rainbow of hydrogen production methods
        </p>
      </div>

      {/* Hydrogen Color Pills */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-1 max-w-3xl mx-auto">
          {hydrogenTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleHydrogenSelect(type.id)}
              className={`
                h-16 lg:h-20 flex-1 min-w-0 rounded-lg border-2 cursor-pointer
                transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none
                ${selectedHydrogen === type.id 
                  ? 'scale-108 shadow-xl border-gray-800 ring-2 ring-gray-800' 
                  : 'border-gray-300 hover:shadow-lg'
                }
              `}
              style={{ backgroundColor: type.color }}
              aria-label={type.name}
            />
          ))}
        </div>
      </div>

      {/* Description Box */}
      <div 
        className="rounded-2xl p-6 lg:p-8 text-left shadow-2xl transition-all duration-500 ease-in-out min-h-[200px]"
        style={getDescriptionBoxStyle()}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-4 uppercase tracking-wide">
          {selectedData ? selectedData.name : "SELECT A HYDROGEN TYPE"}
        </h2>
        <p className="text-base lg:text-lg leading-relaxed opacity-90 mb-4">
          {selectedData 
            ? selectedData.description 
            : "Click on any colored button above to learn about different hydrogen production methods and their environmental impact. Each color represents a unique pathway to hydrogen energy."
          }
        </p>
        
        {/* Additional Info */}
        {selectedData && (
          <div className={`
            pt-6 border-t transition-all duration-300 ease-in-out
            ${selectedData.id === 'white' ? 'border-black/20' : 'border-white/20'}
          `}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Production Method</h3>
                <p className="opacity-80">{selectedData.method}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Environmental Impact</h3>
                <p className="opacity-80">{selectedData.impact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}