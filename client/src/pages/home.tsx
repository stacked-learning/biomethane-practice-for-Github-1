import { useState } from "react";
import { Card } from "@/components/ui/card";
import HydrogenRainbow from "@/components/HydrogenRainbow";
import OxygenChart from "@/components/OxygenChart";

type Quadrant = "process" | "transport" | "storage" | "product";

interface QuadrantContent {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const quadrantData: Record<Quadrant, QuadrantContent> = {
  process: {
    title: "Process",
    subtitle: "Process quadrant illustration - Production & Manufacturing",
    description: "Advanced hydrogen production methods and manufacturing processes",
    points: [
      "Electrolysis: The most common method for hydrogen production, splitting water molecules using electrical energy from renewable sources.",
      "Steam Reforming: Industrial process that extracts hydrogen from natural gas, currently the most cost-effective production method.",
      "Pyrolysis: Advanced thermal decomposition process that produces hydrogen while capturing carbon as a solid byproduct."
    ]
  },
  transport: {
    title: "Transport",
    subtitle: "Transport quadrant illustration - Distribution & Logistics",
    description: "Comprehensive hydrogen transportation and distribution systems",
    points: [
      "Pipeline Distribution: High-pressure gas pipelines for long-distance hydrogen transport, requiring specialized materials and infrastructure.",
      "Compressed Gas Delivery: Tube trailers and mobile storage systems for flexible point-to-point distribution networks.",
      "Liquid Hydrogen Transport: Cryogenic tanker systems for high-volume transportation at -253°C, enabling efficient long-distance shipping."
    ]
  },
  storage: {
    title: "Storage",
    subtitle: "Storage quadrant illustration - Containment & Preservation",
    description: "Advanced hydrogen storage solutions and containment technologies",
    points: [
      "Compressed Gas Storage: High-pressure vessels (350-700 bar) for gaseous hydrogen storage with rapid filling capabilities.",
      "Liquid Hydrogen Tanks: Cryogenic storage systems maintaining ultra-low temperatures for maximum density storage solutions.",
      "Underground Storage: Salt caverns and depleted gas fields for large-scale, long-term hydrogen storage infrastructure."
    ]
  },
  product: {
    title: "Product",
    subtitle: "Product quadrant illustration - Manufacturing & Development",
    description: "Safety considerations and product development in hydrogen applications",
    points: [
      "Ignition Risk: Hydrogen has an extremely low minimum Ignition Energy (MIE), making it highly flammable.",
      "Static Electricity Hazard: Sudden discharge from static build-up can cause ignition or explosion.",
      "Gas Classification: Hydrogen falls under Gas Group IIC, the highest hazard classification."
    ]
  }
};

export default function Home() {
  const [selectedQuadrant, setSelectedQuadrant] = useState<Quadrant | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const handleQuadrantClick = (quadrant: Quadrant) => {
    if (selectedQuadrant === quadrant && isDetailView) {
      // Return to grid view
      setSelectedQuadrant(null);
      setIsDetailView(false);
    } else {
      // Show detail view
      setSelectedQuadrant(quadrant);
      setIsDetailView(true);
    }
  };

  const getButtonClasses = (quadrant: Quadrant, isNav: boolean = false) => {
    const baseClasses = isNav
      ? "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 hover:shadow-lg"
      : "min-h-[140px] md:min-h-[180px] rounded-2xl font-semibold text-2xl md:text-3xl transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-4 hover:shadow-xl active:scale-95";
    
    const isActive = selectedQuadrant === quadrant && isDetailView;
    const colorClasses = isActive
      ? "bg-hydrogen-700 text-white ring-4 ring-hydrogen-300 shadow-lg"
      : "bg-hydrogen-500 hover:bg-hydrogen-600 text-white focus:ring-hydrogen-200";
    
    return `${baseClasses} ${colorClasses}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Hydrogen Quadrant
          </h1>
          <div className="w-24 h-1 bg-hydrogen-500 mx-auto rounded-full"></div>
        </div>

        {/* Quadrant Container */}
        <div className={`transition-all duration-500 ease-out ${isDetailView ? 'nav-mode' : 'grid-mode'}`}>
          {/* Grid View */}
          {!isDetailView && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 animate-fade-in">
              <button
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process")}
              >
                Process
              </button>
              <button
                onClick={() => handleQuadrantClick("transport")}
                className={getButtonClasses("transport")}
              >
                Transport
              </button>
              <button
                onClick={() => handleQuadrantClick("storage")}
                className={getButtonClasses("storage")}
              >
                Storage
              </button>
              <button
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product")}
              >
                Product
              </button>
            </div>
          )}

          {/* Navigation View */}
          {isDetailView && (
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-down">
              <button
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process", true)}
              >
                Process
              </button>
              <button
                onClick={() => handleQuadrantClick("transport")}
                className={getButtonClasses("transport", true)}
              >
                Transport
              </button>
              <button
                onClick={() => handleQuadrantClick("storage")}
                className={getButtonClasses("storage", true)}
              >
                Storage
              </button>
              <button
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product", true)}
              >
                Product
              </button>
            </div>
          )}

          {/* Instruction Text */}
          <div className="text-center text-gray-600 text-lg mb-8">
            {isDetailView && selectedQuadrant
              ? `Click the ${selectedQuadrant.charAt(0).toUpperCase() + selectedQuadrant.slice(1)} button again to return to the grid view`
              : "Hover over each quadrant to explore, click to view details"
            }
          </div>
        </div>

        {/* Content Area */}
        {isDetailView && selectedQuadrant && (
          <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {quadrantData[selectedQuadrant].title}
              </h2>
              <div className="w-16 h-1 bg-hydrogen-500 rounded-full"></div>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="mb-4 font-medium">
                {quadrantData[selectedQuadrant].subtitle}
              </p>
              <ul className="space-y-4">
                {quadrantData[selectedQuadrant].points.map((point, index) => {
                  const [title, ...descriptionParts] = point.split(': ');
                  const description = descriptionParts.join(': ');
                  return (
                    <li key={index} className="flex">
                      <span className="font-semibold text-hydrogen-700 mr-2">•</span>
                      <div>
                        <strong className="text-gray-800">{title}:</strong> {description}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 p-4 bg-hydrogen-50 rounded-lg border border-hydrogen-200">
                <p className="text-sm text-gray-600">
                  Click the <strong>{quadrantData[selectedQuadrant].title}</strong> button again to return to the grid view
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* External Content Integration with Vertical Divider */}
        {isDetailView && selectedQuadrant && (
          <div className="mt-8">
            {/* Vertical Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-300 to-transparent"></div>
              <div className="px-4">
                <div className="w-3 h-3 bg-hydrogen-500 rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-300 to-transparent"></div>
            </div>
            
            {/* External Content Area */}
            <div className="space-y-8">
              <div id={`${selectedQuadrant}-content`} className="animate-slide-up">
                {/* Process Content */}
                {selectedQuadrant === 'process' && (
                  <div className="space-y-12">
                    {/* Hydrogen Rainbow at the top */}
                    <div>
                      <HydrogenRainbow />
                    </div>
                    
                    {/* Vertical spacing divider */}
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    {/* Oxygen Chart at the bottom */}
                    <div>
                      <OxygenChart />
                    </div>
                  </div>
                )}
                
                {/* Other quadrants - placeholder content */}
                {selectedQuadrant === 'transport' && (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-lg">Transport-related content will appear here</p>
                  </div>
                )}
                {selectedQuadrant === 'storage' && (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-lg">Storage-related content will appear here</p>
                  </div>
                )}
                {selectedQuadrant === 'product' && (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-lg">Product-related content will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
