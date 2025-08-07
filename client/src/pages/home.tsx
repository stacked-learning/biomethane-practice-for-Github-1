import { useState } from "react";
import { Card } from "@/components/ui/card";
import HydrogenRainbow from "@/components/HydrogenRainbow";
import OxygenChart from "@/components/OxygenChart";
import TransportMethods from "@/components/TransportMethods";
import PPESafety from "@/components/PPESafety";
import HydrogenLegislation from "@/components/HydrogenLegislation";
import ProcessSafety from "@/components/ProcessSafety";
import processImg from "@assets/process_img_1754391971848.jpg";
import productImg from "@assets/product_img_1754391991610.jpg";
import storageImg from "@assets/storage_img_1754392017212.jpg";
import transportImg from "@assets/transport_img_1754392022435.jpg";

type Quadrant = "process" | "transport" | "storage" | "product";

interface QuadrantContent {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

const quadrantImages: Record<Quadrant, string> = {
  process: processImg,
  transport: transportImg,
  storage: storageImg,
  product: productImg
};

const quadrantData: Record<Quadrant, QuadrantContent> = {
  process: {
    title: "Process",
    subtitle: "Technical Considerations",
    description: "Critical hydrogen processing factors and system interactions",
    points: [
      "Joule-Thompson Effect: Unlike most gases, hydrogen heats up when it expands rather than cooling.",
      "Pipeline Considerations: Mixing hydrogen into natural gas pipelines can affect system stability.",
      "Wobbe Index Impact: The Wobbe number of hydrogen is lower than most gases, affecting combustion efficiency.",
      "Combustion Factors: Hydrogen's flame speed, adiabatic flame temperature, and stability must be considered when using it in fuel systems."
    ]
  },
  transport: {
    title: "Transport",
    subtitle: "Safety Precautions",
    description: "Essential safety protocols for hydrogen transport operations",
    points: [
      "Transport Inspection: Before transport, the entire assembly must be inspected for damage.",
      "Connection Verification: Ensure all panel connections remain secured (marked with white paint before dispatch)."
    ]
  },
  storage: {
    title: "Storage",
    subtitle: "Infrastructure Systems",
    description: "Hydrogen storage and distribution infrastructure components",
    points: [
      "Design: A buried pipeline with integrated control interlocks and leak monitoring.",
      "Distribution: Hydrogen from storage is routed through Gas Panel package for power generation.",
      "Compression Station: Hydrogen compression station for transport/export.",
      "Network Integration: Secondary main network injection panel to be blended into natural gas pipelines."
    ]
  },
  product: {
    title: "Product",
    subtitle: "Hydrogen ",
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
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product")}
              >
                Product
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
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process")}
              >
                Process
              </button>
            </div>
          )}

          {/* Navigation View */}
          {isDetailView && (
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-down">
              <button
                onClick={() => handleQuadrantClick("product")}
                className={getButtonClasses("product", true)}
              >
                Product
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
                onClick={() => handleQuadrantClick("process")}
                className={getButtonClasses("process", true)}
              >
                Process
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
                  <div>
                    <ProcessSafety />
                  </div>
                )}
                
                {/* Transport Content */}
                {selectedQuadrant === 'transport' && (
                  <div>
                    <TransportMethods />
                  </div>
                )}
                {/* Storage Content */}
                {selectedQuadrant === 'storage' && (
                  <div className="space-y-12">
                    {/* PPE Safety at the top */}
                    <div>
                      <PPESafety />
                    </div>
                    
                    {/* Vertical spacing divider */}
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                      <div className="px-4">
                        <div className="w-2 h-2 bg-hydrogen-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-hydrogen-200 to-transparent"></div>
                    </div>
                    
                    {/* Legislation at the bottom */}
                    <div>
                      <HydrogenLegislation />
                    </div>
                  </div>
                )}
                {/* Product Content */}
                {selectedQuadrant === 'product' && (
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
